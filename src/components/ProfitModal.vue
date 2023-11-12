<script>
import MyModal from './UI/MyModal.vue';
export default {
  components: {
    MyModal,
  },
  data() {
    return {
      amount: 0,
      comment: "",
      modalVisible: false,
      isShown: false,
    };
  },
  methods: {

    saveProfit() {
      this.$store.dispatch("addProfit", {
        amount: this.amount,
        comment: this.comment,
      });
      this.modalVisible = false;
    },
    showModal() {
      this.isShown = !this.isShown;
    },

  },
};
</script>

<template>
  <div>
    <button class="btn-profit" :change-show="showModal" @click="showModal">add profit</button>
    <MyModal :show="isShown" :change-show="showModal">
      <div>
        <input v-model="amount" type="number" placeholder="Amount" />
        <input v-model="comment" type="text" placeholder="Comment" />
        <button @click="saveProfit">сохр</button>
      </div>
    </MyModal>
  </div>
</template>
  
<style>
.btn-profit {
  width: 200px;
  height: 50px;
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


