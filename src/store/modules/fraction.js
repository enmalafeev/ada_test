import { uniqueId } from 'lodash';

const fraction = {
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
};

export default fraction;
