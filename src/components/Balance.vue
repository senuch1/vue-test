<template>
  <div class="balance_list">
    <h2 class="balance_name">BALANCE:</h2>
    <h1 class="balance">${{ balance }}</h1>
  </div>
</template>
  
<script>
export default {
  computed: {
    balance() {
      return this.$store.state.balance.balance;
    },
  },
};
</script>
<style>
.balance_list {
  width: 250px;
  height: 150px;
  border-radius: 8px;
  background: #FFFFFF;
}

.balance_name {
  font-family: Istok Web;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}

.balance {
  width: 126px;
  height: 72px;
  font-family: Istok Web;
  font-size: 50px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: left;
  color: #55885D;

}
</style>
  