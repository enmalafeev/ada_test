<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="fraction-wrap">
      <div class="fraction-box">
        <div class="fraction">
          <input type="text" class="numerator">
          <input type="text" class="denominator">
        </div>
        <div class="sign-box">
          <select class="sign">
            <option value="+" selected>+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
      </div>
      <div class="fraction">
        <input type="text" class="numerator">
        <input type="text" class="denominator">
      </div>
      <b class="equal-sign">=</b>
      <div class="result">
        <div class="result-numerator">?</div>
        <div class="result-denominator">?</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FractionalCalc',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.fraction-wrap {
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
}
.fraction-box {
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}
.fraction {
  width: 50px;
  height: 120px;
  min-height: 120px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;;
  justify-content: space-between;
  position: relative;
  margin-right: 20px;
  &:before {
    position: absolute;
    top: 58px;
    left: 0;
    content: '';
    width: 100%;
    height: 5px;
    background-color: #000;
  }
}

input {
  display: block;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 3px;
  font-size: 25px;
  text-align: center;
}

.numerator {
  margin-bottom: 10px;
}

.sign-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 120px;
  min-height: 120px;
}

.sign {
  width: 50px;
  height: 50px;
  font-size: 25px;
}

.equal-sign {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-right: 20px;
}

.result {
  width: 50px;
  height: 120px;
}

.result-numerator,
.result-denominator {
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 3px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.result-numerator {
  margin-bottom: 20px;
  position: relative;
  &:before {
    position: absolute;
    top: 56px;
    left: 0;
    content: '';
    width: 100%;
    height: 5px;
    background-color: #000;
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
