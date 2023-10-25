<template>
    <div class="calculator">
      <div class="display">
        {{ displayText }}
      </div>
      <div class="buttons">
        <button @click="num(1)">1</button>
        <button @click="num(2)">2</button>
        <button @click="num(3)">3</button>
        <button @click="num(4)">4</button>
        <button @click="num(5)">5</button>
        <button @click="num(6)">6</button>
        <button @click="num(7)">7</button>
        <button @click="num(8)">8</button>
        <button @click="num(9)">9</button>
        <button @click="num(0)">0</button>
        <button @click="appendOperator('+')">+</button>
        <button @click="appendOperator('*')">*</button>
        <button @click="appendOperator('-')">-</button>
        <button @click="appendOperator('/')">/</button>
        <button @click="clear">C</button>
        <button @click="calculateResult">=</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        displayText: "",
        currentInput: "",
        operator: null,
      };
    },
    methods: {
      num(number) {
        this.currentInput += number;
        this.displayText += number;
      },
      appendOperator(operator) {
        if (this.operator) {
          this.calculateResult();
        }
        this.operator = operator;
        this.displayText += operator;
        this.currentInput = "";
      },
      calculateResult() {
        if (this.operator && this.currentInput !== "") {
          const result = eval(this.displayText);
          this.displayText = result;
          this.currentInput = result;
          this.operator = null;
        }
      },
      clear() {
        this.displayText = "";
        this.currentInput = "";
        this.operator = null;
      },
    },
  };
  </script>
  
  <style>
  .calculator {
    text-align: center;
  }
  
  .display {
    background: white;
    color: black;
    font-size: 24px;
    padding: 10px;
    margin: 10px 0;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
  
  button {
    padding: 10px;
    font-size: 20px;
  }
  </style>