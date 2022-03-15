<template>
    <div style="height:99%">
        <loading :active.sync="isLoading" :can-cancel="true"></loading>
        <div class="card"  style="height:100%">
            <div class="row no-space" style="height:100%" v-if="page_type == 1">
                <div class="table-responsive" style="height:95%; overflow-y:auto;">
                    <vue-bootstrap4-table
                        :rows="hop_list"
                        :columns="columns"
                        :config="config" 
                        :classes="classes"
                    >
                    <template slot="act_btn" slot-scope="props">
                        <b-button size="sm" variant="info" 
                            @click="onClickHop(props.cell_value)" 
                            style="padding:2px 10px;"
                            >
                            <b-icon icon="diagram3" scale="1" font-scale="1" variant="white"></b-icon>
                        </b-button>
                    </template>
                    </vue-bootstrap4-table>
                </div>
            </div>
            <div class="row" v-if="page_type == 2" style="height: 95%; margin: 10px; border: 1px solid silver;">
                <div class="col-md-3 p-2" style="background: #f5f5f5; border-right: 1px solid silver; height:100%">
                    <a href="#" v-on:click="page_type = 1" class="btn btn-outline-primary btn-sm" style="width:100%">
                        Назад к списку
                    </a>
                    <hr/>
                    <div class="text-center" style="font-weight:bold;">{{search_site}}</div>
                    <hr/>
                    <div style="background:white; border:1px solid silver; height:80%; overflow-y:auto;">
                        <div v-for="s in slots" style="font-size:11px" class="my-2 mx-1">
                            <div variant="light" class="border border-secondary rounded p-1" style="float:left; width:47%">
                                IP: {{s.ip1}} <b-badge variant="dark" class="float-right" style="font-size:10px;">{{s.slot1}}</b-badge>
                                <hr class="m-1" />
                                {{s.hop1}}
                            </div>
                            <div style="float:left; text-align:center; width:4%;">-</div>
                            <div variant="light" class="border border-secondary rounded p-1" style="float:left; width:47%">
                                IP: {{s.ip2}} <b-badge variant="dark" class="float-right" style="font-size:10px;">{{s.slot2}}</b-badge>
                                <hr class="m-1" />
                                {{s.hop2}}
                            </div>
                            <div style="clear:both;"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 no-space h-100">
                    <div class="tree-body-hops">
                        <div id="tree-simple"> </div>
                    </div>
                </div>
            </div>
            <div class="row no-space" style="height:100%" v-if="page_type == 3">
                <div class="col-md-2 no-space left-menu" style="background:#95b4b1">
                   <div style="background:white; padding:6px;">
                        <input type="text" id="search_ticket" v-model="search_site" placeholder="Site ID" style="margin-top:3px; width:100%" />
                        <br>
                        <a href="#" v-on:click="onSearchHop(2)" class="btn btn-outline-success btn-sm" style="margin-top:3px; width:100%">Найти</a>
                   </div>
                    <ul class="list-group" style="max-height:85%; overflow:auto;">
                        <li v-for="h in hop_root_list" class="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" v-on:click="search_site = h.id_site_base; onSearchHop(1)">{{h.id_site_base}}</a>
                        </li>
                    </ul>

                </div>
                <div class="col-md-10 no-space" style="height:100%; background:#95b4b1">
                    <div class="text-right" style="padding-right:10px;">
                        <input type="text" v-model="set_root_hop" placeholder="Site ID" style="margin-top:5px; width:100px" />
                        <a href="#" v-on:click="setRootHop()" class="btn btn-primary btn-sm" style="width:150px">Сделать узловым</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../utls/treant/treant.js'
    import '../../utls/treant/treant.css'
    import Raphael from "../../utls/treant/raphael"
    import jQueryEasing from "../../utls/treant/jquery.easing"

    window.Raphael = Raphael;
    window.jQueryEasing = jQueryEasing;


    import axios from "axios";
    import {mapGetters} from 'vuex';
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import VueLoading from 'vue-loading-overlay';
    import VueBootstrap4Table from "vue-bootstrap4-table";
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "TheCatalog",
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
                        text: 'Транспортные узлы и топология',
                        link: 'references',
                        active: true
                    }
                ],
                page_type: 1,
                set_root_hop: null,
                search_site: null,
                hop_list: [],
                columns: [
                    {
                        label: "ID",
                        name: "id",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                            placeholder: "ID",
                        },
                        sort: true,
                    },
                    {
                        label: "Site ID",
                        name: "site_id",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                            placeholder: "Site ID",
                        },
                        sort: true,
                    },
                    {
                        label: "Hop name",
                        name: "hop_name",
                        filter: {
                            type: "simple",
                            placeholder: "Hop name",
                        },
                        sort: true,
                    },
                    {
                        label: "IP Hop",
                        name: "ip_hop",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                            placeholder: "IP Hop",
                        },
                        sort: true,
                    },
                    {
                        label: "Main parent",
                        name: "id_site_main_parent",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                            placeholder: "main parent",
                        },
                        sort: true,
                    },
                    {
                        label: "Root",
                        name: "is_parent",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                            placeholder: "root",
                        },
                        sort: true,
                    },
                    {
                        label: "Active",
                        name: "is_active",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                            placeholder: "active",
                        },
                        sort: true,
                    },
                    {
                        label: "Syslog",
                        name: "syslog_is_on",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                            placeholder: "syslog",
                        },
                        sort: true,
                    },
                    {
                        label: "Slots",
                        name: "cnt",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                            placeholder: "slots",
                        },
                        sort: true,
                    },
                    {
                        label: "Created at",
                        name: "created_at",
                        filter: {
                            type: "simple",
                            placeholder: "Created at",
                        },
                        sort: true,
                    },
                    {
                        label: "Updated at",
                        name: "updated_at",
                        filter: {
                            type: "simple",
                            placeholder: "Updated at",
                        },
                        sort: true,
                    },
                    {
                        label: "",
                        name: "site_id",
                        slot_name: "act_btn",
                        column_classes: "id_column",
                        sort: false
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
                    per_page: 25,
                    global_search:  {
                        placeholder:  "Поиск",
                        visibility:  false,
                        case_sensitive:  false
                    },
                    per_page_options:  [25, 50, 100, 250],
                    show_refresh_button:  false,
                    show_reset_button:  false,
                    card_mode: false,
                },
                hop_root_list: [],
                hops: [],
                slots: [],
                formErrors: null,
                errors: null,
                isLoading: true,
                
            };
        },
        mounted() {   
            this.generateBreadcrumb(this.breadcrumbs);
            this.getHopRootList();
            this.getHopList();
        },
        watch: {
            
        },
        components: {
            Loading: VueLoading, 
            VueBootstrap4Table, 
        },
        methods: {
            getHopList(){
                axios.get(`/api/catalog/site_hop_list/search`)
                    .then((response) => {
                        this.hop_list = response.data.list;
                        this.isLoading = false;
                    });
            },
            getHopRootList(){
                axios.get(`/api/catalog/site_hop_root_list/search`)
                    .then((response) => {
                        this.hop_root_list = response.data.list;
                    });
            },
            onClickHop(site_id){
                this.search_site = site_id;
                this.isLoading = true;
                this.page_type = 2;
                this.hops = [];
                this.slots = [];
                axios.get(`/api/catalog/site_hop_detail/search?type=2&id_site=${this.search_site}`)
                    .then((response) => {
                        this.hops = response.data.list['topology'];
                        this.slots = response.data.list['slots'];

                        if(this.hops.length > 0)
                        {
                            this.renderHopsTest();
                        }
                        
                        this.isLoading = false;
                    });
                
            },
            onSearchHop(type){
                axios.get(`/api/catalog/site_hop_topology/search?type=${type}&id_site=${this.search_site}`)
                    .then((response) => {
                        this.hops = response.data.list;
                        this.renderHopsTest();
                    });
            },
            setRootHop(){
                axios.post('/api/catalog/site_hop_set_root', this.$data.set_root_hop)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            renderHopsTest(){
                let vm = this;
                var config = {
                    container: "#tree-simple",
                    connectors: { type: "step" },
                    rootOrientation: "WEST",
                    siblingSeparation: 10,
                    subTeeSeparation: 10,
                    scrollbar: "native",
                    node: { collapsable: true }
                };

                let obj = {};
                let chart_config = [];

                chart_config.push(config);

                this.hops.forEach(function (hop) {
                    var html_class = null;

                    if(vm.search_site == hop.id_site_base)
                    {
                        html_class = "hop_node_selected";
                    }

                    if (hop.id_site_parent != null) {
                        obj[hop.id_site_base] = {
                            parent: obj[hop.id_site_parent],
                            text: {
                                id: hop.id_site_base,
                                name: hop.id_site_base,
                            },
                            HTMLclass: html_class
                        };
                        chart_config.push(obj[hop.id_site_base]);
                    } else {
                        obj[hop.id_site_base] = {
                            text: {
                                id: hop.id_site_base,
                                name: hop.id_site_base,
                                title: ''
                            },
                            HTMLclass: html_class
                        };
                        chart_config.push(obj[hop.id_site_base]);
                    }
                });


                new Treant(chart_config, null, $);
            },
        }
    };
</script>


<style scoped>
    .hop_node_selected {
        background-color: darkgreen;
    }
</style>
