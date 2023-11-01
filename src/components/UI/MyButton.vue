<script>
export default {
  name: "ButtonV1",
};
</script>

<template>
  <button class="btn" @click.prevent="$emit('eventValue')">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  border: 1px solid red;

  background: none;
  color: red;
  cursor: pointer;
}
</style>