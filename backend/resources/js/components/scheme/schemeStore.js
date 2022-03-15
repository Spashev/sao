export const SET_COMPONENTS = 'SET_COMPONENTS';
export const SET_COMPONENT = 'SET_COMPONENT';
export const SET_COMPONENT_ID = 'SET_COMPONENT_ID';
export const SET_ACTIONS = 'SET_ACTIONS';
export const SET_STATUSES = 'SET_STATUSES';
export const SET_USER_GROUPS = 'SET_USER_GROUPS';
export const SET_USER_CATEGORIES = 'SET_USER_CATEGORIES';
export const SET_USER_FIELDS = 'SET_USER_FIELDS';
export const SET_FIELDS = 'SET_FIELDS';
export const schemeStore = {
    state: {
        components: null,
        component: null,
        component_id: null,
        actions: null,
        statuses: null,
        userGroups: null,
        userCategories: null,
        userFields: null,
        fields: null,
    },
    mutations: { // commit
        [SET_COMPONENTS](state, components) {
            state.components = components;
        },
        [SET_COMPONENT](state, component) {
            state.component = component;
        },
        [SET_COMPONENT_ID](state, component) {
            state.component_id = component;
        },
        [SET_ACTIONS](state, actions) {
            state.actions = actions;
        },
        [SET_STATUSES](state, statuses) {
            state.statuses = statuses;
        },
        [SET_USER_GROUPS](state, userGroups) {
            state.userGroups = userGroups;
        },
        [SET_USER_CATEGORIES](state, userCategories) {
            state.userCategories = userCategories;
        },
        [SET_USER_FIELDS](state, userFields) {
            state.userFields = userFields;
        },
        [SET_FIELDS](state, fields) {
            state.fields = fields;
        },
    },
    actions: { // dispatch
        [SET_COMPONENTS](context) {
            axios.get('/api/scheme/components').then((response) => {
                context.commit('SET_COMPONENTS', response.data.components);
            }).catch(error => {
            });
        },
        [SET_COMPONENT](context, id) {
            axios.get(`/api/scheme/components/${id}`).then((response) => {
                context.commit('SET_COMPONENT', response.data.component);
            }).catch(error => {
            });
        },
        // [SET_COMPONENT_DATA](context, id) {
        //     axios.get(`/api/scheme/components/${id}`)
        //         .then((response) => {
        //             context.commit(SET_COMPONENT, response.data.component);
        //             context.commit(SET_ACTIONS, response.data.actions);
        //             context.commit(SET_STATUSES, response.data.statuses);
        //         });
        // },
        [SET_ACTIONS](context, id) {
            axios.get(`/api/scheme/actions/${id}`)
                .then((response) => {
                    console.log('actions commited', response.data.actions);
                    context.commit(SET_ACTIONS, response.data.actions);
                });
        },
        [SET_STATUSES](context, id) {
            axios.get(`/api/scheme/statuses/${id}`)
                .then((response) => {
                    context.commit(SET_STATUSES, response.data.statuses);
                });
        },
        [SET_USER_GROUPS](context, id) {
            axios.get(`/api/scheme/user-groups/${id}`)
                .then((response) => {
                    context.commit(SET_USER_GROUPS, response.data.userGroups);
                });
        },
        [SET_USER_CATEGORIES](context, id) {
            axios.get(`/api/scheme/user-categories/${id}`)
                .then((response) => {
                    context.commit(SET_USER_CATEGORIES, response.data.userCategories);
                });
        },
        [SET_USER_FIELDS](context, id) {
            axios.get(`/api/scheme/user-fields/${id}`)
                .then((response) => {
                    context.commit(SET_USER_FIELDS, response.data.userFields);
                });
        },
        [SET_FIELDS](context, id) {
            axios.get(`/api/scheme/fields/${id}`)
                .then((response) => {
                    context.commit(SET_FIELDS, response.data.fields);
                });
        },
    },
    getters: { // getters
        components: state => state.components,
        component: state => state.component,
        actions: state => state.actions,
        getActionById: (state) => (id) => {
            return state.actions.find(action => action.id === id);
        },
        statuses: state => state.statuses,
        fields: state => state.fields,
        fieldLists: state => state.fieldLists
    }
};
