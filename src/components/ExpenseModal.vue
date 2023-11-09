<script>
export default {
  data() {
    return {
      amount: 0,
      comment: "",
      selectedCategory: null,
      modalVisible: false,
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories;
    },
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    saveExpense() {
      const category = this.categories.find(
        (c) => c.id === this.selectedCategory
      );
      if (category) {
        this.$store.dispatch("addExpense", {
          amount: this.amount,
          comment: this.comment,
          category: category.name,
          categoryId: category.id,
        });
        this.modalVisible = false;
      }
    },
  },
};
</script>

<template>
  <div>
    <button class="btn-expense" @click="openModal">add expense</button>
    <div v-if="modalVisible">
      <input v-model="amount" type="number" placeholder="Amount" />
      <input v-model="comment" type="text" placeholder="Comment" />
      <select v-model="selectedCategory">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
      <button @click="saveExpense">сохр</button>
    </div>
  </div>
</template>

<style>
.btn-expense {
  width: 200px;
  height: 50px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 16px;
  border: 3px solid #844154;
  background: #bc5d78;
  color: #fff;
  font-family: Istok Web;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  
}
.btn-expense:hover {
  background-color: #e27292;
}
</style>