<template>
  <div>
    <FractionalCalc msg="Fractional Calculator"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FractionalCalc from '@/components/FractionalCalc.vue';

export default {
  name: 'calculator',
  components: {
    FractionalCalc,
  },
};
</script>
