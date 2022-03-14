<template>
    <div class="card">
        <div class="card-header">Группы Пользователя:
            <button class="btn btn-sm btn-outline-primary float-right"
                    v-b-modal.modal-create-group>Добавить
            </button>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-8">
                    <div class="table-responsive m-1 ">
                        <table class="table table-bordered table-hover table-condensed" v-if="userGroups">
                            <tr v-for="(group, index) in userGroups" :key="index">
                                <td>
                                    <a href="#" @click="showFieldList(group['id'])"
                                       class="ml-1"><b>{{group.group_name}}</b></a><br/>
                                    <table class="table table-bordered table-rendered"
                                           v-if="selectedGroupID == group.id && groupFieldsUsers">
                                        <div v-if="selectedGroupID && groupFieldsUsers"
                                             v-for="(field, index2) in groupFieldsUsers[selectedGroupID]"
                                             :key="index2">
                                            <div class="container">
                                                <div class="row border-bottom">
                                                    <div class="col-8">
                                                        <a href="#" @click="showUserList(group.id, field.id)">{{field.name}}</a>
                                                    </div>
                                                    <div class="col-2">
                                                        <b-icon icon="people-fill" aria-hidden="true"></b-icon>
                                                        <span v-if="!field['user_list'][0]"><b-badge>0</b-badge></span>
                                                        <span v-if="field['user_list'][0]"><b-badge>{{Object.keys(field['user_list'][0]).length}}</b-badge></span>
                                                    </div>
                                                    <div class="col-2">
                                                        <b-icon icon="envelope" aria-hidden="true"></b-icon>
                                                        <span v-if="!field['user_list'][1]"><b-badge>0</b-badge></span>
                                                        <span v-if="field['user_list'][1]"><b-badge>{{Object.keys(field['user_list'][1]).length}}</b-badge></span>
                                                    </div>
                                                </div>
                                                <div class="m-1"
                                                     v-if="selectedFieldID == group['id']+'_'+field.id && groupFieldsUsers">
                                                    <table class="table table-bordered table-hover table-rendered">
                                                        <tr v-for="user in field['user_list'][0]">
                                                            <td>{{user.email}}</td>
                                                            <td>{{user.mobile}}</td>
                                                            <td>{{user.is_email ? 'Email':'-'}}</td>
                                                            <td>{{user.is_admin ? 'Admin':'-'}}</td>
                                                            <td width="50px">
                                                                <a href="#"
                                                                   @click="deleteUser(group.id, field.id, user.id, user.is_email)">
                                                                    <b-badge>Удалить</b-badge>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr v-for="user in field['user_list'][1]">
                                                            <td>{{user.email}}</td>
                                                            <td>{{user.mobile}}</td>
                                                            <td>{{user.is_email ? 'Email':'-'}}</td>
                                                            <td>{{user.is_admin ? 'Admin':'-'}}</td>
                                                            <td width="50px">
                                                                <a href="#"
                                                                   @click="deleteUser(group.id, field.id, user.id, user.is_email)">
                                                                    <b-badge>Удалить</b-badge>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                </div>
                                            </div>

                                        </div>

                                    </table>
                                </td>
                                <td style="width:110px;">
                                    <b-button v-on:click="showUpdateGroupModal(group)" variant="outline-secondary"
                                              size="sm" class="p-1">
                                        <b-icon icon="pencil" aria-hidden="true"></b-icon>
                                    </b-button>
                                    <b-button v-on:click="confirmDelete(group.id)" variant="outline-secondary"
                                              size="sm" class="p-1">
                                        <b-icon icon="trash" aria-hidden="true"></b-icon>
                                    </b-button>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card m-1 p-2">
                        <div class="card-body">
                            <h6 class="card-title text-center">Добавить пользователя</h6>
                            <form ref="form" @submit.prevent="addUser()">
                                <div class="form-group">
                                    <select v-model="formGroup.group_id" class="form-control"
                                            :class="{'is-invalid': $v.formGroup.group_id.$error}"
                                            @blur="$v.formGroup.group_id.$touch()">
                                        <option disabled value="">Выберите группу</option>
                                        <option v-for="option in userGroups" v-bind:value="option.id">
                                            {{ option.group_name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select v-model="formGroup.field_id" class="form-control">
                                        <option value="">Basic</option>
                                        <option v-for="option in userFields" v-bind:value="option.id">
                                            {{ option.field_name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" id="is_email" v-model="formGroup.is_email">
                                    <label for="name">Почта</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" id="is_admin" v-model="formGroup.is_admin">
                                    <label for="name">Админ</label>
                                </div>
                                <div class="form-group">
                                    <vue-bootstrap-typeahead
                                        :data="users"
                                        v-model="userSearch"
                                        size="sm"
                                        :serializer="s => s.email"
                                        placeholder="введите email..."
                                        @hit="selectedUser = $event"
                                    />
                                </div>
                                <div class="alert alert-danger" v-if="formErrors">
                                    <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                                        {{ fieldsError.join('\n') }}
                                    </div>
                                </div>
                                <button class="btn btn-sm btn-primary float-right">Добавить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal
            id="modal-create-group"
            ref="modal"
            :title="updateMode ? 'Изменить группу' : 'Создать группу'"
            :ok-title="updateMode ? 'Изменить' : 'Сохранить'"
            cancel-title="Отмена"
            @ok="submitGroupForm"
        >
            <form ref="form">
                <div class="form-group">
                    <input type="hidden" v-model="form.comp_id">
                    <label for="name">Название</label>
                    <input type="text" id="name" class="form-control" v-model="form.name"
                           :class="{'is-invalid': $v.form.name.$error}" @blur="$v.form.name.$touch()"/>
                    <div class="invalid-feedback" v-if="!$v.form.name.required">Поле Название обязательно для
                        заполнения
                    </div>
                    <div class="invalid-feedback" v-if="!$v.form.name.minLength">
                        Минимальная длина {{ $v.form.name.$params.minLength.min }} символов. Сейчас {{form.name.length
                        }}.
                    </div>
                </div>
            </form>
        </b-modal>
        <b-modal
            id="modal-confirm-group-deletion"
            ref="modal"
            title=""
            ok-title="Да"
            cancel-title="Нет"
            @ok="deleteGroup"
        >
            <h5>Вы действительно хотите удалить Группу?</h5>
        </b-modal>
    </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/lib/validators'
    import {SET_USER_GROUPS} from "../schemeStore";
    import TheAlert from "../../layout/TheAlert";
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

    export default {
        name: "ComponentUserGroups",
        props: ['userGroups', 'userFields'],
        components: {TheAlert, VueBootstrapTypeahead},
        mixins: [TheContentMixin],
        data() {
            return {
                form: {
                    name: '',
                    comp_id: this.$route.params.id,
                },
                formGroup: {
                    user_id: '',
                    group_id: '',
                    field_id: '',
                    is_email: 0,
                    is_admin: 0,
                },
                users: [],
                userSearch: '',
                selectedUser: null,
                selectedGroup: null,
                updateMode: false,
                formErrors: null,
                errors: null,
                alerts: null,
                isLoading: true,
                groupFieldsUsers: null,
                selectedGroupID: '',
                selectedFieldID: '',
            }
        },
        watch: {
            userSearch(newQuery) {
                axios.get(`/api/scheme/user/search?query=${newQuery}`)
                    .then((res) => {
                        this.users = res.data.items
                    })
            }
        },
        methods: {
            addUser() {
                this.formErrors = null;
                this.$v.formGroup.$touch();

                if (this.$v.formGroup.$pending || this.$v.formGroup.$error) return;

                if (this.userSearch) {
                    if (this.selectedUser && this.userSearch === this.selectedUser.email) {
                        this.$data.formGroup.user_id = this.selectedUser.id;
                    } else {
                        this.formErrors = {error: ['Вам необходимо выбрать пользователя!']};
                        return;
                    }
                } else {
                    this.formErrors = {error: ['Вам необходимо выбрать пользователя!']};
                    return;
                }

                axios.post('/api/scheme/user-groups/add-user', this.$data.formGroup)
                    .then((response) => {
                        this.groupFieldsUsers = response.data.groupFieldsUsers;
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
            },
            deleteUser(group_id, field_id, user_id, is_email) {
                let form = {
                    group_id: group_id, field_id: field_id, user_id: user_id, is_email: is_email
                };
                axios.post('/api/scheme/user-groups/delete-user', form)
                    .then((response) => {
                        this.$delete(this.groupFieldsUsers[group_id][field_id]['user_list'][is_email], user_id);
                    })
                    .catch(error => {
                        if (error.response.data) {
                            this.formErrors = error.response.data.errors;
                            return;
                        }
                    });
            },
            showFieldList(group_id) {
                this.selectedGroupID = group_id;

                axios.get(`/api/scheme/user-groups/fields/${group_id}`)
                    .then((response) => {
                        this.groupFieldsUsers = response.data.groupFieldsUsers;
                    });

            },
            showUserList(group_id, field_id) {
                this.selectedFieldID = group_id + '_' + field_id;
            },
            showUpdateGroupModal(group) {
                this.updateMode = true;
                this.form.id = this.selectedGroup = group.id;
                this.form.name = group.group_name;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-create-group')
                });
            },
            submitGroupForm(bvModalEvt) {
                this.updateMode ? this.updateGroup(bvModalEvt) : this.createGroup(bvModalEvt);
            },
            createGroup(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault();

                this.$v.form.$touch();
                // if its still pending or an error is returned do not submit
                if (this.$v.form.$pending || this.$v.form.$error) return;
                // Exit when the form isn't valid

                // Push the name to submitted names

                axios.post('/api/scheme/user-groups/create', this.$data.form).then((response) => {
                    this.$store.dispatch(SET_USER_GROUPS, this.$route.params.id);
                    this.$nextTick(() => {
                        this.$bvModal.hide('modal-create-group')
                    });
                    this.isLoading = true;
                    this.$data.form.name = '';
                });
            },
            updateGroup() {
                this.formErrors = null;
                this.$v.form.$touch();

                if (this.$v.form.$pending || this.$v.form.$error) return;
                this.isLoading = true;

                axios.post('/api/scheme/user-groups/update/' + this.selectedGroup, this.$data.form)
                    .then((response) => {
                        if (response.data.success === 1) {
                            // let groups = this.$store.state.userGroups;
                            console.log('groups', this.userGroups);
                            const groupIndex = this.userGroups.findIndex(group => group.id === this.selectedGroup);
                            this.userGroups.splice(groupIndex, 1);
                            this.userGroups.push(response.data.userGroup);
                            this.userGroups.sort((n1, n2) => n1.id - n2.id);
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-create-group')
                            });
                            this.resetForm();
                            this.selectedGroup = null;
                            this.updateMode = false;
                            this.isLoading = false;
                        }
                    })
                    .catch(error => {
                        console.log('error', error);
                        if (error.response && error.response.data) {
                            this.formErrors = error.response.data.errors;
                            this.isLoading = false;
                            return;
                        }
                    });
            },
            confirmDelete(id) {
                this.selectedGroup = id;
                this.$nextTick(() => {
                    this.$bvModal.show('modal-confirm-group-deletion')
                });
            },
            deleteGroup() {
                this.errors = null;
                axios.post('/api/scheme/user-groups/' + this.selectedGroup)
                    .then((response) => {
                        if (response.data.success === 1) {
                            // let userGroups = this.$store.getters.userGroups;
                            // console.log(userGroups);
                            const groupIndex = this.userGroups.findIndex(group => group.id === this.selectedGroup);
                            this.userGroups.splice(groupIndex, 1);
                            this.selectedGroup = null;
                            this.$nextTick(() => {
                                this.$bvModal.hide('modal-confirm-group-deletion')
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
            },
            formGroup: {
                group_id: {
                    required
                }
            }
        }
    }
</script>

<style scoped>

</style>
