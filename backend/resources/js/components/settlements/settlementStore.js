export const SET_ITEMS = 'SET_SETTLEMENT_ITEMS';
export const GET_ITEMS = 'SETTLEMENT_ITEMS';
export const settlementStore = {
  state: {
    items: null,

  },
  getters: {
    items: state => state.items,
  },
  mutations: { // commit
    [SET_ITEMS](state, items) {

      state.items = items;
    },


  },
  actions: { // dispatch
    /*SET_PRODUCTS: (context, payload) => {
      context.commit('SET_PRODUCTS', payload);
    },*/
    [SET_ITEMS](context) {

      axios.get('/api/settlements').then((response) => {
        context.commit(SET_ITEMS, response.data);
      }).catch(error => {
      });
    },



  },


};


