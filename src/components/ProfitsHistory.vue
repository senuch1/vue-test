<script>
export default {
    data: () => ({
        date: new Date(),
    }),
    computed: {
        profits() {
            return this.$store.state.profits.profits;
        },
    },
    methods: {
        formatDate2: d => d.toLocaleString('ru-RU').replace(',', '').slice(0, -3),
    },
};
</script>

<template>
    <div>
        <h2 class="name-profits">PROFITS ARTICLES: </h2>
        <div class="expense-list" v-for="profit in profits" :key="profit.id">
            <p>{{ profit.comment }} = {{ profit.amount }} $ </p>
            <p>{{ formatDate2(date) }}</p>
        </div>
    </div>
</template>
  
<style>
.name-profits {
    color: #55885D;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>