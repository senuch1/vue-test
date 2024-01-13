<script>
export default {
    name: "BundleItems",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
    data() {
        return {
            buddies: [],
        }
    },
    methods: {
        async fetchBuddies() {
            try {
                const response = await this.$axios.get('https://valorant-api.com/v1/bundles');
                this.buddies = response.data.data;
                console.log(response.data.data);
            } catch (error) {
                console.error('Ошибка', error);
            }
        },
    },
    mounted() {
        this.fetchBuddies();
    },
}
</script>

<template>
    <section class="bundle-items">
        <div class="bundle-item" v-for="buddy in buddies.splice(0, 77)" :key="buddy.uuid">
            <img class="bundle-item_img" :src="buddy.displayIcon" alt="">
            <p class="bundle-item_title"> {{ buddy.displayName }}</p>
        </div>
    </section>
</template>

<style scoped>
.bundle-items {
    padding-top: 20px;
    width: 1169px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

}

.bundle-item {
    transition: 1s;
    text-align: center;
}

.bundle-item:hover {
    transform: scale(1.1);
}

.bundle-title {
    font-size: 146px;
    color: #00C65E;
    font-family: 'Montserrat', sans-serif;
}

.bundle-item_img {
    height: 300px;
    width: 300px;
}

.bundle-item_title {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
}

@media only screen and (max-width: 768px) {
    .bundle-items {
        padding-top: 20px;
        width: 768px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(7, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;

    }

}

@media only screen and (max-width: 320px) {
    .bundle-items {
        padding-top: 20px;
        width: 320px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(7, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;

    }

}
</style>