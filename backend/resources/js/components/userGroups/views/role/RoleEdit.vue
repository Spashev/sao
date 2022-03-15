<template>
    <div class="conteiner the-user-groups__edit-form">
        <div class="row">
            <div class="col">Имя роли</div>
            <div class="col">
                <input
                    class="p-inputtext p-component"
                    type="text"
                    :value="role.name"
                    @input="e => updateField(e.target.value, 'name')"
                />
            </div>
        </div>
        <div class="row">
            <div class="col">Родительская роль</div>
            <RoleEditParrent
                class="col"
                :roleId="role.id"
                :parentId="parentLabel"
                @parentSelect="updateParent"
            />
        </div>
        <div class="row">
            <div class="col">Описание</div>
            <div class="col">
                <textarea
                    rows="3"
                    class="p-inputtext"
                    :value="role.description"
                    @input="e => updateField(e.target.value, 'description')"
                />
            </div>
        </div>
        <div class="row">
            <div class="col">Действия</div>
            <div class="col">
                <Accordion>
                    <AccordionTab v-for="item in treeData" :key="item.key">
                        <template slot="header">
                            <span>{{ item.label }}</span>
                            <i
                                class="pi pi-info-circle"
                                v-b-tooltip.hover.right="item.description"
                            />
                        </template>
                        <table>
                            <tbody>
                                <tr
                                    v-for="child in item.children"
                                    :key="child.key"
                                >
                                    <td>{{ child.label }}</td>
                                    <td>
                                        <i
                                            class="pi pi-info-circle"
                                            v-b-tooltip.hover.right="
                                                child.description
                                            "
                                        />
                                    </td>
                                    <td>
                                        <select
                                            class="custom-select"
                                            @change="
                                                ({ target }) =>
                                                    updateRight({
                                                        action_id: child.action,
                                                        sign: target.value
                                                    })
                                            "
                                        >
                                            <option
                                                v-for="(item, key) in options"
                                                :key="key"
                                                :value="item.value"
                                                :selected="
                                                    child.selected == item.value
                                                "
                                            >
                                                {{ item.text }}
                                            </option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
        <div class="row the-user-groups__edit-form__buttons">
            <div class="col">
                <b-button
                    variant="outline-primary"
                    @click="onSubmit"
                    :disabled="isLoading"
                >
                    <b-spinner v-if="isLoading" small class="mr-1" />
                    {{ submitLabel }}
                </b-button>
                <router-link
                    class="btn btn-outline-secondary"
                    to="/user-groups"
                >
                    Отмена
                </router-link>
            </div>
        </div>
    </div>
</template>

<!---------------------------------------------------------------------------------------------------------- script --->

<script>
import { mapState } from "vuex";
import {
    SET_LIST_APP,
    SET_LIST_ROLE,
    SET_LIST_ACTION,
    SET_LIST_RIGHT
} from "../../TheUserGroupsStore";

import TheUserGroupsMixin from "../../TheUserGroupsMixin";
import RoleBroker from "./RoleBroker";
import RoleEditParrent from "./RoleEditParrent";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

export default {
    name: "RoleEdit",
    mixins: [TheUserGroupsMixin, RoleBroker],
    components: { RoleEditParrent, Accordion, AccordionTab },
    data: function() {
        return {
            payload: { role: {}, right: [] },
            parentLabel: 0,
            options: [
                { value: "-1", text: "Не используется" },
                { value: "1", text: "Разрешить" },
                { value: "0", text: "Запретить" }
            ]
        };
    },
    computed: mapState({
        listApp: state => state.userGroups.listApp,
        listAction: state => state.userGroups.listAction,
        listRight: state => state.userGroups.listRight,
        id: function() {
            return this.$route.params.id;
        },
        edit: function() {
            return this.$route.meta.type === "edit";
        },
        role: function() {
            if (this.edit && this.listRole !== null) {
                const result = this.listRole.filter(
                    item => item.id == this.$route.params.id
                )[0];
                this.parentLabel = result.parent_id;
                return result;
            }
            return { name: null, description: null, parent_id: 0 };
        },
        treeData: function(state) {
            if (
                this.listApp == null ||
                this.listAction == null ||
                this.listRight == null
            ) {
                return;
            }

            const roots = [];

            this.listApp.forEach(itemApp => {
                const children = [];

                this.listAction.forEach(itemAction => {
                    if (itemAction.app_id != itemApp.id) {
                        return;
                    }

                    const selected = this.listRight.filter(
                        itemRight =>
                            itemRight.action_id == itemAction.id &&
                            itemRight.role_id == this.id
                    )[0];

                    let optionsIndex = 0;
                    if (selected !== undefined) {
                        optionsIndex = selected.sign ? 1 : 2;
                    }

                    children.push({
                        key: `${itemApp.id}-${itemAction.id}`,
                        label: itemAction.action,
                        description: itemAction.description,
                        action: itemAction.id,
                        selected: this.options[optionsIndex].value,
                        type: "action"
                    });
                });

                roots.push({
                    key: itemApp.id,
                    label: itemApp.name,
                    description: itemApp.description,
                    children: children
                });
            });

            return roots;
        },

        submitLabel: function() {
            return this.edit ? "Сохранить" : "Добавить";
        }
    }),
    methods: {
        updateField(value, field) {
            if (value == this.role[field]) {
                delete this.payload.role[field];
                return;
            }
            this.payload.role[field] = value;
        },
        updateParent(value) {
            if (value == this.role.parent_id) {
                delete this.payload.role.parent_id;
                this.parentLabel = this.role.parent_id;
                return;
            }
            this.parentLabel = value;
            this.payload.role.parent_id = value;
        },
        updateRight(value) {
            const indexPayload = this.payload.right.findIndex(
                item => item.action_id == value.action_id
            );
            const rightSign = this.listRight.filter(
                item => item.action_id == value.action_id
            )[0].sign;
            if (indexPayload >= 0) {
                if (rightSign == value.sign) {
                    delete this.payload.right[indexPayload];
                    this.payload.right = this.payload.right.filter(
                        item => item != undefined
                    );
                    return;
                }
                this.payload.right[indexPayload].sign = value.sign;
                return;
            }
            this.payload.right.push(value);
        },
        async onSubmit() {
            await this.createEditRole({
                id: this.$route.params.id,
                ...this.payload
            });
            {
                const payload = await this.getData(null, "get-role");
                this.$store.dispatch(SET_LIST_ROLE, payload);
            }
            {
                const payload = await this.getData(null, "get-right");
                this.$store.dispatch(SET_LIST_RIGHT, payload);
            }
        }
    },
    created: async function() {
        if (this.listApp === null) {
            const payload = await this.getListApp();
            this.$store.dispatch(SET_LIST_APP, payload);
        }
        if (this.listAction === null) {
            const payload = await this.getData(null, "get-action");
            this.$store.dispatch(SET_LIST_ACTION, payload);
        }
        if (this.listRight === null) {
            const payload = await this.getData(null, "get-right");
            this.$store.dispatch(SET_LIST_RIGHT, payload);
        }
    }
};
</script>
