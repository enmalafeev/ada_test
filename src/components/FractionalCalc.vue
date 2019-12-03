<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="fraction-wrap">
      <div class="fraction-box fraction-box__with-sign">
        <div class="fraction">
          <input type="text" class="numerator" v-model="numsObj[0].firstNumerator">
          <input type="text" class="denominator" v-model="numsObj[0].firstDenominator">
        </div>
        <div class="sign-box">
          <select class="sign" v-model="numsObj[0].sign">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
      </div>
      <div class="fraction">
        <input type="text" class="numerator" v-model="numsObj[1].secondNumerator">
        <input type="text" class="denominator" v-model="numsObj[1].secondDenominator">
      </div>
      <b class="equal-sign">=</b>
      <div class="result">
        <div class="result-numerator">{{this.getResult.resultNumerator}}</div>
        <div class="result-denominator">{{this.getResult.resultDenominator}}</div>
      </div>
    </div>
    <a class="add-fraction-btn">add fraction</a>
  </div>
</template>

<script>

export default {
  name: 'FractionalCalc',
  props: {
    msg: String,
  },
  data() {
    return {
      numsObj: [
        {
          firstNumerator: '',
          firstDenominator: '',
          sign: '',
        },
        {
          secondNumerator: '',
          secondDenominator: '',
        },
      ],
      resultObj: {
        resultNumerator: '',
        resultDenominator: '',
      },
    };
  },
  computed: {
    getResult() {
      return this.numsObj.reduce((cur, next) => {
        switch (cur.sign) {
          case '+':
            return this.add(cur, next);
          case '-':
            return this.substraction(cur, next);
          case '*':
            return this.multiply(cur, next);
          case '/':
            return this.divide(cur, next);
          default:
            return {};
        }
      });
    },
  },
  methods: {
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
    add(x, y) {
      const numerator = (x.firstNumerator * y.secondDenominator)
        + (x.firstDenominator * y.secondNumerator);
      const denominator = (x.firstDenominator * y.secondDenominator);
      const gcd = this.findGcd(numerator, denominator);
      const resultNumerator = numerator / gcd;
      const resultDenominator = denominator / gcd;
      return {
        resultNumerator,
        resultDenominator,
      };
    },
    substraction(x, y) {
      const numerator = (x.firstNumerator * y.secondDenominator)
        - (x.firstDenominator * y.secondNumerator);
      const denominator = (x.firstDenominator * y.secondDenominator);
      const gcd = this.findGcd(numerator, denominator);
      const resultNumerator = numerator / gcd;
      const resultDenominator = denominator / gcd;
      return {
        resultNumerator,
        resultDenominator,
      };
    },
    multiply(x, y) {
      const numerator = x.firstNumerator * y.secondNumerator;
      const denominator = x.firstDenominator * y.secondDenominator;
      const gcd = this.findGcd(numerator, denominator);
      const resultNumerator = numerator / gcd;
      const resultDenominator = denominator / gcd;
      return {
        resultNumerator,
        resultDenominator,
      };
    },
    divide(x, y) {
      const numerator = x.firstNumerator * y.secondDenominator;
      const denominator = x.firstDenominator * y.secondNumerator;
      const gcd = this.findGcd(numerator, denominator);
      const resultNumerator = numerator / gcd;
      const resultDenominator = denominator / gcd;
      return {
        resultNumerator,
        resultDenominator,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.fraction-wrap {
  display: flex;
  justify-content: center;
  padding: 30px 20px;
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

.add-fraction-btn {
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
