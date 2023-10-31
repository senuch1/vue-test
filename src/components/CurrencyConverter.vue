
<script>
export default {
  data() {
    return {
      currencies: ["USD", "EUR", "RUB", "SUM", "KZT"],
      fromCurrency: "USD",
      toCurrency: "EUR",
      amount: 1,
      exchangeRates: {
        USD: { EUR: 0.85, RUB: 75, SUM: 10700, KZT: 470, },
        EUR: { USD: 1.18, RUB: 88.46, SUM: 12575, KZT: 499, },
        RUB: { USD: 0.013, EUR: 0.011, SUM: 142, KZT: 5, },
        SUM: { USD: 0.000093, EUR: 0.00008, RUB: 7.04, KZT: 0.039, },
        KZT: { USD: 0.0021, EUR: 0.0020, SUM: 25.90, RUB: 0.20, }
      },
    };
  },
  computed: {
    convertedAmount() {
      const rate = this.exchangeRates[this.fromCurrency][this.toCurrency];
      return (this.amount * rate).toFixed(2);
    },
  },
  methods: {
    calculateCurrency() {
      this.convertedAmount = this.amount * this.exchangeRates[this.fromCurrency][this.toCurrency];
    },
  },

};
</script>
<template>
  <div>
    <h1>Конвертер валют</h1>

    <div>
      <label>Из: </label>
      <select v-model="fromCurrency">
        <option v-for="currency in currencies" :value="currency">{{ currency }}</option>
      </select>
    </div>
    <div>
      <label>В: </label>
      <select v-model="toCurrency">
        <option v-for="currency in currencies" :value="currency">{{ currency }}</option>
      </select>
    </div>
    <div>
      <label>Число: </label>
      <input type="number" v-model="amount" />
    </div>
    <div>
      <p>{{ amount }} {{ fromCurrency }} эквивалентно {{ convertedAmount }} {{ toCurrency }}</p>
    </div>
  </div>
</template>
