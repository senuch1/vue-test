<script>
export default {
    name: "Welcome",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
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
    </section>
</template>

<style scoped>
.welcome-menu {
    width: 1169px;
    margin: 0 auto;
    padding: 0;
    text-align: center;
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

@media only screen and (max-width: 768px) {

    .welcome-menu {
        width: 680px;
        margin: 0 auto;
        padding: 0;
    }

    .welcome {
        display: flex;
        margin-top: 30px;
        justify-content: center;
        display: inline-grid;

    }

    .welcome-title {
        font-size: 82px;
        color: #00C65E;
        font-family: 'Montserrat', sans-serif;
    }

    .welcome-description {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 26px;
        width: 320px;

    }

    .welcome-img {
        height: 300px;
        width: 300px;
        transition: 1s;
        text-align: center;
    }

    .welcome-img:hover {
        transform: scale(1.1);
    }
}

@media only screen and (max-width: 420px) and (max-width:320px) {

    .welcome-menu {
        width: 320px;
        margin: 0 auto;
        padding: 0;
    }

    .welcome {
        display: flex;
        margin-top: 30px;
        justify-content: center;
        display: inline-grid;

    }

    .welcome-title {
        font-size: 82px;
        color: #00C65E;
        font-family: 'Montserrat', sans-serif;
    }

    .welcome-description {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        width: 320px;

    }

    .welcome-img {
        height: 300px;
        width: 320px;
        transition: 1s;
        text-align: center;
    }

    .welcome-img:hover {
        transform: scale(1.1);
    }
}
</style>