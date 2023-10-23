<script>
export default {
  data() {
    return {
      name: "",
      percentage: 0,
    };
  },
  methods: {
    saveDiagram() {
      this.$emit("save-diagram", {
        name: this.name,
        percentage: parseFloat(this.percentage),
      });
      this.name = "";
      this.percentage = 0;
    },
  },
};
</script>

<template>
  <div>
    <input v-model="name" placeholder="Название" />
    <input type="number" max="100" v-model="percentage" />
    <button @click="saveDiagram">Сохранить</button>
  </div>
</template>
  