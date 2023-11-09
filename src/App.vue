<script>
// import initaliazeApp from "./mixin/initaliazeApp"
import Balance from './components/Balance.vue'
import CategoryModal from './components/CategoryModal.vue'
import ProfitModal from './components/ProfitModal.vue'
import ExpenseModal from './components/ExpenseModal.vue'
import CategoryList from './components/CategoryList.vue'

export default {
  components: {
    Balance,
    CategoryModal,
    ProfitModal,
    ExpenseModal,
    CategoryList
  },
  // mixins: [initaliazeApp],
  data: () => {
    return {

    }
  },
  mounted() {
    // this.initApp();
  },
}
</script>

<template>
  <div>
    <div class="menu">
      <div class="menu_tools">
        <Balance />
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
  </div>  
</template>

<style scoped>
.menu {
  margin-left:30px ;
  margin-top: 40px;
  box-shadow: 0px 0px 10px 0px #0000004D;
  width: 600px;
  height: 944px;

}

.menu_tools {
  display: flex;
  height: 150px;
  width: 350px;
  align-items: center;
  margin-left: 50px;
  
}
.menu_tools-btn{

}
.menu_categories {
  margin-left: 50px;
}
</style>  