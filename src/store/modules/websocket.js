import { uniqueId } from 'lodash';

const websocket = {
  state: {
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
    removeComment(state, id) {
      state.comments = state.comments.filter(comment => comment.id !== id);
    },
    addComment(state, comment) {
      state.comments.push(comment);
    },
  },
};

export default websocket;
