export const SET_LIST_USER = "SET_LIST_USER";
export const SET_LIST_APP = "SET_LIST_APP";
export const SET_LIST_ROLE = "SET_LIST_ROLE";
export const SET_LIST_ACTION = "SET_LIST_ACTION";
export const SET_LIST_RIGHT = "SET_LIST_RIGHT";

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ authStore ~~~ */

export const userGroupsStore = {
    state: {
        listUser: null,
        listApp: null,
        listRole: null,
        listAction: null,
        listRight: null
    },
    mutations: {
        [SET_LIST_USER](state, listUser) {
            state.listUser = listUser;
        },
        [SET_LIST_APP](state, listApp) {
            state.listApp = listApp;
        },
        [SET_LIST_ROLE](state, listRole) {
            state.listRole = listRole;
        },
        [SET_LIST_ACTION](state, listAction) {
            state.listAction = listAction;
        },
        [SET_LIST_RIGHT](state, listRight) {
            state.listRight = listRight;
        }
    },
    actions: {
        [SET_LIST_USER]({ commit }, payload) {
            commit(SET_LIST_USER, payload);
        },
        [SET_LIST_APP]({ commit }, payload) {
            commit(SET_LIST_APP, payload);
        },
        [SET_LIST_ROLE]({ commit }, payload) {
            commit(SET_LIST_ROLE, payload);
        },
        [SET_LIST_ACTION]({ commit }, payload) {
            commit(SET_LIST_ACTION, payload);
        },
        [SET_LIST_RIGHT]({ commit }, payload) {
            commit(SET_LIST_RIGHT, payload);
        }
    }
};
