<template>
    <div style="height:99%">
        <div class="card"  style="height:100%">
            <div class="row no-space" style="height:100%">
                <div class="col-md-2 no-space left-menu">
                    <div>
                        <hr/>
                        <hr/>
                        <ul class="list-group" style="max-height:85%; overflow:auto;">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#" v-on:click=""> Общие настройки</a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#" v-on:click="tab = 1">
                                    <span v-show="tab == 1" style="color:blue;"> > </span>
                                    Сервис тикеты
                                </a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#" v-on:click="tab = 3">
                                    <span v-show="tab == 3" style="color:blue;"> > </span>
                                    Ресурс тикеты
                                </a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#" v-on:click=""> Аварии</a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#" v-on:click="tab = 2">
                                    <span v-show="tab == 2" style="color:blue;"> > </span>
                                    Нотификации email/sms
                                </a>
                            </li>
                        </ul>
                   </div>
                </div>
                <div class="col-md-10 no-space" style="height:100%;">
                    <div style="padding:20px;" v-show="tab == 1">
                        <div class="form-group col-md-12">
                            Ответсвенная группа по Сервис Тикетам:
                            <hr/>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-3">
                                Группа:
                                <hr/>
                                <div v-for="(g, index) in group_list" :key="index">
                                    <div style="border:1px solid silver; padding:5px 10px;" v-if="g.comp_id == 1">
                                        <input type="radio" v-bind:id="g.id" v-bind:value="g.id" v-model="form.group_id[1]">
                                        <label v-bind:for="g.id">{{g.group_name}}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-md-3">
                                Регион:
                                <hr/>
                                <div v-for="(f, index) in field_list" :key="index">
                                    <div style="border:1px solid silver; padding:5px 10px;" v-if="f.comp_id == 1">
                                        <input type="checkbox" v-bind:id="f.id" v-bind:value="f.id" v-model="form.field_list[1]">
                                        <label v-bind:for="f.id">{{f.field_name}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="text-left">
                            <a href="#" v-on:click="saveUserRegion(1)" class="btn btn-primary btn-sm" style="width:150px">Обновить</a>
                        </div>
                    </div>
                    <div style="padding:20px;" v-show="tab == 3">
                        <div class="form-group col-md-12">
                            Ответсвенная группа по Ресурс Тикетам:
                            <hr/>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-3">
                                Группа:
                                <hr/>
                                <div v-for="(g, index) in group_list" :key="index">
                                    <div style="border:1px solid silver; padding:5px 10px;" v-if="g.comp_id == 2">
                                        <input type="radio" v-bind:id="g.id" v-bind:value="g.id" v-model="form.group_id[2]" @click="clearFieldList()">
                                        <label v-bind:for="g.id">{{g.group_name}}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-md-3">
                                Регион:
                                <hr/>
                                <div v-for="(f, index) in field_list" :key="index">
                                    <div style="border:1px solid silver; padding:5px 10px;" v-if="f.comp_id == 2 && form.group_id[2] == 3">
                                        <input type="checkbox" v-bind:id="f.id" v-bind:value="f.id" v-model="form.field_list[2]">
                                        <label v-bind:for="f.id">{{f.field_name}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="text-left">
                            <a href="#" v-on:click="saveUserRegion(2)" class="btn btn-primary btn-sm" style="width:150px">Обновить</a>
                        </div>
                    </div>
                    <div style="padding:20px;" v-show="tab == 2">
                        <div class="form-group col-md-12">
                            Информирование по sms/email:
                            <hr/>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-3">
                                Приоритеты:
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="prior_all" value="0" v-model="notification.priority">
                                    <label for="prior_all">По всем</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="prior_emergency" value="1" v-model="notification.priority">
                                    <label for="prior_emergency">Только Emergency</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="prior_critical" value="2" v-model="notification.priority">
                                    <label for="prior_critical">Critical и выше</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="prior_high" value="3" v-model="notification.priority">
                                    <label for="prior_high">High и выше</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="prior_medium" value="4" v-model="notification.priority">
                                    <label for="prior_medium">Medium и выше</label>
                                </div>
                            </div>
                            <div class="form-group col-md-3">
                                Регион:
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="checkbox" id="region_all" value="0" v-model="notification.region">
                                    <label for="region_all">По всем регионам</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="checkbox" id="region_almaty" value="1" v-model="notification.region">
                                    <label for="region_almaty">Алматы</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="checkbox" id="region_astana" value="8" v-model="notification.region">
                                    <label for="region_astana">Нур-Султан</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="checkbox" id="region_north" value="3" v-model="notification.region">
                                    <label for="region_north">Северный</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="checkbox" id="region_south" value="2" v-model="notification.region">
                                    <label for="region_south">Южный</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="checkbox" id="region_east" value="7" v-model="notification.region">
                                    <label for="region_east">Восточный</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="checkbox" id="region_west" value="4" v-model="notification.region">
                                    <label for="region_west">Западный</label>
                                </div>
                            </div>
                            <div class="form-group col-md-3">
                                Тип тикета:
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="tt_type_all" value="0" v-model="notification.tt_type">
                                    <label for="tt_type_all">По всем</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="tt_type_event" value="1" v-model="notification.tt_type">
                                    <label for="tt_type_event">Только События</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="tt_type_incident" value="2" v-model="notification.tt_type">
                                    <label for="tt_type_incident">Только Инциденты</label>
                                </div>
                            </div>
                            <div class="form-group col-md-3">
                                Категория сервиса/сайта:
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="serv_cat_all" value="0" v-model="notification.serv_cat">
                                    <label for="serv_cat_all">По всем</label>
                                </div>
                                <div style="border:1px solid silver; padding:5px 10px;">
                                    <input type="radio" id="serv_cat_2" value="1" v-model="notification.serv_cat">
                                    <label for="serv_cat_2">1'ой и 2'ой категории</label>
                                </div>
                                <span>* 1 и 2 категория - MegaHigh сайты</span>
                            </div>
                        </div>
                        <hr/>
                        <div class="text-left">
                            <a href="#" v-on:click="saveUserNotification()" class="btn btn-primary btn-sm" style="width:150px">Обновить</a>
                        </div>
                    </div>
                </div>
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
                        text: 'Настройки пользователя',
                        active: true
                    }
                ],
                form: {
                    field_list: [],
                    group_id: [],
                    comp_id: 1,
                },
                notification: {
                    priority: 0,
                    region: [0],
                    tt_type: 0,
                    serv_cat: 0,
                },
                group_list: [],
                field_list: [],
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
            this.getGroupList();
            this.getMainList();
            this.getUserNotificationList();
        },
        watch: {
            
        },
        components: {

        },
        methods: {
            getGroupList(){
                axios.get(`/api/user_settings/group_list`)
                    .then((response) => {
                        this.group_list = response.data.group_list;
                        this.field_list = response.data.field_list;
                    });
            },
            getMainList(){
                axios.get(`/api/user_settings/main_list`)
                    .then((response) => {
                        this.form.group_id = response.data.group;
                        this.form.field_list = response.data.regions;
                    });
            },
            clearFieldList(){
                this.form.field_list[2] = [];
            },
            saveUserRegion(comp_id){
                this.$data.form.comp_id = comp_id;
                if(comp_id == 2)
                {
                    if(this.form.field_list[2].length == 0)
                        this.form.field_list[2].push(null);
                }
                axios.post('/api/user_settings/set_user_region', this.$data.form)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
            },
            getUserNotificationList(){
                axios.get(`/api/user_settings/get_user_notification`)
                    .then((response) => {
                        this.notification.priority = response.data.priority;
                        this.notification.region = response.data.region;
                        this.notification.tt_type = response.data.tt_type;
                        this.notification.serv_cat = response.data.serv_cat;
                    });
            },
            saveUserNotification(){
                axios.post('/api/user_settings/set_user_notification', this.$data.notification)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
            },
        }
    };
</script>
