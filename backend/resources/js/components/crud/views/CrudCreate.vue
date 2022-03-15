<template>
    <div>
        <div class="card">
            <div class="card-header">
                Create CRUD
            </div>
            <div class="card-body">
                <div class="card-text">
                    <!--form @submit.prevent="create()">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="name">Название</label>
                                    <input type="text" id="name" class="form-control" v-model="form.title"
                                           :class="{'is-invalid': $v.form.title.$error}"
                                           @blur="$v.form.title.$touch()"/>
                                    <div class="invalid-feedback" v-if="!$v.form.title.required">Обязательно для
                                        заполнения
                                    </div>
                                    <div class="invalid-feedback" v-if="!$v.form.title.minLength">
                                        Минимальная длина {{ $v.form.title.$params.minLength.min }} символов. Сейчас {{
                                        form.title.length }}.
                                    </div>
                                    <div class="invalid-feedback" v-if="!$v.form.title.maxLength">
                                        Максимальная длина {{ $v.form.title.$params.maxLength.max }} символов. Сейчас {{
                                        form.title.length }}.
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
                                        Минимальная длина {{ $v.form.description.$params.minLength.min }} символов.
                                        Сейчас
                                        {{ form.description.length }}.
                                    </div>
                                    <div class="invalid-feedback" v-if="!$v.form.description.maxLength">
                                        Максимальная длина {{ $v.form.description.$params.maxLength.max }} символов.
                                        Сейчас
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
                                <button class="btn btn-sm btn-outline-dark">Отмена</button>
                                <button class="btn btn-sm btn-outline-primary">Сохранить</button>
                            </div>
                        </div>
                    </form-->
                    <form novalidate>
                        <vue-form-generator :schema="schema" :model="model" :options="formOptions" ref="vfg"></vue-form-generator>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary" v-on:click="sendForm()">Submit form</button>
                        </div>
                        <div class="alert alert-danger" v-if="formErrors">
                            <div v-for="(fieldsError, fieldName) in formErrors" :key="fieldName">
                                {{ fieldsError.join('\n') }}
                            </div>
                        </div>
                    </form>

                    <div class="panel panel-default">
                        <div class="panel-heading">Model</div>
                        <div class="panel-body">
                            <pre v-if="model" v-html="prettyJSON(model)"></pre>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">Schema</div>
                        <div class="panel-body">
                            <pre v-if="model" v-html="prettyJSON(schema)"></pre>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">

            </div>
        </div>
    </div>
</template>

<script>
    import {required, minLength, maxLength} from 'vuelidate/lib/validators'
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import VueFormGenerator from 'vue-form-generator';
    import 'vue-form-generator/dist/vfg.css';
    import 'vue-multiselect/dist/vue-multiselect.min.css';

    VueFormGenerator.validators.resources.fieldIsRequired = "Поле обязательно для заполнения!";


    export default {
        name: "CrudCreate",
        mixins: [TheContentMixin],
        data() {
            return {
                title: 'Create CRUD',
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'CRUD',
                        to: {path: '/crud'}
                    },
                    {
                        text: this.title,
                        active: true
                    }
                ],
                // form: {
                //     title: '',
                //     description: '',
                // },
                model: {},
                schema: {
                    fields: []
                },
                formOptions: {
                    validateAfterLoad: true,
                    validateAfterChanged: true,
                    validateAsync: true
                },
                formErrors: null,
                isLoading: false
            };
        },
        components: {
            Loading: VueLoading,
            "vue-form-generator": VueFormGenerator.component,
        },
        created: async function () {
            await this.getFormData();
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
        },
        methods: {
            // create() {
            //     this.formErrors = null;
            //     this.$v.form.$touch();
            //
            //     if (this.$v.form.$pending || this.$v.form.$error) return;
            //     this.isLoading = true;
            //
            //     axios.post('/api/crud/create', this.$data.form)
            //         .then((response) => {
            //             if (response.data.success === 1) {
            //                 let cruds = this.$store.getters.cruds;
            //                 cruds.push(response.data.crud);
            //                 this.$router.push({path: "/crud"});
            //             }
            //         })
            //         .catch(error => {
            //             if (error.response.data) {
            //                 this.formErrors = error.response.data.errors;
            //                 this.isLoading = false;
            //                 return;
            //             }
            //         });
            // },
            async getFormData() {
                let vm = this;
                axios.get(`/api/crud/get-form`).then((response) => {
                    if(response.data.success === 1){
                        this.model = response.data.model[0];
                        this.schema['fields'] = response.data.schema;

                        vm.regenerateForm();
                    }
                }).catch(error => {});
            },
            regenerateForm(){
                let vm = this;
                vm.schema.fields.forEach(function (data) {
                    if(data.model === 'description'){
                        data.selectOptions.onSearch = function(searchQuery, id, options) {
                            if(searchQuery.length > 2){
                                axios.get(`/api/scheme/user/search?query=${searchQuery}`).then( response => {
                                    let items = response.data.items;
                                    for(let i = 0; i < items.length; i++){
                                        if(options.length > 1){
                                            for(let j = 0; j < options.length; j++){
                                                let bool = true;
                                                if(items[i].id === option[j].id){
                                                    bool = false;
                                                    break;
                                                }
                                                if(bool === true){
                                                    options.push({id: items[i].id, name: items[i].email});
                                                }
                                            }
                                        }else{
                                            options.push({id: items[i].id, name: items[i].email});
                                        }
                                    }
                                });
                            }
                        };
                    }
                });
            },
            sendForm(){
                // let errors = this.$refs.vfg.errors;
                // errors.forEach(function (data) {
                //     console.log(data.field.label, data.error);
                // });
                // console.log(this.$refs.vfg);
                axios.post('/api/crud/create', this.model)
                        .then((response) => {
                            console.log(response);
                            if (response.data.success === 1) {
                                let cruds = this.$store.getters.cruds;
                                cruds.push(response.data.crud);
                                this.$router.push({path: "/crud"});
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
            prettyJSON: function (json) {
                if (json) {
                    json = JSON.stringify(json, undefined, 4);
                    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
                    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                        var cls = 'number';
                        if (/^"/.test(match)) {
                            if (/:$/.test(match)) {
                                cls = 'key';
                            } else {
                                cls = 'string';
                            }
                        } else if (/true|false/.test(match)) {
                            cls = 'boolean';
                        } else if (/null/.test(match)) {
                            cls = 'null';
                        }
                        return '<span class="' + cls + '">' + match + '</span>';
                    });
                }
            }
        },
        // validations: {
        //     form: {
        //         title: {
        //             required,
        //             minLength: minLength(3),
        //             maxLength: maxLength(2551)
        //         },
        //         description: {
        //             required,
        //             minLength: minLength(3),
        //             maxLength: maxLength(4000)
        //         }
        //     }
        // }
    }
</script>

<style scoped>

</style>
