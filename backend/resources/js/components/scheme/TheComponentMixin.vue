<script>
    import {mapState} from "vuex";

    export default {
        name: "TheComponentMixin",
        data() {
            return {
                components: null,
            };
        },
        async created() {
            // this.components = await axios.get('/api/scheme/components', {
            //     responseType: 'json'
            // });
        },
        computed: mapState({
            // statuses: state => state.scheme.statuses,
            // actions: state => state.scheme.actions,
            // components: state => state.scheme.components
        }),
        methods: {
            getStatusName(id) {
                if (id === null || id === undefined) {
                    return;
                }
                if (id === 0) {
                    return "нет";
                }
                return this.statuses.find(status => status.id === id).name;
            },
            getActionName(id){
                if(id === null || id === undefined){
                    return;
                }
                if(id === 0){
                    return "нет";
                }
                return this.actions.find(action => action.id === id).act_title;
            },
            getUserCategoryName(id){
                if(id === null || id === undefined){
                    return;
                }
                if(id === 0){
                    return "нет";
                }
                return this.userCategories.find(cat => cat.id === id).cat_name;
            },
            getUserGroupName(id){
                if(id === null || id === undefined){
                    return;
                }
                if(id === 0){
                    return "нет";
                }
                return this.userGroups.find(group => group.id === id).group_name;
            },
            getUserFieldName(id){
                if(id === null || id === undefined){
                    return;
                }
                if(id === 0){
                    return "нет";
                }
                return this.userFields.find(field => field.id === id).field_name;
            },
            getFieldName(id){
                if(id === null || id === undefined){
                    return;
                }
                if(id === 0){
                    return "нет";
                }
                return this.fields.find(field => field.id === id).field_name;
            },
            getComponentName(id){
                if(id === null || id === undefined){
                    return;
                }
                if(id === 0){
                    return "нет";
                }
                // console.log('components', this.components.components);
                //let cc =  this.components.find(components => components.id === id);
            }
        }
    };
</script>
