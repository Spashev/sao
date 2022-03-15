export const SET_SERVICES_ITEMS = 'SET_SERVICES_ITEMS';
export const SET_SERVICES_COUNT = 'SET_SERVICES_COUNT';
export const SET_SERVICES_GROUPS = 'SET_SERVICES_GROUPS';
export const SET_SERVICE_INFLUENCE_GROUPS = 'SET_SERVICE_INFLUENCE_GROUPS';
export const SET_SERVICE_PROBLEM_GROUPS = 'SET_SERVICE_PROBLEM_GROUPS';
export const SET_SERVICE_INFLUENCE_CONDITIONS = 'SET_SERVICE_INFLUENCE_CONDITIONS';
export const SET_SERVICE_INFLUENCE_CONNS = 'SET_SERVICE_INFLUENCE_CONNS';
export const SET_SERVICE_PROBLEM_CONNS = 'SET_SERVICE_PROBLEM_CONNS';
export const SET_SERVICE_DETAIL = 'SET_SERVICE_DETAIL';
export const ADD_SERVICES = 'ADD_SERVICES';
export const ADD_GROUPS = 'ADD_GROUPS';
export const ADD_SERVICE_INFLUENCE_CONDITIONS = 'ADD_SERVICE_INFLUENCE_CONDITIONS';
export const ADD_SERVICE_INFLUENCE_CONNS = 'ADD_SERVICE_INFLUENCE_CONNS';
export const ADD_SERVICE_INFLUENCE_GROUPS = 'ADD_SERVICE_INFLUENCE_GROUPS';
export const ADD_SERVICE_PROBLEM_CAUSES = 'ADD_SERVICE_PROBLEM_CAUSES';
export const ADD_SERVICE_PROBLEM_CONNS = 'ADD_SERVICE_PROBLEM_CONNS';
export const ADD_SERVICE_PROBLEM_GROUPS = 'ADD_SERVICE_PROBLEM_GROUPS';
export const servicesStore = {
  state: {
    services_groups: null,
    services_items: null,
    services_item: null,
    services_count: null,
    service_detail: null,
    service_influence_conditions: null,
    service_influence_conns: null,
    service_influence_groups: null,
    service_problem_causes: null,
    service_problem_conns: null,
    service_problem_groups: null,
  },
  getters: {
    SERVICES_GROUPS: state => {
      return state.services_groups;
    },
    SERVICES_ITEMS: state => {
      return state.services_items;
    },
    
    SERVICES_COUNT: state => {
      return state.services_count;
    },
    SERVICE_INFLUENCE_GROUPS: state => {
      return state.service_influence_groups;
    },
    SERVICE_PROBLEM_GROUPS: state => {
      return state.service_problem_groups;
    },
    SERVICE_INFLUENCE_CONDITIONS: state => {
      return state.service_influence_conditions;
    },
    SERVICE_INFLUENCE_CONNS: state => {
      return state.service_influence_conns;
    },
    SERVICE_PROBLEM_CONNS: state => {
      return state.service_problem_conns;
    },
    SERVICE_DETAIL: state => {
      return state.service_detail;
    },

  },
  mutations: { // commit
    [SET_SERVICES_GROUPS](state, services_groups) {

      state.services_groups = services_groups;
    },
    [SET_SERVICES_ITEMS](state, services_items) {

      state.services_items = services_items;
    },
    [SET_SERVICES_COUNT](state, services_count) {
      state.services_count = services_count;
    },
    [SET_SERVICE_INFLUENCE_GROUPS](state, service_influence_groups) {
      state.service_influence_groups = service_influence_groups;
    },
    [SET_SERVICE_PROBLEM_GROUPS](state, service_problem_groups) {
      state.service_problem_groups = service_problem_groups;
    },
    [SET_SERVICE_INFLUENCE_CONDITIONS](state, service_influence_conditions) {
      state.service_influence_conditions = service_influence_conditions;
    },
    [SET_SERVICE_INFLUENCE_CONNS](state, service_influence_conns) {
      state.service_influence_conns = service_influence_conns;
    },
    [SET_SERVICE_PROBLEM_CONNS](state, service_problem_conns) {
      state.service_problem_conns = service_problem_conns;
    },
    [SET_SERVICE_DETAIL](state, item) {
      state.service_detail = item;
    },
    [ADD_SERVICES](state, object) {
      state.services_items.push(object);
    },
    [ADD_GROUPS](state, object) {
      state.services_groups.push(object);
    },
    [ADD_SERVICE_INFLUENCE_CONDITIONS](state, object) {
      state.service_influence_conditions.push(object);
    },
    [ADD_SERVICE_INFLUENCE_CONNS](state, object) {
      state.service_influence_conns.push(object);
    },
    [ADD_SERVICE_INFLUENCE_GROUPS](state, object) {
      state.service_influence_groups.push(object);
    },
    [ADD_SERVICE_PROBLEM_CAUSES](state, object) {
      state.service_problem_causes.push(object);
    },
    [ADD_SERVICE_PROBLEM_CONNS](state, object) {
      state.service_problem_conns.push(object);
    },
    [ADD_SERVICE_PROBLEM_GROUPS](state, object) {
      state.service_problem_groups.push(object);
    },

  },
  actions: { // dispatch
    /*SET_PRODUCTS: (context, payload) => {
      context.commit('SET_PRODUCTS', payload);
    },*/
    [SET_SERVICES_GROUPS](context) {

      axios.get('/api/service-group').then((response) => {
        context.commit('SET_SERVICES_GROUPS', response['data']['list']);
      }).catch(error => {
      });
    },

    [SET_SERVICES_ITEMS](context, params, query) {

      axios.get('/api/services?group=' + params.id).then((response) => {

        context.commit('SET_SERVICES_ITEMS', response['data']['list']);
        context.commit('SET_SERVICES_COUNT', response['data']['count']);
      }).catch(error => {
      });
    },
    [SET_SERVICE_INFLUENCE_GROUPS](context) {

      axios.get('/api/service-influence-groups').then((response) => {

        context.commit('SET_SERVICE_INFLUENCE_GROUPS', response['data']['list']);

      }).catch(error => {
      });
    },
    [SET_SERVICE_PROBLEM_GROUPS](context) {

      axios.get('/api/service-problem-groups').then((response) => {

        context.commit('SET_SERVICE_PROBLEM_GROUPS', response['data']['list']);

      }).catch(error => {
      });
    },
    [SET_SERVICE_INFLUENCE_CONDITIONS](context) {
      axios.get('/api/service-influence-conditions').then((response) => {
        context.commit('SET_SERVICE_INFLUENCE_CONDITIONS', response['data']['list']);
      }).catch(error => {
      });
    },
    [SET_SERVICE_INFLUENCE_CONNS](context, id) {
      axios.get('/api/service-influence-conns?id=' + id).then((response) => {
        context.commit('SET_SERVICE_INFLUENCE_CONNS', response['data']['list']);
      }).catch(error => {
      });
    },
    [SET_SERVICE_PROBLEM_CONNS](context, id) {
      axios.get('/api/service-problem-conns?id=' + id).then((response) => {
        context.commit('SET_SERVICE_PROBLEM_CONNS', response['data']['list']);
      }).catch(error => {
      });
    },
    [SET_SERVICE_DETAIL](context, id) {
      axios
        .get("/api/services/" + id)
        .then((response) => {
          
          context.commit('SET_SERVICE_DETAIL', response.data);
        })
        .catch((error) => {});
    },
    [ADD_SERVICES](context, formData, config) {
      axios
        .post('/api/services', formData, config)
        .then((response) => {
          context.commit('ADD_SERVICES', response['data']['object'])
        })
        .catch(function () {


        });

    },
    [ADD_GROUPS](context, form) {

      axios
        .post('/api/service-group', form)
        .then((response) => {
          context.commit('ADD_GROUPS', response['data']['object'])
        })
        .catch(function () {
        });
    },
    [ADD_SERVICE_INFLUENCE_CONDITIONS](context, formData, config) {
      axios
        .post('/api/service-influence-conditions', formData, config)
        .then((response) => {
          context.commit('ADD_SERVICE_INFLUENCE_CONDITIONS', response['data']['object'])
        })
        .catch(function () {


        });

    },
    [ADD_SERVICE_INFLUENCE_CONNS](context, formData, config) {
      axios
        .post('/api/service-influence-conns', formData, config)
        .then((response) => {
          context.commit('ADD_SERVICE_INFLUENCE_CONNS', response['data']['object'])
        })
        .catch(function () {


        });

    },
    [ADD_SERVICE_INFLUENCE_GROUPS](context, formData, config) {
      axios
        .post('/api/service-influence-groups', formData, config)
        .then((response) => {
          context.commit('ADD_SERVICE_INFLUENCE_GROUPS', response['data']['object'])
        })
        .catch(function () {


        });

    },
    [ADD_SERVICE_PROBLEM_CAUSES](context, formData, config) {
      axios
        .post('/api/service-problem-causes', formData, config)
        .then((response) => {
          context.commit('ADD_SERVICE_PROBLEM_CAUSES', response['data']['object'])
        })
        .catch(function () {


        });

    },
    [ADD_SERVICE_PROBLEM_CONNS](context, formData, config) {
      axios
        .post('/api/service-problem-conns', formData, config)
        .then((response) => {
          context.commit('ADD_SERVICE_PROBLEM_CONNS', response['data']['object'])
        })
        .catch(function () {


        });

    },
    [ADD_SERVICE_PROBLEM_GROUPS](context, formData, config) {
      axios
        .post('/api/service-problem-groups', formData, config)
        .then((response) => {
          context.commit('ADD_SERVICE_PROBLEM_GROUPS', response['data']['object'])
        })
        .catch(function () {


        });

    },


  },

};
