<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div v-bind:class="{'invisible': !selectedAction }">
            <ComponentActionView
                :actions="actions"
                :statuses="statuses"
                :userGroups="userGroups"
                :userCategories="userCategories"
                :userFields="userFields"
                :fields="fields"
                :selectedAction="selectedAction"
                :selectedUserActivities="selectedUserActivities"
                :selectedEmailActivities="selectedEmailActivities"
                :selectedFieldList="selectedFieldList"
                :methodRenderActions="renderActions"
                @selectActionChanged="selectedAction = $event"
            ></ComponentActionView>
        </div>
        <div class="card">
            <div class="card-header">Действия:
                <button class="btn btn-sm btn-outline-primary float-right"
                        v-b-modal.modal-create-action>Добавить
                </button>
            </div>
            <div class="card-body">
                <panZoom :options="{minZoom: 0.1, maxZoom: 5}" selector="#tree-block">
                    <div class="tree-body">
                        <div id="tree-block"></div>
                    </div>
                </panZoom>
            </div>
        </div>

        <b-modal
            id="modal-create-action"
            ref="modal"
            title="Добавить действие"
            cancel-title="Отмена"
            ok-title="Сохранить"
            @ok="createActionSubmit"
        >
            <form ref="form">
                <input type="hidden" v-model="form.comp_id">
                <div class="form-group">
                    <label for="name">Название</label>
                    <input type="text" id="name" class="form-control" v-model="form.name"
                           :class="{'is-invalid': $v.form.name.$error}" @blur="$v.form.name.$touch()"/>
                    <div class="invalid-feedback" v-if="!$v.form.name.required">Обязательно для заполнения.</div>
                    <div class="invalid-feedback" v-if="!$v.form.name.minLength">
                        Минимальная длина {{ $v.form.name.$params.minLength.min }} символов. Сейчас {{ form.name.length
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
                        <option v-for="option in statuses" v-bind:key="option.id" v-bind:value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Родительское дейсивие</label>
                    <select v-model="form.par_act_id" class="form-control">
                        <option disabled value="">Выберите</option>
                        <option value="">Новый / Нет родителя</option>
                        <option v-for="option in actions" v-bind:key="option.id" v-bind:value="option.id">
                            {{ option.act_title }}  ({{ option.id }})
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Обратное действие</label>
                    <select v-model="form.back_act_id" class="form-control">
                        <option disabled value="">Выберите</option>
                        <option value="">Новый / Нет родителя</option>
                        <option v-for="option in actions" v-bind:key="option.id" v-bind:value="option.id">
                            {{ option.act_title }} ({{ option.id }})
                        </option>
                    </select>
                </div>
            </form>
        </b-modal>
    </div>
</template>
<script>
    import '../libs/treant-js/treant.js'
    import '../libs/treant-js/treant.css'
    import Raphael from "../libs/treant-js/raphael"
    import jQueryEasing from "../libs/treant-js/jquery.easing"

    window.Raphael = Raphael;
    window.jQueryEasing = jQueryEasing;

    import {required, minLength} from 'vuelidate/lib/validators'
    import axios from "axios";
    import ComponentActionView from "./ComponentActionView";
    import {mapGetters} from 'vuex';
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "ComponentActions",
        mixins: [TheContentMixin],
        props: ['actions', 'statuses', 'selectedTab', 'userGroups', 'userCategories', 'userFields', 'fields'],
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                    status_id: '',
                    comp_id: this.$route.params.id,
                    par_act_id: '',
                    back_act_id: '',
                },
                selectedAction: null,
                selectedUserActivities: null,
                selectedEmailActivities: null,
                selectedFieldList: null,
                isLoading: false
            }
        },
        computed: {
            ...mapGetters([
                'getActionById'
            ])
        },
        watch: {
            selectedTab: function (newVal, oldVal) {
                console.log('watch selectedAction', newVal, oldVal);
                this.selectedAction = null;
            }
        },
        components: {
            ComponentActionView, 
            Loading: VueLoading
        },
        mounted() {
            this.renderActions();
        },
        methods: {
            getUserActivities(id) {
                return new Promise(() => {
                    axios.get(`/api/scheme/user-activities/${id}`)
                        .then((response) => {
                            return response.data.userActivities;
                        });
                });
            },
            getEmailActivities(id) {
                return new Promise(() => {
                    axios.get(`/api/scheme/email-activities/${id}`)
                        .then((response) => {
                            return response.data.emailActivities;
                        });
                });
            },
            renderActions(data = null) {
                let vm = this;
                let config, chart_config, actionsIDs = [];
                if (data) {
                    this.$store.state.actions = data;
                    this.actions = data;
                }
                if (this.actions) {
                    // let data = [];

                    this.actions.forEach(function (action) {
                        actionsIDs.push(action.id);
                    });
                    let responsibleGroups = [];
                    axios.get(`/api/scheme/responsible-activities/[${actionsIDs}]`)
                        .then((response) => {
                            responsibleGroups = response.data.responsibleActivities;
                            let obj = {};
                            config = {
                                maxDepth: 3000,
                                container: "#tree-block",
                                rootOrientation: "WEST",
                                animateOnInit: false,
                                node: {
                                    HTMLclass: 'nodeBlock',
                                    collapsable: false
                                },
                                animation: {
                                    nodeAnimation: "easeOutBounce",
                                    nodeSpeed: 500,
                                    connectorsAnimation: "bounce",
                                    connectorsSpeed: 500
                                },
                            };
                            chart_config = [config];

                            this.actions.forEach(function (action) {
                                let back = action.back_act_id ? '  (back: ' + action.back_act_id + ')' : '';
                                let responsible_name = responsibleGroups.find(resp => resp.act_id === action.par_act_id);
                                responsible_name = responsible_name ? responsible_name.group_name : ' - - - - ';
                                console.log(responsible_name);
                                if (action.par_act_id > 0) {
                                    obj[action.id] = {
                                        parent: obj[action.par_act_id],
                                        text: {
                                            id: action.id,
                                            name: responsible_name + back,
                                            title: action.act_title,
                                        }
                                    };
                                    chart_config.push(obj[action.id]);
                                    // data.push(obj[action.id]);
                                    // data.push({
                                    //     id: action.id,
                                    //     pid: action.par_act_id,
                                    //     name: action.act_title,
                                    //     title: action.act_title + ' (ID: ' + action.id + ') ' + responsible_name + back,
                                    // });
                                } else {
                                    // data.push({
                                    //     id: action.id,
                                    //     name: action.act_title,
                                    //     title: action.act_title + ' (ID: ' + action.id + ') ' + responsible_name + back,
                                    // });
                                    obj[action.id] = {
                                        text: {
                                            id: action.id,
                                            name: action.act_title,
                                            title: ''
                                        }
                                    };
                                    // data.push(obj[action.id]);
                                    chart_config.push(obj[action.id]);
                                }
                            });

                            new Treant(chart_config, null, $);
                            let counter = 0;
                            $('body').unbind().on('click', '.Treant .node', function () {
                                let id = $(this).find(".node-id").text();
                                counter++;
                                console.log('treant', id);
                                console.log('counter', counter);
                                vm.isLoading = true;
                                vm.selectedAction = vm.getActionById(parseInt(id));

                                const urls = [
                                    `/api/scheme/user-activities/${id}`,
                                    `/api/scheme/email-activities/${id}`,
                                    `/api/scheme/field-list/${id}`
                                ];

                                let requests = urls.map(url => axios(url));

                                Promise.all(requests)
                                    .then(responses => {
                                        vm.selectedUserActivities = responses[0].data.userActivities;
                                        vm.selectedEmailActivities = responses[1].data.emailActivities;
                                        vm.selectedFieldList = responses[2].data.fieldLists;
                                        vm.isLoading = false;
                                    });

                                vm.scrollToTop();
                                return false;
                            });

                            this.isLoading = false;
                            this.setTreeBlockWidth();
                            this.$emit('isLoadingChanged', this.isLoading);
                        });


                }
            },
            setTreeBlockWidth() {
                let treeBlockElement = document.getElementById('tree-block');
                let svgBlock = treeBlockElement.querySelector('svg');
                let svgWidth = svgBlock.getAttribute('width');
                treeBlockElement.setAttribute('style', "width:" + svgWidth + "px");
            },

            createActionSubmit(bvModalEvt) {
                bvModalEvt.preventDefault();
                this.$v.form.$touch();
                if (this.$v.form.$pending || this.$v.form.$error) return;

                this.isLoading = true;
                axios.post('/api/scheme/actions/create', this.$data.form).then((response) => {
                    this.actions.push(response.data.action);
                    this.renderActions();
                    this.$nextTick(() => {
                        this.$bvModal.hide('modal-create-action')
                    });
                    this.resetForm();
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
                },
                status_id: {
                    required
                }
            }
        }
    }
</script>

<style scoped>
    #orgchart .get-box {
        fill: #00B48C;
        stroke: #008A17;
    }

    #orgchart .get-oc-c .link {
        stroke: red;
    }

    #orgchart .get-text-0 {
        fill: white;
        font-size: 50px;
    }

    #orgchart .get-text-1 {
        fill: white;
        font-size: 60px;
        font-weight: bold;
    }

    #orgchart .get-text-2 {
        fill: black;
        font-size: 50px;
        font-weight: bold;
    }

    #orgchart .get-prev-page {
        display: none;
    }

    #orgchart .field_0 {
        color: #000 !important;
    }

    #orgchart {
        width: 100%;
        height: 700px;
        background-color: #663399
    }

    .invisible {
        display: none;
    }
</style>
