<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="card">
            <div class="card-header">Поля Пользователя:
                <button class="btn btn-sm btn-outline-primary float-right"
                        v-b-modal.modal-create-field @click="disableUpdateMode">Добавить
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th class="table__id">ID</th>
                            <th>Наименование</th>
                            <th>Тип</th>
                            <th style="width: 100px;"></th>
                        </tr>
                        </thead>
                        <tbody v-if="fields">
                        <tr v-for="(item, index) in fields" :key="index">
                            <td class="table__id">{{ item.id }}</td>
                            <td>{{ item.field_name }}</td>
                            <td>{{ item.field_label }}</td>
                            <td>
                                <b-button v-on:click="showUpdateFieldModal(item)" variant="outline-secondary"
                                          size="sm" class="p-1">
                                    <b-icon icon="pencil" aria-hidden="true"></b-icon>
                                </b-button>
                                <b-button v-on:click="confirmDelete(item.id)" variant="outline-secondary"
                                          size="sm" class="p-1">
                                    <b-icon icon="trash" aria-hidden="true"></b-icon>
                                </b-button>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot v-else>
                        <td class="text-center" colspan="3">Данные отсутствуют</td>
                        </tfoot>
                    </table>
                </div>
            </div>
            <b-modal
                id="modal-create-field"
                ref="modal"
                :title="updateMode ? 'Изменить филд' : 'Создать филд'"
                :ok-title="updateMode ? 'Изменить' : 'Сохранить'"
                cancel-title="Отмена"
                @ok="submitFieldForm"
            >
                <form ref="form">
                    <div class="form-group">
                        <label for="field_label">Метка</label>
                        <input type="text" id="field_label" class="form-control" v-model="form.field_label"
                               :class="{'is-invalid': $v.form.field_label.$error}" @blur="$v.form.field_label.$touch()"/>
                        <div class="invalid-feedback" v-if="!$v.form.field_label.required">Поле обязательно для
                            заполнения
                        </div>
                        <div class="invalid-feedback" v-if="!$v.form.field_label.minLength">
                            Минимальная длина {{ $v.form.field_label.$params.minLength.min }} символов. Сейчас {{
                            form.field_label.length }}.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="field_name">Название</label>
                        <input type="text" id="field_name" class="form-control" v-model="form.field_name"
                               :class="{'is-invalid': $v.form.field_name.$error}" @blur="$v.form.field_name.$touch()"/>
                        <div class="invalid-feedback" v-if="!$v.form.field_name.required">Поле обязательно для
                            заполнения
                        </div>
                        <div class="invalid-feedback" v-if="!$v.form.field_name.minLength">
                            Минимальная длина {{ $v.form.field_name.$params.minLength.min }} символов. Сейчас {{
                            form.field_name.length }}.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="field_type">Тип</label>
                        <select v-model="form.field_type" id="field_type" class="form-control"
                                :class="{'is-invalid': $v.form.field_type.$error}" @blur="$v.form.field_type.$touch()">
                            <option disabled value="">Выберите</option>
                            <option v-for="option in field_types" v-bind:value="option.id">
                                {{ option.title }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="field_ord">Порядок</label>
                        <input type="number" id="field_ord" class="form-control" v-model="form.field_ord"
                               :class="{'is-invalid': $v.form.field_ord.$error}" @blur="$v.form.field_ord.$touch()"/>
                        <div class="invalid-feedback" v-if="!$v.form.field_ord.required">Поле обязательно для
                            заполнения
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="field_col">Позиция в колонке</label>
                        <input type="number" id="field_col" class="form-control" v-model="form.field_col"
                               :class="{'is-invalid': $v.form.field_col.$error}" @blur="$v.form.field_col.$touch()"/>
                        <div class="invalid-feedback" v-if="!$v.form.field_col.required">Поле обязательно для
                            заполнения
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="query_type">Тип запроса</label>
                        <select v-model="form.query_type" id="query_type" class="form-control"
                                :class="{'is-invalid': $v.form.query_type.$error}" @blur="$v.form.query_type.$touch()">
                            <option disabled value="">Выберите</option>
                            <option v-for="option in query_types" v-bind:value="option.id">
                                {{ option.title }}
                            </option>
                        </select>
                    </div>
                    <div v-if="form.query_type === 1">
                        <div class="form-group">
                            <label for="query_type">Запрос БД</label>
                            <select v-model="form.query_db" id="query_db" class="form-control">
                                <option v-for="option in query_dbs" v-bind:value="option.id">
                                    {{ option.title }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="query_select">Sql запрос</label>
                            <textarea v-model="form.query_select" id="query_select" class="form-control"></textarea>
                        </div>
                        <hr>
                    </div>
                    <div v-if="form.query_type === 2">
                        <div class="form-group">
                            <label for="query_value">Значение</label>
                            <textarea v-model="form.query_value" id="query_value" class="form-control"></textarea>
                        </div>
                        <hr>
                    </div>
                    <div class="form-group">
                        <label for="cond_show">Условие для скрытия</label>
                        <textarea v-model="form.cond_show" id="cond_show" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="cond_alert">Условие для алерта</label>
                        <textarea v-model="form.cond_alert" id="cond_alert" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="default_vals">Значение по умолчанию</label>
                        <textarea v-model="form.default_vals" id="default_vals" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="is_req">Обязательное</label>
                        <input type="checkbox" id="is_req" v-model="form.is_req">
                    </div>
                    <div class="form-group">
                        <label for="is_readonly">Только для чтения</label>
                        <input type="checkbox" id="is_readonly" v-model="form.is_readonly">
                    </div>
                    <div class="alert alert-danger" v-if="formErrors">
                        <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                            {{ fieldsError.join('\n') }}
                        </div>
                    </div>
                </form>
            </b-modal>
            <b-modal
                id="modal-confirm-field-deletion"
                ref="modal"
                title=""
                ok-title="Да"
                cancel-title="Нет"
                @ok="deleteField"
            >
                <h5>Вы действительно хотите удалить филд?</h5>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/lib/validators'
    import {SET_FIELDS} from "../schemeStore";
    import TheAlert from "../../layout/TheAlert";
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import TheComponentMixin from "../TheComponentMixin";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import axios from 'axios';

    export default {
        name: "ComponentFields",
        props: ['fields'],
        components: {
            TheAlert,
            Loading: VueLoading
        },
        mixins: [TheContentMixin, TheComponentMixin],
        data() {
            return {
                form: {
                    field_label: '',
                    field_name: '',
                    field_ord: '',
                    field_type: '',
                    query_type: '',
                    query_select: '',
                    query_db: '',
                    query_value2: '',
                    cond_show: '',
                    cond_alert: '',
                    default_vals: '',
                    is_req: '',
                    parent: '',
                    dependent: '',
                    style_type: '',
                    field_col: '',
                    style_class: '',
                    is_readonly: '',
                    change_func: '',
                    max_length: '',
                    min_length: '',
                    query_value: '',
                    comp_id: this.$route.params.id,
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
                selectedField: null,
                updateMode: false,
                formErrors: null,
                errors: null,
                alerts: null,
                isLoading: false
            }
        },
        methods: {
            disableUpdateMode() {
                this.updateMode = false;
                this.resetForm();
            },
            showUpdateFieldModal(field) {
                this.updateMode = true;
                this.form.id = this.selectedField = field.id;

                this.renderFormData(field);

                this.$nextTick(() => {
                    this.$bvModal.show('modal-create-field')
                });
            },
            submitFieldForm(bvModalEvt) {
                this.updateMode ? this.updateField(bvModalEvt) : this.createField(bvModalEvt);
            },
            createField(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.$v.form.$touch();
                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.formErrors = null;
                this.isLoading = true;

                axios.post('/api/scheme/fields/create', this.$data.form)
                    .then((response) => {
                        if (response.data.success === true) {
                            let fields = this.$store.getters.fields;
                            fields.push(response.data.field);
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-field')
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
            updateField() {
                this.formErrors = null;
                this.$v.form.$touch();

                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.formErrors = null;
                this.isLoading = true;

                axios.post('/api/scheme/fields/update/' + this.selectedField, this.$data.form)
                    .then((response) => {
                        if (response.data.success === true) {
                            const fieldsIndex = this.fields.findIndex(fields => fields.id === this.selectedField);
                            this.fields.splice(fieldsIndex, 1);
                            this.fields.push(response.data.field);
                            this.fields.sort((n1, n2) => n1.id - n2.id);
                            this.updateMode = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-field')
                            });
                            this.resetForm();
                            this.selectedField = null;
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
            confirmDelete(id) {
                this.selectedField = id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-confirm-field-deletion')
                });
            },
            deleteField() {
                this.errors = null;
                this.formErrors = null;
                this.isLoading = true;
                axios.post('/api/scheme/fields/' + this.selectedField)
                    .then((response) => {
                        if (response.data.success === true) {
                            const fieldsIndex = this.fields.findIndex(fields => fields.id === this.selectedField);
                            this.fields.splice(fieldsIndex, 1);
                            this.selectedField = null;
                            this.isLoading = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-confirm-field-deletion')
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
                Object.keys(this.$data.form).forEach(function (key, index) {
                    self.$data.form[key] = '';
                });
                this.$data.form.comp_id = this.$route.params.id;
            },
            renderFormData(field){
                let self = this;
                Object.keys(field).forEach(function (key, index) {
                    self.$data.form[key] = field[key];
                });
            }
        },
        validations: {
            form: {
                field_label: {
                    required,
                    minLength: minLength(2)
                },
                field_name: {
                    required,
                    minLength: minLength(2)
                },
                field_ord: {
                    required,
                },
                field_col: {
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
