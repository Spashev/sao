<template>
    <div>
        <div class="p-inputgroup">
            <div class="p-inputtext p-component" @click="dialogVisible = true">
                {{ outputParent }}
            </div>
            <Button
                v-if="parentId > 0"
                icon="pi pi-times"
                class="p-button-danger"
                @click="handleRemove"
            />
        </div>
        <Dialog :modal="true" :visible="dialogVisible" :showHeader="false">
            <Tree
                :value="treeData"
                selectionMode="single"
                :selectionKeys.sync="selectedKey"
                @node-select="handleSelect"
            ></Tree>
            <template #footer>
                <b-button variant="outline-primary" size="sm" @click="handleOk">
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
    </div>
</template>

<!----------------------------------------------------------------------------------------------------------- script -->

<script>
import { mapState } from "vuex";
import TheUserGroupsMixin from "../../TheUserGroupsMixin";

import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Tree from "primevue/tree";

export default {
    name: "RoleEditParent",
    components: { Button, Dialog, Tree },
    mixins: [TheUserGroupsMixin],
    props: {
        roleId: { type: Number, default: 0 },
        parentId: { type: Number, default: 0 }
    },
    data() {
        return {
            dialogVisible: false,
            result: null,
            selectedKey: null
        };
    },
    computed: mapState({
        outputParent: function() {
            return this.parentId == 0 ? "Нет" : this.getRoleName(this.parentId);
        }
    }),
    methods: {
        handleSelect({ data }) {
            this.result = data;
        },
        handleRemove() {
            this.$emit("parentSelect", 0);
        },
        handleOk() {
            this.$emit("parentSelect", this.result);
            this.handleClose();
        },
        handleClose() {
            this.dialogVisible = false;
            this.result = null;
            this.selectedKey = null;
        }
    }
};
</script>

<!------------------------------------------------------------------------------------------------------------ style -->

<style lang="scss">
/*  */
</style>
