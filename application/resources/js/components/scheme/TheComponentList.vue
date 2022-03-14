<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">{{ this.getTitle(this.breadcrumbs) }}
                        <button class="btn btn-sm btn-outline-primary float-right" @click="showCreateModal">Добавить
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-danger m-2" v-if="errors">
                            {{ errors }}
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th class="table__id">ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th style="width: 100px;"></th>
                                </tr>
                                </thead>
                                <tbody v-if="components">
                                <tr v-for="(item, index) in components" :key="index">
                                    <td class="table__id">{{ item.id }}</td>
                                    <td>
                                        <router-link :to="`/scheme/${item.id}`">{{ item.comp_name }}</router-link>
                                    </td>
                                    <td>{{ item.comp_desc }}</td>
                                    <td>
                                        <router-link :to="`/scheme/${item.id}`">
                                            <b-button variant="outline-secondary" size="sm" class="p-1">
                                                <b-icon icon="eye" aria-hidden="true"></b-icon>
                                            </b-button>
                                        </router-link>
                                        <b-button v-on:click="updateComponentModal(item)" variant="outline-secondary"
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
                </div>
            </div>
        </div>
        <div class="modal fade show" v-if="modalVisibility" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <form @submit.prevent="updateMode ? updateComponent() : createComponent()">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ updateMode ? 'Изменить компонент' : 'Создать компонент' }}</h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                @click="modalVisibility = false"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" class="form-control" v-model="form.id" v-if="updateMode">
                            <div class="form-group">
                                <label for="name">Название</label>
                                <input type="text" id="name" class="form-control" v-model="form.name"
                                       :class="{'is-invalid': $v.form.name.$error}" @blur="$v.form.name.$touch()"/>
                                <div class="invalid-feedback" v-if="!$v.form.name.required">Обязательно для заполнения
                                </div>
                                <div class="invalid-feedback" v-if="!$v.form.name.minLength">
                                    Минимальная длина {{ $v.form.name.$params.minLength.min }} символов. Сейчас {{
                                    form.name.length }}.
                                </div>
                                <div class="invalid-feedback" v-if="!$v.form.name.maxLength">
                                    Максимальная длина {{ $v.form.name.$params.maxLength.max }} символов. Сейчас {{
                                    form.name.length }}.
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="description">Описание</label>
                                <input type="text" id="description" class="form-control" v-model="form.description"
                                       :class="{'is-invalid': $v.form.description.$error}"
                                       @blur="$v.form.description.$touch()"/>
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
                            <div class="alert alert-danger" v-if="formErrors">
                                <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                                    {{ fieldsError.join('\n') }}
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-sm btn-outline-dark" @click="modalVisibility = false">Отмена</button>
                            <button class="btn btn-sm btn-outline-primary">{{ updateMode ? 'Изменить' : 'Сохранить' }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-backdrop fade show" v-if="modalVisibility"></div>

        <b-modal
            id="modal-confirm-deletion"
            ref="modal"
            title=""
            ok-title="Да"
            cancel-title="Нет"
            @ok="deleteComponent"
        >
            <h5>Вы действительно хотите удалить Компонент?</h5>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.withCredentials = true;
    import {SET_COMPONENTS} from "./schemeStore";
    import {required, minLength, maxLength} from 'vuelidate/lib/validators'
    import {mapGetters} from "vuex";
    import TheContentMixin from "../../helpers/mixins/TheContentMixin";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "List",
        mixins: [TheContentMixin],
        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'Схема',
                        active: true
                    }
                ],
                modalVisibility: false,
                updateMode: false,
                form: {
                    name: '',
                    description: ''
                },
                selectedComponentId: null,
                formErrors: null,
                errors: null,
                isLoading: true
            }
        },
        components:{
            Loading: VueLoading
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
            this.fetchData();
        },
        computed: {
            ...mapGetters(["components"])
        },
        methods: {
            async fetchData() {
                await this.$store.dispatch(SET_COMPONENTS);
                this.isLoading = false;
            },
            showCreateModal() {
                this.selectedComponentId = null;
                this.updateMode = false;
                this.resetForm();
                this.modalVisibility = true;
            },
            createComponent() {
                this.formErrors = null;
                this.$v.form.$touch();

                if (this.$v.form.$pending || this.$v.form.$error) return;
                this.isLoading = true;

                axios.post('/api/scheme/components/create', this.$data.form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            let components = this.$store.getters.components;
                            components.push(response.data.component);
                            this.modalVisibility = false;
                            this.resetForm();
                            this.isLoading = false;
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
            updateComponentModal(component) {
                this.updateMode = true;
                this.resetForm();
                this.form.id = this.selectedComponentId = component.id;
                this.form.name = component.comp_name;
                this.form.description = component.comp_desc;
                this.modalVisibility = true;
            },
            updateComponent() {
                this.formErrors = null;
                this.$v.form.$touch();

                if (this.$v.form.$pending || this.$v.form.$error) return;
                this.isLoading = true;

                axios.post('/api/scheme/components/update/' + this.selectedComponentId, this.$data.form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            let components = this.$store.getters.components;
                            const componentIndex = components.findIndex(component => component.id === this.selectedComponentId);
                            components.splice(componentIndex, 1);
                            components.push(response.data.component);
                            components.sort((n1,n2) => n1.id - n2.id);
                            this.modalVisibility = false;
                            this.resetForm();
                            this.selectedComponentId = null;
                            this.updateMode = false;
                            this.isLoading = false;
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
            confirmDelete(id) {
                this.selectedComponentId = id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-confirm-deletion')
                });
            },
            deleteComponent() {
                this.errors = null;
                axios.post('/api/scheme/components/' + this.selectedComponentId)
                    .then((response) => {
                        if (response.data.success === 1) {
                            let components = this.$store.getters.components;
                            const componentIndex = components.findIndex(component => component.id === this.selectedComponentId);
                            components.splice(componentIndex, 1);
                            this.selectedComponentId = null;
                        }
                    })
                    .catch(error => {
                        if (error.response.data.messages) {
                            this.errors = error.response.data.messages;
                            return;
                        }
                    });
            },
            resetForm() {
                var self = this;
                Object.keys(this.$data.form).forEach(function (key, index) {
                    self.$data.form[key] = '';
                });
            }
        },
        validations: {
            form: {
                name: {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(255)
                },
                description: {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(4000)
                }
            }
        }
    }
</script>

<style scoped>
    .modal {
        display: block;
    }

    .alert {
        font-size: 0.9rem;
    }

    .errors {
        background: #FF2205;
        border-radius: 5px;
        padding: 21px 0 2px 0;
    }

    .nav-pills .nav-link {
        background-color: rgba(0, 0, 0, .03);
        padding: .2rem 1rem;
        border: 1px solid rgba(0, 0, 0, 0.125);
    }

    .nav-pills .nav-link.active {
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
    }

    .nav-pills .nav-item .btn {
        display: flex;
    }

    .list-group-item {
        border: 1px solid rgba(0, 0, 0, .125) !important;
        padding: 0.05rem 1.25rem;
        font-size: 0.8em;
    }
</style>
