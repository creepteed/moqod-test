import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exchange_data: null,
    base_url: "https://api.exchangeratesapi.io/latest?base=",
    base_currency: "RUB"
  },
  mutations: {
    setRate(state, payload){
      state.exchange_data[payload.currency] = payload.rate;
      payload.point_update ?
        payload.point_update() :
        state.exchange_data = {...state.exchange_data};
    }
  },
  actions: {

    updateCurrency({state, commit}, payload){
      axios.get(`${state.base_url}${state.base_currency}`)
      .then(data => {
        commit('setRate', {currency: payload.currency, rate: data.data.rates[payload.currency]});

        if(payload.pointer) {
          payload.pointer.highlight = true;

          setTimeout(()=>{payload.pointer.highlight = false}, payload.highlight_timeout)
        }
      })
      .catch(error => console.log(error));
    },

    addCurrency({state, commit}, currency){
      axios.get(`${state.base_url}${state.base_currency}`)
      .then(data => {
        commit('setRate', {currency: currency, rate: data.data.rates[currency]});
      })
      .catch(error => console.log(error));
    },

    fetchInitialData({state, commit}){
      axios.get(`${state.base_url}${state.base_currency}`)
        .then(data => {
          state.exchange_data = {};

          const rates = data.data.rates;

          commit('setRate', {currency: "USD", rate: rates.USD});
          commit('setRate', {currency: "EUR", rate: rates.EUR});
        })
        .catch(error => console.log(error));
    }
  }
})
