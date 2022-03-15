<template>
    <div>
        <div class="row" style="height:25px;">
            <div class="col-md-4">
                Активные аварии без тикетов:
            </div>
            <div class="col-md-8 text-right">
                <div v-if="alarm_list_selected.length > 0">
                    <span>Выбрано: <span style="font-weight:bold;">{{alarm_list_selected.length}}</span></span>
                    <span style="padding:0 10px">Источник: <span style="font-weight:bold;">{{alarm_source_id}} - {{alarm_source_name}}</span></span>
                    <b-button size="sm" variant="success" @click="CreateTicket()" style="padding:2px 10px;">
                        Отктрыть тикет
                    </b-button>
                    <b-button size="sm" variant="warning" @click="TestDataToTicket()" style="padding:2px 10px;">
                        Отктрыть тикет
                    </b-button>
                </div>
            </div>
        </div>
        <vue-bootstrap4-table
            :rows="alarm_list"
            :columns="alarm_columns"
            @on-select-row="onSelectRow"
            @on-all-select-rows="onSelectRow"
            @on-unselect-row="onSelectRow"
            @on-all-unselect-rows="onSelectRow"
            :config="alarm_config" 
            :classes="classes"
            >
            <template slot="id_severity" slot-scope="row">
                <div class="truncate-text" style="width:20px; color:white; font-weight:bold;">{{row.row.id_severity}}</div>
            </template>
            <template slot="fault_name" slot-scope="row">
                <div class="truncate-text" style="width:150px;">{{row.row.fault_name}}</div>
            </template>
            <template slot="act_source" slot-scope="props">
                <b-button size="sm" variant="secondary" 
                    @click="onSelectSource(props.cell_value)" 
                    v-show="props.cell_value != alarm_source_id" 
                    style="padding:2px 10px;"
                    >
                    <b-icon icon="square" scale="1" font-scale="1" variant="white"></b-icon>
                </b-button>
                <b-button size="sm" variant="success" 
                    @click="onSelectSource(props.cell_value)" 
                    v-show="props.cell_value == alarm_source_id" 
                    style="padding:2px 10px;"
                    >
                    <b-icon icon="check2-square" scale="1" font-scale="1" variant="white"></b-icon>
                </b-button>
            </template>
        </vue-bootstrap4-table>
    </div>
</template>

<script>
    import {required, minLength, requiredIf} from 'vuelidate/lib/validators'
    import axios from 'axios';
    import VueLoading from 'vue-loading-overlay';
    import VueBootstrap4Table from "vue-bootstrap4-table";
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "TicketAlarmListForm",
        components: {Loading: VueLoading, VueBootstrap4Table},
        computed: {},
        data() {
            return {
                alarm_list: [],
                alarm_list_selected: [],
                alarm_source_id: null,
                alarm_source_name: null,
                alarm_columns: [
                    {
                        label: "Source",
                        name: "id",
                        slot_name: "act_source",
                        column_classes: "id_column",
                        sort: false
                    },
                    {
                        label: ".",
                        name: "id_severity",
                        column_classes: "def_xs_column",
                        filter: {
                            type: "simple",
                        },
                        sort: true,
                    },
                    {
                        label: "Tech.",
                        name: "technology",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                        },
                        sort: true,
                    },
                    {
                        label: "Date raised",
                        name: "date_raised",
                        row_text_alignment: "text-left",
                        filter: {
                            type: "simple",
                        },
                        sort: true,
                    },
                    {
                        label: "Source name",
                        name: "source_name",
                        row_text_alignment: "text-left",
                        filter: {
                            type: "simple",
                        },
                        sort: true,
                    },
                    {
                        label: "Кат. сайта",
                        name: "site_category",
                        row_text_alignment: "text-right",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                        },
                        sort: true,
                    },
                    {
                        label: "Subtype",
                        name: "subtype_name",
                        row_text_alignment: "text-left",
                        filter: {
                            type: "simple",
                        },
                        sort: true,
                    },
                    {
                        label: "Source Element",
                        name: "source_element",
                        row_text_alignment: "text-left",
                        filter: {
                            type: "simple",
                        },
                        sort: true,
                    },
                    {
                        label: "Fault name",
                        name: "fault_name",
                        row_text_alignment: "text-left",
                        column_classes: "def_sm_column",
                        filter: {
                            type: "simple",
                        },
                        sort: true,
                    },
                    
                ],
                classes: {
                    table : {
                        "table-striped table-sm" : true,
                        "table-bordered table-custom-two" : function(rows) {
                            return true
                        }
                    },
                    cell : {
                        "cell_sev_1" : function(row,column,cellValue) {
                            return column.name == "id_severity" && row.id_severity == 0
                        },
                        "cell_sev_2" : function(row,column,cellValue) {
                            return column.name == "id_severity" && row.id_severity == 1
                        },
                        "cell_sev_3" : function(row,column,cellValue) {
                            return column.name == "id_severity" && row.id_severity == 2
                        },
                        "cell_sev_4" : function(row,column,cellValue) {
                            return column.name == "id_severity" && row.id_severity > 2
                        },
                    }
                },
                alarm_config: {
                    checkbox_rows: true,
                    rows_selectable: false,
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
                }
                
            }
        },
        created: function () {
            this.getTicketAlarmList();
        },
        computed: {
            alarm_list_create_form() {
                return this.$store.state.alarm_list_create_form;
            }
        },
        methods: {
            getTicketAlarmList() {
                axios.get(`/api/troubleticket/ticket_alarm_list/search?is_active=1`).then((response) => {
                    this.alarm_list = response.data.list;
                });
            },
            onSelectRow(e) {
                this.alarm_list_selected = [];

                this.alarm_list_selected = e.selected_items;
            },
            onSelectSource(e) {
                var i;
                for (i = 0; i < this.alarm_list_selected.length; i++) {
                    if(this.alarm_list_selected[i]['id'] == e)
                    {
                        this.alarm_source_id = e;
                        this.alarm_source_name = this.alarm_list.filter(item => (item.id == e) ? item : '')[0].source_name;
                        this.alarm_list_selected[i]['is_source'] = 1;
                    }
                }
            },
            CreateTicket() {

                this.$store.commit('SET_ALARM_LIST_CREATE_FORM', this.alarm_list_selected);

                this.$router.push({ path: "/troubleticket/create/"});
            },
            TestDataToTicket() {
                var data = {};

                data['alarm_list'] = this.alarm_list_selected;
                axios.post('/api/troubleticket/ticket_get_create_data', data)
                    .then((response) => {
                        if (response.data.success === 1) {
                            console.log('tickets', response.data.list);
                        }
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
            }
        }
    }
</script>