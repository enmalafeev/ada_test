<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="fraction-wrap">
      <fraction-row v-for="fraction in fractionList" :key="fraction.id" :fraction="fraction">
        {{fraction}}
      </fraction-row>
      <div class="result">
        <div class="result-numerator">{{this.getResult.numerator}}</div>
        <div class="result-denominator">{{this.getResult.denominator}}</div>
      </div>
    </div>
    <a class="add-fraction-btn" @click.prevent="addNewFraction">add fraction</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import FractionRow from './FractionRow.vue';

export default {
  name: 'FractionalCalc',
  props: {
    msg: String,
  },
  components: {
    FractionRow,
  },
  computed: {
    ...mapState({
      fractionList: state => state.fractionList,
    }),
    getResult() {
      return this.fractionList.reduce((cur, next) => {
        switch (cur.sign) {
          case '+':
            return this.add(cur, next, cur.sign);
          case '-':
            return this.substraction(cur, next, cur.sign);
          case '*':
            return this.multiply(cur, next, cur.sign);
          case '/':
            return this.divide(cur, next, cur.sign);
          default:
            return cur;
        }
      });
    },
  },
  methods: {
    ...mapMutations(['addFraction']),
    addNewFraction() {
      this.addFraction();
    },
    findGcd(a, b) {
      const minNum = Math.abs(Math.min(a, b));
      const maxNum = Math.abs(Math.max(a, b));
      const acc = [];
      for (let i = 1; i <= minNum; i += 1) {
        if (minNum % i === 0 && maxNum % i === 0) {
          acc.push(i);
        }
      }
      return acc.sort((x, y) => y - x)[0];
    },
    add(x, y, sign) {
      const curNumerator = (x.numerator * y.denominator)
        + (x.denominator * y.numerator);
      const curDenominator = (x.denominator * y.denominator);
      const gcd = this.findGcd(curNumerator, curDenominator);
      const numerator = curNumerator / gcd;
      const denominator = curDenominator / gcd;
      return {
        numerator,
        denominator,
        sign,
      };
    },
    substraction(x, y, sign) {
      const curNumerator = (x.numerator * y.denominator)
        - (x.denominator * y.numerator);
      const curDenominator = (x.denominator * y.denominator);
      const gcd = this.findGcd(curNumerator, curDenominator);
      const numerator = curNumerator / gcd;
      const denominator = curDenominator / gcd;
      return {
        numerator,
        denominator,
        sign,
      };
    },
    multiply(x, y, sign) {
      const curNumerator = x.numerator * y.numerator;
      const curDenominator = x.denominator * y.denominator;
      const gcd = this.findGcd(curNumerator, curDenominator);
      const numerator = curNumerator / gcd;
      const denominator = curDenominator / gcd;
      return {
        numerator,
        denominator,
        sign,
      };
    },
    divide(x, y, sign) {
      const curNumerator = x.numerator * y.denominator;
      const curDenominator = x.denominator * y.numerator;
      const gcd = this.findGcd(curNumerator, curDenominator);
      const numerator = curNumerator / gcd;
      const denominator = curDenominator / gcd;
      return {
        numerator,
        denominator,
        sign,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.fraction-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 20px;
}
.fraction-box {
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
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

.add-fraction-btn {
  cursor: pointer;
  border: none;
  font-size: 25px;
  color: #42b983;
  text-decoration: underline;
  text-transform: uppercase;
  &:hover,
  &:active {
    color: darken($color: #42b983, $amount: 15);
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
