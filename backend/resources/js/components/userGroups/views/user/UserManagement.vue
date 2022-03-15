<template>
    <div>
        
        <DataTable :value="listUser">
            <template #header>
                <b-button
                    variant="btn btn-sm btn-outline-primary"
                    size="sm"
                    @click="setUserCreate = 1"
                >
                    Добавить пользователя
                </b-button>
            </template>
            <Column
                field="id"
                header="ID"
                headerClass="the-user-groups__id-header"
                bodyClass="the-user-groups__id-body"
            />
            <Column field="name" header="Имя" />
            <Column header="Группа">
                <template #body="slotProps">
                    {{ getRoleName(slotProps.data.role_id) }}
                </template>
            </Column>
            <Column
                headerClass="the-user-groups__action-header"
                bodyClass="the-user-groups__action-body"
            >
                <template #body="slotProps">
                    <i
                        v-if="slotProps.data.id > 1"
                        class="pi pi-pencil btn btn-sm btn-outline-secondary"
                        @click="() => handleClickEdit(slotProps.data.id)"
                    />
                </template>
            </Column>
        </DataTable>
        <Dialog :modal="true" :visible="selectedUserId > 0" :showHeader="false">
            <Tree
                :value="treeData"
                selectionMode="single"
                :selectionKeys.sync="dialogTreeSelectedKey"
                @node-select="handleSelect"
            />
            <template #footer>
                <b-button
                    variant="outline-primary"
                    size="sm"
                    @click="handleOk"
                    :disabled="dialogSelectedRole === null"
                >
                    Ок
                </b-button>
                <b-button
                    variant="outline-secondary"
                    size="sm"
                    @click="handleClose"
                >
                    Отмена
                </b-button>
            </template>
        </Dialog>
        <Dialog :modal="true" :visible="setUserCreate > 0" :showHeader="true">
            <template #header>
                Создать пользователя 
            </template>
            <div class="form-group">
                <label for="user_name">Имя пользователя</label>
                <input type="text" id="user_name" class="form-control" 
                        v-model="user_form.name" 
                />
            </div>
            <div class="form-group">
                <label for="user_email">Email пользователя</label>
                <input type="text" id="user_email" class="form-control" 
                        v-model="user_form.email" 
                />
            </div>
            <template #footer>
                <b-button
                    variant="outline-primary"
                    size="sm"
                    @click="createUser()"
                    :disabled="user_form.name === null && user_form.email === null"
                >
                    Создаль
                </b-button>
                <b-button
                    variant="outline-secondary"
                    size="sm"
                    @click="setUserCreate = 0"
                >
                    Отмена
                </b-button>
            </template>
        </Dialog>
    </div>
</template>

<script>
import { mapState } from "vuex";

import { SET_LIST_USER } from "../../TheUserGroupsStore";
import TheUserGroupsMixin from "../../TheUserGroupsMixin";
import UserBroker from "./UserBroker";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Tree from "primevue/tree";

export default {
    name: "UserManagement",
    components: { DataTable, Column, Button, Dialog, Tree },
    mixins: [TheUserGroupsMixin, UserBroker],
    data() {
        return {
            selectedUserId: 0,
            dialogSelectedRole: null,
            dialogTreeSelectedKey: null,
            setUserCreate: 0,
            user_form: {
                name: '',
                email: ''
            }
        };
    },
    computed: mapState({
        listUser: state => state.userGroups.listUser
    }),
    methods: {
        handleClickEdit(id) {
            this.selectedUserId = id;
        },
        handleSelect({ data }) {
            this.dialogSelectedRole = data;
        },
        async handleOk() {
            const result = await this.editUser(
                this.selectedUserId,
                this.dialogSelectedRole
            );
            if (result) {
                const payload = await this.getData(null, "get-user");
                this.$store.dispatch(SET_LIST_USER, payload);
            }
            this.handleClose();
        },
        handleClose() {
            this.selectedUserId = 0;
            this.dialogSelectedRole = null;
            this.dialogTreeSelectedKey = null;
        },
        async createUser(){
            await axios.post('/api/user-groups/create-user', this.$data.user_form)
                .then((response) => {
                    console.log(response.data);
                    this.setUserCreate = 0;
                })
                .catch(error => {
                    if (error.response.data) {
                        this.formErrors = error.response.data.errors;
                        return;
                    }
                });

            if(this.setUserCreate == 0)
            {
                const payload = await this.getData(null, "get-user");
                this.$store.dispatch(SET_LIST_USER, payload);
            }
            
        },
    },
    created: async function() {
        if (this.listUser === null) {
            const payload = await this.getData(null, "get-user");
            this.$store.dispatch(SET_LIST_USER, payload);
        }
    }
};
</script>
