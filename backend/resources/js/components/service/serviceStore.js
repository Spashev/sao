export const GET_SERVICE_LIST = 'GET_SERVICE_LIST';
export const SET_SERVICE_LIST = 'SET_SERVICE_LIST';
export const ADD_SERVICES = 'ADD_SERVICES';
export const ADD_GROUPS = 'ADD_GROUPS';

export const serviceStore = {
    state: {
        service_list: null,
    },
    getters: {
        SERVICE_LIST: state => {
            return state.service_list;
        },
    },
    mutations: {
        [SET_SERVICE_LIST](state, item) {
            state.service_list = item;
        },
        [ADD_SERVICES](state, object) {
            state.services_items.push(object);
        },
        [ADD_GROUPS](state, object) {
            state.services_groups.push(object);
        },
    },
    actions: { 
        [GET_SERVICE_LIST](context, id) {
            axios.get("/api/service/list").then((response) => {
                context.commit('SET_SERVICE_LIST', response.data);
            })
            .catch((error) => {

            });
        },
        [ADD_SERVICES](context, formData, config) {
            axios.post('/api/services', formData, config).then((response) => {
                context.commit('ADD_SERVICES', response['data']['object'])
            })
            .catch(function () {

            });

        },
        [ADD_GROUPS](context, form) {
            axios.post('/api/service-group', form).then((response) => {
                context.commit('ADD_GROUPS', response['data']['object'])
            })
            .catch(function () {

            });
        },
    },

};
