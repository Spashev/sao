<template>
    <div>
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="create()">
                    <div class="row no-space">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label for="name">Тип сервиса</label>
                                <v-select :options="service_options" 
                                        v-model="form.service_type"
                                        :class="{'is-invalid': $v.form.service_type.$error}"
                                        @blur="$v.form.service_type.$touch()"
                                        multiple>
                                </v-select>
                                <div class="invalid-feedback" v-if="!$v.form.service_type.required">
                                    Обязательно для заполнения
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name">Подсеть</label>
                                <v-select :options="subnetwork_options" 
                                        v-model="form.network_type"
                                        :class="{'is-invalid': $v.form.network_type.$error}"
                                        @blur="$v.form.network_type.$touch()">
                                </v-select>
                                <div class="invalid-feedback" v-if="!$v.form.network_type.required">
                                    Обязательно для заполнения
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name">Город</label>
                                <v-select :options="settlement_options" 
                                        v-model="form.region"
                                        :class="{'is-invalid': $v.form.region.$error}"
                                        @blur="$v.form.region.$touch()"
                                        @search="query => settlementSearch = query" 
                                        multiple>
                                </v-select>
                                <div class="invalid-feedback" v-if="!$v.form.region.required">
                                    Обязательно для заполнения
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name">Возможная причина проблемы</label>
                                <v-select :options="problem_causes_options" 
                                        v-model="form.probable_cause"
                                        :class="{'is-invalid': $v.form.probable_cause.$error}"
                                        @blur="$v.form.probable_cause.$touch()" >
                                </v-select>
                                <div class="invalid-feedback" v-if="!$v.form.probable_cause.required">
                                    Обязательно для заполнения
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="source_name">Возможный источник проблемы</label>
                                <input type="text" id="source_name" class="form-control" 
                                        v-model="form.source_name" 
                                        :class="{'is-invalid': $v.form.source_name.$error}"
                                        @blur="$v.form.source_name.$touch()" 
                                />
                                <div class="invalid-feedback" v-if="!$v.form.source_name.required">
                                    Обязательно для заполнения
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="description">Описание</label>
                                <textarea id="description" class="form-control" 
                                        v-model="form.description"
                                        :class="{'is-invalid': $v.form.description.$error}"
                                        @blur="$v.form.description.$touch()" 
                                        rows="4" style="height:auto;">
                                </textarea>
                                <div class="invalid-feedback" v-if="!$v.form.description.required">
                                    Обязательно для заполнения
                                </div>
                                <div class="invalid-feedback" v-if="!$v.form.description.minLength">
                                    Минимальная длина {{ $v.form.description.$params.minLength.min }} символов. Сейчас
                                    {{ form.description.length }}.
                                </div>
                                <div class="invalid-feedback" v-if="!$v.form.description.maxLength">
                                    Максимальная длина {{ $v.form.description.$params.maxLength.max }} символов. Сейчас
                                    {{ form.description.length }}.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="tt_type">Тип тикеты</label>
                                        <b-form-group>
                                            <b-form-radio-group id="radio-group-3" v-model="form.tt_type" :options="tt_type_options" name="tt_type"></b-form-radio-group>
                                        </b-form-group>
                                        <input type="text" 
                                                id="affection" 
                                                class="form-control" 
                                                v-model="form.tt_type" 
                                                style="display:none" 
                                                :class="{'is-invalid': $v.form.tt_type.$error}"
                                                @blur="$v.form.tt_type.$touch()"
                                        />
                                        <div class="invalid-feedback" v-if="!$v.form.tt_type.required">
                                            Обязательно для заполнения
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="affection">Влияние на сервис</label>
                                        <b-form-group>
                                            <b-form-radio-group id="radio-group-2" v-model="form.affection" :options="affection_options" name="affection"></b-form-radio-group>
                                        </b-form-group>
                                        <input type="text" 
                                                id="affection" 
                                                class="form-control" 
                                                v-model="form.affection" 
                                                style="display:none" 
                                                :class="{'is-invalid': $v.form.affection.$error}"
                                                @blur="$v.form.affection.$touch()"
                                        />
                                        <div class="invalid-feedback" v-if="!$v.form.affection.required">
                                            Обязательно для заполнения
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="influence">Бренд</label>
                                        <b-form-group>
                                            <b-form-radio-group id="radio-group-1" v-model="form.influence" :options="influence_options" name="influence"></b-form-radio-group>
                                        </b-form-group>
                                        <input type="text" 
                                                id="influence" 
                                                class="form-control" 
                                                v-model="form.influence" 
                                                style="display:none" 
                                                :class="{'is-invalid': $v.form.influence.$error}"
                                                @blur="$v.form.influence.$touch()"
                                        />
                                        <div class="invalid-feedback" v-if="!$v.form.influence.required">
                                            Обязательно для заполнения
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="priority">
                                            Приоритет 
                                            <button class="btn btn-sm float-right" type="button" @click="priority_manual = 1">
                                                <b-icon icon="pencil-square" class="rounded" scale="1" font-scale="1" variant="primary"></b-icon>
                                            </button>
                                        </label>
                                        <input type="text" id="priority" class="form-control" v-if="form.priority == 1" value="Emergency" disabled />
                                        <input type="text" id="priority" class="form-control" v-if="form.priority == 2" value="Critical" disabled />
                                        <input type="text" id="priority" class="form-control" v-if="form.priority == 3" value="High" disabled />
                                        <input type="text" id="priority" class="form-control" v-if="form.priority == 4" value="Medium" disabled />
                                        <input type="text" id="priority" class="form-control" v-if="form.priority == 5" value="Low" disabled />
                                        <input type="text" id="priority" class="form-control" v-if="form.priority == 6" value="Неопределен" disabled /> 
                                        <select v-model="form.priority" id="priority2" v-show="priority_manual == 1" 
                                            class="form-control" 
                                            style="margin-top:3px;"
                                            :class="{'is-invalid': $v.form.priority.$error}"
                                            @blur="$v.form.influence.$touch()"
                                        >
                                            <option value="1">Emergency</option>
                                            <option value="2">Critical</option>
                                            <option value="3">High</option>
                                            <option value="4">Medium</option>
                                            <option value="5">Low</option>
                                        </select>
                                        <div class="invalid-feedback" v-if="!$v.form.priority.between">
                                            Указано некорректное значение
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="start_date">Дата начала</label>
                                            <b-form-input 
                                                type="text"
                                                id="start_date" 
                                                v-model="form.start_date" 
                                                v-mask="'##.##.####'" 
                                                placeholder="dd.mm.yyyy" 
                                                :class="{'is-invalid': $v.form.start_date.$error}"
                                                @blur="$v.form.start_date.$touch()" 
                                            >
                                            </b-form-input>
                                            <div class="invalid-feedback" v-if="!$v.form.start_date.required">
                                                Обязательно для заполнения
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="start_time">Время начала</label>
                                            <b-form-input 
                                                type="text"
                                                id="start_time" 
                                                v-model="form.start_time" 
                                                v-mask="'##:##'" 
                                                placeholder="HH:mm" 
                                                :class="{'is-invalid': $v.form.start_time.$error}"
                                                @blur="$v.form.start_time.$touch()" 
                                                @change="dateChanged()"
                                            >
                                            </b-form-input>  
                                            <div class="invalid-feedback" v-if="!$v.form.start_time.required">
                                                Обязательно для заполнения
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border" style="min-height:250px; background: #005cb2;">
                                <div class="text-right">
                                    <button class="btn btn-sm btn-outline-warning" type="button" style="margin:3px 3px 0 0;">
                                        Добавить аварии
                                    </button>
                                </div>
                                <hr style="margin:5px 0; border-color:white;"/>
                                <div class="border" style="min-height:200px; background: #c6e0fc; margin:3px;">
                                    <table class="table table-sm table-light" style="background: #c6e0fc;">
                                        <tr v-for="(item, index) in form.service_type" :key="index">
                                            <td class="border-bottom">
                                                <div class="form-row">
                                                    <div class="form-group col-md-8">
                                                        <span style="font-weight: bold; padding-left:15px;">
                                                            {{ item.label }}
                                                        </span>
                                                    </div>
                                                    <div class="form-group col-md-4 text-right" style="border:0.5px solid white">
                                                        <span style="padding-right:15px; font-size:10px;" v-show="item.service_type == 2"> 
                                                            Аварии: <span style="font-size:12px; font-weight:bold;">{{form.service_type[index]['alarms'].length}}</span>
                                                        </span>
                                                        <span style="padding-right:15px; font-size:10px;" v-show="item.service_type == 2"> 
                                                            Вне сервиса: <span style="font-size:12px; font-weight:bold;">{{form.service_type[index]['down_services'].length}}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-7">
                                                        <select v-model="form.service_type[index].id_influence" id="query_type" class="form-control" @change="checkPriority()">
                                                            <option disabled value="">Выберите</option>
                                                            <option v-for="option in item.influence_options" v-bind:value="option.id_influence">
                                                                {{ option.label }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-3">
                                                        <b-form-input 
                                                            type="text"
                                                            id="start_date" 
                                                            v-model="form.service_type[index].start_date" 
                                                            v-mask="'##.##.####'" 
                                                            placeholder="dd.mm.yyyy"
                                                        >
                                                        </b-form-input>
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                        <b-form-input 
                                                            type="text"
                                                            id="start_time" 
                                                            v-model="form.service_type[index].start_time" 
                                                            v-mask="'##:##'" 
                                                            placeholder="HH:mm"
                                                        >
                                                        </b-form-input>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="alert alert-danger" v-if="formErrors">
                                <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                                    {{ fieldsError.join('\n') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-space">
                        <div class="col-md-12">
                            <button class="btn btn-md btn-outline-primary" style="margin:10px 0" type="submit">Сохранить</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer">   
            </div>
        </div>
    </div>
</template>

<script>
    import {required, minLength, maxLength, between} from 'vuelidate/lib/validators'
    import VueLoading from 'vue-loading-overlay';
    import vSelect from 'vue-select'; // select with search/filtering
    import 'vue-select/dist/vue-select.css';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import VueBootstrap4Table from "vue-bootstrap4-table";
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import {mapGetters} from "vuex";

    export default {
        name: "TicketCreate",
        mixins: [TheContentMixin],
        data() {
            return {
                title: 'Create Ticket',
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'TroubleTicket',
                        to: {path: '/troubleticket'}
                    },
                    {
                        text: 'Создание Сервис тикета',
                        active: true
                    }
                ],
                priority_manual: 0, 
                selected_alarms: {},
                form: {
                    priority: 6,  
                    tt_type: null,  // +
                    service_type: [], // +
                    network_type: null, // +
                    region: null, // +
                    source_name: null, // +
                    interruption: null, 
                    affection: null, // +
                    influence: null,  // +
                    probable_cause: null, // +
                    start_date: '25.08.2021', // +
                    start_time: null, // +
                    description: null, // +

                    alarm_source_id: 0,
                    id_source_settlement: null,
                    down_site_2g: 0,
                    down_site_3g: 0,
                    down_site_4g: 0,
                    /*
                    'priority',
                    'tt_type',
                    'network_type',
                    'source_name',
                    'interruption',
                    'affection',
                    'influence',
                    'probable_cause',
                    'start_date',
                    'description'
                    */
                },
                serviceSearch: '',
                settlementSearch: '',
                formErrors: null,
                isLoading: false,
                service_options: [],
                subnetwork_options: [],
                settlement_options: [],
                problem_causes_options:[],
                influence_options: [
                    {value: 1, text: 'Нет'},
                    {value: 2, text: 'Kcell'},
                    {value: 3, text: 'Activ'},
                    {value: 4, text: 'Kcell & Activ'}
                ],
                affection_options: [
                    {value: 1, text: 'Без влияния'},
                    {value: 2, text: 'Полное'},
                    {value: 3, text: 'Частичное'}
                ],
                tt_type_options: [
                    {value: 1, text: 'Событие'},
                    {value: 2, text: 'Инцидент'},
                    {value: 3, text: 'Проблема'}
                ],
                search_alarm: '',
                alarm_down_list: {},
                alarm_selected: [],
                alarm_service_id: null,
                alarm_source_id: null,
                alarm_source_name: '',
                alarm_list: [],
                alarm_columns: [
                    {
                        label: "id",
                        name: "id",
                        filter: {
                            type: "simple",
                            placeholder: "",
                        },
                        column_classes: "id_column",
                        sort: true
                    },
                    {
                        label: "source_name",
                        name: "source_name",
                        filter: {
                            type: "simple",
                            placeholder: "",
                        },
                        sort: true
                    },
                    {
                        label: "fault_name",
                        name: "fault_name",
                        filter: {
                            type: "simple",
                            placeholder: "",
                        },
                        sort: true
                    },
                    {
                        label: "date_raised",
                        name: "date_raised",
                        filter: {
                            type: "simple",
                            placeholder: "",
                        },
                        sort: true
                    },
                    {
                        label: "Source",
                        name: "id",
                        slot_name: "act_source",
                        column_classes: "id_column",
                        sort: false
                    },
                ],
                table_config: {
                    checkbox_rows: true,
                    rows_selectable: false,
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
                },
                table_classes: {
                    table : {
                        "table-striped table-sm" : true,
                        "table-bordered alarm_table" : function(rows) {
                            return true
                        }
                    },
                },
            };
        },
        computed: {
            AlarmList() {
                return this.$store.getters.ALARM_LIST_CREATE_FORM;
            },
        },
        components: {
            Loading: VueLoading,
            vSelect: vSelect,
            VueBootstrap4Table
        },
        watch: {
            settlementSearch(newQuery) {
                if(newQuery.length > 2)
                {
                    newQuery = newQuery.toLowerCase();
                    axios.get(`/api/catalog/settlement/search?query=${newQuery}`)
                        .then((res) => {
                            this.settlement_options = res.data.list
                        })
                }
            },
            'form.region': function(val, oldVal) {
                this.checkPriority();
            }
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
            this.setTodayDate();
            this.getSubnetworks();
            this.getServiceOptions();
            this.getServiceProblems();
            this.parseAlarmList();
        },
        methods: {
            setTodayDate(){
                let today = new Date();
                let dd = today.getDate();

                let mm = today.getMonth()+1; 
                const yyyy = today.getFullYear();
                if(dd<10) 
                {
                    dd=`0${dd}`;
                } 
                if(mm<10) 
                {
                    mm=`0${mm}`;
                } 
                today = `${dd}.${mm}.${yyyy}`;

                this.form.start_date = today;
            },
            checkPriority() {
                var max_city_type = 3;
                var f;
                
                
                if(this.form.region)
                {
                    for (f = 0; f < this.form.region.length; f++) {
                        if(this.form.region[f].city_type < max_city_type)
                            max_city_type = this.form.region[f].city_type;
                    }
                }

                if(this.form.service_type)
                {
                    var i;
                    for (i = 0; i < this.form.service_type.length; i++) {
                        this.form.service_type[i].id_city_type = max_city_type;

                        if(this.form.service_type[i].id_service&&
                            this.form.service_type[i].id_influence&&
                            this.form.service_type[i].id_city_type)
                        {
                            //get priority
                            this.getServicePriority(this.form.service_type[i].id_service,this.form.service_type[i].id_influence,this.form.service_type[i].id_city_type);
                        }
                    }
                }
            },
            updatePriority() {
                var i;
                var max_priority = 6;
                for (i = 0; i < this.form.service_type.length; i++) {
                    if(this.form.service_type[i].id_priority < max_priority)
                        max_priority = this.form.service_type[i].id_priority;
                }

                this.form.priority = max_priority;
            },
            dateChanged() {
                const dateString = this.form.start_date+' '+this.form.start_time;
                const changedDate = dateString.replace(/(..)\.(..)\.(....) (..):(..)/, '$3-$2-$1 $4:$5');
                var date = new Date(changedDate);
                console.log('date1: ', date.getTime());

                var date2 = new Date();
                console.log('date2: ', date2.getTime());

                var date3 = new Date();
                date3 = date2.getTime() - (24*60*60*1000*30); // minus 30 day
                //24 * 60 * 60 * 1000 - one day 

                if((date > date2)||(date < date3))
                {
                    alert('Дата указана некорректно, проверьте пожалуйста');
                    this.form.start_date = '';
                    this.form.start_time = '';
                }
                
                if(this.form.service_type)
                {
                    var i;
                    for (i = 0; i < this.form.service_type.length; i++) {
                        this.form.service_type[i].start_date = this.form.start_date;
                        this.form.service_type[i].start_time = this.form.start_time;
                    }
                }
            },
            getSubnetworks() {
                axios.get(`/api/catalog/subnetworks_list`)
                    .then((response) => {
                        this.subnetwork_options = response.data.list;
                    });
            },
            getServiceOptions() {
                axios.get(`/api/catalog/service_options?query=`)
                    .then((response) => {
                        this.service_options = response.data.list;
                    });
            },
            getServiceProblems() {
                axios.get(`/api/catalog/problem_cause_list`)
                    .then((response) => {
                        this.problem_causes_options = response.data.list;
                    });
            },
            getServicePriority(id_service,id_influence,id_city_type) {
                axios.get(`/api/catalog/service_priority/search?id_service=${id_service}&id_influence=${id_influence}&id_city_type=${id_city_type}`)
                    .then((response) => {
                        //this.service_type.filter(item => (item.id_service == id_service) ? item : '')[0].id_priority = response.data.priority.id_priority;
                        var resp_priority = 6
                        if(response.data.priority)
                        {
                            resp_priority = response.data.priority.id_priority;
                        }
                        var i;
                        for (i = 0; i < this.form.service_type.length; i++) {
                            if(this.form.service_type[i].id_service == id_service)
                                this.form.service_type[i].id_priority = resp_priority;
                        }

                        this.updatePriority();
                    });
            },
            parseAlarmList() {
                if(this.AlarmList.length > 0)
                {
                    var i;
                    var data = {};
                    var res = {};
                    var new_date, new_time, parts;

                    data['alarm_list'] = this.AlarmList;

                    console.log('tickets 00', 'tete');
                    
                    axios.post('/api/troubleticket/ticket_get_create_data', data)
                        .then((response) => {
                            res = response.data.list;

                            this.form.tt_type = res.tt_type;
                            this.form.affection = res.affection;
                            this.form.influence = res.influence;
                            this.form.source_name = res.source_name;
                            this.form.description = res.description;

                            this.form.region = res.region;
                            this.form.service_type = res.service_type;

                            new_date = res.start_date.substring(0, 10);
                            parts = new_date.split('-');
                            new_date = parts[2]+'.'+parts[1]+'.'+parts[0];
                            new_time = res.start_date.substring(11, 16);

                            this.form.start_date = new_date;
                            this.form.start_time = new_time;

                            this.form.down_site_2g = res.down_site_2g;
                            this.form.down_site_3g = res.down_site_3g;
                            this.form.down_site_4g = res.down_site_4g;

                            for (i = 0; i < this.form.service_type.length; i++) {
                                this.form.service_type[i]['start_date'] = new_date;
                                this.form.service_type[i]['start_time'] = new_time;
                            }

                            console.log('tickets 11', response.data.list);

                        })
                        .catch(error => {
                            if (error.response.data) {
                                this.formErrors = error.response.data.errors;
                                return;
                            }
                        });
                }
            },
            create() {
                this.$v.form.$touch();
                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.isLoading = true;

                //this.$data.form.start_date = this.$data.form.start_date.replace(/(..)\.(..)\.(....)/, '$3-$2-$1');
                axios.post('/api/troubleticket/create', this.$data.form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            console.log('tickets', response.data.ticket);
                            //let troubletickets = this.$store.getters.troubletickets;
                            //troubletickets.push(response.data.ticket);
                            this.isLoading = false;
                            this.$router.push({ path: "/troubleticket/"+response.data.ticket.id});
                        }
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            onSelectRow(e) {
                this.form.service_type[this.alarm_service_id]['alarms'] = [];
                var i;
                for (i = 0; i < e.selected_items.length; i++) {
                    this.form.service_type[this.alarm_service_id]['alarms'].push(e.selected_items[i]);
                }
                //console.log('alarms',e);
                //this.$refs.myvuetable.selected_items
                console.log('alarms',this.form.service_type[this.alarm_service_id]['alarms']);
                
                console.log('alarms',this.alarm_selected);
            },
            onSelectSource(e) {
                this.alarm_source_id = e;
                this.alarm_source_name = this.alarm_list.filter(item => (item.id == e) ? item : '')[0].source_name;
                //self.$refs.vueBootstrap4Table.addSelectedItem(this.alarm_list.filter(item => (item.id == 9) ? item : '')[0]);
                this.form.source_name = this.alarm_source_name;
            }
        },
        validations: {
            form: {
                service_type: {
                    required
                },
                network_type: {
                    required
                },
                region: {
                    required
                },
                source_name: {
                    required
                },
                probable_cause: {
                    required
                },
                description: {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(4000)
                },
                tt_type: {
                    required
                },
                affection: {
                    required
                },
                influence: {
                    required
                },
                priority: {
                    between: between(1, 5)
                },
                start_date: {
                    required
                },
                start_time: {
                    required
                }
            }
        }
    }
</script>
