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
                console.error('Ошибкa', error);
            }
        },
    },
    mounted() {
        this.fetchBuddies();
    },
}
</script>

<template>
    <div class="back">
        <a href="/content"><img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-bleu.png" class="link-back" alt=""></a>
    </div>
    <section class="agent-items">
        
        <div class="agent-item" v-for="buddy in buddies.splice(0, 21)" :key="buddy.uuid">
        
            <img class="agent-item_img" :src="buddy.displayIcon" alt="">
            <p class="agent-item_title"> {{ buddy.displayName }}</p>
        </div>
    </section>
</template>

<style scoped>
.back{
    width: 1169px;
    margin: 0 auto;
}
.link-back{
    width: 148px;
    height: 148px;
    margin: 0 auto;

}
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
    text-align: center;
}

.agent-item:hover {
    transform: scale(1.1);
}

.agent-title {
    font-size: 146px;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
}

.agent-item_img {
    height: 300px;
    width: 300px;
}

.agent-item_title {
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
}

@media only screen and (max-width: 768px) {
    .agent-items {
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
    .agent-items {
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