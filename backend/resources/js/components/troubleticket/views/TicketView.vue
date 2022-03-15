<template>
    <div>
        <div class="card" v-if="troubleticket">
            <div class="card-body">
                <div class="card-text">
                    <p></p>
                    <div class="row no-space">
                        <div class="col-md-5">
                            <span style="font-weight: bold; font-style: italic; font-size: 0.8rem;">Основная информация по тикету:</span><br/>
                            <div class="border-top">
                                <p></p>
                                <dl class="row" style="font-size:12px;">
                                    <dt class="col-md-4 text-right">Статус</dt>
                                    <dd class="col-md-8">{{troubleticket.status_name}}</dd>

                                    <dt class="col-md-4 text-right">Тип тикета</dt>
                                    <dd class="col-md-8">
                                        <span>{{troubleticket.tt_type_name}}</span>
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

                                    <dt class="col-md-4 text-right">Расположение объекта</dt>
                                    <dd class="col-md-8">{{troubleticket.source_city}}</dd>

                                    <dt class="col-md-4 text-right">Влияние на сервис</dt>
                                    <dd class="col-md-8">
                                        <span v-if="troubleticket.affection === 1">Нет</span>
                                        <span v-if="troubleticket.affection === 2">Да</span>
                                        <span v-if="troubleticket.affection === 3">Деградация</span>
                                    </dd>

                                    <dt class="col-md-4 text-right">Кол-во вне сервиса</dt>
                                    <dd class="col-md-8">2G: {{troubleticket.down_site_2g}};  3G: {{troubleticket.down_site_3g}};  4G: {{troubleticket.down_site_4g}}</dd>

                                    <dt class="col-md-4 text-right">Бренд</dt>
                                    <dd class="col-md-8">
                                        <span v-if="troubleticket.influence === 1">Нет</span>
                                        <span v-if="troubleticket.influence === 2">Kcell</span>
                                        <span v-if="troubleticket.influence === 3">Activ</span>
                                        <span v-if="troubleticket.influence === 4">Все</span>
                                    </dd>

                                    <dt class="col-md-4 text-right">Предп. причина</dt>
                                    <dd class="col-md-8">{{troubleticket.prob_cause.cause_1_name}}: {{troubleticket.prob_cause.cause_2_name}}</dd>

                                    <dt class="col-md-4 text-right" v-if="troubleticket.root_cause2">Корн. причина</dt>
                                    <dd class="col-md-8" v-if="troubleticket.root_cause2">{{troubleticket.root_cause2.cause_1_name}}: {{troubleticket.root_cause2.cause_2_name}}</dd>

                                    <dt class="col-md-4 text-right">Описание проблемы</dt>
                                    <dd class="col-md-8">{{troubleticket.description}}</dd>
                                </dl>
                            </div>
                            <hr/>
                            <span style="font-weight: bold; font-style: italic; font-size: 0.8rem;">Иноформация по сервисам:</span><br/>
                            <div class="border-top" style="min-height:150px;">
                                <table class="table table-sm table-light">
                                    <tr v-for="(item, index) in troubleticket.service_main_list" :key="index" class="border-bottom">
                                        <td class="table__id">
                                            <div>
                                                <div class="badge badge-light text-left" style="width:100%; font-size:14px;">
                                                    <span class="badge badge-secondary">
                                                        {{ item.service_info.group_info.group_name }}
                                                    </span>
                                                    <span class="badge badge-light">
                                                        {{ item.service_info.service_name }}
                                                    </span>
                                                    <hr style="margin:4px;"/>
                                                    >
                                                    <span class="badge badge-secondary">
                                                        {{ item.influence_info.group_info.trigger_name }}:: {{ item.influence_info.influence_condition_name }} 
                                                    </span>
                                                    <span class="float-right badge badge-light">
                                                        {{ item.formatted_start_date }}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <hr/>
                            <span style="font-weight: bold; font-style: italic; font-size: 0.8rem;">Иноформация по городам:</span><br/>
                            <div class="border-top" style="min-height:100px;">
                                <span class="badge badge-secondary" style="font-size:12px;" v-for="(item, index) in ticket_cities" :key="index" >
                                    {{ item.city_name }}
                                </span>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-12">
                                    <span style="font-weight: bold; font-style: italic; font-size: 0.8rem;">Доп. информация по тикету:</span><br/>
                                    <div class="border-top">
                                        <p></p>
                                        <div class="row">
                                            <div class="col-md-5">
                                                <dl class="row" style="font-size:11px;">
                                                    <dt class="col-md-6 text-left">Время начала</dt>
                                                    <dd class="col-md-6">{{troubleticket.formatted_start_date}}</dd>

                                                    <dt class="col-md-6 text-left">Время завершения</dt>
                                                    <dd class="col-md-6">{{troubleticket.formatted_finish_date}}</dd>

                                                    <dt class="col-md-6 text-left">Время создания</dt>
                                                    <dd class="col-md-6">{{troubleticket.formatted_created_date}}</dd>

                                                    <dt class="col-md-6 text-left">Время закрытия</dt>
                                                    <dd class="col-md-6"> - </dd>

                                                    <dt class="col-md-6 text-left">Последнее действие</dt>
                                                    <dd class="col-md-6">{{troubleticket.act_title}}</dd>

                                                    <dt class="col-md-6 text-left">Ответственный</dt>
                                                    <dd class="col-md-6">
                                                        <span v-if="ticket_histories.length > 0">
                                                            {{ticket_histories[0].user_info.name}}
                                                        </span>
                                                        <span v-if="ticket_histories.length == 0">
                                                            {{troubleticket.created_user}}
                                                        </span>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div class="col-md-7">
                                                <dl class="row" style="font-size:11px;">
                                                    <dt class="col-md-6 text-left">Основной тип тикета</dt>
                                                    <dd class="col-md-6">
                                                        <span v-if="troubleticket.tt_type === 1">Event</span>
                                                        <span v-if="troubleticket.tt_type === 2">Incident</span>
                                                    </dd>

                                                    <dt class="col-md-6 text-left">Основной приоритет</dt>
                                                    <dd class="col-md-6">
                                                        <span v-if="troubleticket.priority === 5">Low</span>
                                                        <span v-if="troubleticket.priority === 4">Medium</span>
                                                        <span v-if="troubleticket.priority === 3">High</span>
                                                        <span v-if="troubleticket.priority === 2">Critical</span>
                                                        <span v-if="troubleticket.priority === 1">Emergency</span>
                                                    </dd>

                                                    <dt class="col-md-6 text-left">Длительность 'События' (мин.)</dt>
                                                    <dd class="col-md-6"> - </dd>

                                                    <dt class="col-md-6 text-left">Длительность 'Инцидента' (мин.)</dt>
                                                    <dd class="col-md-6"> - </dd>

                                                    <dt class="col-md-6 text-left">Длительность простоя (мин.)</dt>
                                                    <dd class="col-md-6"> - </dd>

                                                    <dt class="col-md-6 text-left">Отклонение от SLA (мин.)</dt>
                                                    <dd class="col-md-6"> - </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p></p>
                            <div style="height:520px; padding:5px; overflow-y:auto;">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" style="min-width:100px; text-align:center; font-size:10px;">
                                        <a class="nav-link active" id="actions-tab" data-toggle="tab" href="#actions" role="tab" aria-controls="actions" aria-selected="true">Действия</a>
                                    </li>
                                    <li class="nav-item" style="min-width:100px; text-align:center; font-size:10px;">
                                        <a class="nav-link" id="journals-tab" data-toggle="tab" href="#journals" role="tab" aria-controls="journals" aria-selected="false">Журнал</a>
                                    </li>
                                    <li class="nav-item" style="min-width:100px; text-align:center; font-size:10px;">
                                        <a class="nav-link" id="subticket-tab" data-toggle="tab" href="#subticket" role="tab" aria-controls="subticket" aria-selected="false">Ресурсные тикеты</a>
                                    </li>
                                    <li class="nav-item" style="min-width:100px; text-align:center; font-size:10px;">
                                        <a class="nav-link" id="conn_tickets-tab" data-toggle="tab" href="#conn_tickets" role="tab" aria-controls="conn_tickets" aria-selected="false">Связанные тикеты</a>
                                    </li>
                                    <li class="nav-item" style="min-width:100px; text-align:center; font-size:10px;">
                                        <a class="nav-link" id="conn_alarms-tab" data-toggle="tab" href="#conn_alarms" role="tab" aria-controls="conn_alarms" aria-selected="false">Связанные аварии</a>
                                    </li>
                                    <li class="nav-item" style="min-width:100px; text-align:center; font-size:10px;">
                                        <a class="nav-link" id="change-tab" data-toggle="tab" href="#change" role="tab" aria-controls="change" aria-selected="false">История изменения</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="actions" role="tabpanel" aria-labelledby="actions-tab">
                                        <p></p>
                                        <div style="height:400px; overflow-y:auto;">
                                            <table class="table table-sm table-light" style="font-size:12px;">
                                                <tr v-for="(item, index) in ticket_histories" :key="index">
                                                    <td class="border-bottom">
                                                        <div class="row">
                                                            <div class="col-md-8">
                                                                <div style="font-weight:bold; color:#005cb3">
                                                                    <b-icon icon="arrow-up-right-square" aria-hidden="true"></b-icon>
                                                                    {{item.action_type_name}}:: 
                                                                    <span style="color:black">{{ item.action_name }}</span>
                                                                </div>
                                                                <div style="margin:0 0 0 25px" >
                                                                    <div style="padding:5px; font-style:italic;">
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
                                        <hr style="margin:4px;" />
                                        <div style="padding:5px 10px" class="text-right">
                                            <button class="btn btn-sm btn-outline-success" 
                                                v-on:click="SendNotification()"
                                                style="margin-left:10px;">
                                                Отправить уведомление
                                            </button>
                                            <router-link :to="`/troubleticket/update/`+troubleticket.id" class="btn btn-sm btn-outline-info">Изменить</router-link>
                                            <button class="btn btn-sm btn-outline-secondary" v-for="(action, index) in ticket_actions" :key="index"
                                                v-on:click="changeAction(action)"  v-b-modal.modal-ticket-actions 
                                                style="margin-left:10px;">
                                                {{ action.act_title }}
                                            </button>
                                        </div>
                                        <hr style="margin:4px;" />
                                        <b-modal id="modal-ticket-actions" centered :title="'Выполнить действие: '+selected_action.act_title">
                                            <textarea style="width:100%" placeholder="Комментарии" rows="4" v-model="action_comment"></textarea>
                                            <template #modal-footer="{ ok, cancel }">
                                                <b-button size="sm" variant="info" @click="cancel()">
                                                    Отменить
                                                </b-button>
                                                <b-button size="sm" variant="primary" @click="changeAction2(); ok()">
                                                    Подтвердить
                                                </b-button>
                                            </template>
                                        </b-modal>
                                    </div>
                                    <div class="tab-pane fade" id="journals" role="tabpanel" aria-labelledby="journals-tab">
                                        <p></p>
                                        <div style="height:400px; overflow-y:auto;">
                                            <table class="table table-sm table-light">
                                                <tr v-for="(item, index) in journal_list" :key="index">
                                                    <td class="border-bottom">
                                                        <div class="row">
                                                            <div class="col-md-8">
                                                                <div style="font-weight:bold; font-size:13px; color:#005cb3">
                                                                    <b-icon icon="arrow-up-right-square" aria-hidden="true"></b-icon>
                                                                    
                                                                    <span v-if="item.journal_type === 1">Базовая запись</span>
                                                                    <span v-if="item.journal_type === 2">Ресурсная запись #{{item.id_subticket}}</span>
                                                                </div>
                                                                <div style="margin:0 0 0 10px" >
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
                                                                         {{item.formatted_created_date}}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <hr style="margin:4px;" />
                                        <div style="padding:5px 10px" class="text-right">
                                            <button class="btn btn-sm btn-outline-secondary" 
                                                 v-b-modal.modal-ticket-journals 
                                                style="margin-left:10px;">
                                                Добавить запись
                                            </button>
                                        </div>
                                        <hr style="margin:4px;" />
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
                                    </div>
                                    <div class="tab-pane fade" id="subticket" role="tabpanel" aria-labelledby="subticket-tab">
                                        <p></p>
                                        <div v-if="!isSubticketCreate" style="height:400px; overflow-y:auto;">
                                            <table class="table table-sm table-light">
                                                <tr v-for="(item, index) in subticket_list" :key="index">
                                                    <td class="table__id">{{ item.id }}</td>
                                                    <td style="width:40%">
                                                        <router-link :to="`/troubleticket/resource/`+troubleticket.id+`/`+item.id"> 
                                                            <a href="#">{{ item.source_name }}</a>
                                                        </router-link>
                                                    </td>
                                                    <td>Создан</td>
                                                    <td>{{ item.action_label.desc }}</td>
                                                    <td>{{ item.formatted_created_date }}</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div v-if="isSubticketCreate" style="height:400px; overflow-y:auto;">
                                            <form  @submit.prevent="createSubticket()">
                                                <div class="row">
                                                    <div class="col-md-7">
                                                        <div class="form-group">
                                                            <label for="source_name">Возможный ресурс проблемы</label>
                                                            <input type="text" id="source_name" class="form-control" v-model="subticket_form.source_name" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="description">Описание</label>
                                                            <textarea id="description" class="form-control" v-model="subticket_form.description"
                                                                    rows="4" style="height:auto;">
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <p></p>
                                                        <button class="btn btn-sm btn-outline-secondary" v-for="(action, index) in subticket_actions" :key="index"
                                                            style="margin:5px 0 0 0; width:100%;" type="submit" v-on:click="subticket_action = action" >
                                                            {{ action.act_title }}
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                         <hr style="margin:4px;" />
                                        <div  v-if="!isSubticketCreate" style="padding:5px 10px" class="text-right">
                                            <button class="btn btn-sm btn-outline-info"
                                                v-on:click="isSubticketCreate = true" 
                                                style="margin-left:10px;">
                                                Создать ресурсный тикет
                                            </button>
                                        </div>
                                        <div  v-if="isSubticketCreate" style="padding:5px 10px" class="text-right">
                                            <button class="btn btn-sm btn-outline-danger"
                                                v-on:click="isSubticketCreate = false" 
                                                style="margin-left:10px;">
                                                Отменить
                                            </button>
                                        </div>
                                        <hr style="margin:4px;" />
                                    </div>
                                    <div class="tab-pane fade" id="conn_tickets" role="tabpanel" aria-labelledby="conn_tickets-tab">
                                        <p></p>
                                        <div v-if="!isSubticketCreate" style="height:400px; overflow-y:auto;">
                                            <table class="table table-sm table-light">
                                                <tr v-for="(item, index) in connected_tickets" :key="index">
                                                    <td>{{ item.id }}</td>
                                                    <td>
                                                        <router-link :to="`/troubleticket/`+item.id"> 
                                                            <a href="#">{{ item.source_name }}</a>
                                                        </router-link>
                                                    </td>
                                                    <td>{{ item.network_main_label }}</td>
                                                    <td>{{ item.formatted_start_date }}</td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-danger"
                                                            v-on:click="UnconnectTicket(item.id)" 
                                                            style="margin-right:5px;">
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <hr style="margin:4px;" />
                                        <div style="padding:5px 10px" class="text-right">
                                            <button class="btn btn-sm btn-outline-info" 
                                                v-b-modal.modal-connected-ticket 
                                                @click="getTicketList()"
                                                style="margin-left:10px;">
                                                Привезать тикеты
                                            </button>
                                        </div>
                                        <hr style="margin:4px;" />
                                        <b-modal id="modal-connected-ticket" size="xl" centered :title="'Добавить запись в журнал'">
                                            <div class="table-responsive" style="height:500px;">
                                                <vue-bootstrap4-table 
                                                    :rows="connected_ticket_list"
                                                    :columns="connected_ticket_columns"
                                                    @on-select-row="onSelectRow"
                                                    @on-all-select-rows="onSelectRow"
                                                    @on-unselect-row="onSelectRow"
                                                    @on-all-unselect-rows="onSelectRow"
                                                    :config="table_config" 
                                                    :classes="table_classes"
                                                    >
                                                </vue-bootstrap4-table>
                                            </div>
                                            <template #modal-footer="{ ok, cancel }">
                                                <b-button size="sm" variant="info" @click="cancel()">
                                                    Отменить
                                                </b-button>
                                                <b-button size="sm" variant="primary" @click="saveConnectedTickets(); ok()">
                                                    Подтвердить
                                                </b-button>
                                            </template>
                                        </b-modal>
                                    </div>
                                    <div class="tab-pane fade" id="conn_alarms" role="tabpanel" aria-labelledby="conn_alarms-tab">
                                        <p></p>
                                        <div style="height:400px; overflow-y:auto;">
                                            <table class="table table-sm table-light" style="font-size:10px;">
                                                <tr>
                                                    <th>Тип</th>
                                                    <th>Начало</th>
                                                    <th>Конец</th>
                                                    <th>Источник</th>
                                                    <th>Авария</th>
                                                    <th>-</th>
                                                </tr>
                                                <template v-for="t in troubleticket.service_main_list">  <!-- This tag won't display but help you to nest two foreach -->
                                                    <tbody v-for="a in t.alarms_info">
                                                        <tr>
                                                            <td class="border-bottom">{{ t.service_info.service_name }}</td>
                                                            <td class="border-bottom" style="width:120px;">{{ a.formatted_date_raised }}</td>
                                                            <td class="border-bottom" style="width:120px;">{{ a.formatted_date_cleared }}</td>
                                                            <td class="border-bottom">{{ a.source_name }}</td>
                                                            <td class="border-bottom">
                                                                <div class="truncate-text" style="width:150px;">{{a.fault_name}}</div>
                                                            </td>
                                                            <td class="border-bottom">{{ a.is_source }}</td>
                                                        </tr>
                                                    </tbody>
                                                </template>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="change" role="tabpanel" aria-labelledby="change-tab">
                                        <p></p>
                                        <div class="accordion" role="tablist" style="height:400px; overflow-y:auto;">
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
    import VueBootstrap4Table from "vue-bootstrap4-table";
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
                        text: 'Информация по Сервис тикету #'+this.$route.params.id,
                        active: true
                    }
                ],
                isLoading: false,
                isSubticketCreate: false,
                ticket_cities: [],
                ticket_services: [],
                ticket_actions: [],
                ticket_change_histories: [],
                ticket_histories: [],
                subticket_actions: [],
                subticket_action: {},
                subticket_form: {
                    id_ticket: null,
                    id_act: null,
                    id_act_bck: null,
                    act_title: null,
                    source_name: '',
                    description: ''
                },
                subticket_list: [],
                selected_action: {},
                action_comment: '',
                journal_list: [],
                journal_comment: '',
                connected_tickets: [],
                // connected ticket tables
                connected_ticket_list: [],
                connected_ticket_selected_list: [],
                connected_ticket_columns: [],
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
        components: {
            Loading: VueLoading,
            VueBootstrap4Table
        },
        created: async function () {
            await this.getData();
        },
        computed: {
            ...mapGetters(["troubleticket", "actions", "sub_actions"]),
        },
        watch: { 
            $route(to, from) { 
                // react to route changes... 
                if(to !== from)
                { 
                    this.getData();
                    this.loadAllData();
                } 
            } 
        },
        mounted() {
            this.loadAllData();
        },
        methods: {
            async getData() {
                await this.$store.dispatch(SET_TROUBLE_TICKET, this.$route.params.id);
            },
            loadAllData() {
                this.generateBreadcrumb(this.breadcrumbs);
                this.getTicketCities();
                this.getTicketActions();
                this.getTicketHistories();
                this.getSubTicketActions();
                this.getSubTicketList();
                this.getTicketJournals();
                this.getTicketConnected();
            },
            // TODO need remove, and load from ticket
            getTicketCities() {
                axios.get(`/api/troubleticket/ticket_cities/search?id=${this.$route.params.id}`)
                    .then((response) => {
                        this.ticket_cities = response.data.list;
                    });
            },
            getTicketActions() {
                axios.get(`/api/troubleticket/ticket_actions/search?id=${this.$route.params.id}`)
                    .then((response) => {
                        this.ticket_actions = response.data.list;
                    });
            },
            getTicketHistories() {
                axios.get(`/api/troubleticket/ticket_histories/search?id=${this.$route.params.id}`)
                    .then((response) => {
                        this.ticket_histories = response.data.list;
                    });
            },
            getSubTicketList() {
                axios.get(`/api/troubleticket/ticket_subticket_list/search?id=${this.$route.params.id}`)
                    .then((response) => {
                        this.subticket_list = response.data.list;
                    });
            },
            getSubTicketActions() {
                axios.get(`/api/troubleticket/ticket_sub_actions/search?id=12`)
                    .then((response) => {
                        this.subticket_actions = response.data.list;
                    });
            },
            getTicketJournals() {
                axios.get(`/api/troubleticket/ticket_journals/search?id=${this.$route.params.id}`)
                    .then((response) => {
                        this.journal_list = response.data.list;
                    });
            },
            getTicketConnected() {
                axios.get(`/api/troubleticket/ticket_connected/search?id=${this.$route.params.id}`)
                    .then((response) => {
                        this.connected_tickets = response.data.list;
                    });
            },
            getTicketList() {
                this.isLoading = true;

                axios.get(`/api/troubleticket/request_list/search?type=3`)
                    .then((response) => {
                        this.connected_ticket_list = response.data.list;
                        this.connected_ticket_columns = response.data.columns;
                        this.isLoading = false;
                    });
            },
            changeAction(action) {
                this.selected_action = action;
            },
            changeAction2() {
                let form = {
                    'id': this.troubleticket.id, 
                    'id_act': this.selected_action.id, 
                    'id_act_bck': this.selected_action.back_act_id, 
                    'act_title': this.selected_action.act_title, 
                    'comment': this.action_comment
                };

                console.log('tickets', form);
                
                axios.post('/api/troubleticket/update-action', form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            //redirect(Request::url())
                            //return redirect()->to(`/troubleticket/${this.$route.params.id}`}); 
                            //this.$router.push({path: `/troubleticket/${this.$route.params.id}`})
                            this.getData();
                            this.loadAllData();
                        }
                    })
                    .catch(error => {
                    });
            },
            createSubticket() {
                this.subticket_form.id_ticket = this.troubleticket.id;
                this.subticket_form.id_region = this.troubleticket.settlement_info.id_region;
                this.subticket_form.id_act = this.subticket_action.id;
                this.subticket_form.id_act_bck = this.subticket_action.back_act_id;
                this.subticket_form.act_title = this.subticket_action.act_title;
                
                axios.post('/api/troubleticket/create_subticket', this.$data.subticket_form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            console.log('tickets', response.data.ticket);
                            this.subticket_list = response.data.list;
                            this.isSubticketCreate = false;
                            this.getTicketHistories();
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
                    'id_subticket': 0,
                    'journal_type': 1,
                    'comment': this.journal_comment
                };
                
                axios.post('/api/troubleticket/save_journal', form)
                    .then((response) => {
                        this.journal_list = response.data.list;
                        this.getTicketHistories();
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
                this.connected_ticket_selected_list = [];
                var i;
                for (i = 0; i < e.selected_items.length; i++) {
                    if(this.troubleticket.id != e.selected_items[i].id)
                        this.connected_ticket_selected_list.push(e.selected_items[i].id);
                }

                console.log('connected_tickets',this.connected_ticket_selected_list);
            },
            saveConnectedTickets() {
                let form = {
                    'ticket_list': this.connected_ticket_selected_list, 
                    'id_ticket': this.troubleticket.id 
                };
                
                axios.post('/api/troubleticket/save_connected_tickets', form)
                    .then((response) => {
                        //this.connected_tickets = response.data.list;
                        //this.getTicketHistories();
                        this.getData();
                        this.loadAllData();
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            UnconnectTicket(id_ticket) {
                let form = {
                    'id_main_ticket': this.troubleticket.id , 
                    'id_ticket': id_ticket
                };
                
                axios.post('/api/troubleticket/update_unconnected_tickets', form)
                    .then((response) => {
                        //this.connected_tickets = response.data.list;
                        //this.getTicketHistories();
                        this.getData();
                        this.loadAllData();
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            SendNotification() {
                this.isLoading = true;

                axios.get(`/api/troubleticket/send_notification/search?id_ticket=${this.$route.params.id}`)
                    .then((response) => {
                        this.isLoading = false;
                        alert(response.data.message);
                    });
            },
            /*
            getTicketHistory() {
                axios.get(`/api/troubleticket/ticket_history`)
                    .then((response) => {
                        this.ticket_history = response.data.list;
                    });
            }
            
            */
        },
    }
</script>

<style scoped>

</style>
