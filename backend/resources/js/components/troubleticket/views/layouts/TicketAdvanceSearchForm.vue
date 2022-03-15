<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div v-if="search_clicked == 0">
            <table class="table table-sm table-border" style="width:100%;">
                <tr>
                    <th style="width:20%">Column</th>
                    <th style="width:25%">Operator</th>
                    <th>Value</th>
                </tr>
                <tr v-for="(item, index) in add_search_columns" :key="index">
                    <td>{{item.label}}</td>
                    <td>
                        <select style="width:90%" v-model="item.search_type">
                            <option v-for="v in add_search_types"  v-bind:value="v.id" v-show="v.field_type == 0 || v.field_type == item.type">
                                {{v.label}}
                            </option>
                        </select>
                    </td>
                    <td>
                        <input type="text" style="width:90%" v-if="item.type != 3 && item.type != 4 && item.type != 5" v-model="item.search_value" />
                        <input type="text" style="width:90%" v-if="item.type == 3 && item.search_type > 0" v-model="item.search_value = item.placeholder" />
                        <select style="width:90%" v-if="item.type == 4" v-model="item.search_value">
                            <option></option>
                            <option v-for="v in item.search_options"  v-bind:value="v.id">{{v.value}}</option>
                        </select>
                        <select style="width:90%" v-if="item.type == 5" v-model="item.search_value">
                            <option></option>
                            <option v-for="v in item.search_options"  v-bind:value="v.value">{{v.value}}</option>
                        </select>
                    </td>
                </tr>
            </table>
            <hr/>
            <b-button size="sm" variant="primary" style="width:120px" @click="getSearchValue()">
                Искать
            </b-button>
            <hr/>
        </div>
        <div v-if="search_clicked == 1">
            <b-button size="sm" variant="primary" style="width:220px" @click="cancelSearch()">
                Вернуться назад к поиску
            </b-button> | 
             <b-button size="sm" class="float-right" variant="success" style="width:120px" @click="onDownloadRows()">
                Скачать результат
            </b-button>
            <hr/>
            <div class="table-responsive">
                <vue-bootstrap4-table
                    :rows="adv_search_result"
                    :columns="columns"
                    @on-select-row="onSelectRow"
                    :config="config" 
                    :classes="classes"
                    >
                    <template slot="priority" slot-scope="props">
                        <i></i>
                    </template>
                </vue-bootstrap4-table>
            </div>
        </div>
    </div>
</template>

