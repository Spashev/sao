export const SET_TROUBLE_TICKETS = 'SET_TROUBLE_TICKETS';
export const SET_TROUBLE_TICKET = 'SET_TROUBLE_TICKET';
export const troubleticketStore = {
    state: {
        troubletickets: null,
        troubleticket: null,
        alarm_list_create_form: []
    },
    getters: { // getters
        troubletickets: state => state.troubletickets,
        troubleticket: state => state.troubleticket,
        ALARM_LIST_CREATE_FORM: state => {
            return state.alarm_list_create_form;
        },
        // actions: state => state.actions
    },
    mutations: { // commit
        [SET_TROUBLE_TICKETS](state, troubletickets) {
            state.troubletickets = troubletickets;
        },
        [SET_TROUBLE_TICKET](state, troubleticket){
            state.troubleticket = troubleticket
        },
        SET_ALARM_LIST_CREATE_FORM: (state, payload) => {
            state.alarm_list_create_form = payload;
        },
    },
    actions: { // dispatch
        [SET_TROUBLE_TICKETS](context) {
            axios.get('/api/troubleticket/list').then((response) => {
                context.commit('SET_TROUBLE_TICKETS', response.data.list);
            }).catch(error => {});
        },
        [SET_TROUBLE_TICKET](context, id){
            axios.get(`/api/troubleticket/${id}`).then((response) => {
                context.commit('SET_TROUBLE_TICKET', response.data.ticket);
            }).catch(error => {});
        }
    }
};
