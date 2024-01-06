<script>
export default {
    name: "AgentItems",
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
                const response = await this.$axios.get('https://valorant-api.com/v1/agents');
                this.buddies = response.data.data;
                console.log(response.data.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },
    },
    mounted() {
        this.fetchBuddies();
    },
}
</script>

<template>
    <section class="agent-items">
        <div class="agent-item" v-for="buddy in buddies.splice(0,21)" :key="buddy.uuid">
            <img class="agent-item_img" :src="buddy.displayIcon" alt="">
            <p class="agent-item_title"> {{ buddy.displayName }}</p>
        </div>
    </section>
</template>

<style scoped>
.agent-items {
    padding-top: 20px;
    width: 1169px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

}

.agent-item {
    transition: 1s;
}

.agent-item:hover {
    transform: scale(1.1);
}

.agent-title {
    font-size: 146px;
    color: #00C65E;
    font-family: 'Montserrat', sans-serif;
}

.agent-item_img {
    height: 300px;
    width: 300px;
}

.agent-item_title {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
}
</style>