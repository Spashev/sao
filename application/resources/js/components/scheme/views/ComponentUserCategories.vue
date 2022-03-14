<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="card">
            <div class="card-header">Категории Пользователя:
                <button class="btn btn-sm btn-outline-primary float-right"
                        v-b-modal.modal-create-user-category>Добавить
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th class="table__id">ID</th>
                            <th>Наименование</th>
                            <th style="width: 100px;"></th>
                        </tr>
                        </thead>
                        <tbody v-if="userCategories">
                        <tr v-for="(item, index) in userCategories" :key="index">
                            <td class="table__id">{{ item.id }}</td>
                            <td>{{ item.cat_name }}</td>
                            <td>
                                <b-button v-on:click="showUpdateUserCategoryModal(item)" variant="outline-secondary"
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
                id="modal-create-user-category"
                ref="modal"
                :title="updateMode ? 'Изменить категорию' : 'Создать категорию'"
                :ok-title="updateMode ? 'Изменить' : 'Сохранить'"
                cancel-title="Отмена"
                @ok="submitUserCategoryForm"
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
                </form>
            </b-modal>
            <b-modal
                id="modal-confirm-user-category-deletion"
                ref="modal"
                title=""
                ok-title="Да"
                cancel-title="Нет"
                @ok="deleteUserCategory"
            >
                <h5>Вы действительно хотите удалить категорию?</h5>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/lib/validators'
    import axios from "axios"
    import {SET_USER_CATEGORIES} from "../schemeStore";
    import TheAlert from "../../layout/TheAlert";
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "ComponentUserCategories",
        props: ['userCategories'],
        components: {
            TheAlert,
            Loading: VueLoading
        },
        mixins: [TheContentMixin],
        data() {
            return {
                form: {
                    name: '',
                    comp_id: this.$route.params.id,
                },
                selectedUserCategory: null,
                updateMode: false,
                formErrors: null,
                errors: null,
                alerts: null,
                isLoading: false
            }
        },
        methods: {
            showUpdateUserCategoryModal(userCategory) {
                this.updateMode = true;
                this.form.id = this.selectedUserCategory = userCategory.id;
                this.form.name = userCategory.cat_name;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-create-user-category')
                });
            },
            submitUserCategoryForm(bvModalEvt) {
                this.updateMode ? this.updateUserCategory(bvModalEvt) : this.createUserCategory(bvModalEvt);
            },
            createUserCategory(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.$v.form.$touch();
                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.formErrors = null;
                this.isLoading = true;

                axios.post('/api/scheme/user-categories/create', this.$data.form).then((response) => {
                    this.$store.dispatch(SET_USER_CATEGORIES, this.$route.params.id);
                    this.$nextTick(() => {
                        this.$bvModal.hide('modal-create-user-category')
                    });
                    this.isLoading = false;
                    this.$data.form.name = '';
                });
            },
            updateUserCategory(bvModalEvt) {
                bvModalEvt.preventDefault();
                this.$v.form.$touch();

                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.formErrors = null;
                this.isLoading = true;

                axios.post('/api/scheme/user-categories/update/' + this.selectedUserCategory, this.$data.form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            const userCategoriesIndex = this.userCategories.findIndex(userCategories => userCategories.id === this.selectedUserCategory);
                            this.userCategories.splice(userCategoriesIndex, 1);
                            this.userCategories.push(response.data.userCategory);
                            this.userCategories.sort((n1, n2) => n1.id - n2.id);
                            this.updateMode = false;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-user-category')
                            });
                            this.resetForm();
                            this.selectedUserCategory = null;
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
                this.selectedUserCategory = id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-confirm-user-category-deletion')
                });
            },
            deleteUserCategory() {
                this.errors = null;
                this.isLoading = true;
                axios.post('/api/scheme/user-categories/' + this.selectedUserCategory)
                    .then((response) => {
                        if (response.data.success === 1) {
                            const userCategoriesIndex = this.userCategories.findIndex(userCategories => userCategories.id === this.selectedUserCategory);
                            this.userCategories.splice(userCategoriesIndex, 1);
                            this.selectedUserCategory = null;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-confirm-user-category-deletion')
                            });
                            this.isLoading = false;
                        }
                    })
                    .catch(error => {
                        if (error.response.data.messages) {
                            this.isLoading = true;
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
                }
            }
        }
    }
</script>

<style scoped>

</style>
