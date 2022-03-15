<template>
    <div style="height:99%">
        <div class="card"  style="height:100%">
            <div class="row no-space">
                <div class="p-2 text-right w-100">
                    <a href="#" v-on:click="add_user_form = 1" class="btn btn-outline-primary btn-sm" style="width:150px" v-if="add_user_form == 0">
                        Добавить пользователя
                    </a>
                    <a href="#" v-on:click="add_user_form = 0" class="btn btn-outline-danger btn-sm" style="width:150px" v-if="add_user_form == 1">
                        Отменить
                    </a>
                    <hr v-if="add_user_form == 1" />
                </div>
                
            </div>
            <div class="row no-space" style="height:95%" v-if="add_user_form == 1">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="inform_type">Тип информирования</label>
                        <v-select id="inform_type" 
                            :options="inform_type_list" 
                            v-model="form.sel_inform_type">
                        </v-select>
                    </div>
                    <div class="form-group">
                        <label for="priority">Приоритет</label>
                        <v-select id="priority" 
                            :options="priority_list" 
                            v-model="form.sel_priority">
                        </v-select>
                    </div>
                    <div class="form-group">
                        <label for="tt_type">Тип тикета</label>
                        <v-select id="tt_type" 
                            :options="tt_type_list" 
                            v-model="form.sel_tt_type">
                        </v-select>
                    </div>
                    <div class="form-group">
                        <label for="network_type">Тип сети</label>
                        <v-select id="network_type" 
                            :options="network_type_list" 
                            v-model="form.sel_network_type">
                        </v-select>
                    </div>
                    <div class="form-group">
                        <label for="region">Регион</label>
                        <v-select id="region" 
                            :options="region_list" 
                            v-model="form.sel_region"
                            multiple>
                        </v-select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="service_type">Тип сервиса</label>
                        <b-form-group style="border:1px solid silver" class="p-1 rounded-lg">
                            <b-form-checkbox
                                id="service_type_all"
                                v-model="form.sel_service_type_all"
                                name="service_type_all"
                                value="1"
                                unchecked-value="0"
                                >
                                По всем сервисам
                            </b-form-checkbox>
                        </b-form-group>
                        <b-form-group style="border:1px solid silver; height:300px; overflow-y:auto;" class="p-1 rounded-lg">
                            <b-form-checkbox 
                                v-for="(item, index) in detail.list" v-bind:key="index" 
                                v-model="form.sel_service_group"
                                v-bind:value="item.id"
                                >
                                {{item.group_name}}
                                <br/>
                                <b-form-checkbox 
                                    v-show="form.sel_service_group.includes(item.id)"
                                    v-for="(item2, index2) in item.services" v-bind:key="index2" 
                                    v-model="form.sel_service_item"
                                    v-bind:value="item2.id"
                                >
                                    {{item2.service_name}}
                                </b-form-checkbox>
                            </b-form-checkbox>
                        </b-form-group>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group" style="height:250px; overflow-y:auto;">
                        <label for="users">Пользователь/Email учётная запись</label>
                        <v-select id="users" 
                            :options="user_list" 
                            v-model="form.sel_users"
                            @search="query => user_search = query" 
                            multiple>
                        </v-select>
                    </div>
                    <hr/>
                    <button class="btn btn-outline-primary btn-sm w-100" 
                        v-b-modal.modal-add-ad-user 
                        @click="">
                        Добавить пользователя с ActiveDirectory
                    </button>
                    <span style="font-style:italic; font-size:10px;">* если пользователь не найден в общем списке</span>
                    <b-modal id="modal-add-ad-user" size="md" centered :title="'Добавление пользователя с ActiveDirectory'">
                        <div class="table-responsive" style="min-height:400px;">
                            <span style="font-style:italic;" class="p-1">Данные для авторизации в ActiveDirectory</span>
                            <hr class="m-2"/>
                            <div class="form-group">
                                <label for="search_user_email">Email (<span style="font-weight:bold; font-style:italic; font-size:10px;">{{userInfo.name}}</span>)</label>
                                <input type="text" id="search_user_email" class="form-control" v-model="form_search_ad.search_user_email" />
                            </div>
                            <div class="form-group">
                                <label for="search_user_pass">Пароль</label>
                                <input type="password" id="search_user_pass" class="form-control" v-model="form_search_ad.search_user_pass" />
                            </div>
                            <hr/>
                            <hr/>
                            <div class="form-group">
                                <label for="search_user_email2">Email пользователя, которого необходимо добавить</label>
                                <input type="text" id="search_user_email2" class="form-control" v-model="form_search_ad.search_user_email2" />
                            </div>
                            <div class="form-group text-right">
                                <b-button size="sm" class="w-100" variant="success" @click="searchUserFromAD()">
                                    Найти
                                </b-button>
                            </div>
                            <hr/>
                            <div style="height:250px; overflow-y:auto;">
                                <table class="table table-sm table-light" style="font-size:10px;">
                                    <tr>
                                        <th>Имя</th>
                                        <th>Департамент</th>
                                        <th>Позиция</th>
                                        <th>-</th>
                                    </tr>
                                    <tr v-for="ad in user_list_ad">
                                        <td class="border-bottom">{{ ad.name }}</td>
                                        <td class="border-bottom">
                                            <div class="truncate-text" style="width:100px;">{{ad.department}}</div>
                                        </td>
                                        <td class="border-bottom">
                                            <div class="truncate-text" style="width:100px;">{{ad.position}}</div>
                                        </td>
                                        <td class="border-bottom">
                                            -
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <template #modal-footer="{ ok, cancel }">
                            <b-button size="sm" variant="info" @click="cancel()">
                                Отменить
                            </b-button>
                            <b-button size="sm" variant="primary" @click="saveUserFromAd(); ok()">
                                Добавить пользователя/ей
                            </b-button>
                        </template>
                    </b-modal>
                    <a href="#" v-on:click="add_user_form = 1" class="btn btn-outline-primary btn-sm w-100">
                        Создать нового пользователя
                    </a>
                    <span style="font-style:italic; font-size:10px;">* если пользователь не Kcell или Email учётная запись</span>
                    <hr/>
                    <a href="#" v-on:click="saveUsersToNotification()" class="btn btn-outline-success btn-sm w-100">
                        Сохранить
                    </a>
                </div>
            </div>
            <div class="row no-space" style="height:95%" v-if="add_user_form == 0">
                <div class="table-responsive">
                    <vue-bootstrap4-table
                        :rows="notif_list"
                        :columns="columns"
                        :config="config" 
                        :classes="classes"
                    >
                    </vue-bootstrap4-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import {mapGetters} from 'vuex';
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import vSelect from 'vue-select'; // select with search/filtering
    import 'vue-select/dist/vue-select.css';
    import VueLoading from 'vue-loading-overlay';
    import VueBootstrap4Table from "vue-bootstrap4-table";
    import 'vue-loading-overlay/dist/vue-loading.css';

    import {GET_SERVICE_LIST} from "../../service/serviceStore";

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
                        text: 'Список пользователей по информированию Сервис тикетов',
                        active: true
                    }
                ],
                isLoading: true,
                errors: null,
                notif_list: [],
                formErrors: null,
                add_user_form: 0,
                user_search: '',
                user_search_ad: '',
                service_options: [],
                priority_list: [
                    {
                        id: 0,
                        label: 'По всем'
                    },
                    {
                        id: 1,
                        label: 'Только Emergency'
                    },
                    {
                        id: 2,
                        label: 'Critical и выше'
                    },
                    {
                        id: 3,
                        label: 'High и выше'
                    },
                    {
                        id: 4,
                        label: 'Medium и выше'
                    },
                ],
                tt_type_list: [
                    {
                        id: 0,
                        label: 'По всем'
                    },
                    {
                        id: 1,
                        label: 'Только События'
                    },
                    {
                        id: 2,
                        label: 'Только Инциденты'
                    },
                ],
                network_type_list: [
                    {
                        id: 0,
                        label: 'По всем'
                    },
                    {
                        id: 1,
                        label: 'Только Telco'
                    },
                    {
                        id: 2,
                        label: 'Только IT'
                    },
                ],
                region_list: [
                    {
                        id: 0,
                        label: 'По всем'
                    },
                    {
                        id: 1,
                        label: 'Almaty'
                    },
                    {
                        id: 2,
                        label: 'South'
                    },
                    {
                        id: 3,
                        label: 'North'
                    },
                    {
                        id: 4,
                        label: 'West'
                    },
                    {
                        id: 7,
                        label: 'East'
                    },
                    {
                        id: 8,
                        label: 'Astana'
                    },
                ],
                inform_type_list: [
                    {
                        id: 1,
                        label: 'Только Email'
                    },
                    {
                        id: 2,
                        label: 'Email/SMS'
                    },
                ],
                user_list: [],
                user_list_ad: [],
                form: {
                    sel_service_type_all: 1,
                    sel_service_group: [],
                    sel_service_item: [],
                    sel_priority: null,
                    sel_tt_type: null,
                    sel_network_type: null,
                    sel_region: null,
                    sel_inform_type: null,
                    sel_users: null
                },
                form_search_ad: {
                    search_user_email: '',
                    search_user_pass: '',
                    search_user_email2: '',
                },
                columns: [
                    {
                        label: "Имя пользователя",
                        name: "user_name",
                        filter: {
                            type: "simple",
                            placeholder: "Имя пользователя",
                        },
                        sort: true,
                    },
                    {
                        label: "Приоритет",
                        name: "trigger_info.priority_name",
                        filter: {
                            type: "simple",
                            placeholder: "Приоритет",
                        },
                        sort: true,
                    },
                    {
                        label: "Тип тикета",
                        name: "trigger_info.tt_type_name",
                        filter: {
                            type: "simple",
                            placeholder: "Тип тикета",
                        },
                        sort: true,
                    },
                    {
                        label: "Тип сети",
                        name: "trigger_info.network_type_name",
                        filter: {
                            type: "simple",
                            placeholder: "Тип сети",
                        },
                        sort: true,
                    },
                    {
                        label: "Регион",
                        name: "trigger_info.region_name",
                        filter: {
                            type: "simple",
                            placeholder: "Регион",
                        },
                        sort: true,
                    },
                    {
                        label: "Тип инф.",
                        name: "inform_type_name",
                        filter: {
                            type: "simple",
                            placeholder: "Тип инф.",
                        },
                        sort: true,
                    },
                ],
                classes: {
                    table : {
                        "table-striped table-sm" : true,
                        "table-bordered my-class-two" : function(rows) {
                            return true
                        }
                    },
                },
                config: {
                    checkbox_rows: false,
                    rows_selectable: true,
                    card_title: "teet",
                    per_page: 50,
                    global_search:  {
                        placeholder:  "Поиск",
                        visibility:  false,
                        case_sensitive:  false
                    },
                    per_page_options:  [10,  20,  50,  100],
                    show_refresh_button:  false,
                    show_reset_button:  false,
                    card_mode: false,
                }
                
            };
        },
        components: {Loading: VueLoading, VueBootstrap4Table, vSelect: vSelect},
        mounted() {   
            this.generateBreadcrumb(this.breadcrumbs);
            this.getNotifList();
            this.getServices();
        },
        watch: {
            user_search(newQuery) {
                if(newQuery.length > 2)
                {
                    newQuery = newQuery.toLowerCase();
                    axios.get(`/api/catalog/user_list/search?query=${newQuery}`)
                        .then((res) => {
                            this.user_list = res.data.list
                        })
                }
            },
        },
        computed: {
            detail(){
                return this.$store.getters.SERVICE_LIST;
            },
            userInfo(){
                this.form_search_ad.search_user_email = this.$store.getters.MY_USER_INFO.email;
                return this.$store.getters.MY_USER_INFO;
            }
        },
        methods: {
            getNotifList(){
                axios.get(`/api/catalog/notification_list/search`)
                    .then((response) => {
                        this.notif_list = response.data.list;
                        this.add_user_form = 0;
                    });
            },
            getServices() {
                this.$store.dispatch(GET_SERVICE_LIST);
            },
            searchUserFromAD(){
                axios.post('/api/catalog/search_user_ad', this.$data.form_search_ad)
                    .then((response) => {
                        this.user_list_ad.push(response.data.result);
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
            },
            saveUserFromAd(){
                var list = {};
                list['user_list'] = this.user_list_ad;
                axios.post('/api/catalog/save_user_from_ad', list)
                    .then((response) => {
                        console.log(response);
                        this.form_search_ad.search_user_email2 = '';
                        this.user_list_ad = [];
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
            },
            saveUsersToNotification(){
                axios.post('/api/catalog/save_users_to_notification', this.$data.form)
                    .then((response) => {
                        console.log(response);
                        this.form = {
                            sel_service_type_all: 1,
                            sel_service_group: [],
                            sel_service_item: [],
                            sel_priority: null,
                            sel_tt_type: null,
                            sel_network_type: null,
                            sel_region: null,
                            sel_inform_type: null,
                            sel_users: null
                        };

                        this.getNotifList();
                        

                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
            }
        }
    };
</script>
