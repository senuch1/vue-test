<script>
export default {
  data() {
    return {
      categoryName: "",
      modalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    saveCategory() {
      this.$store.dispatch("createCategory", {
        name: this.categoryName,
      });
      this.modalVisible = false;
    },
  },
};
</script>
<template>
  <div>
    <button @click="openModal">категор</button>
    <div v-if="modalVisible">
      <input v-model="categoryName" type="text" placeholder="Category Name" />
      <button @click="saveCategory">сохр</button>
    </div>
  </div>
</template>
  