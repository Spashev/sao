<template>
    <div style="height:99%">
        <div class="card"  style="height:100%">
            <div class="row no-space" style="height:100%">ss
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import {mapGetters} from 'vuex';
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";

    export default {
        name: "TheUserSettings",
        mixins: [TheContentMixin],
        data: function () {
            return {
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'Список активных тикетов',
                        active: true
                    }
                ],
                form: {
                    field_list: [],
                    group_id: 1,
                },
                notification: {
                    priority: 0,
                    region: [0],
                    tt_type: 0,
                    serv_cat: 0,
                },
                tab: 1,
                checkedNames: [],
                checkedRegions: [],
                formErrors: null,
                errors: null,
                isLoading: true,
                
            };
        },
        mounted() {   
            this.generateBreadcrumb(this.breadcrumbs);
        },
        watch: {
            
        },
        components: {

        },
        methods: {
            getMainList(){
                axios.get(`/api/user_settings/main_list`)
                    .then((response) => {
                        this.form.group_id = response.data.group;
                        this.form.field_list = response.data.regions;
                    });
            },
        }
    };
</script>
