<template>
  <div>
    <h1>This is an websocket page</h1>
    <form action="#" class="input-form">
      <input
        required
        type="text"
        class="input"
        placeholder="Введите текст комментария"
        v-model="text">
      <button
        type="submit"
        class="submit-btn"
        @click.prevent="addNewComment">
        Добавить комментарий
      </button>
    </form>
    <ul class="comment-list">
      <li class="comment-item" v-for="comment in comments" :key="comment.id">
        <span>{{comment.text}}</span>
        <button class="remove-btn" @click="removeCurrentComment(comment.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { uniqueId } from 'lodash';

export default {
  data() {
    return {
      ws: null,
      wsResponse: null,
      text: '',
    };
  },
  computed: {
    ...mapState({
      comment: state => state.comment,
      comments: state => state.comments,
    }),
  },
  created() {
    this.ws = new WebSocket('ws://echo.websocket.org');
    this.ws.onerror = error => alert(error.message);
  },
  methods: {
    ...mapMutations(['removeComment', 'addComment']),
    removeCurrentComment(id) {
      this.ws.send(id);
      this.ws.onmessage = (event) => {
        if (event.data === id) {
          this.removeComment(id);
          this.text = '';
        }
      };
    },
    addNewComment() {
      const id = uniqueId();
      this.ws.send(id);
      this.ws.onmessage = (event) => {
        if (event.data === id) {
          this.addComment({ id, text: this.text });
          this.text = '';
        }
      };
    },
  },
};
</script>


<style lang="scss" scoped>
.input-form {
  display: flex;
  justify-content: center;
}
.input {
  width: 350px;
  height: 50px;
  border: 2px solid #42b983;
  border-radius: 3px;
  font-size: 16px;
  padding: 0 15px;
}
.submit-btn {
  width: 150px;
  min-height: 50px;
  background-color: #42b983;
  color: #fff;
  border-radius: 3px;
  font-size: 14px;
  font-family: inherit;
}

.comment-list {
  list-style: none;
  flex-direction: column;
  display: flex;
  justify-content: center;
}

.comment-item {
  font-size: 18px;
  padding: 10px 5px;
}

.remove-btn {
  width: 100px;
  font-size: 16px;
  background-color: firebrick;
  color: #fff;
  margin-left: 10px;
  border-radius: 3px;
}
</style>
