<template>
    <div>
        <div class="card" v-if="troubleticket">
            <div class="card-body">
                <div class="card-text">
                    <p></p>
                    <div class="row no-space">
                        <div class="col-md-5">
                            <span style="font-weight: bold; font-style: italic; font-size: 0.8rem;">Информация по ресурс тикету:</span><br/>
                            <div class="border-top">
                                <p></p>
                                <dt>Статус:</dt>
                                <dd>{{subticket.status_name}}</dd>

                                <dt>ID сервис тикета:</dt>
                                <dd>
                                    <router-link :to="`/troubleticket/`+troubleticket.id"> 
                                        <a href="#">{{ troubleticket.id }}</a>
                                    </router-link>
                                </dd>

                                <dt>Возможный ресурс проблемы:</dt>
                                <dd>{{subticket.source_name}}</dd>

                                <dt>Описание проблемы:</dt>
                                <dd>{{subticket.description}}</dd>

                                <dt>Последнее действие:</dt>
                                <dd>{{subticket.action_label.desc}}</dd>

                                <dt>Дата создания:</dt>
                                <dd>{{subticket.formatted_created_date}}</dd>
                            </div>
                            <br/>
                            <span style="font-weight: bold; font-style: italic; font-size: 0.8rem;">Действия:</span><br/>
                            <div style="height:250px; overflow-y:auto;" class="border-top">
                                <table class="table table-sm table-light">
                                    <tr v-for="(item, index) in ticket_subticket_histories" :key="index">
                                        <td class="border-bottom">
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <div style="font-weight:bold; font-size:13px; color:#005cb3">
                                                        <b-icon icon="arrow-up-right-square" aria-hidden="true"></b-icon>
                                                        {{item.action_type_name}}:: 
                                                        <span style="color:black">{{ item.action_name }}</span>
                                                    </div>
                                                    <div style="margin:0 0 0 25px" >
                                                        <div style="padding:5px; font-size:14px; font-style:italic;">
                                                            {{ item.comment }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="float-right" style="font-weight:bold;">
                                                        <span style="font-size:12px;">
                                                            {{item.user_info.name}}
                                                        </span> 
                                                        <span style="font-size:12px; font-style:italic;">
                                                            // {{item.formatted_created_date}}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="border-top">
                                <p></p>
                                <form  @submit.prevent="changeActionSubticket()">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p></p>
                                            <button class="btn btn-sm btn-outline-secondary" 
                                                v-b-modal.modal-ticket-journals 
                                                type="button" 
                                                style="margin:5px 0 0 0; width:100%;">
                                                Добавить запись в журнал
                                            </button>
                                            <b-modal id="modal-ticket-journals" centered :title="'Добавить запись в журнал'">
                                                <textarea style="width:100%" placeholder="Комментарии" rows="4" v-model="journal_comment"></textarea>
                                                <template #modal-footer="{ ok, cancel }">
                                                    <b-button size="sm" variant="info" @click="cancel()">
                                                        Отменить
                                                    </b-button>
                                                    <b-button size="sm" variant="primary" @click="saveJournal(); ok()">
                                                        Подтвердить
                                                    </b-button>
                                                </template>
                                            </b-modal>
                                            <hr/>
                                            <button class="btn btn-sm btn-outline-secondary" v-for="(action, index) in subticket_actions" :key="index"
                                                style="margin:5px 0 0 0; width:100%;" 
                                                type="button"
                                                v-on:click="subticket_action = action" 
                                                v-b-modal.modal-ticket-actions >
                                                {{ action.act_title }}
                                            </button>
                                            <b-modal id="modal-ticket-actions" centered :title="'Выполнить действие: '+subticket_action.act_title">
                                                <textarea style="width:100%" placeholder="Комментарии" rows="4" v-model="subticket_form.comment"></textarea>
                                                <template #modal-footer="{ ok, cancel }">
                                                    <b-button size="sm" variant="info" @click="cancel()">
                                                        Отменить
                                                    </b-button>
                                                    <b-button size="sm" variant="primary" @click="changeActionSubticket(); ok()">
                                                        Подтвердить
                                                    </b-button>
                                                </template>
                                            </b-modal>
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <span style="font-weight: bold; font-style: italic; font-size: 0.8rem;">Основная информация по сервис тикету:</span><br/>
                            <div class="border" style="min-height:650px; padding:5px;">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" style="min-width:130px; text-align:center;">
                                        <a class="nav-link active" id="info1-tab" data-toggle="tab" href="#info1" role="tab" aria-controls="info1" aria-selected="true">Основное</a>
                                    </li>
                                    <li class="nav-item" style="min-width:130px; text-align:center;">
                                        <a class="nav-link" id="service-tab" data-toggle="tab" href="#service" role="tab" aria-controls="service" aria-selected="false">Сервисы и города</a>
                                    </li>
                                    <li class="nav-item" style="min-width:130px; text-align:center;">
                                        <a class="nav-link" id="changes-tab" data-toggle="tab" href="#changes" role="tab" aria-controls="changes" aria-selected="false">Изменения</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent2">
                                    <div class="tab-pane fade show active" id="info1" role="tabpanel" aria-labelledby="info1-tab">
                                        <p></p>
                                        <div style="height:450px; overflow-y:auto;">
                                            <p></p>
                                            <dl class="row">
                                                <dt class="col-md-4 text-right">Тип тикета</dt>
                                                <dd class="col-md-8">
                                                    <span v-if="troubleticket.tt_type === 1">Event</span>
                                                    <span v-if="troubleticket.tt_type === 2">Incident</span>
                                                </dd>

                                                <dt class="col-md-4 text-right">Приоритет</dt>
                                                <dd class="col-md-8">
                                                    <span v-if="troubleticket.priority === 5">Low</span>
                                                    <span v-if="troubleticket.priority === 4">Medium</span>
                                                    <span v-if="troubleticket.priority === 3">High</span>
                                                    <span v-if="troubleticket.priority === 2">Critical</span>
                                                    <span v-if="troubleticket.priority === 1">Emergency</span>
                                                </dd>

                                                <dt class="col-md-4 text-right">Сеть</dt>
                                                <dd class="col-md-8">{{troubleticket.network.network}}</dd>

                                                <dt class="col-md-4 text-right">Подсеть</dt>
                                                <dd class="col-md-8">{{troubleticket.network.subnetwork_1}}</dd>

                                                <dt class="col-md-4 text-right">Подсеть 2</dt>
                                                <dd class="col-md-8">{{troubleticket.network.subnetwork_2}}: {{troubleticket.network.subnetwork_3}}</dd>

                                                <dt class="col-md-4 text-right">Объект</dt>
                                                <dd class="col-md-8">{{troubleticket.source_name}}</dd>

                                                <dt class="col-md-4 text-right">Влияние на сервис</dt>
                                                <dd class="col-md-8">
                                                    <span v-if="troubleticket.affection === 1">Нет</span>
                                                    <span v-if="troubleticket.affection === 2">Да</span>
                                                    <span v-if="troubleticket.affection === 3">Деградация</span>
                                                </dd>

                                                <dt class="col-md-4 text-right">Бренд</dt>
                                                <dd class="col-md-8">
                                                    <span v-if="troubleticket.influence === 1">Нет</span>
                                                    <span v-if="troubleticket.influence === 2">Kcell</span>
                                                    <span v-if="troubleticket.influence === 3">Activ</span>
                                                    <span v-if="troubleticket.influence === 4">Все</span>
                                                </dd>

                                                <dt class="col-md-4 text-right">Предп. причина</dt>
                                                <dd class="col-md-8">{{troubleticket.prob_cause.cause_1_name}}: {{troubleticket.prob_cause.cause_2_name}}</dd>

                                                <dt class="col-md-4 text-right">Время начала</dt>
                                                <dd class="col-md-8">{{troubleticket.formatted_start_date}}</dd>

                                                <dt class="col-md-4 text-right">Время создания</dt>
                                                <dd class="col-md-8">{{troubleticket.formatted_created_date}}</dd>

                                                <dt class="col-md-4 text-right">Последнее действие</dt>
                                                <dd class="col-md-8">{{troubleticket.act_title}}</dd>

                                                <dt class="col-md-4 text-right">Доп. информация</dt>
                                                <dd class="col-md-8">{{troubleticket.description}}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="service" role="tabpanel" aria-labelledby="service-tab">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <p></p>
                                                <div class="border" style="height:450px;">
                                                    <table class="table table-sm table-light">
                                                        <tr v-for="(item, index) in troubleticket.service_main_list" :key="index" class="border-bottom">
                                                            <td class="table__id">
                                                                <div>
                                                                    <span style="font-size:14px; font-weight:bold;">
                                                                        {{ item.service_info.service_name }}
                                                                    </span>
                                                                    <span class="badge badge-primary float-right" style="font-size:12px; font-style:italic;">
                                                                        {{ item.service_info.group_info.group_name }}
                                                                    </span>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div style="padding-left:10px">
                                                                    >>{{ item.influence_info.group_info.trigger_name }}:: {{ item.influence_info.influence_condition_name }} 
                                                                    <span class="float-right" style="font-size:12px; font-style:italic; font-weight:bold;">
                                                                        {{ item.formatted_start_date }}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <p></p>
                                                <div class="border" style="height:450px;">
                                                    <table class="table table-sm table-light">
                                                        <tr v-for="(item, index) in ticket_cities" :key="index" class="border-bottom">
                                                            <td class="table__id">{{ item.id }}</td>
                                                            <td>
                                                                {{ item.city_name }}<br/>
                                                                <span style="font-size:12px; font-style:italic;">{{ item.oblast }}</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="changes" role="tabpanel" aria-labelledby="changes-tab">
                                        <p></p>
                                        <div class="accordion" role="tablist">
                                            <b-card no-body class="mb-1" v-for="(item, index) in troubleticket.change_list" :key="index">
                                                <b-card-header header-tag="header" class="p-1" role="tab">
                                                    <button v-b-toggle="'accordion-' + item.id" class="btn btn-sm btn-outline-primary">
                                                        #{{item.id}}
                                                    </button>
                                                    <div class="float-right">
                                                        <span style="font-size:12px;">
                                                            {{item.created_by}}
                                                        </span> 
                                                        <span style="font-size:12px; font-style:italic;">
                                                            // {{item.created_at}}
                                                        </span>
                                                    </div>
                                                </b-card-header>
                                                <b-collapse :id="'accordion-'+item.id" accordion="my-accordion" role="tabpanel">
                                                    <b-card-body>
                                                        <b-card-text>
                                                            <div v-for="(item2, index2) in item.group_list" :key="index2" 
                                                                class="border-bottom" 
                                                                style="font-size:14px; font-style:italic;">
                                                                <span class="badge badge-primary">{{item2.field_label}}</span>
                                                                <div class="row">
                                                                    <div class="col-md-5">
                                                                        {{item2.old_field_value}}
                                                                    </div>
                                                                    <div class="col-md-1">
                                                                        ->
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        {{item2.new_field_value}}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </b-card-text>
                                                    </b-card-body>
                                                </b-collapse>
                                            </b-card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {SET_TROUBLE_TICKET} from "../troubleticketStore";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import {mapGetters} from "vuex";

    export default {
        name: "TroubleTicketView",
        mixins: [TheContentMixin],
        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'Trouble Ticket',
                        to: {path: '/troubleticket'}
                    },
                    {
                        text: 'Информация по Ресурс тикету #'+this.$route.params.id_subticket,
                        active: true
                    }
                ],
                isLoading: false,
                isSubticketCreate: false,
                ticket_cities: [],
                ticket_services: [],
                ticket_change_histories: [],
                ticket_subticket_histories: [],
                subticket: {},
                subticket_actions: [],
                subticket_action: {},
                subticket_form: {
                    id: null,
                    id_act: null,
                    id_act_bck: null,
                    act_title: null,
                    comment: ''
                },
                selected_action: {},
                action_comment: '',
                journal_list: [],
                journal_comment: ''
            };
        },
        components: {
            Loading: VueLoading
        },
        created: async function () {
            await this.getData();
        },
        computed: {
            ...mapGetters(["troubleticket", "actions", "sub_actions"]),
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
            this.getTicketCities();
            this.getSubTicketHistories();
            this.getSubTicket();
        },
        methods: {
            async getData() {
                await this.$store.dispatch(SET_TROUBLE_TICKET, this.$route.params.id);
            },
            // TODO need remove, and load from ticket
            getTicketCities() {
                axios.get(`/api/troubleticket/ticket_cities/search?id=${this.$route.params.id}`)
                    .then((response) => {
                        this.ticket_cities = response.data.list;
                    });
            },
            getSubTicketHistories() {
                axios.get(`/api/troubleticket/ticket_subticket_histories/search?id=${this.$route.params.id_subticket}`)
                    .then((response) => {
                        this.ticket_subticket_histories = response.data.list;
                    });
            },
            getSubTicket() {
                axios.get(`/api/troubleticket/ticket_subticket/${this.$route.params.id_subticket}`)
                    .then((response) => {
                        this.subticket = response.data.subticket;
                        this.subticket_actions = response.data.actions;
                    });
            },
            changeActionSubticket() {
                this.subticket_form.id_ticket = this.$route.params.id;
                this.subticket_form.id_subticket = this.$route.params.id_subticket;
                this.subticket_form.id_act = this.subticket_action.id;
                this.subticket_form.id_act_bck = this.subticket_action.back_act_id;
                this.subticket_form.act_title = this.subticket_action.act_title;
                this.isLoading = true;
                axios.post('/api/troubleticket/update_subticket_action', this.$data.subticket_form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            console.log('tickets', response.data.ticket);
                            this.getSubTicket();
                            this.getSubTicketHistories();
                            this.isLoading = false;
                            /*
                            this.subticket_list = response.data.list;
                            this.isSubticketCreate = false;
                            this.getTicketHistories();
                            */
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
            saveJournal() {
                let form = {
                    'id_ticket': this.troubleticket.id, 
                    'id_subticket': this.$route.params.id_subticket,
                    'journal_type': 2,
                    'comment': this.journal_comment
                };
                this.isLoading = true;
                axios.post('/api/troubleticket/save_journal', form)
                    .then((response) => {
                        this.journal_list = response.data.list;
                        this.getSubTicketHistories();
                        this.isLoading = false;
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
    }
</script>

<style scoped>

</style>