<script>
    import {required, minLength, requiredIf} from 'vuelidate/lib/validators'
    import axios from 'axios';
    import VueLoading from 'vue-loading-overlay';
    import VueBootstrap4Table from "vue-bootstrap4-table";
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "TicketAdvanceSearchForm",
        components: {Loading: VueLoading, VueBootstrap4Table},
        computed: {},
        data() {
            return {
                isLoading: false,
                add_search_columns: [
                    {
                        name: 'tt.TT_TYPE',
                        label: 'Тип тикета',
                        type: 4,
                        search_type: 0,
                        seacrh_value: '',
                        search_options: [
                            {
                                id: 1,
                                value: 'Событие'
                            },
                            {
                                id: 2,
                                value: 'Инцидент'
                            },
                        ]
                    },
                    {
                        name: 'tt.PRIORITY',
                        label: 'Приоритет',
                        type: 4,
                        search_type: 0,
                        seacrh_value: '',
                        search_options: [
                            {
                                id: 5,
                                value: 'Low'
                            },
                            {
                                id: 4,
                                value: 'Medium'
                            },
                            {
                                id: 3,
                                value: 'High'
                            },
                            {
                                id: 2,
                                value: 'Critical'
                            },
                            {
                                id: 1,
                                value: 'Emergency'
                            },
                        ]
                    },
                    {
                        name: 'tt.AFFECTION',
                        label: 'Влияние на сервис',
                        type: 4,
                        search_type: 0,
                        seacrh_value: '',
                        search_options: [
                            {
                                id: 1,
                                value: 'Без влияния'
                            },
                            {
                                id: 2,
                                value: 'Полное'
                            },
                            {
                                id: 3,
                                value: 'Частичное'
                            },
                        ]
                    },
                    {
                        name: 'tt.INFLUENCE',
                        label: 'Бренд',
                        type: 4,
                        search_type: 0,
                        seacrh_value: '',
                        search_options: [
                            {
                                id: 1,
                                value: 'Нет'
                            },
                            {
                                id: 2,
                                value: 'Kcell'
                            },
                            {
                                id: 3,
                                value: 'Activ'
                            },
                            {
                                id: 4,
                                value: 'Kcell & Activ'
                            },
                        ]
                    },
                    {
                        name: 'tt.ID_REGION',
                        label: 'Регион',
                        type: 4,
                        search_type: 0,
                        seacrh_value: '',
                        search_options: [
                            {
                                id: 1,
                                value: 'Almaty'
                            },
                            {
                                id: 8,
                                value: 'Astana'
                            },
                            {
                                id: 2,
                                value: 'South'
                            },
                            {
                                id: 4,
                                value: 'North'
                            },
                            {
                                id: 7,
                                value: 'East'
                            },
                            {
                                id: 3,
                                value: 'West'
                            },
                        ]
                    },
                    {
                        name: 'sn.NETWORK',
                        label: 'Тип сети',
                        type: 5,
                        search_type: 0,
                        seacrh_value: '',
                        search_options: [
                            {
                                id: 'Telco',
                                value: 'Telco'
                            },
                            {
                                id: 'IT',
                                value: 'IT'
                            },
                        ]
                    },
                    {
                        name: 'sn.SUBNETWORK_1',
                        label: 'Подсеть',
                        type: 1,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 's.SERVICE_NAME',
                        label: 'Сервис',
                        type: 1,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 'sg.GROUP_NAME',
                        label: 'Группа сервиса',
                        type: 1,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 'tt.SOURCE_NAME',
                        label: 'Ресурс',
                        type: 1,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 'tt.ROOT_CAUSE',
                        label: 'Причина проблемы',
                        type: 1,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 'tt.START_DATE',
                        label: 'Дата начала тикета',
                        type: 3,
                        search_type: 0,
                        seacrh_value: '',
                        placeholder: "'2022-01-01 00:00' AND '2022-02-01 00:00'"
                    },
                    {
                        name: 'tt.FINISH_DATE',
                        label: 'Дата завершения тикета',
                        type: 3,
                        search_type: 0,
                        seacrh_value: '',
                        placeholder: "'2022-01-01 00:00' AND '2022-02-01 00:00'"
                    },
                    {
                        name: 'DURATION',
                        label: 'Длительность тикета (мин.)',
                        type: 2,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 'tt.DESCRIPTION',
                        label: 'Описание проблемы',
                        type: 1,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 'u.NAME',
                        label: 'Создатель',
                        type: 1,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 'RESPONSIBLE',
                        label: 'Ответсвенный',
                        type: 1,
                        search_type: 0,
                        seacrh_value: ''
                    },
                    {
                        name: 'sa.STATUS_ID', 
                        label: 'Статус',
                        type: 4, // select 
                        search_type: 0,
                        seacrh_value: '',
                        search_options: [
                            {
                                id: 1,
                                value: 'Новый'
                            },
                            {
                                id: 3,
                                value: 'В работе'
                            },
                            {
                                id: 4,
                                value: 'Назначен'
                            },
                            {
                                id: 5,
                                value: 'Закрыт'
                            },
                            {
                                id: 6,
                                value: 'Отменён'
                            },
                            {
                                id: 7,
                                value: 'Другой ТТ'
                            },
                            {
                                id: 8,
                                value: 'Отклонён'
                            },
                            {
                                id: 9,
                                value: 'Решён'
                            },
                        ]
                    },
                ],
                add_search_types: {
                    0:{
                        id: 0,
                        label: '',
                        start: '',
                        end: '',
                        field_type: 0
                    },
                    1:{
                        id: 1,
                        label: 'LIKE %...%',
                        start: "LIKE '%",
                        end: "%'",
                        field_type: 1
                    },
                    2:{
                        id: 2,
                        label: 'NOT LIKE %...%',
                        start: "NOT LIKE '%",
                        end: "%'",
                        field_type: 1
                    },
                    3:{
                        id: 3,
                        label: '=',
                        start: '= ',
                        end: '',
                        field_type: 4
                    },
                    4:{
                        id: 4,
                        label: '!=',
                        start: '!= ',
                        end: '',
                        field_type: 4
                    },
                    5:{
                        id: 5,
                        label: '=',
                        start: "= '",
                        end: "'",
                        field_type: 5
                    },
                    6:{
                        id: 6,
                        label: '!=',
                        start: "!= '",
                        end: "'",
                        field_type: 5
                    },
                    7:{
                        id: 7,
                        label: '=',
                        start: '= ',
                        end: '',
                        field_type: 2
                    },
                    8:{
                        id: 8,
                        label: '!=',
                        start: '!= ',
                        end: '',
                        field_type: 2
                    },
                    9:{
                        id: 9,
                        label: '>',
                        start: '> ',
                        end: '',
                        field_type: 2
                    },
                    10:{
                        id: 10,
                        label: '<',
                        start: '< ',
                        end: '',
                        field_type: 2
                    },
                    11:{
                        id: 11,
                        label: 'BETWEEN ',
                        start: "BETWEEN ",
                        end: "",
                        field_type: 3
                    },
                },
                search_text: '',
                search_clicked: 0,
                adv_search_result: [],
                columns: [
                    {
                        label: "ID",
                        name: "id",
                        filter: {
                            type: "simple",
                            placeholder: "ID",
                        },
                        sort: true,
                    },
                    {
                        label: "Тип тикета",
                        name: "tt_type_name",
                        filter: {
                            type: "simple",
                            placeholder: "Тип тикета",
                        },
                        sort: true,
                    },
                    {
                        label: "Приоритет",
                        name: "priority_name",
                        filter: {
                            type: "simple",
                            placeholder: "Приоритет",
                        },
                        sort: true,
                    },
                    {
                        label: "Начало тикета",
                        name: "start_date",
                        filter: {
                            type: "simple",
                            placeholder: "Начало тикета",
                        },
                        sort: true,
                    },
                    {
                        label: "Конец тикета",
                        name: "finish_date",
                        filter: {
                            type: "simple",
                            placeholder: "Конец тикета",
                        },
                        sort: true,
                    },
                    {
                        label: "Город",
                        name: "settlement_name",
                        filter: {
                            type: "simple",
                            placeholder: "Город",
                        },
                        sort: true,
                    },
                    {
                        label: "Ресурс",
                        name: "source_name",
                        filter: {
                            type: "simple",
                            placeholder: "Ресурс",
                        },
                        sort: true,
                    },
                    {
                        label: "2G",
                        name: "down_site_2g",
                        filter: {
                            type: "simple",
                            placeholder: "2G",
                        },
                        sort: true,
                    },
                    {
                        label: "3G",
                        name: "down_site_3g",
                        filter: {
                            type: "simple",
                            placeholder: "3G",
                        },
                        sort: true,
                    },
                    {
                        label: "4G",
                        name: "down_site_4g",
                        filter: {
                            type: "simple",
                            placeholder: "4G",
                        },
                        sort: true,
                    },
                    {
                        label: "Создатель",
                        name: "created_user",
                        filter: {
                            type: "simple",
                            placeholder: "Создатель",
                        },
                        sort: true,
                    },
                    {
                        label: "Статус",
                        name: "status_name",
                        filter: {
                            type: "simple",
                            placeholder: "Статус",
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
                        }
                    }
                },
                config: {
                    checkbox_rows: false,
                    rows_selectable: true,
                    card_title: "teet",
                    per_page: 20,
                    global_search:  {
                        placeholder:  "Поиск",
                        visibility:  true,
                        case_sensitive:  false
                    },
                    per_page_options:  [10,  20,  50,  100],
                    show_refresh_button:  false,
                    show_reset_button:  false,
                    card_mode: false,
                }
                
            }
        },
        // created: async function () {
        //     await this.getActivities(this.selectedAction.id);
        // },
        methods: {
            getSearchValue() {
                var i;
                var j = 0;

                this.search_clicked = 0;
                this.isLoading = true;

                if(this.add_search_columns.length > 0)
                {
                    this.search_text = 'WHERE (';

                    for (i = 0; i < this.add_search_columns.length; i++) {
                        if(j >= 1 && this.add_search_columns[i].search_type > 0)
                        {
                            this.search_text += ' AND ';
                        }
                        if(this.add_search_columns[i].search_type > 0)
                        {
                            this.search_text += this.add_search_columns[i].name+' ';
                            this.search_text += this.add_search_types[this.add_search_columns[i].search_type].start;
                            this.search_text += this.add_search_columns[i].search_value;
                            this.search_text += this.add_search_types[this.add_search_columns[i].search_type].end;
                            j++;
                        }
                    }
                    this.search_text += ')';
                }

                var req_res = {
                    'search_text': this.search_text,
                    'columns': this.add_search_columns,
                    'types': this.add_search_types,
                };
                /*
                req_res['search_text'] = this.search_text;
                req_res['columns'] = 'this.add_search_columns';
                req_res['types'] = this.add_search_types; 
                */


                axios.post(`/api/troubleticket/ticket_advance_search/search`, req_res)
                    .then((response) => {
                        this.adv_search_result = response.data.list;
                        this.search_clicked = 1;
                        this.isLoading = false;
                    })
                    .catch(error => {
                        this.isLoading = false;
                        alert('Произошла ошибка, возможно некорректно составлен запрос, или большой объём данных.');
                    });
            },
            cancelSearch() {
                this.search_clicked = 0;
                this.adv_search_result = [];
            },
            onSelectRow(e) {
                if(e.selected_item.id > 0)
                {
                    let route = this.$router.resolve({path: "/troubleticket/"+e.selected_item.id});
                    window.open(route.href, '_blank');
                }
            },
            onDownloadRows() {
                var csv = this.JSON2CSV(this.adv_search_result);
                
                var downloadLink = document.createElement("a");
                var blob = new Blob(["\ufeff", csv]);
                var url = URL.createObjectURL(blob);
                downloadLink.href = url;
                downloadLink.download = "ServiceTicketReport.csv";

                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
            },
            JSON2CSV(objArray) {
                var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
                var str = '';
                var line = '';

                var head = array[0];
                for (var index in array[0]) {
                    line += index + ';';
                }

                line = line.slice(0, -1);
                str += line + '\r\n';

                for (var i = 0; i < array.length; i++) {
                    var line = '';

                    if ($("#quote").is(':checked')) {
                        for (var index in array[i]) {
                            var value = array[i][index] + "";
                            line += '"' + value.replace(/"/g, '""') + '";';
                        }
                    } else {
                        for (var index in array[i]) {
                            line += array[i][index] + ';';
                        }
                    }

                    line = line.slice(0, -1);
                    str += line + '\r\n';
                }
                return str;
            },
        }
    }
</script>

<style>

</style>