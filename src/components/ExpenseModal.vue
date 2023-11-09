<template>
    <div>
        <button @click="openModal">в минус</button>
        <div v-if="modalVisible">
            <input v-model="amount" type="number" placeholder="Amount" />
            <input v-model="comment" type="text" placeholder="Comment" />
            <select v-model="selectedCategory">
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
            <button @click="saveExpense">сохр</button>
        </div>
    </div>
</template>
  
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
            const category = this.categories.find((c) => c.id === this.selectedCategory);
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
  