<template>
  <div class="fraction-box fraction-box__with-sign">
    <div class="fraction">
      <input type="text" class="numerator" value="">
      <input type="text" class="denominator" v-model="firstDenominator">
    </div>
    <div class="sign-box">
      <select class="sign" v-model="sign">
        <option value="+" selected>+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FractionWithSign',
  components: {
    FractionWithSign,
  },
}
</script>

<style lang="scss" scoped>

</style>

