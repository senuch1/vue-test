<template>
  <div>
    <button @click="openModal">зп</button>
    <div v-if="modalVisible">
      <input v-model="amount" type="number" placeholder="Amount" />
      <input v-model="comment" type="text" placeholder="Comment" />
      <button @click="saveProfit">сохр</button>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      amount: 0,
      comment: "",
      modalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    saveProfit() {
      this.$store.dispatch("addProfit", {
        amount: this.amount,
        comment: this.comment,
      });
      this.modalVisible = false;
    },
  },
};
</script>
  