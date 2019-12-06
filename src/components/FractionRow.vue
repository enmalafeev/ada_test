<template>
    <div class="fraction-box fraction-box__with-sign">
      <div class="fraction">
        <input type="text" class="numerator" v-model="fraction.numerator">
        <input type="text" class="denominator" v-model="fraction.denominator">
      </div>
      <div class="sign-box">
        <template v-if="fraction.sign === '='">
          <b class="equal-sign">=</b>
        </template>
        <template v-else>
          <select class="sign" v-model="fraction.sign">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </template>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FractionRow',
  props: {
    fraction: Object,
    default: () => Object,
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>
