<template>
    <div>
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="update()">
                    <div class="row no-space">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label for="name">Тип сервиса</label>
                                <v-select :options="service_options" 
                                    v-model="form.service_type" 
                                    @search="query => serviceSearch = query" 
                                    multiple>
                                </v-select>
                            </div>
                            <div class="form-group">
                                <label for="name">Подсеть</label>
                                <v-select :options="subnetwork_options" 
                                    v-model="form.network_list">
                                </v-select>
                            </div>
                            <div class="form-group">
                                <label for="name">Город</label>
                                <v-select :options="settlement_options" 
                                    v-model="form.region"
                                    @search="query => settlementSearch = query" 
                                    multiple>
                                </v-select>
                            </div>
                            <div class="form-group">
                                <label for="name">Возможная причина проблемы</label>
                                <v-select :options="problem_causes_options" 
                                    v-model="form.prob_cause_list">
                                </v-select>
                            </div>
                            <div class="form-group">
                                <label for="name">Корневая причина проблемы</label>
                                <v-select :options="problem_causes_options" 
                                    v-model="form.root_cause_list">
                                </v-select>
                            </div>
                            <div class="form-group">
                                <label for="source_name">Возможный источник проблемы</label>
                                <input type="text" id="source_name" class="form-control" v-model="form.source_name" />
                            </div>
                            <div class="form-group">
                                <label for="description">Описание</label>
                                <textarea id="description" class="form-control" v-model="form.description"
                                        :class="{'is-invalid': $v.form.description.$error}"
                                        @blur="$v.form.description.$touch()" rows="4" style="height:auto;"></textarea>
                                <div class="invalid-feedback" v-if="!$v.form.description.required">Обязательно для
                                    заполнения
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
                                    </div>
                                    <div class="form-group">
                                        <label for="affection">Влияние на сервис</label>
                                        <b-form-group>
                                            <b-form-radio-group id="radio-group-2" v-model="form.affection" :options="affection_options" name="affection"></b-form-radio-group>
                                        </b-form-group>
                                    </div>
                                    <div class="form-group">
                                        <label for="influence">Бренд</label>
                                        <b-form-group>
                                            <b-form-radio-group id="radio-group-1" v-model="form.influence" :options="influence_options" name="influence"></b-form-radio-group>
                                        </b-form-group>
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
                                        >
                                            <option value="1">Emergency</option>
                                            <option value="2">Critical</option>
                                            <option value="3">High</option>
                                            <option value="4">Medium</option>
                                            <option value="5">Low</option>
                                        </select>
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
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="finish_date">Дата закрытия</label>
                                            <b-form-input 
                                                type="text"
                                                id="finish_date" 
                                                v-model="form.finish_date" 
                                                v-mask="'##.##.####'" 
                                                placeholder="dd.mm.yyyy" 
                                            >
                                            </b-form-input>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="finish_time">Время закрытия</label>
                                            <b-form-input 
                                                type="text"
                                                id="finish_time" 
                                                v-model="form.finish_time" 
                                                v-mask="'##:##'" 
                                                placeholder="HH:mm" 
                                                @change="dateChanged2()"
                                            >
                                            </b-form-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border" style="min-height:200px;">
                                <table class="table table-sm table-light">
                                    <tr v-for="(item, index) in form.service_type" :key="index">
                                        <td class="border-bottom">
                                            <div class="form-row">
                                                <div class="form-group col-md-7">
                                                    <div>
                                                        -> {{ item.group_name }}
                                                    </div>
                                                    <div>
                                                        ---> {{ item.service_name }}
                                                    </div>
                                                    <select v-model="form.service_type[index].id_influence" id="query_type" class="form-control"  @change="checkPriority()">
                                                        <option disabled value="">Выберите</option>
                                                        <option v-for="option in item.influence_options" v-bind:value="option.id_influence">
                                                            {{ option.label }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="row" style="margin:0px;">
                                                        <div class="form-group col-md-2 text-right" style="padding:0px 5px;">
                                                            НЧ:
                                                        </div>
                                                        <div class="form-group col-md-5" style="padding:0px;">
                                                            <b-form-input 
                                                                type="text"
                                                                id="start_date" 
                                                                v-model="form.service_type[index].start_date"
                                                                v-mask="'##.##.####'" 
                                                                placeholder="dd.mm.yyyy" 
                                                            >
                                                            </b-form-input>
                                                        </div>
                                                        <div class="form-group col-md-5" style="padding:0px;">
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
                                                    <div class="row" style="margin:0px;">
                                                        <div class="form-group col-md-2 text-right" style="padding:0px 5px;">
                                                            КН:
                                                        </div>
                                                        <div class="form-group col-md-5" style="padding:0px;">
                                                            <b-form-input 
                                                                type="text"
                                                                id="finish_date" 
                                                                v-model="form.service_type[index].finish_date"
                                                                v-mask="'##.##.####'" 
                                                                placeholder="dd.mm.yyyy" 
                                                            >
                                                            </b-form-input>
                                                        </div>
                                                        <div class="form-group col-md-5" style="padding:0px;">
                                                            <b-form-input 
                                                                type="text"
                                                                id="finish_time" 
                                                                v-model="form.service_type[index].finish_time" 
                                                                v-mask="'##:##'" 
                                                                placeholder="HH:mm" 
                                                            >
                                                            </b-form-input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="alert alert-danger" v-if="formErrors">
                                <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                                    {{ fieldsError.join('\n') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="float-right">
                        <button class="btn btn-sm btn-outline-primary" type="submit">Изменить</button>
                        <button class="btn btn-sm btn-outline-dark" @click="modalVisibility = false">Отмена</button>
                    </div>
                </form>
            </div>
            <div class="card-footer">   
                {{test}}
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
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import {mapGetters} from "vuex";

    export default {
        name: "TicketCreate",
        mixins: [TheContentMixin],
        data() {
            return {
                title: 'Изменение тикета #'+this.$route.params.id,
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
                        text: 'Изменение тикета #'+this.$route.params.id,
                        active: true
                    }
                ],
                test: null,
                priority_manual: 0,
                form: {
                    id_ticket: null,
                    priority_name: "Emergency", // + TODO need change to ID
                    priority: 1,
                    tt_type: null,  // +
                    service_type: [], // +
                    network_type: null, // +
                    network_list: null,
                    region: null, // +
                    source_name: null, // +
                    interruption: null, 
                    affection: null, // +
                    influence: null,  // +
                    prob_cause_list: null, // +
                    root_cause_list: null,
                    start_date: null, // +
                    start_time: null, // +
                    finish_date: null, // +
                    finish_time: null, // +
                    description: null, // +

                    down_site_2g: null,
                    down_site_3g: null,
                    down_site_4g: null,

                    old_service_type: [],
                    old_region: null
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
                    {value: 2, text: 'Инцидент'}
                ],
            };
        },
        components: {
            Loading: VueLoading,
            vSelect: vSelect
        },
        watch: {
            settlementSearch(newQuery) {
                if(newQuery.length > 2)
                {
                    axios.get(`/api/catalog/settlement/search?query=${newQuery}`)
                        .then((res) => {
                            this.settlement_options = res.data.list
                        })
                }
            },
            serviceSearch(newQuery) {
                if(newQuery.length > 2)
                {
                    axios.get(`/api/catalog/service_options?query=${newQuery}`)
                        .then((response) => {
                            this.service_options = response.data.list;
                        });
                }
            },
            'form.region': function(val, oldVal) {
                this.checkPriority();
            }
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
            this.getSubnetworks();
            this.getServiceProblems();
            this.getTicketUpdates();
        },
        methods: {
            checkPriority() {
                console.log('asd',this.form.region);
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
                            console.log('service_type: id_service:',this.form.service_type[i].id_service);
                            console.log('service_type: id_influence:',this.form.service_type[i].id_influence);
                            console.log('service_type: city_type:',this.form.service_type[i].id_city_type);

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
            dateChanged2() {
                const dateString = this.form.finish_date+' '+this.form.finish_time;
                const changedDate = dateString.replace(/(..)\.(..)\.(....) (..):(..)/, '$3-$2-$1 $4:$5');
                var date = new Date(changedDate);
                console.log('date1: ', date.getTime());

                var date2 = new Date();
                console.log('date2: ', date2.getTime());

                const dateString2 = this.form.start_date+' '+this.form.start_time;
                const changedDate2 = dateString2.replace(/(..)\.(..)\.(....) (..):(..)/, '$3-$2-$1 $4:$5');
                var date3 = new Date(changedDate2);

                if((date > date2)||(date < date3))
                {
                    alert('Дата указана некорректно, проверьте пожалуйста');
                    this.form.finish_date = '';
                    this.form.finish_time = '';
                }
                
                if(this.form.service_type)
                {
                    var i;
                    for (i = 0; i < this.form.service_type.length; i++) {
                        this.form.service_type[i].finish_date = this.form.finish_date;
                        this.form.service_type[i].finish_time = this.form.finish_time;
                    }
                }
            },
            getTicketUpdates() {

                axios.get(`/api/troubleticket/updateData/`+this.$route.params.id)
                    .then((response) => {
                        this.form.id_ticket = response.data.ticket.id;
                        this.form.priority = response.data.ticket.priority;
                        this.form.tt_type = response.data.ticket.tt_type;
                        this.form.network_list = response.data.ticket.network_list;
                        this.form.source_name = response.data.ticket.source_name;
                        this.form.interruption = response.data.ticket.interruption;
                        this.form.affection = response.data.ticket.affection;
                        this.form.influence = response.data.ticket.influence;
                        this.form.prob_cause_list = response.data.ticket.prob_cause_list;
                        this.form.root_cause_list = response.data.ticket.root_cause_list;
                        this.form.description = response.data.ticket.description;
                        this.form.start_date = response.data.ticket.start_date;
                        this.form.start_time = response.data.ticket.start_time;

                        this.form.down_site_2g = response.data.ticket.down_site_2g;
                        this.form.down_site_3g = response.data.ticket.down_site_3g;
                        this.form.down_site_4g = response.data.ticket.down_site_4g;

                        this.form.finish_date = response.data.ticket.finish_date;
                        this.form.finish_time = response.data.ticket.finish_time;

                        this.form.service_type = response.data.ticket.service_list;

                        this.form.region = response.data.ticket.city_list;
                    });
            },
            getSubnetworks() {
                axios.get(`/api/catalog/subnetworks_list`)
                    .then((response) => {
                        this.subnetwork_options = response.data.list;
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
            update() {
                if(this.form.root_cause_list)
                {
                    this.form.root_cause = this.form.root_cause_list.id;
                }
                else
                {
                    this.form.root_cause = null;
                }

                axios.post('/api/troubleticket/update/' + this.$data.form.id_ticket, this.$data.form)
                    .then((response) => {
                        console.log(response);
                        if (response.data.success === 1) {
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
