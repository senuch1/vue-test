<script>
import MyModal from './UI/MyModal.vue';
export default {
  components: {
    MyModal,
  },
  data() {
    return {
      categoryName: "",
      modalVisible: false,
      isShown: false,
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
    showModal() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<template>
  <div>
    <button class="btn-category" :change-show="showModal" @click="showModal">+</button>
    <MyModal :show="isShown" :change-show="showModal">
      <div>
        <input v-model="categoryName" type="text" placeholder="Category Name" />
        <button @click="saveCategory">сохр</button>
      </div>
    </MyModal>
  </div>
</template>

<style>
.btn-category {

  height: 43px;
  padding: 10px 240px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border: none;
  border-radius: 8px;
  background: #fff;
  color: #47604b;
  font-family: Istok Web;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  line-height: 0px;
  /* 0% */
  cursor: pointer;

}

.btn-category:hover {
  background-color: rgb(216, 216, 216);
}
</style>