<script>
import axios from 'axios'
export default {
    name: "Welcome",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
    mounted() {
        axios
        // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        // .then(response => (this.info = response));
    },
}
</script>

<template>
    <section class="welcome-menu">
        <div class="welcome">
            <img class="welcome-img" src="https://mystickermania.com/cdn/stickers/games/valorant-viper-cold-512x512.png"
                alt="">
            <div>
                <h1 class="welcome-title">Dilly</h1>
                <p class="welcome-description">Добро пожаловать на Dilly уникальный форум, посвященный игре
                    Valorant! Dilly – это место,
                    где страсть сообщевства встречает талантливых игроков, а обмен опытом становится ключом к мастерству.
                </p>
            </div>
        </div>

        <!-- <p>{{ info.data.time.updated }}</p> -->
    </section>
</template>

<style scoped>
.welcome-menu {
    width: 1169px;
    margin: 0 auto;
    padding: 0;
}

.welcome {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.welcome-title {
    font-size: 146px;
    color: #00C65E;
    font-family: 'Montserrat', sans-serif;
}

.welcome-description {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;

}

.welcome-img {
    padding-top: 112px;
    height: 520px;
    width: 480px;
    transition: 1s;
}

.welcome-img:hover {
    transform: scale(1.1);
}
</style>