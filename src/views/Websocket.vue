<template>
  <div>
    <h1>This is an websocket page</h1>
    <form action="#" class="input-form">
      <input type="text" class="input" placeholder="Введите текст комментария">
      <button type="submit" class="submit-btn">Добавить комментарий</button>
    </form>
  </div>
</template>

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
</style>
