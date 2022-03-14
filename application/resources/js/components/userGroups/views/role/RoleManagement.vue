<template>
    <DataTable :value="listRole">
        <template #header>
            <router-link
                class="btn btn-sm btn-outline-primary"
                to="/user-groups/role-create"
            >
                Добавить роль
            </router-link>
        </template>
        <Column
            field="id"
            header="ID"
            headerClass="the-user-groups__id-header"
            bodyClass="the-user-groups__id-body"
        />
        <Column field="name" header="Название"></Column>
        <Column header="Родительская группа">
            <template #body="slotProps">
                {{ getRoleName(slotProps.data.parent_id) }}
            </template>
        </Column>
        <Column field="description" header="Описание"></Column>
        <Column
            headerClass="the-user-groups__action-header"
            bodyClass="the-user-groups__action-body"
        >
            <template #body="slotProps">
                <router-link
                    v-if="slotProps.data.id > 1"
                    :to="`/user-groups/role-edit/${slotProps.data.id}`"
                >
                    <i class="pi pi-pencil btn btn-sm btn-outline-secondary" />
                </router-link>
                <i
                    v-if="slotProps.data.id > 2"
                    class="pi pi-trash btn btn-sm btn-outline-danger"
                    @click="() => (idItemRemove = slotProps.data.id)"
                />
            </template>
        </Column>
        <Dialog class="the-user-groups__remove-dialog" :showHeader="false" :modal="true" :visible="idItemRemove > 0">
            Удалить роль "{{ getRoleName(idItemRemove, false) }}"?
            <template #footer>
                <b-button
                    variant="outline-danger"
                    size="sm"
                    @click="() => itemRemove(idItemRemove)"
                >
                    Удалить
                </b-button>
                <b-button
                    variant="outline-secondary"
                    size="sm"
                    @click="() => (idItemRemove = 0)"
                >
                    Отмена
                </b-button>
            </template>
        </Dialog>
    </DataTable>
</template>

<script>
import { mapState } from "vuex";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import TheUserGroupsMixin from "../../TheUserGroupsMixin";
export default {
    name: "RoleManagement",
    components: { DataTable, Column, Dialog },
    mixins: [TheUserGroupsMixin],
    data: function() {
        return {
            idItemRemove: 0
        };
    },
    methods: {
        itemRemove(id) {
            console.log("itemRemove", id);
            this.idItemRemove = 0;
        }
    }
};
</script>
