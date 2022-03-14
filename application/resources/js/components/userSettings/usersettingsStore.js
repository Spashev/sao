export const usersettingsStore = {
    state: {
        user_main_settings: {},
    },
    getters: { // getters
        USER_MAIN_SETTINGS: state => {
            return state.user_main_settings;
        },
        // actions: state => state.actions
    },
    mutations: { // commit
        SET_USER_MAIN_SETTINGS: (state, payload) => {
            state.user_main_settings = payload;
        },
    },
    actions: { // dispatch
        SET_USER_MAIN_SETTINGS: (context) => {
            axios.get('/api/troubleticket/list').then((response) => {
                context.commit('SET_USER_MAIN_SETTINGS', response.data.list);
            }).catch(error => {});
        },
    }
};
