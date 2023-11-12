<script>
export default {
    data: () => ({
        date: new Date(),
    }),
    computed: {
        expenses() {
            return this.$store.state.expenses.expenses;
        },
    },
    methods: {
        formatDate2: d => d.toLocaleString('ru-RU').replace(',', '').slice(0, -3),
    },
};
</script>

<template>
    <div>
        <h2 class="name-expense">EXPENSE ARTICLES: </h2>
        <div class="expense-list" v-for="expense in expenses" :key="expense.id">
            <p> {{ expense.comment }} = {{ expense.amount }} $</p>
            <p>{{ expense.category.name }}</p>
            <p>{{ formatDate2(date) }}</p>
        </div>
    </div>
</template>
  
<style>
.name-expense {
    color: #BC5D78;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.expense-list {
    border-radius: 16px;
    border: 1px solid #000;
}
</style>