<template>
    <div style="height:99%">
        <div class="card"  style="height:100%">
            <div class="row no-space" style="height:100%">
                <div class="table-responsive" style="height:100%; overflow-y:auto;">
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
                        </template>
                        <template slot="down_site_2g" slot-scope="row">
                            <div class="truncate-text" style="font-weight:bold;">
                                {{row.row.down_site_2g}} - {{row.row.down_site_3g}} - {{row.row.down_site_4g}}
                            </div>
                        </template>
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

    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import VueBootstrap4Table from "vue-bootstrap4-table";

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
                ticket_list: [],
                ticket_columns: [],
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
                        visibility:  true,
                        case_sensitive:  false
                    },
                    per_page_options:  [10,  20,  50,  100],
                    show_refresh_button:  false,
                    show_reset_button:  false,
                    card_mode: false,
                },
                isLoading: true,
                
            };
        },
        mounted() {   
            this.generateBreadcrumb(this.breadcrumbs);
            this.getTicketList();
        },
        watch: {
            
        },
        components: {
            Loading: VueLoading,
            VueBootstrap4Table
        },
        methods: {
            getTicketList(){
                this.isLoading = true; 
                axios.get(`/api/troubleticket/inform_list/search?type=${this.$route.params.type}&tt_type=${this.$route.params.tt_type}&priority=${this.$route.params.priority}&network_type=${this.$route.params.network_type}`)
                    .then((response) => {
                        this.ticket_list = response.data.list;
                        this.ticket_columns = response.data.columns;
                        this.isLoading = false;
                    });
            },
        }
    };
</script>
