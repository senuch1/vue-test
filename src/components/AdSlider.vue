<template>
    <div class="ad-slider">
        <component :is="currentSlideComponent" />
        <button @click="prevSlide">Предыдущий</button>
        <button @click="nextSlide">Следующий</button>
    </div>
</template>
  
<script>
import Slide1 from "./Slide1.vue";
import Slide2 from "./Slide2.vue";
import Slide3 from "./Slide3.vue";

export default {
    name: "AdSlider",
    data() {
        return {
            slides: [Slide1, Slide2, Slide3],
            currentSlide: 0,
        };
    },
    computed: {
        currentSlideComponent() {
            return this.slides[this.currentSlide];
        },
    },
    methods: {
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
    },
};
</script>
<style scoped></style>
  