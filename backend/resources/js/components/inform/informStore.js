export const informStore = {
    state: {
        inform_settings: {},
    },
    getters: { // getters
        INFORM_SETTINGS: state => {
            return state.inform_settings;
        },
        // actions: state => state.actions
    },
    mutations: { // commit
        SET_INFORM_SETTINGS: (state, payload) => {
            state.inform_settings = payload;
        },
    },
    actions: { // dispatch
        
    }
};
