export const SET_BREADCRUMBS = "SET_BREADCRUMBS";
export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";

export const helpersStore = {
    state:{
        breadcrumbs: [],
        notifications: null,
        version: null,
    },
    mutations:{
        [SET_BREADCRUMBS](state, breadcrumbs){
            state.breadcrumbs = breadcrumbs;
        },
        [SET_NOTIFICATIONS](state, notifications){
            state.notifications = notifications;
        },
    },
    actions:{
        [SET_BREADCRUMBS]({commit}, payload){
            commit('SET_BREADCRUMBS', payload);
        },
        [SET_NOTIFICATIONS]({commit}, payload){
            commit('SET_NOTIFICATIONS', payload);
        }
    },
    getters:{
        breadcrumbs(state){
            return state.breadcrumbs;
        },
        app_version(state){
            return state.version;
        },
    }
}
