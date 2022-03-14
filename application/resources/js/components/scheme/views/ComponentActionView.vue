<template>
    <div class="card mb-1">
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="card-header" v-if="action">Действие: #{{action.act_title}}
            <button class="btn btn-sm btn-outline-danger float-right"
                    v-b-modal.modal-confirm-action-deletion>Удалить
            </button>
            <button class="btn btn-sm btn-outline-warning float-right mr-1"
                    v-on:click="updateActionModal(selectedAction)">
                Изменить
            </button>
        </div>
        <div class="card-body">
            <div class="alert alert-danger m-2" v-if="errors">
                {{ errors }}
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="table-responsive p-1">
                        <table class="table table-bordered">
                            <tbody v-if="action">
                            <tr>
                                <td>ID</td>
                                <td>{{ action.id }}</td>
                            </tr>
                            <tr>
                                <td>Название</td>
                                <td>{{ action.act_title }}</td>
                            </tr>
                            <tr>
                                <td>Описание</td>
                                <td>{{ action.act_desc }}</td>
                            </tr>
                            <tr>
                                <td>Статус</td>
                                <td>{{ getStatusName(action.status_id) }}</td>
                            </tr>
                            <tr>
                                <td>Родитель</td>
                                <td>{{ getActionName(action.par_act_id) }}</td>
                            </tr>
                            <tr>
                                <td>Возвратное действие</td>
                                <td>{{ getActionName(action.back_act_id) }}</td>
                            </tr>
                            </tbody>
                            <tfoot v-else>
                            <td class="text-center" colspan="3">Данные отсутствуют</td>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-sm btn-outline-info float-right m-2"
                            v-b-modal.modal-create-activity>Добавить активити
                    </button>
                    <button class="btn btn-sm btn-outline-warning float-right m-2"
                            v-b-modal.modal-create-field_list @click="disableUpdateMode">Добавить филд лист
                    </button>
                </div>
                <div class="col-md-12">
                    <div class="card m-1 p-1">
                        <div class="card-body">
                            <h5 class="card-title">Activities</h5>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th width="30%">Responsible Group</th>
                                    <th width="30%">Field Cat</th>
                                    <th width="20%">Inform by</th>
                                    <th width="10%">Is user</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody v-if="filteredUserActivities(3)">
                                <tr v-for="(item, index) in filteredUserActivities(3)" :key="index">
                                    <td>{{ getUserGroupName(item.group_id) }}</td>
                                    <td>{{ getUserCategoryName(item.cat_id) }}</td>
                                    <td>{{ getInformBy(item.inform_by) }}</td>
                                    <td>{{ item.is_user ? 'да' : 'нет' }}</td>
                                    <td>
                                        <b-button v-on:click="confirmDeleteAction(item.id)" variant="outline-secondary"
                                                  size="sm" class="p-1">
                                            <b-icon icon="trash" aria-hidden="true"></b-icon>
                                        </b-button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot v-else>
                                <td class="text-center" colspan="5">Данные отсутствуют</td>
                                </tfoot>
                            </table>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th width="30%">Can view Group</th>
                                    <th width="30%">Field Cat</th>
                                    <th width="20%">Inform by</th>
                                    <th width="10%">Is user</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody v-if="filteredUserActivities(2)">
                                <tr v-for="(item, index) in filteredUserActivities(2)" :key="index">
                                    <td>{{ getUserGroupName(item.group_id) }}</td>
                                    <td>{{ getUserCategoryName(item.cat_id) }}</td>
                                    <td>{{ getInformBy(item.inform_by) }}</td>
                                    <td>{{ item.is_user ? 'да' : 'нет' }}</td>
                                    <td>
                                        <b-button v-on:click="confirmDeleteAction(item.id)" variant="outline-secondary"
                                                  size="sm" class="p-1">
                                            <b-icon icon="trash" aria-hidden="true"></b-icon>
                                        </b-button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot v-else>
                                <td class="text-center" colspan="5">Данные отсутствуют</td>
                                </tfoot>
                            </table>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th width="30%">Need Inform Group</th>
                                    <th width="30%">Field Cat</th>
                                    <th width="20%">Inform by</th>
                                    <th width="10%">Is user</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody v-if="filteredUserActivities(1)">
                                <tr v-for="(item, index) in filteredUserActivities(1)" :key="index">
                                    <td>{{ getUserGroupName(item.group_id) }}</td>
                                    <td>{{ getUserCategoryName(item.cat_id) }}</td>
                                    <td>{{ getInformBy(item.inform_by) }}</td>
                                    <td>{{ item.is_user ? 'да' : 'нет' }}</td>
                                    <td>
                                        <b-button v-on:click="confirmDeleteAction(item.id)" variant="outline-secondary"
                                                  size="sm" class="p-1">
                                            <b-icon icon="trash" aria-hidden="true"></b-icon>
                                        </b-button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot v-else>
                                <td class="text-center" colspan="5">Данные отсутствуют</td>
                                </tfoot>
                            </table>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th width="90%">Email</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody v-if="emailActivities">
                                <tr v-for="(item, index) in emailActivities" :key="index">
                                    <td>{{ item.email }}</td>
                                    <td>
                                        <b-button v-on:click="confirmDeleteAction(item.id, 1)"
                                                  variant="outline-secondary"
                                                  size="sm" class="p-1">
                                            <b-icon icon="trash" aria-hidden="true"></b-icon>
                                        </b-button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot v-else>
                                <td class="text-center" colspan="2">Данные отсутствуют</td>
                                </tfoot>
                            </table>
                            <h5 class="card-title">Fields</h5>
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th width="5%">ID</th>
                                        <th width="25%">Field name</th>
                                        <th width="10%">Is Basic?</th>
                                        <th width="25%">User Category</th>
                                        <th width="25%">User Field</th>
                                        <th width="10%"></th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="fieldLists">
                                    <tr v-for="(item, index) in fieldLists" :key="index">
                                        <td>{{ item.id }}</td>
                                        <td>{{ getFieldName(item.field_id) }}</td>
                                        <td>{{ item.is_basic }}</td>
                                        <td>{{ getUserCategoryName(item.user_cat_id) }}</td>
                                        <td>{{ getUserFieldName(item.user_field_id) }}</td>
                                        <td>
                                            <b-button v-on:click="showUpdateFieldListModal(item)"
                                                      variant="outline-secondary"
                                                      size="sm" class="p-1">
                                                <b-icon icon="pencil" aria-hidden="true"></b-icon>
                                            </b-button>
                                            <b-button v-on:click="confirmDeleteFieldList(item.id)"
                                                      variant="outline-secondary"
                                                      size="sm" class="p-1">
                                                <b-icon icon="trash" aria-hidden="true"></b-icon>
                                            </b-button>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot v-else>
                                    <td class="text-center" colspan="2">Данные отсутствуют</td>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal
            id="modal-update-action"
            ref="modal"
            title="Изменить действие"
            cancel-title="Отмена"
            ok-title="Изменить"
            @ok="updateAction"
        >
            <form ref="form" @submit.stop.prevent="updateAction">
                <input type="hidden" v-model="form.comp_id">
                <div class="form-group">
                    <label for="name">Название</label>
                    <input type="text" id="name" class="form-control" v-model="form.name"
                           :class="{'is-invalid': $v.form.name.$error}" @blur="$v.form.name.$touch()"/>
                    <div class="invalid-feedback" v-if="!$v.form.name.required">Name field is required</div>
                    <div class="invalid-feedback" v-if="!$v.form.name.minLength">
                        Min length of name is {{ $v.form.name.$params.minLength.min }}. Now it is {{
                        form.name.length
                        }}.
                    </div>
                </div>
                <div class="form-group">
                    <label for="description">Описание</label>
                    <input type="text" id="description" class="form-control" v-model="form.description">
                </div>
                <div class="form-group">
                    <label for="description">Статус</label>
                    <select v-model="form.status_id" class="form-control"
                            :class="{'is-invalid': $v.form.status_id.$error}" @blur="$v.form.status_id.$touch()">
                        <option disabled value="">Выберите</option>
                        <option v-for="option in statuses" v-bind:value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Родительское дейсивие</label>
                    <select v-model="form.par_act_id" class="form-control">
                        <option disabled value="">Выберите</option>
                        <option value="">Новый / Нет родителя</option>
                        <option v-for="option in actions" v-bind:value="option.id">
                            {{ option.act_title }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Обратное действие</label>
                    <select v-model="form.back_act_id" class="form-control">
                        <option disabled value="">Выберите</option>
                        <option value="">Новый / Нет родителя</option>
                        <option v-for="option in actions" v-bind:value="option.id">
                            {{ option.act_title }}
                        </option>
                    </select>
                </div>
                <div class="alert alert-danger" v-if="formErrors">
                    <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                        {{ fieldsError.join('\n') }}
                    </div>
                </div>
            </form>
        </b-modal>

        <b-modal
            id="modal-confirm-deletion"
            ref="modal"
            title=""
            ok-title="Да"
            cancel-title="Нет"
            @ok=""
        >
            <h5>Вы действительно хотите удалить Действие?</h5>
        </b-modal>

        <b-modal
            id="modal-create-activity"
            ref="modal"
            title="Добавить активити"
            ok-title="Добавить"
            cancel-title="Отмена"
            @ok="createActivity"
        >
            <form ref="form">
                <div class="form-group">
                    <label for="name">Тип</label>
                    <select v-model="formActivity.act_type" class="form-control"
                            :class="{'is-invalid': $v.formActivity.act_type.$error}"
                            @blur="$v.formActivity.act_type.$touch()">
                        <option disabled value="">Выберите</option>
                        <option v-for="option in types" v-bind:value="option.id">
                            {{ option.title }}
                        </option>
                    </select>
                </div>
                <div v-if="formActivity.act_type == 1">
                    <div class="form-group">
                        <input type="checkbox" id="is_email" v-model="formActivity.is_email">
                        <label for="name">Уведомление на определенную почту Почта</label>
                    </div>
                    <div v-if="formActivity.is_email">
                        <div class="form-group">
                            <label for="name">Email</label>
                            <input type="text" id="email" class="form-control" v-model="formActivity.email"
                                   :class="{'is-invalid': $v.formActivity.email.$error}"
                                   @blur="$v.formActivity.email.$touch()"/>
                            <div class="invalid-feedback" v-if="!$v.formActivity.email.required">Email field is
                                required
                            </div>
                            <div class="invalid-feedback" v-if="!$v.formActivity.email.minLength">
                                Min length of name is {{ $v.formActivity.email.$params.minLength.min }}. Now it is {{
                                formActivity.email.length
                                }}.
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!formActivity.is_email">
                    <div class="form-group">
                        <label for="name">Информирование</label>
                        <select v-model="formActivity.inform_by" class="form-control"
                                :class="{'is-invalid': $v.formActivity.inform_by.$error}"
                                @blur="$v.formActivity.inform_by.$touch()">
                            <option disabled value="">Выберите</option>
                            <option v-for="option in informs" v-bind:value="option.id">
                                {{ option.title }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="description">Группы Пользователя</label>
                        <select v-model="formActivity.group_id" class="form-control"
                                :class="{'is-invalid': $v.formActivity.group_id.$error}"
                                @blur="$v.formActivity.group_id.$touch()">
                            <option disabled value="">Выберите</option>
                            <option v-for="option in userGroups" v-bind:value="option.id">
                                {{ option.group_name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="description">Категория Пользователя</label>
                        <select v-model="formActivity.cat_id" class="form-control"
                                :class="{'is-invalid': $v.formActivity.cat_id.$error}"
                                @blur="$v.formActivity.cat_id.$touch()">
                            <option disabled value="">Выберите</option>
                            <option v-for="option in userCategories" v-bind:value="option.id">
                                {{ option.cat_name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">Пользователь</label>
                        <input type="checkbox" id="is_user" v-model="formActivity.is_user">
                    </div>
                </div>
                <div class="alert alert-danger" v-if="formErrors">
                    <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                        {{ fieldsError.join('\n') }}
                    </div>
                </div>
            </form>
        </b-modal>
        <b-modal
            id="modal-confirm-activity-deletion"
            ref="modal"
            title=""
            ok-title="Да"
            cancel-title="Нет"
            @ok="deleteActivity"
        >
            <h5>Вы действительно хотите удалить активити?</h5>
        </b-modal>
        <b-modal
            id="modal-confirm-action-deletion"
            ref="modal"
            title=""
            ok-title="Да"
            cancel-title="Нет"
            @ok="deleteAction"
        >
            <h5>Вы действительно хотите удалить действие?</h5>
        </b-modal>

        <b-modal
            id="modal-create-field_list"
            ref="modal"
            :title="updateMode ? 'Изменить филд лист' : 'Создать филд лист'"
            :ok-title="updateMode ? 'Изменить' : 'Сохранить'"
            cancel-title="Отмена"
            @ok="submitFieldListForm"
        >
            <form ref="form">
                <div class="form-group">
                    <label for="field_id">Филд</label>
                    <select v-model="formFieldList.field_id" id="field_id" class="form-control"
                            :class="{'is-invalid': $v.formFieldList.field_id.$error}"
                            @blur="$v.formFieldList.field_id.$touch()">
                        <option disabled value="">Выберите</option>
                        <option v-for="option in fields" v-bind:value="option.id">
                            {{ option.field_name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="user_cat_id">Категория пользователя</label>
                    <select v-model="formFieldList.user_cat_id" id="user_cat_id" class="form-control"
                            :class="{'is-invalid': $v.formFieldList.user_cat_id.$error}"
                            @blur="$v.formFieldList.user_cat_id.$touch()">
                        <option disabled value="">Выберите</option>
                        <option v-for="option in userCategories" v-bind:value="option.id">
                            {{ option.cat_name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="user_field_id">Поля пользователя</label>
                    <select v-model="formFieldList.user_field_id" id="user_field_id" class="form-control"
                            :class="{'is-invalid': $v.formFieldList.user_field_id.$error}"
                            @blur="$v.formFieldList.user_field_id.$touch()">
                        <option disabled value="">Выберите</option>
                        <option v-for="option in userFields" v-bind:value="option.id">
                            {{ option.field_name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="is_basic">is_basic</label>
                    <input type="checkbox" id="is_basic" v-model="formFieldList.is_basic">
                </div>
                <div class="form-group">
                    <label for="field_type">Тип</label>
                    <select v-model="formFieldList.field_type" id="field_type" class="form-control"
                            :class="{'is-invalid': $v.formFieldList.field_type.$error}"
                            @blur="$v.formFieldList.field_type.$touch()">
                        <option disabled value="">Выберите</option>
                        <option v-for="option in field_types" v-bind:value="option.id">
                            {{ option.title }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="field_ord">Порядок</label>
                    <input type="number" id="field_ord" class="form-control" v-model="formFieldList.field_ord"
                           :class="{'is-invalid': $v.formFieldList.field_ord.$error}"
                           @blur="$v.formFieldList.field_ord.$touch()"/>
                    <div class="invalid-feedback" v-if="!$v.formFieldList.field_ord.required">Поле обязательно для
                        заполнения
                    </div>
                </div>
                <div class="form-group">
                    <label for="query_type">Тип запроса</label>
                    <select v-model="formFieldList.query_type" id="query_type" class="form-control"
                            :class="{'is-invalid': $v.formFieldList.query_type.$error}"
                            @blur="$v.formFieldList.query_type.$touch()">
                        <option disabled value="">Выберите</option>
                        <option v-for="option in query_types" v-bind:value="option.id">
                            {{ option.title }}
                        </option>
                    </select>
                </div>
                <div v-if="formFieldList.query_type === 1">
                    <div class="form-group">
                        <label for="query_type">Запрос БД</label>
                        <select v-model="formFieldList.query_db" id="query_db" class="form-control">
                            <option v-for="option in query_dbs" v-bind:value="option.id">
                                {{ option.title }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="query_select">Sql запрос</label>
                        <textarea v-model="formFieldList.query_select" id="query_select"
                                  class="form-control"></textarea>
                    </div>
                    <hr>
                </div>
                <div v-if="formFieldList.query_type === 2">
                    <div class="form-group">
                        <label for="query_value">Значение</label>
                        <textarea v-model="formFieldList.query_value" id="query_value" class="form-control"></textarea>
                    </div>
                    <hr>
                </div>
                <div class="form-group">
                    <label for="cond_show">Условие для скрытия</label>
                    <textarea v-model="formFieldList.cond_show" id="cond_show" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label for="cond_alert">Условие для алерта</label>
                    <textarea v-model="formFieldList.cond_alert" id="cond_alert" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label for="default_vals">Значение по умолчанию</label>
                    <textarea v-model="formFieldList.default_vals" id="default_vals" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label for="is_req">Обязательное</label>
                    <input type="checkbox" id="is_req" v-model="formFieldList.is_req">
                </div>
                <div class="alert alert-danger" v-if="formErrors">
                    <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                        {{ fieldsError.join('\n') }}
                    </div>
                </div>
            </form>
        </b-modal>
        <b-modal
            id="modal-confirm-field_list-deletion"
            ref="modal"
            title=""
            ok-title="Да"
            cancel-title="Нет"
            @ok="deleteFieldList"
        >
            <h5>Вы действительно хотите удалить филд лист?</h5>
        </b-modal>
    </div>
</template>

<script>
    import {required, minLength, requiredIf} from 'vuelidate/lib/validators'
    import axios from 'axios';
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import TheComponentMixin from "../TheComponentMixin";

    export default {
        name: "ComponentActionView",
        components: {Loading: VueLoading},
        mixins: [TheComponentMixin],
        props: {
            actions: {
                type: Array
            },
            statuses: {
                type: Array
            },
            userGroups: {
                type: Array
            },
            userCategories: {
                type: Array
            },
            userFields: {
                type: Array
            },
            fields: {
                type: Array
            },
            selectedAction: {
                type: Object
            },
            selectedUserActivities: {
                type: Array
            },
            selectedEmailActivities: {
                type: Array
            },
            selectedFieldList: {
                type: Array
            },
            methodRenderActions: {type: Function},
        },
        watch: {
            selectedAction: function (newVal) {
                this.action = newVal;
            },
            selectedUserActivities: function (newVal) {
                this.userActivities = newVal;
            },
            selectedEmailActivities: function (newVal) {
                this.emailActivities = newVal;
            },
            selectedFieldList: function (newVal) {
                this.fieldLists = newVal;
            }
        },
        computed: {},
        data() {
            return {
                action: this.selectedAction,
                form: {
                    name: '',
                    description: '',
                    status_id: '',
                    comp_id: this.$route.params.id,
                    par_act_id: '',
                    back_act_id: '',
                },
                formActivity: {
                    act_type: '',
                    act_id: '',
                    group_id: '',
                    cat_id: '',
                    is_user: '',
                    inform_by: '',
                    is_email: '',
                    email: '',
                },
                formFieldList: {
                    act_id: '',
                    field_id: '',
                    user_cat_id: '',
                    user_field_id: '',
                    is_basic: '',
                    field_type: '',
                    field_ord: '',
                    query_type: '',
                    query_select: '',
                    query_db: '',
                    query_value: '',
                    cond_show: '',
                    cond_alert: '',
                    default_vals: '',
                    is_req: '',
                },
                field_types: [
                    {id: 1, title: 'Select(single)'},
                    {id: 12, title: 'Select(single with search)'},
                    {id: 2, title: 'Select(multi)'},
                    {id: 3, title: 'Input(text)'},
                    {id: 13, title: 'Input(number)'},
                    {id: 4, title: 'Textarea'},
                    {id: 5, title: 'Checkbox'},
                    {id: 6, title: 'Radio'},
                    {id: 7, title: 'Span'},
                    {id: 8, title: 'Date'},
                    {id: 9, title: 'Time'},
                    {id: 10, title: 'DateTime'},
                    {id: 11, title: 'Slider'}
                ],
                query_types: [
                    {id: 1, title: 'Query'},
                    {id: 2, title: 'Values'},
                    {id: 3, title: 'Main DB'},
                ],
                query_dbs: [
                    {id: 1, title: 'Oracle'},
                    {id: 2, title: 'MySQL'},
                    {id: 2, title: 'Postgres SQL'},
                ],
                types: [
                    {id: 1, title: 'Need inform'},
                    {id: 2, title: 'Can view'},
                    {id: 3, title: 'Responsible'},
                ],
                informs: [
                    {id: 0, title: 'No'},
                    {id: 1, title: 'Email'},
                    {id: 2, title: 'SMS'},
                    {id: 3, title: 'Email/SMS'},
                ],
                updateMode: false,
                selectedUserActivityID: null,
                selectedFieldListID: null,
                isEmail: false,
                userActivities: null,
                emailActivities: null,
                fieldLists: null,
                formErrors: null,
                errors: null,
                isLoading: false
            }
        },
        // created: async function () {
        //     await this.getActivities(this.selectedAction.id);
        // },
        methods: {
            updateActionModal(action) {
                this.form.id = action.id;
                this.form.name = action.act_title;
                this.form.description = action.act_desc;
                this.form.status_id = action.status_id;
                this.form.comp_id = action.comp_id;
                this.form.par_act_id = action.par_act_id;
                this.form.back_act_id = action.back_act_id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-update-action')
                });
            },
            updateAction(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault();

                this.formErrors = null;
                this.$v.form.$touch();

                if (this.$v.form.$pending || this.$v.form.$error) return;
                this.isLoading = true;

                axios.post('/api/scheme/actions/update/' + this.selectedAction.id, this.$data.form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            this.action = response.data.action;
                            this.isLoading = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-update-action')
                            });
                            this.methodRenderActions(response.data.actions);
                            this.$emit('selectActionChanged', null);
                            // this.$router.go({
                            //     path: '/scheme/' + this.action.comp_id,
                            //     force: true
                            // });
                        }
                    })
                    .catch(error => {
                        if (error.response.data) {
                            // this.formErrors = error.response.data.errors;
                            // this.isLoading = false;
                            // return;
                        }
                    });

            },
            deleteAction() {
                this.errors = null;
                this.isLoading = true;
                axios.post('/api/scheme/actions/' + this.selectedAction.id)
                    .then((response) => {
                        if (response.data.success === true) {
                            let actions = this.$store.getters.actions;
                            const actionIndex = actions.findIndex(action => action.id === this.selectedAction.id);
                            actions.splice(actionIndex, 1);
                            this.isLoading = false;
                            this.methodRenderActions();
                            this.$emit('selectActionChanged', null);
                        }
                    })
                    .catch(error => {
                        if (error.response.data.messages) {
                            this.isLoading = false;
                            this.errors = error.response.data.messages;
                            this.alerts = [];
                            this.notifications = [];
                            this.alerts.push({type: 'danger', message: this.errors});
                            this.notifications.push({type: 'warning', message: this.errors});
                            this.setNotifications(this.notifications);

                            return;
                        }
                    });
            },
            createActivity(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.$v.formActivity.$touch();
                if (this.$v.formActivity.$pending || this.$v.formActivity.$error) return;

                this.$data.formActivity.act_id = this.action.id;
                if (this.$data.formActivity.is_email) {
                    axios.post('/api/scheme/email-activities/create', this.$data.formActivity)
                        .then((response) => {
                            this.emailActivities.push(response.data.emailActivity);
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-activity')
                            });
                            this.isLoading = false;

                        })
                        .catch(error => {
                            if (error.response.data) {
                                this.formErrors = error.response.data.errors;
                                this.isLoading = false;
                                return;
                            }
                        });
                } else {
                    axios.post('/api/scheme/user-activities/create', this.$data.formActivity)
                        .then((response) => {
                            this.userActivities.push(response.data.userActivity);
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-activity')
                            });
                            this.methodRenderActions();
                            this.isLoading = false;

                        })
                        .catch(error => {
                            if (error.response.data) {
                                this.formErrors = error.response.data.errors;
                                this.isLoading = false;
                                return;
                            }
                        });
                }
            },
            deleteActivity() {
                this.errors = null;
                let url = 'user-activities';
                if (this.isEmail) {
                    url = 'email-activities';
                }
                axios.post('/api/scheme/' + url + '/' + this.selectedUserActivityID)
                    .then((response) => {
                        if (response.data.success === 1) {
                            if (this.isEmail) {
                                const emailActivityIndex = this.emailActivities.findIndex(emailActivity => emailActivity.id === this.selectedUserActivityID);
                                this.emailActivities.splice(emailActivityIndex, 1);
                                this.selectedUserActivityID = null;
                                this.$nextTick(() => {
                                    this.$bvModal.hide('modal-confirm-activity-deletion')
                                });
                                this.isEmail = false;
                            } else {
                                const userActivityIndex = this.userActivities.findIndex(userActivity => userActivity.id === this.selectedUserActivityID);
                                this.userActivities.splice(userActivityIndex, 1);
                                this.selectedUserActivityID = null;
                                this.$nextTick(() => {
                                    this.$bvModal.hide('modal-confirm-activity-deletion')
                                });
                                this.methodRenderActions();
                            }

                        }
                    })
                    .catch(error => {
                        if (error.response.data.messages) {
                            this.errors = error.response.data.messages;
                            this.alerts = [];
                            this.notifications = [];
                            this.alerts.push({type: 'danger', message: this.errors});
                            this.notifications.push({type: 'warnini', message: this.errors});
                            this.setNotifications(this.notifications);

                            return;
                        }
                    });
            },
            confirmDeleteAction(id, isEmail = 0) {
                this.selectedUserActivityID = id;
                this.isEmail = isEmail;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-confirm-activity-deletion')
                });
            },
            filteredUserActivities(type_id) {
                if (this.userActivities) {
                    return this.userActivities.filter(activity => activity.act_type === type_id);
                }
            },
            getInformBy(id) {
                return this.informs.find(inform => inform.id === id).title;
            },
            disableUpdateMode() {
                this.updateMode = false;
                this.resetForm();
            },
            showUpdateFieldListModal(fieldList) {
                this.updateMode = true;
                this.formFieldList.id = this.selectedFieldListID = fieldList.id;

                this.renderFormData(fieldList);

                this.$nextTick(() => {
                    this.$bvModal.show('modal-create-field_list')
                });
            },
            submitFieldListForm(bvModalEvt) {
                this.updateMode ? this.updateFieldList(bvModalEvt) : this.createFieldList(bvModalEvt);
            },
            createFieldList(bvModalEvt) {
                bvModalEvt.preventDefault();
                this.$v.formFieldList.$touch();
                if (this.$v.formFieldList.$pending || this.$v.formFieldList.$error) return;

                this.formErrors = null;
                this.isLoading = true;
                this.$data.formFieldList.act_id = this.action.id;
                axios.post('/api/scheme/field-list/create', this.$data.formFieldList)
                    .then((response) => {
                        if (response.data.success === true) {
                            this.fieldLists.push(response.data.fieldList);
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-field_list')
                            });
                            this.isLoading = false;
                            this.resetForm();
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
            updateFieldList() {
                this.formErrors = null;
                this.$v.formFieldList.$touch();

                if (this.$v.formFieldList.$pending || this.$v.formFieldList.$error) return;

                this.formErrors = null;
                this.isLoading = true;

                axios.post('/api/scheme/field-list/update/' + this.selectedFieldListID, this.$data.formFieldList)
                    .then((response) => {
                        if (response.data.success === true) {
                            const fieldListIndex = this.fieldLists.findIndex(fieldList => fieldList.id === this.selectedFieldListID);
                            this.fieldLists.splice(fieldListIndex, 1);
                            this.fieldLists.push(response.data.fieldList);
                            this.fieldLists.sort((n1, n2) => n1.id - n2.id);
                            this.updateMode = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-field_list')
                            });
                            this.resetForm();
                            this.selectedFieldListID = null;
                            this.isLoading = false;

                        }
                    })
                    .catch(error => {
                        console.log('error', error);
                        if (error.response && error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.updateMode = false;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            confirmDeleteFieldList(id) {
                this.selectedFieldListID = id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-confirm-field_list-deletion')
                });
            },
            deleteFieldList() {
                this.errors = null;
                this.formErrors = null;
                this.isLoading = true;
                axios.post('/api/scheme/field-list/' + this.selectedFieldListID)
                    .then((response) => {
                        if (response.data.success === true) {
                            const fieldListIndex = this.fieldLists.findIndex(fieldLists => fieldLists.id === this.selectedFieldListID);
                            this.fieldLists.splice(fieldListIndex, 1);
                            this.selectedFieldListID = null;
                            this.isLoading = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-confirm-field_list-deletion')
                            });
                        }
                    })
                    .catch(error => {
                        if (error.response.data.messages) {
                            this.errors = error.response.data.messages;
                            this.alerts = [];
                            this.notifications = [];
                            this.alerts.push({type: 'danger', message: this.errors});
                            this.notifications.push({type: 'warning', message: this.errors});
                            this.setNotifications(this.notifications);
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            resetForm() {
                let self = this;
                Object.keys(this.$data.formFieldList).forEach(function (key, index) {
                    self.$data.formFieldList[key] = '';
                });
                this.$data.formFieldList.act_id = this.selectedAction.id;
            },
            renderFormData(fieldList) {
                let self = this;
                Object.keys(fieldList).forEach(function (key, index) {
                    self.$data.formFieldList[key] = fieldList[key];
                });
            }
        },
        validations: {
            form: {
                name: {
                    required,
                    minLength: minLength(6)
                },
                status_id: {
                    required
                }
            },
            formActivity: {
                act_type: {
                    required: requiredIf(function () {
                        return !this.formActivity.is_email
                    })
                },
                inform_by: {
                    required: requiredIf(function () {
                        return !this.formActivity.is_email
                    })
                },
                cat_id: {
                    required: requiredIf(function () {
                        return !this.formActivity.is_email
                    })
                },
                group_id: {
                    required: requiredIf(function () {
                        return !this.formActivity.is_email
                    })
                },
                email: {
                    minLength: minLength(6),
                    required: requiredIf(function () {
                        return this.formActivity.is_email
                    })
                },
            },
            formFieldList: {
                field_id: {
                    required,
                },
                user_cat_id: {
                    required,
                },
                user_field_id: {
                    required,
                },
                field_ord: {
                    required,
                },
                field_type: {
                    required,
                },
                query_type: {
                    required,
                }
            }
        }
    }
</script>

<style scoped>

</style>
