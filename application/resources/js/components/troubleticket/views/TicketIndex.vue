<template>
    <div style="height:100%"> 
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="card"  style="height:100%">
            <div class="row no-space" style="height:100%">
                <div class="col-md-2 ticket-left-menu">
                    <ul>
                        <li class="d-flex justify-content-between align-items-center" v-bind:class="[ticket_type == 1 ? 'active' : '']">
                            <a href="#" v-on:click="menuBtnClicked(1)">Ресурс тикеты на мне</a>
                            <span class="badge bg-primary" style="color:white">{{menu_list['my']}}</span>
                        </li>
                        <li class="d-flex justify-content-between align-items-center" v-bind:class="[ticket_type == 2 ? 'active' : '']">
                            <a href="#" v-on:click="menuBtnClicked(2)">Ресурс тикеты на группе</a>
                            <span class="badge bg-primary" style="color:white">{{menu_list['my_group']}}</span>
                        </li>
                         <li class="d-flex justify-content-between align-items-center" v-bind:class="[ticket_type == 8 ? 'active' : '']">
                            <a href="#" v-on:click="menuBtnClicked(8)">Сервис тикеты на группе</a>
                            <span class="badge bg-primary" style="color:white">{{menu_list['my_service_group']}}</span>
                        </li>
                        <li class="d-flex justify-content-between align-items-center" style="border-bottom:1px solid silver">
                            Активные
                        </li>
                        <li class="d-flex justify-content-between align-items-center" v-bind:class="[ticket_type == 3 ? 'active' : '']">
                            <a href="#" v-on:click="menuBtnClicked(3)">Сервис тикеты</a>
                            <span class="badge bg-primary" style="color:white">{{menu_list['active_service']}}</span>
                        </li>
                        <li class="d-flex justify-content-between align-items-center" v-bind:class="[ticket_type == 4 ? 'active' : '']">
                            <a href="#" v-on:click="menuBtnClicked(4)">Ресурс тикеты</a>
                            <span class="badge bg-primary" style="color:white">{{menu_list['active_resource']}}</span>
                        </li>
                        <li class="d-flex justify-content-between align-items-center" v-bind:class="[ticket_type == 6 ? 'active' : '']">
                            <a href="#" v-on:click="menuBtnClicked(6)">Аварии</a>
                        </li>
                        <li class="d-flex justify-content-between align-items-center" style="border-bottom:1px solid silver">
                            Статистика
                        </li>
                        <li class="d-flex justify-content-between align-items-center">
                            <a href="#">По тикетам</a>
                        </li>
                        <li class="d-flex justify-content-between align-items-center">
                            <a href="#">По сотрудникам</a>
                        </li>
                        <li class="d-flex justify-content-between align-items-center" style="border-bottom:1px solid silver">
                            Поиск
                        </li>
                        <li class="d-flex justify-content-between align-items-center">
                            <select v-model="sel_search_type" id="search_ticket_type" style="margin-top:3px; width:100%">
                                <option value="0"></option>
                                <option value="1">По TTS ID</option>
                                <option value="2">По Ресурсу</option>
                            </select>
                            <input type="text" id="search_ticket" v-model="sel_search" v-show="sel_search_type > 0" style="margin-top:3px; width:100%" />
                            <br>
                            <a href="#" v-show="sel_search_type > 0" v-on:click="onSearchTicket()" class="btn btn-outline-primary btn-sm" style="margin-top:3px; width:100%">Найти</a>
                        </li>
                        <li class="d-flex justify-content-between align-items-center">
                            <a href="#" v-on:click="menuBtnClicked(5)">Расширенный поиск</a>
                        </li>
                        <li class="d-flex justify-content-between align-items-center" style="border-bottom:1px solid silver">
                        </li>
                        <li class="d-flex justify-content-between align-items-center">
                            <router-link :to="`/troubleticket/create`">
                                <a href="#" >Создать сервис тикет</a>
                            </router-link>
                        </li>
                        <li class="d-flex justify-content-between align-items-center" style="border-bottom:1px solid silver">
                        </li>
                    </ul>
                </div>
                <div class="col-md-10 no-space" style="height: 100%; overflow-y: auto;">
                    <div class="alert alert-danger m-2" v-if="errors">
                        {{ errors }}
                    </div>
                    <div class="table-responsive" v-if="ticket_type == 1 || ticket_type == 2 || ticket_type == 3 || ticket_type == 4 || ticket_type == 8">
                        <vue-bootstrap4-table
                            :rows="ticket_list"
                            :columns="ticket_columns"
                            @on-select-row="onSelectRow"
                            :config="config" 
                            :classes="classes"
                            >
                            <template slot="priority" slot-scope="row">
                                &nbsp;
                            </template>
                            <template slot="tt_type" slot-scope="row">
                                <div v-if="row.row.tt_type == 1" class="truncate-text" style="font-weight:bold;">
                                    Событие
                                </div>
                                <div v-if="row.row.tt_type == 2" class="truncate-text" style="font-weight:bold;">
                                    Инцидент
                                </div>
                                <div v-if="row.row.tt_type == 3" class="truncate-text" style="font-weight:bold;">
                                    Проблема
                                </div>
                            </template>
                            <template slot="down_site_2g" slot-scope="row">
                                <div class="truncate-text" style="font-weight:bold;">
                                    {{row.row.down_site_2g}} - {{row.row.down_site_3g}} - {{row.row.down_site_4g}}
                                </div> 
                            </template>
                            <template slot="description" slot-scope="row">
                                <div style="width:300px; height:45px; overflow:auto;">
                                    {{row.row.description}}
                                </div> 
                            </template>
                        </vue-bootstrap4-table>
                    </div>
                    <div v-if="ticket_type == 5" style="margin:10px;">
                        <TicketAdvanceSearchForm />
                    </div>
                    <div v-if="ticket_type == 6" style="margin:10px;">
                        <TicketAlarmListForm />
                    </div>
                    <div v-if="ticket_type == 9" style="height: 100%;">
                        <TicketSearchBySource 
                            :source_name="sel_search" 
                            :ticket_list="sel_search_source_ticket_list" 
                            :alarm_list="sel_search_source_alarm_list" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios/index';
    axios.defaults.withCredentials = true;
    import {SET_TROUBLE_TICKETS} from "../troubleticketStore";
    import {mapGetters} from "vuex";
    import TicketAdvanceSearchForm from "./layouts/TicketAdvanceSearchForm";
    import TicketAlarmListForm from "./layouts/TicketAlarmListForm";
    import TicketSearchBySource from "./layouts/TicketSearchBySource";

    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import VueBootstrap4Table from "vue-bootstrap4-table";

    export default {
        name: "TicketIndex",
        mixins: [TheContentMixin],
        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'Тикеты',
                        link: 'troubleticket',
                        active: true
                    }
                ],
                menu_list: [],
                ticket_type: 2,
                ticket_list: [],
                ticket_columns: [],
                columns: [],
                errors: null,
                isLoading: true,
                sel_search_type: 0,
                sel_search: '',
                sel_search_source_ticket_list: [],
                sel_search_source_alarm_list: [],
                classes: {
                    table : {
                        "table-striped table-sm" : true,
                        "table-bordered table-custom-two" : function(rows) {
                            return true
                        }
                    },
                    cell : {
                        "cell_prior_1" : function(row,column,cellValue) {
                            return column.name == "priority" && row.priority == 1
                        },
                        "cell_prior_2" : function(row,column,cellValue) {
                            return column.name == "priority" && row.priority == 2
                        },
                        "cell_prior_3" : function(row,column,cellValue) {
                            return column.name == "priority" && row.priority == 3
                        },
                        "cell_prior_4" : function(row,column,cellValue) {
                            return column.name == "priority" && row.priority == 4
                        },
                        "cell_prior_5" : function(row,column,cellValue) {
                            return column.name == "priority" && row.priority == 5
                        },
                    }
                },
                config: {
                    checkbox_rows: false,
                    rows_selectable: true,
                    card_title: "teet",
                    per_page: 100,
                    global_search:  {
                        placeholder:  "Поиск",
                        visibility:  false,
                        case_sensitive:  false
                    },
                    per_page_options:  [10,  20,  50,  100],
                    show_refresh_button:  false,
                    show_reset_button:  false,
                    card_mode: false,
                },
            }
        },
        components:{
            TicketAdvanceSearchForm,
            TicketAlarmListForm,
            TicketSearchBySource,
            Loading: VueLoading,
            VueBootstrap4Table
        },
        created: function () {
            this.fetchData();
        },
        computed: {
            ...mapGetters(["troubletickets"]),
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
            this.getTicketList();
        },
        watch:{
            $route (to, from){
                this.getTicketList();
            }
        },
        methods: {
            fetchData() {
                this.isLoading = false;
            },
            getTicketList() {
                this.isLoading = true;
                this.ticket_type = this.$route.params.type;
                axios.get(`/api/troubleticket/menu_list`)
                    .then((response) => {
                        this.menu_list = response.data.list;
                    });

                if([1, 2, 3, 4, 8].includes(this.$route.params.type*1))
                {
                    axios.get(`/api/troubleticket/request_list/search?type=${this.$route.params.type}`)
                        .then((response) => {
                            this.ticket_list = response.data.list;
                            this.ticket_columns = response.data.columns;
                            this.isLoading = false;
                        });
                }
                else 
                {
                    this.isLoading = false;
                }
            },
            onSelectRow(e) {
                if(e.selected_items[0].id > 0)
                {
                    if(this.ticket_type == 3 || this.ticket_type == 8)
                    {
                        let route = this.$router.resolve({path: "/troubleticket/"+e.selected_item.id});
                        window.open(route.href, '_blank');
                    }
                    else
                    {
                       let route = this.$router.resolve({path: "/troubleticket/resource/"+e.selected_item.id_ticket+"/"+e.selected_item.id});
                        window.open(route.href, '_blank'); 
                    }
                }
            },
            menuBtnClicked(type){
                this.$router.push({ path: "/troubleticket/page/"+type+"/#"});
                this.ticket_type = type;
                this.getTicketList();
            },
            onSearchTicket(){
                if(this.sel_search_type > 0 && this.sel_search != '')
                {
                    if(this.sel_search_type == 1)
                        this.$router.push({ path: "/troubleticket/"+this.sel_search});
                    if(this.sel_search_type == 2)
                    {
                        this.isLoading = true;
                        axios.get(`/api/troubleticket/ticket_seacrh_by_source/search?source_name=${this.sel_search}`)
                            .then((response) => {
                                this.sel_search_source_ticket_list = response.data.ticket_list;
                                this.sel_search_source_alarm_list = response.data.alarm_list;
                                this.$router.push({ path: "/troubleticket/page/9/#"});
                                this.ticket_type = 9;
                                this.isLoading = false;
                        });
                    }
                }
            },
        }
    }
</script>

