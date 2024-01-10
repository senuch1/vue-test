<script>
export default {
  name: "Items",
  props: {
    width: { type: String },
    border: { type: String, required: true },
    background: { type: String, required: true },
    color: { type: String, required: true }
  },
  data() {
    return {
      buddies: [],
    };
  },
  methods: {
    async fetchBuddies() {
      try {
        const response = await this.$axios.get('https://valorant-api.com/v1/bundles');
        this.buddies = response.data.data;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
  },
  mounted() {
    this.fetchBuddies();
  },
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
      <div class="slide-box">
        <img src="https://i.imgur.com/dww6vpI.png" alt="Slide" class="slide" />
      </div>
    </div>
    <div class="items-skins">
      <h2 class="skins-title">Последние коллекции</h2>
      <div class="skins-items">

        <div class="skin-item" v-for="buddy in buddies.slice(0, 3)" :key="buddy.uuid">
          <img class="skin-item_img" :src="buddy.displayIcon" alt="">
          <p class="skin-item_title"> {{ buddy.displayName }}</p>
        </div>

      </div>
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

.skins-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

}

.skin-item {
  transition: 1s;
}

.skin-item:hover {
  transform: scale(1.1);
}

.skins-title {
  font-size: 146px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.skin-item_img {
  height: 180px;
  width: 300px;
}

.skin-item_title {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
}

@media only screen and (max-width: 768px) {
  .items {
  padding-top: 20px;
  width: 768px;
  margin: 0 auto;
  text-align: center;
}

.items-video {
  display: flex;
  margin: 0 auto;
  width: 680px;
  height: 620px;
}

.items-title {
  font-size: 16px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.slider {
  position: relative;
  padding-top: 30px;
}

.slider-title {
  font-size: 16px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.slide {
  max-width: 100%;
  height: auto;
}

.forum-title {
  font-size: 14px;
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

.skins-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

}

.skin-item {
  transition: 1s;
}

.skin-item:hover {
  transform: scale(1.1);
}

.skins-title {
  font-size: 82px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.skin-item_img {
  height: 180px;
  width: 200px;
}

.skin-item_title {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}
}
@media only screen and (max-width: 320px) and (max-width: 768px) {
  .items {
  padding-top: 20px;
  width: 320px;
  margin: 0 auto;
}

.items-video {
  display: flex;
  margin: 0 auto;
  width: 320px;
}

.items-title {
  font-size: 62px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.slider {
  position: relative;
  padding-top: 30px;
}

.slider-title {
  font-size: 42px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.slide {
  max-width: 320px;
  height: auto;
}

.forum-title {
  font-size: 14px;
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

.skins-items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;

}

.skin-item {
  transition: 1s;
}

.skin-item:hover {
  transform: scale(1.1);
}

.skins-title {
  font-size: 46px;
  color: #00C65E;
  font-family: 'Montserrat', sans-serif;
}

.skin-item_img {
  height: 200px;
  width: 200px;
}

.skin-item_title {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
}
}
</style>