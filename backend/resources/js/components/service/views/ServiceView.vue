<template>
    <div style="height:90%">
        <div class="card"  style="height:100%">
            <div class="row no-space" style="height:100%">
                <div class="col-md-2 p-0 h-100 left-bar-1 overflow-auto" style="border-right:0.3px solid silver;">
                    <div class="list-group-item list-group-item-action" style="cursor:pointer"
                        v-for="(item, index) in detail.list" v-bind:key="index" 
                        @click="sel_group_service = index; sel_service = 0"
                        v-bind:class="sel_group_service == index ? 'active' : ''">
                        {{item.group_name}}
                        <span style="position: relative; right: 10px; float: right" class="badge badge-light">
                            {{ item.services.length }}
                        </span>
                    </div>
                </div>
                <div class="col-md-2 p-0 h-100 left-bar-2 overflow-auto" style="border-right:0.3px solid silver;">
                    <div class="list-group-item list-group-item-action" style="cursor:pointer"
                        v-for="(item, index) in detail.list[sel_group_service].services" v-bind:key="index" 
                        @click="sel_service = index"
                        v-bind:class="sel_service == index ? 'active' : ''">
                        {{item.service_name}}
                    </div>
                </div>
                <div class="col-md-8 h-100">
                    <div v-if="detail" class="detail_view_group" style="overflow:auto;">
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <b-dropdown size="sm" variant="primary">
                                    <template #button-content>
                                        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> 
                                        <span class="mx-2">Настройки</span>
                                    </template>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-group header="Сервис настройки">
                                        <b-dropdown-item-button v-b-modal.modal-add-service >
                                            <b-icon icon="plus-square" aria-hidden="true"></b-icon>
                                            Добавить новый сервис 
                                        </b-dropdown-item-button>
                                        <b-modal id="modal-add-service" size="md" centered :title="'Добавление нового сервиса'">
                                            <div class="table-responsive" style="min-height:400px;">
                                                <div class="form-group">
                                                    <label for="sel_service_group">Категория сервиса </label>
                                                    <input type="text" id="sel_service_group" class="form-control" disabled v-bind:value="detail.list[sel_group_service].group_name" />
                                                    <br/>
                                                    {{detail.list[sel_group_service].id}}
                                                </div>
                                                <div class="form-group">
                                                    <label for="search_user_email">Имя нового сервиса </label>
                                                    <input type="text" id="search_user_email" class="form-control" v-model="form_add_service.sel_service_name" />
                                                </div>
                                                <hr/>
                                            </div>
                                            <template #modal-footer="{ ok, cancel }">
                                                <b-button size="sm" variant="info" @click="cancel()">
                                                    Отменить
                                                </b-button>
                                                <b-button size="sm" variant="primary" @click="addService(); ok()">
                                                    Создать сервис
                                                </b-button>
                                            </template>
                                        </b-modal>
                                        <b-dropdown-item-button>
                                            <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                                            Изменить текущии сервис 
                                        </b-dropdown-item-button>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item-button v-b-modal.modal-add-matrix>
                                            <b-icon icon="plus-square" aria-hidden="true"></b-icon>
                                            Добавить условие в матрицу
                                        </b-dropdown-item-button>
                                        <b-modal id="modal-add-matrix" size="md" centered :title="'Добавить условие в матрицу'">
                                            <div class="table-responsive" style="min-height:400px;">
                                                <div class="form-group">
                                                    <label for="sel_service_group">Категория сервиса </label>
                                                    <input type="text" id="sel_service_group" class="form-control" disabled v-bind:value="detail.list[sel_group_service].group_name" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="sel_service_name">Сервис </label>
                                                    <input type="text" id="sel_service_name" class="form-control" disabled v-bind:value="detail.list[sel_group_service].services[sel_service].service_name" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="sel_influence_name">Влияние сервиса </label>
                                                    <v-select id="sel_influence_name" 
                                                        :options="influece_list" 
                                                        v-model="form_add_in_matrix.id_service_influence">
                                                    </v-select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="sel_priority_1">Приоритеты для All KZ</label>
                                                    <v-select id="sel_priority_1" 
                                                        :options="priority_list" 
                                                        v-model="form_add_in_matrix.id_priority_1">
                                                    </v-select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="sel_priority_2">Приоритеты для Large City</label>
                                                    <v-select id="sel_priority_2" 
                                                        :options="priority_list" 
                                                        v-model="form_add_in_matrix.id_priority_2">
                                                    </v-select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="sel_priority_3">Приоритеты для Small City</label>
                                                    <v-select id="sel_priority_3" 
                                                        :options="priority_list" 
                                                        v-model="form_add_in_matrix.id_priority_3">
                                                    </v-select>
                                                </div>
                                                <hr/>
                                            </div>
                                            <template #modal-footer="{ ok, cancel }">
                                                <b-button size="sm" variant="info" @click="cancel()">
                                                    Отменить
                                                </b-button>
                                                <b-button size="sm" variant="primary" @click="addInfluenceToPriority(); ok()">
                                                    Добавить условие в матрицу
                                                </b-button>
                                            </template>
                                        </b-modal>
                                        <b-dropdown-item-button>
                                            <b-icon icon="plus-square" aria-hidden="true"></b-icon>
                                            Добавить подсеть 
                                        </b-dropdown-item-button>
                                        <b-dropdown-item-button>
                                            <b-icon icon="plus-square" aria-hidden="true"></b-icon>
                                            Добавить возможую причину
                                        </b-dropdown-item-button>
                                    </b-dropdown-group>
                                    <b-dropdown-divider></b-dropdown-divider>
                                </b-dropdown>
                                <hr/>
                            </div>
                            <div class="col-md-12">
                                <table class="table table-sm table-light" style="font-size:0.9rem">
                                    <thead>
                                        <th>Триггер</th>
                                        <th>Группа</th>
                                        <th>Условие</th>
                                        <th style="width:100px;">All KZ</th>
                                        <th style="width:100px;">Large City</th>
                                        <th style="width:100px;">Small City</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="infl in detail.list[sel_group_service].services[sel_service].influence_conns" class="w-100">
                                            <td class="text-truncate" style="width:120px; max-width:120px;">
                                                {{infl.influence_info.group_info.trigger_name}}
                                            </td>
                                            <td class="text-truncate" style="width:150px; max-width:150px;">
                                                {{infl.influence_info.group_info.influence_group_name}}
                                            </td>
                                            <td class="text-truncate" style="max-width:200px;">
                                                {{infl.influence_info.influence_condition_name}}
                                            </td>
                                            <td>
                                                <span v-for="pr in detail.list[sel_group_service].services[sel_service].priorities_list" 
                                                    v-show="pr.id_influence == infl.id_service_influence && pr.id_city_type == 1">
                                                    {{pr.priority_name}}
                                                </span>
                                            </td>
                                            <td>
                                                <span v-for="pr in detail.list[sel_group_service].services[sel_service].priorities_list" 
                                                    v-show="pr.id_influence == infl.id_service_influence && pr.id_city_type == 2">
                                                    {{pr.priority_name}}
                                                </span>
                                            </td>
                                            <td>
                                                <span v-for="pr in detail.list[sel_group_service].services[sel_service].priorities_list" 
                                                    v-show="pr.id_influence == infl.id_service_influence && pr.id_city_type == 3">
                                                    {{pr.priority_name}}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div style="max-height:300px; overflow:auto;">
                                    <table class="table table-sm table-light" style="font-size:0.9rem;">
                                        <thead>
                                            <th>Сеть</th>
                                            <th>Подсеть 1</th>
                                            <th>Подсеть 2</th>
                                            <th>Подсеть 3</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="subn in detail.list[sel_group_service].services[sel_service].subnetwork_conns" class="w-100">
                                                <td>
                                                    {{subn.subnetwork_info.network}}
                                                </td>
                                                <td>
                                                    {{subn.subnetwork_info.subnetwork_1}}
                                                </td>
                                                <td>
                                                    {{subn.subnetwork_info.subnetwork_2}}
                                                </td>
                                                <td>
                                                    {{subn.subnetwork_info.subnetwork_3}}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios/index';
    axios.defaults.withCredentials = true;

    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";

    import {GET_SERVICE_LIST} from "../serviceStore";

    import vSelect from 'vue-select';
    import 'vue-select/dist/vue-select.css';

    import CreateService from "./layouts/CreateService";
    import CreateServiceGroup from "./layouts/CreateServiceGroup";

    export default {
        name: "TheService",
        mixins: [TheContentMixin],
        data: function () {
            return {
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'Справочники',
                        link: 'references',
                        to: {path: '/references'}
                    },
                    {
                        text: 'Сервис каталог',
                        active: true
                    }
                ],
                sel_group_service: 0,
                sel_service: 0,
                form: {
                    service_name: "",
                },
                form_add_service: {
                    sel_group_id: 0,
                    sel_service_name: "",
                },
                form_add_in_matrix: {
                    id_service: 0,
                    id_service_influence: 0,
                    id_priority_1: 0,
                    id_priority_2: 0,
                    id_priority_3: 0
                },
                influece_list: [],
                priority_list: [
                    {id: 1, label: 'Emergency'},
                    {id: 2, label: 'Critical'},
                    {id: 3, label: 'High'},
                    {id: 4, label: 'Medium'},
                    {id: 5, label: 'Low'},
                ],
                formErrors: null,
                errors: null,
                isLoading: true,
                
            };
        },
        mounted() {   
            this.generateBreadcrumb(this.breadcrumbs);
            
            this.getServices();
            this.getInfluences();
        },
        computed: {
            detail(){
                return this.$store.getters.SERVICE_LIST;
            }
        },
        watch: {
            
        },
        components: {
            CreateService,
            CreateServiceGroup,
            vSelect: vSelect,
        },
        methods: {
            getServices() {
                this.$store.dispatch(GET_SERVICE_LIST);
            },
            getInfluences() {
                axios.get(`/api/service/influence_list`)
                    .then((response) => {
                        this.influece_list = response.data.list;
                    });
            },
            addService() {
                this.form_add_service.sel_group_id = this.detail.list[this.sel_group_service].id;

                axios.post('/api/service/add_service', this.$data.form_add_service)
                    .then((response) => {
                        console.log(response.data);
                        this.form_add_service.sel_service_name = "";
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
                this.$store.dispatch(GET_SERVICE_LIST);
            },
            addInfluenceToPriority() {
                this.form_add_in_matrix.id_service = this.detail.list[this.sel_group_service].services[this.sel_service].id;
                this.form_add_in_matrix.id_service_influence = this.form_add_in_matrix.id_service_influence.id;

                if(this.form_add_in_matrix.id_priority_1 != 0)
                this.form_add_in_matrix.id_priority_1 = this.form_add_in_matrix.id_priority_1.id;

                if(this.form_add_in_matrix.id_priority_2 != 0)
                this.form_add_in_matrix.id_priority_2 = this.form_add_in_matrix.id_priority_2.id;

                if(this.form_add_in_matrix.id_priority_3 != 0)
                this.form_add_in_matrix.id_priority_3 = this.form_add_in_matrix.id_priority_3.id;

                axios.post('/api/service/add_influence_to_priority', this.$data.form_add_in_matrix)
                    .then((response) => {
                        console.log(response.data);
                        this.form_add_in_matrix.id_service = 0;
                        this.form_add_in_matrix.id_service_influence = 0;
                        this.form_add_in_matrix.id_priority_1 = 0;
                        this.form_add_in_matrix.id_priority_2 = 0;
                        this.form_add_in_matrix.id_priority_3 = 0;
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
                this.$store.dispatch(GET_SERVICE_LIST);
            },

        },
    };
</script>
