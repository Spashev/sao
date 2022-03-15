<script>
import { mapState } from "vuex";
import { SET_LIST_ROLE } from "./TheUserGroupsStore";
import TheUserGroupsBroker from "./TheUserGroupsBroker";

export default {
    name: "TheUserGroupsMixin",
    mixins: [TheUserGroupsBroker],
    computed: mapState({
        listRole: state => state.userGroups.listRole,
        treeData() {
            return this.listRole === null ? [] : this.getTreeData();
        }
    }),
    methods: {
        getRoleName(id, fullName = true) {
            if (id === null || id === undefined || this.listRole === null) {
                return null;
            }

            if (id == 0) return "нет";

            const result = this.listRole.filter(item => item.id == id).shift();

            // TODO Костыль, на стороне бэка необходимо решить вопрос с удаление из списка групп не существующих групп у пользователя
            if (result === undefined) return "[deleted]";

            if (result.parent_id == 0) return result.name;

            if (fullName) {
                return result.id_parent !== null
                    ? this.getRoleName(result.parent_id) + " > " + result.name
                    : result.name;
            }

            return result.name;
        },
        getTreeData() {
            const roots = [];
            const map = [];
            const id = [];
            let i;

            this.listRole.forEach(item => {
                if (item.id == this.roleId || item.parent_id == this.roleId) {
                    return;
                }
                map.push(Object.assign({}, item));
                id.push(item.id);
            });

            map.forEach(item => {
                item["key"] = item.id;
                item["label"] = item.name;
                item["data"] = item.id;

                if (
                    !item.parent_id ||
                    (i = id.indexOf(item.parent_id)) === -1
                ) {
                    roots.push(item);
                    return;
                }

                if (map[i].children) {
                    map[i].children.push(item);
                } else {
                    map[i].children = [item];
                }
            });

            return roots;
        }
    },
    created: async function() {
        if (this.listRole === null) {
            const payload = await this.getData(null, "get-role");
            this.$store.dispatch(SET_LIST_ROLE, payload);
        }
    }
};
</script>
