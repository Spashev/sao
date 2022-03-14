<template>
    <b-container class="theDashboard" tag="main">
        <b-row>
            <b-col>
                <form novalidate>
                    <vue-form-generator :schema="schema" :model="model" :options="formOptions" ref="vfg"></vue-form-generator>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary" v-on:click="sendForm()">Submit form</button>
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

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import VueFormGenerator from 'vue-form-generator';
    import 'vue-form-generator/dist/vfg.css';
    import 'vue-multiselect/dist/vue-multiselect.min.css';
    VueFormGenerator.validators.resources.fieldIsRequired = "Поле обязательно для заполнения!";


    export default {
        name: "Test",
        components: {
            "vue-form-generator": VueFormGenerator.component,
        },
        data() {
            return {
                model: {
                    skills: [],
                },
                schema: {
                    fields: [
                        // {
                        //     type: "vueMultiSelect",
                        //     label: "Skills (vue-multiSelect field)",
                        //     model: "skills",
                        //     required: true,
                        //     multiSelect: true,
                        //     selectOptions: {
                        //         searchable: true,
                        //         clearOnSelect: true,
                        //         hideSelected: true,
                        //         multiple: true,
                        //         tagPlaceholder: "tagPlaceholder",
                        //         onNewTag(newTag, id, options, value) {
                        //             console.log("onNewTag", newTag, id, options, value);
                        //             options.push(newTag);
                        //             value.push(newTag);
                        //         },
                        //         onSearch: function(searchQuery, id, options) {
                        //             var vm = this;
                        //             console.log("onSearch", searchQuery, id, options);
                        //
                        //             axios.get(`/api/scheme/user/search?query=${searchQuery}`).then( response => {
                        //                 //var field = vm.schema.fields.find(field => field.model === 'skills');
                        //                 //field.values = response.data.items;
                        //                 response.data.items.forEach(function (data) {
                        //                     if(options.indexOf(data.email) === -1){
                        //                         options.push(data.email);
                        //                     }
                        //                 });
                        //             });
                        //         }
                        //     },
                        //     values: [
                        //
                        //     ]
                        // }
                    ]
                },
                formOptions: {
                    validateAfterLoad: true,
                    validateAfterChanged: true,
                    validateAsync: true
                },
                formErrors: null,
            };
        },
        created: async function () {
            await this.getFormData();
        },
        methods: {
            async getFormData() {
                let vm = this;
                axios.get(`/api/get-form`).then((response) => {
                    if(response.data.success === 1){
                        this.model = response.data.model[0];
                        this.schema['fields'] = response.data.schema;

                        vm.regenerateForm();
                    }
                }).catch(error => {});
            },
            regenerateForm(){
                let vm = this;
                let field = vm.schema.fields.find(field => field.model === 'description');
                vm.schema.fields.forEach(function (data) {
                    if(data.model === 'description'){
                        data.selectOptions.onSearch = function(searchQuery, id, options) {
                            var vm = this;
                            console.log("onSearch", searchQuery, id, options);

                            if(searchQuery.length > 2){
                                axios.get(`/api/scheme/user/search?query=${searchQuery}`).then( response => {
                                    //var field = vm.schema.fields.find(field => field.model === 'skills');
                                    //field.values = response.data.items;
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
            onSearchChange(searchQuery, id) {
                let onSearch = this.selectOptions.onSearch;
                if (typeof onSearch == "function") {
                    onSearch(searchQuery, id, this.options);
                }
            },
            userSearch(searchQuery) {
                axios.get(`/api/scheme/user/search?query=${searchQuery}`).then( response => {
                    console.log(response.data.items);
                    this.model.skills = response.data.items;
                });
            },
            sendForm(){
                let errors = this.$refs.vfg.errors;
                errors.forEach(function (data) {
                    console.log(data.field.label, data.error);
                });
                console.log(this.$refs.vfg);
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
    };
</script>
<style scoped>
    html {
        font-size: 14px;
    }

    body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
    }

    pre {
        overflow: auto;
    }

    pre .string {
        color: #885800;
    }

    pre .number {
        color: blue;
    }

    pre .boolean {
        color: magenta;
    }

    pre .null {
        color: red;
    }

    pre .key {
        color: green;
    }

    h1 {
        text-align: center;
        font-size: 36px;
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: 500;
    }

    fieldset {
        border: 0;
    }

    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }

    .panel-heading {
        color: #333;
        background-color: #f5f5f5;
        border-color: #ddd;

        padding: 10px 15px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .panel-body {
        padding: 15px;
    }

    .field-checklist .wrapper {
        width: 100%;
    }
</style>
