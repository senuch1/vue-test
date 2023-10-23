<script>
import DiagramInput from "./components/DiagramInput.vue";
import DiagramDisplay from "./components/DiagramDisplay.vue";

export default {
  data() {
    return {
      diagrams: [],
    };
  },
  components: {
    DiagramInput,
    DiagramDisplay,
  },
  methods: {
    addDiagram(diagram) {
      this.diagrams.push(diagram);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <diagram-input @save-diagram="addDiagram" />
    </div>
    <div>
      <diagram-display :diagrams="diagrams" />
    </div>
  </div>
</template>
