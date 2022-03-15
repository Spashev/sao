<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="card">
            <div class="card-header">Поля Пользователя:
                <button class="btn btn-sm btn-outline-primary float-right"
                        v-b-modal.modal-create-user-field>Добавить
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th class="table__id">ID</th>
                            <th>Наименование</th>
                            <th>Категория Пользователя</th>
                            <th style="width: 100px;"></th>
                        </tr>
                        </thead>
                        <tbody v-if="userFields">
                        <tr v-for="(item, index) in userFields" :key="index">
                            <td class="table__id">{{ item.id }}</td>
                            <td>{{ item.field_name }}</td>
                            <td>{{ getUserCategoryName(item.cat_id) }}</td>
                            <td>
                                <b-button v-on:click="showUpdateUserFieldModal(item)" variant="outline-secondary"
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
                id="modal-create-user-field"
                ref="modal"
                :title="updateMode ? 'Изменить поле' : 'Создать поле'"
                :ok-title="updateMode ? 'Изменить' : 'Сохранить'"
                cancel-title="Отмена"
                @ok="submitUserFieldForm"
            >
                <form ref="form">
                    <div class="form-group">
                        <label for="name">Название</label>
                        <input type="text" id="name" class="form-control" v-model="form.name"
                               :class="{'is-invalid': $v.form.name.$error}" @blur="$v.form.name.$touch()"/>
                        <div class="invalid-feedback" v-if="!$v.form.name.required">Поле Название обязательно для
                            заполнения
                        </div>
                        <div class="invalid-feedback" v-if="!$v.form.name.minLength">
                            Минимальная длина {{ $v.form.name.$params.minLength.min }} символов. Сейчас {{
                            form.name.length }}.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="description">Категория Пользователя</label>
                        <select v-model="form.cat_id" class="form-control"
                                :class="{'is-invalid': $v.form.cat_id.$error}" @blur="$v.form.cat_id.$touch()">
                            <option disabled value="">Выберите</option>
                            <option v-for="option in userCategories" v-bind:value="option.id">
                                {{ option.cat_name }}
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
                id="modal-confirm-user-field-deletion"
                ref="modal"
                title=""
                ok-title="Да"
                cancel-title="Нет"
                @ok="deleteUserField"
            >
                <h5>Вы действительно хотите удалить поле?</h5>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/lib/validators'
    import {SET_USER_FIELDS} from "../schemeStore";
    import TheAlert from "../../layout/TheAlert";
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import TheComponentMixin from "../TheComponentMixin";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import axios from 'axios';

    export default {
        name: "ComponentUserFields",
        props: ['userFields', 'userCategories'],
        components: {
            TheAlert,
            Loading: VueLoading
        },
        mixins: [TheContentMixin, TheComponentMixin],
        data() {
            return {
                form: {
                    name: '',
                    cat_id: '',
                    comp_id: this.$route.params.id,
                },
                selectedUserField: null,
                updateMode: false,
                formErrors: null,
                errors: null,
                alerts: null,
                isLoading: false
            }
        },
        methods: {
            showUpdateUserFieldModal(userField) {
                this.updateMode = true;
                this.form.id = this.selectedUserField = userField.id;
                this.form.name = userField.field_name;
                this.form.cat_id = userField.cat_id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-create-user-field')
                });
            },
            submitUserFieldForm(bvModalEvt) {
                this.updateMode ? this.updateUserField(bvModalEvt) : this.createUserField(bvModalEvt);
            },
            createUserField(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.$v.form.$touch();
                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.formErrors = null;
                this.isLoading = true;

                axios.post('/api/scheme/user-fields/create', this.$data.form)
                    .then((response) => {
                        this.$store.dispatch(SET_USER_FIELDS, this.$route.params.id);
                        this.$nextTick(() => {
                            this.$bvModal.hide('modal-create-user-field')
                        });

                        this.isLoading = false;
                        this.resetForm();
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            updateUserField() {
                this.formErrors = null;
                this.$v.form.$touch();

                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.formErrors = null;
                this.isLoading = true;

                axios.post('/api/scheme/user-fields/update/' + this.selectedUserField, this.$data.form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            // let groups = this.$store.state.groups;
                            console.log('userFields', this.userFields);
                            const userFieldsIndex = this.userFields.findIndex(userFields => userFields.id === this.selectedUserField);
                            this.userFields.splice(userFieldsIndex, 1);
                            this.userFields.push(response.data.userField);
                            this.userFields.sort((n1, n2) => n1.id - n2.id);
                            this.updateMode = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-user-field')
                            });
                            this.resetForm();
                            this.selectedUserField = null;
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
                this.selectedUserField = id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-confirm-user-field-deletion')
                });
            },
            deleteUserField() {
                this.errors = null;
                this.formErrors = null;
                this.isLoading = true;
                axios.post('/api/scheme/user-fields/' + this.selectedUserField)
                    .then((response) => {
                        if (response.data.success === 1) {
                            const userFieldsIndex = this.userFields.findIndex(userFields => userFields.id === this.selectedUserField);
                            this.userFields.splice(userFieldsIndex, 1);
                            this.selectedUserField = null;
                            this.isLoading = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-confirm-user-field-deletion')
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
                var self = this;
                Object.keys(this.$data.form).forEach(function (key, index) {
                    self.$data.form[key] = '';
                });
                this.$data.form.comp_id = this.$route.params.id;
            }
        },
        validations: {
            form: {
                name: {
                    required,
                    minLength: minLength(6)
                },
                cat_id: {
                    required
                }
            }
        }
    }
</script>

<style scoped>

</style>
