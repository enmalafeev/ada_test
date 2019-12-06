import Vue from 'vue';
import Vuex from 'vuex';
import { uniqueId } from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fraction: {
      id: '',
      numerator: '',
      denominator: '',
      sign: '',
    },
    fractionList: [
      {
        numerator: '',
        denominator: '',
        sign: '',
      },
      {
        numerator: '',
        denominator: '',
        sign: '=',
      },
    ],
  },
  mutations: {
    addFraction(state) {
      return state.fractionList.unshift({ ...state.fraction, id: uniqueId() });
    },
  },
  actions: {
  },
  modules: {
  },
});
