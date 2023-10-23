<script>
export default {
  props: {
    diagrams: Array,
  },
};
</script>
  
<template>
  <div class="diagrams">
    <div v-for="(diagram, index) in diagrams" :key="index" class="diagram">
      <div class="bar" :style="{ minHeight: diagram.percentage + 'mm' }">
        <div>{{ diagram.percentage }}%</div>
      </div>
      <div>{{ diagram.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.diagrams {
  display: flex;
  margin-top: 24px;

}

.diagram {
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-left: 12px;
}

.bar {
  background-color: yellow;
  width: 100px;
  text-align: center;
  color: black;
  border: 1px solid black;
}
</style>
  