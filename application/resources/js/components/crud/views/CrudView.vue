<template>
    <div>
        <div class="card" v-if="crud">
            <div class="card-header">
                {{crud.title}}
            </div>
            <div class="card-body">
                <div class="card-text">
                    <p>Description: {{crud.description}}</p>
                    <p>Action: {{crud.act_title}}</p>
                </div>
            </div>
            <div class="card-footer" v-if="actions">
                <button class="btn btn-info" v-for="(action, index) in actions" :key="index"
                        v-on:click="changeAction(crud.id, action.id)">{{ action.act_title }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {SET_CRUD} from "../crudStore";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import {mapGetters} from "vuex";

    export default {
        name: "CrudView",
        mixins: [TheContentMixin],
        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'CRUD',
                        to: {path: '/crud'}
                    },
                    {
                        text: this.$route.params.id,
                        active: true
                    }
                ],
                isLoading: false
            };
        },
        components: {
            Loading: VueLoading
        },
        created: async function () {
            await this.getData();
        },
        computed: {
            ...mapGetters(["crud", "actions"]),
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
        },
        methods: {
            async getData() {
                await this.$store.dispatch(SET_CRUD, this.$route.params.id);
            },
            changeAction(crud_id, action_id) {
                let form = {'id': crud_id, 'action_id': action_id};
                axios.post('/api/crud/update-action/', form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            this.$router.push({path: '/crud'})
                        }
                    })
                    .catch(error => {
                    });
            }
        },
    }
</script>

<style scoped>

</style>
