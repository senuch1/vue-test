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

<template>
  <div>
    <button class="btn-profit" @click="openModal">add profit</button>
    <div v-if="modalVisible">
      <input v-model="amount" type="number" placeholder="Amount" />
      <input v-model="comment" type="text" placeholder="Comment" />
      <button @click="saveProfit">сохр</button>
    </div>
  </div>
</template>
  
<style>
.btn-profit {
  width: 200px;
  height: 50px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 16px;
  border: 3px solid #3c5f41;
  background: #55885d;
  color: white;
  font-family: Istok Web;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  
}
.btn-profit:hover {
  background-color: #7dbe86;
}
</style>


