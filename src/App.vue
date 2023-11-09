<script>
// import initaliazeApp from "./mixin/initaliazeApp"
import Balance from "./components/Balance.vue";
import CategoryModal from "./components/CategoryModal.vue";
import ProfitModal from "./components/ProfitModal.vue";
import ExpenseModal from "./components/ExpenseModal.vue";
import CategoryList from "./components/CategoryList.vue";

export default {
  components: {
    Balance,
    CategoryModal,
    ProfitModal,
    ExpenseModal,
    CategoryList,
  },
  // mixins: [initaliazeApp],
  data: () => {
    return {};
  },
  mounted() {
    // this.initApp();
  },
};
</script>

<template>
  <div class="menu">
    <div class="menu_tools">
      <Balance />

      <img
        class="menu_common-image"
        src="/src/assets/images/wallet.svg"
        alt=""
        srcset=""
      />
      <div сlass="menu_tools-btn">
        <ProfitModal />
        <ExpenseModal />
      </div>
    </div>
    <div class="menu_categories">
      <CategoryModal />
      <CategoryList />
    </div>
  </div>
</template> 

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: 0px 0px 10px 0px #0000004d;
  max-width: 600px;
  padding: 15px;
  border-radius: 24px;
}
.menu_common {
  max-width: 82px;
  max-height: 82px;
}
.menu_common-image {
  border-radius: 24px;
  display: block;
  position: relative;
  z-index: 1001;
  bottom: 3%;
  right: 8%;
  max-width: 60px;
  max-height: 60px;
  background: #e4e4e4;
}

.menu_tools {
  display: flex;
  justify-content: center;
}
.menu_tools-btn{
  
}
.menu_categories {
    
}
</style>  