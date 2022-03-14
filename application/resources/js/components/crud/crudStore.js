export const SET_CRUDS = 'SET_CRUDS';
export const SET_CRUD = 'SET_CRUD';
export const SET_ACTIONS = 'SET_ACTIONS';
export const crudStore = {
    state: {
        cruds: null,
        crud: null,
        actions: null,
    },
    mutations: { // commit
        [SET_CRUDS](state, cruds) {
            state.cruds = cruds;
        },
        [SET_CRUD](state, crud){
            state.crud = crud
        },
        [SET_ACTIONS](state, actions){
            state.actions = actions
        }
    },
    actions: { // dispatch
        [SET_CRUDS](context) {
            axios.get('/api/crud/list').then((response) => {
                context.commit('SET_CRUDS', response.data.list);
            }).catch(error => {});
        },
        [SET_CRUD](context, id){
            axios.get(`/api/crud/${id}`).then((response) => {
                context.commit('SET_CRUD', response.data.crud);
                context.commit('SET_ACTIONS', response.data.actions);
            }).catch(error => {});
        }
    },
    getters: { // getters
        cruds: state => state.cruds,
        crud: state => state.crud,
        // actions: state => state.actions
    }
};
