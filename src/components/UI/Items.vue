<script>

export default {
  name: "Items",
  props: {
    width: { type: String },
    border: { type: String, required: true },
    background: { type: String, required: true },
    color: { type: String, required: true },
  },
  data() {
    return {
      images: [
        'https://i.imgur.com/dww6vpI.png',
        'https://i.imgur.com/QWBLLCB.png',
        'https://i.imgur.com/LaO8r4z.png'
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    // Запускаем автоматическое переключение изображений через каждые 4 секунды
    this.startAutoSlide();
  },
  beforeDestroy() {
    // Очищаем интервал при уничтожении компонента
    clearInterval(this.intervalId);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    startAutoSlide() {
      // Устанавливаем интервал для автоматического переключения слайдов
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000);
    }
  }
  // https://valorant-api.com/v1/bundles
};
</script>

<template>
  <section class="items">
    <div class="">
      <h2 class="items-title">Трейлер</h2>
      <iframe class="items-video" width="880" height="505"
        src="https://www.youtube.com/embed/k6m5wKe0yfA?si=tw8z2EzVEA2C4j9d" title="video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="slider">
      <h2 class="slider-title">Творчество</h2>
      <div class="slider">
        <img :src="currentImage" alt="Slide" class="slide" />
      </div>
    </div>
    <div class="items-skins">
      <h2 class="skins-title">Последние коллекции</h2>
      <div class="skins-items">
        
        <div class="skin-item">

        </div>

        <div class="skin-item">

        </div>

        <div class="skin-item">

        </div>
      </div>
    </div>
    <div class="forum">
      <h2 class="forum-title">На форуме</h2>
    </div>
  </section>
</template>

<style scoped>
.items {
  padding-top: 20px;
  width: 1169px;
  margin: 0 auto;
}

.items-video {
  display: flex;
  margin: 0 auto;
}

.items-title {
  font-size: 146px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.slider {
  position: relative;
  padding-top: 30px;
}

.slider-title {
  font-size: 146px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.slide {
  max-width: 100%;
  height: auto;
}

.forum-title {
  font-size: 146px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

button {
  padding: 10px;
  background-color: #266342;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #00C65E;
}

.skins-title {
  font-size: 146px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}
</style>