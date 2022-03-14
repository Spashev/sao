<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="card">
            <div class="card-header">Статусы:
                <button class="btn btn-sm btn-outline-primary float-right"
                        v-b-modal.modal-create-status @click="disableUpdateMode()">Добавить
                </button>
            </div>
            <div class="card-body">
                <TheAlert
                    v-bind:alerts="alerts"
                    @alertsChanged="alerts = $event"
                ></TheAlert>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th class="table__id">ID</th>
                            <th>Наименование</th>
                            <th>Компонент</th>
                            <th style="width: 100px;"></th>
                        </tr>
                        </thead>
                        <tbody v-if="statuses">
                        <tr v-for="(item, index) in statuses" :key="index">
                            <td class="table__id">{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.comp_id }}</td>
                            <td>
                                <b-button v-on:click="showUpdateStatusModal(item)" variant="outline-secondary"
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
                id="modal-create-status"
                ref="modal"
                :title="updateMode ? 'Изменить статус' : 'Создать статус'"
                :ok-title="updateMode ? 'Изменить' : 'Сохранить'"
                cancel-title="Отмена"
                @ok="submitStatusForm"
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
                    <div class="form-group" v-if="!updateMode">
                        <input type="checkbox" id="to_assign" v-model="form.to_assign">
                        <label for="to_assign">Присвоить к текущему компоненту</label>
                    </div>
                    <div class="alert alert-danger" v-if="formErrors">
                        <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                            {{ fieldsError.join('\n') }}
                        </div>
                    </div>
                </form>
            </b-modal>
            <b-modal
                id="modal-confirm-status-deletion"
                ref="modal"
                title=""
                ok-title="Да"
                cancel-title="Нет"
                @ok="deleteStatus"
            >
                <h5>Вы действительно хотите удалить Статус?</h5>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/lib/validators'
    import TheAlert from "../../layout/TheAlert";
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import axios from 'axios';

    export default {
        name: "ComponentStatuses",
        props: ['statuses'],
        components: {
            TheAlert,
            Loading: VueLoading
        },
        mixins: [TheContentMixin],
        data() {
            return {
                form: {
                    name: '',
                    to_assign: false,
                    comp_id: null,
                },
                selectedStatus: null,
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
            },
            showUpdateStatusModal(status) {
                this.updateMode = true;
                this.form.id = this.selectedStatus = status.id;
                this.form.name = status.name;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-create-status')
                });
            },
            submitStatusForm(bvModalEvt) {
                this.updateMode ? this.updateStatus(bvModalEvt) : this.createStatus(bvModalEvt);
            },
            createStatus(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.$v.form.$touch();
                if (this.$v.form.$pending || this.$v.form.$error) return;

                if (this.$data.form.to_assign === true) {
                    this.$data.form.comp_id = this.$route.params.id;
                } else {
                    this.$data.form.comp_id = null;
                }

                this.formErrors = null;
                this.isLoading = true;

                axios.post('/api/scheme/statuses/create', this.$data.form)
                    .then((response) => {
                        if (response.data.success === true) {
                            let statuses = this.$store.getters.statuses;
                            statuses.push(response.data.status);
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-status')
                            });
                            this.isLoading = false;
                            this.resetForm();
                        }
                    })
                    .catch(error => {
                        if (error.response && error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            updateStatus(bvModalEvt) {
                bvModalEvt.preventDefault();
                this.$v.form.$touch();
                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.formErrors = null;
                this.isLoading = true;

                delete this.$data.form.comp_id;
                axios.post('/api/scheme/statuses/update/' + this.selectedStatus, this.$data.form)
                    .then((response) => {
                        if (response.data.success === true) {
                            let statuses = this.$store.getters.statuses;
                            const statusIndex = statuses.findIndex(status => status.id === this.selectedStatus);
                            statuses.splice(statusIndex, 1);
                            statuses.push(response.data.status);
                            statuses.sort((n1, n2) => n1.id - n2.id);
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-status')
                            });
                            this.resetForm();
                            this.selectedStatus = null;
                            this.updateMode = false;
                            this.isLoading = false;
                        }
                    })
                    .catch(error => {
                        if (error.response && error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            confirmDelete(id) {
                this.selectedStatus = id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-confirm-status-deletion')
                });
            },
            deleteStatus() {
                this.errors = null;
                this.formErrors = null;
                this.isLoading = true;
                axios.post('/api/scheme/statuses/' + this.selectedStatus)
                    .then((response) => {
                        if (response.data.success === true) {
                            let statuses = this.$store.getters.statuses;
                            const statusIndex = statuses.findIndex(status => status.id === this.selectedStatus);
                            statuses.splice(statusIndex, 1);
                            this.selectedStatus = null;
                            this.isLoading = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-confirm-status-deletion')
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
            }
        },
        validations: {
            form: {
                name: {
                    required,
                    minLength: minLength(6)
                }
            }
        }
    }
</script>

<style scoped>

</style>
