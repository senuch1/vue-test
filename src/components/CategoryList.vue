<template>
    <div>
      <ul>
        <li v-for="category in categories" :key="category.id">
          {{ category.name }}: ${{ category.balance }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      categories() {
        return this.$store.state.categories.categories;
      },
    },
  };
  </script>
  