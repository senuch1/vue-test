<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories.categories;
    },
  },
};
</script>
  
<template>
  <div>
    <li v-for="category in categories" :key="category.id">
      {{ category.name }}: ${{ category.balance }}
    </li>
  </div>
</template>

<style>
li {
  border-radius: 8px;
  background: #fff;
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-top: 10px;
}
</style>