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
    comments: [
      {
        id: uniqueId(),
        text: 'Тестовый коммент 1',
      },
      {
        id: uniqueId(),
        text: 'Тестовый коммент 1',
      },
      {
        id: uniqueId(),
        text: 'Это шедевр',
      },
      {
        id: uniqueId(),
        text: 'Это прекрасно',
      },
      {
        id: uniqueId(),
        text: 'Лучшее, что я видел',
      },
      {
        id: uniqueId(),
        text: 'Два чая этому автору',
      },
      {
        id: uniqueId(),
        text: 'Тестовый коммент 2',
      },
      {
        id: uniqueId(),
        text: 'Чудеса случаюся',
      },
      {
        id: uniqueId(),
        text: 'Случайности неслучайны',
      },
    ],
  },
  mutations: {
    addFraction(state) {
      return state.fractionList.unshift({ ...state.fraction, id: uniqueId() });
    },
    removeComment(state, id) {
      return state.comments.filter(comment => comment.id !== id);
    },
  },
  actions: {


  },
});
