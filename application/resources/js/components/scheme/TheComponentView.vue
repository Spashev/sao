<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="row">
            <div class="col-md-10">
                <h6>Компонент: <span v-if="component">{{ component.comp_name}}</span></h6>
                <div class="tab-content">
                    <div class="tab-pane" :class="{'show active': selectedTab === 1}">
                        <ComponentActions
                            v-if="actions"
                            :actions="actions"
                            :statuses="statuses"
                            :userGroups="userGroups"
                            :userCategories="userCategories"
                            :userFields="userFields"
                            :fields="fields"
                            :selectedTab="selectedTab"
                            @isLoadingChanged="isLoading = $event"
                        ></ComponentActions>
                    </div>
                    <div class="tab-pane" :class="{'show active': selectedTab === 2}">
                        <ComponentStatuses
                            :statuses="statuses"
                            v-if="statuses"
                            @isLoadingChanged="isLoading = $event"></ComponentStatuses>
                    </div>
                    <div class="tab-pane" :class="{'show active': selectedTab === 3}">
                        <ComponentUserGroups
                            v-if="userGroups"
                            :userGroups="userGroups"
                            :userFields="userFields"
                            @isLoadingChanged="isLoading = $event"></ComponentUserGroups>
                    </div>
                    <div class="tab-pane" :class="{'show active': selectedTab === 4}">
                        <ComponentUserCategories
                            :userCategories="userCategories"
                            v-if="userCategories"
                            @isLoadingChanged="isLoading = $event"></ComponentUserCategories>
                    </div>
                    <div class="tab-pane" :class="{'show active': selectedTab === 5}">
                        <ComponentUserFields
                            :userFields="userFields"
                            v-if="userFields"
                            :userCategories="userCategories"
                            @isLoadingChanged="isLoading = $event"></ComponentUserFields>
                    </div>
                    <div class="tab-pane" :class="{'show active': selectedTab === 6}">
                        <ComponentFields
                            :fields="fields"
                            v-if="fields"
                            @isLoadingChanged="isLoading = $event"></ComponentFields>
                    </div>
                </div>
            </div>
            <div class="col-md-2 mb-3">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
                        <a class="nav-link btn btn-default" id="{ tab.id }" role="tab" :class="{active:tab.isActive}"
                           @click="selectTab(tab)">{{ tab.name }}</a>
                        <ul class="list-group list-group-flush" v-if="tab.isActive">
                            <li class="list-group-item" v-for="(menu, index) in tab.menu" :key="index">{{ menu.name}}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {SET_COMPONENT} from "./schemeStore";
    import {SET_ACTIONS} from "./schemeStore";
    import {SET_STATUSES} from "./schemeStore";
    import {SET_USER_GROUPS} from "./schemeStore";
    import {SET_USER_CATEGORIES} from "./schemeStore";
    import {SET_USER_FIELDS} from "./schemeStore";
    import {SET_FIELDS} from "./schemeStore";
    import {mapGetters, mapState} from "vuex";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import ComponentActions from "./views/ComponentActions";
    import ComponentStatuses from "./views/ComponentStatuses";
    import ComponentUserGroups from "./views/ComponentUserGroups";
    import ComponentUserCategories from "./views/ComponentUserCategories";
    import ComponentUserFields from "./views/ComponentUserFields";
    import ComponentFields from "./views/ComponentFields";
    import TheContentMixin from "../../helpers/mixins/TheContentMixin";

    export default {
        name: "TheComponentView",
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
                        to: {path: '/scheme'}
                    },
                    {
                        text: this.$route.params.id,
                        active: true
                    }
                ],
                selectedTab: 1,
                tabs: [
                    {id: 1, name: 'Действия', isActive: true, menu: []},
                    {id: 2, name: 'Статусы', isActive: false, menu: [/*{name: 'Добавить'}*/]},
                    {id: 3, name: 'Группы Пользователя', isActive: false, menu: []},
                    {id: 4, name: 'Кат. Пользователя', isActive: false, menu: []},
                    {id: 5, name: 'Поля Пользователя', isActive: false, menu: []},
                    {id: 6, name: 'Филды', isActive: false, menu: []},
                ],
                isLoading: false
            };
        },
        components: {
            ComponentActions,
            ComponentStatuses,
            ComponentUserGroups,
            ComponentUserCategories,
            ComponentUserFields,
            ComponentFields,
            Loading: VueLoading
        },
        created: async function () {
            await this.getData();
        },
        computed: {
            // ...mapGetters(["component", "actions", "statuses"]),
            ...mapState({
                component: state => state.scheme.component,
                actions: state => state.scheme.actions,
                statuses: state => state.scheme.statuses,
                userGroups: state => state.scheme.userGroups,
                userCategories: state => state.scheme.userCategories,
                userFields: state => state.scheme.userFields,
                fields: state => state.scheme.fields
            }),
            ...mapGetters([
                // 'actions'
            ])
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
        },
        methods: {
            async getData() {
                await this.$store.dispatch(SET_ACTIONS, this.$route.params.id);
                await this.$store.dispatch(SET_STATUSES, this.$route.params.id);
                await this.$store.dispatch(SET_COMPONENT, this.$route.params.id);
                await this.$store.dispatch(SET_USER_GROUPS, this.$route.params.id);
                await this.$store.dispatch(SET_USER_CATEGORIES, this.$route.params.id);
                await this.$store.dispatch(SET_USER_FIELDS, this.$route.params.id);
                await this.$store.dispatch(SET_FIELDS, this.$route.params.id);
                // const response = await Promise.all([
                //     this.$store.dispatch(SET_COMPONENTS, this.$route.params.id),
                //     this.$store.dispatch(SET_ACTIONS, this.$route.params.id),
                //     this.$store.dispatch(SET_STATUSES)
                // ])
            },
            selectTab(tab) {
                this.selectedTab = tab.id;
                if (this.selectedTab === 1) {
                    this.selectedTab = 0;
                    this.$nextTick(() => {
                        this.selectedTab = tab.id;
                    });
                }
                this.tabs.forEach(function (_t) {
                    _t.isActive = _t.id === tab.id;
                })
            }
        },

    }
</script>

