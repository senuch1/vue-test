<script>
export default {
    name: "ContentItems",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
}
</script>

<template>
    <section class="content">
        <div class="content-menu">
            <div class="content-menu-info">
                <h3 class="content-menu-info__title">Контент</h3>
                <p class="content-menu-info__description">Актуальный игровой контент</p>
            </div>
            <img class="content-menu__img"
                src="https://media3.giphy.com/media/HkDiJZ2Iqj4PiZc9ll/200w.gif?cid=82a1493b8p9etkc23eh6aop562h8sysm1tdrodedfei4p7hg&ep=v1_gifs_related&rid=200w.gif&ct=s"
                alt="">
        </div>
        <ul class="content-links">
            <li><a class="links" href="/content/agents">Агенты</a></li>
            <li><a class="links" href="/content/maps">Карты</a></li>
            <li><a class="links" href="/content/bundles">Коллекции</a></li>
        </ul>

    </section>
</template>

<style>
.content {
    width: 1169px;
    margin: 0 auto;
}

.content-links {
    list-style: none;
    margin-top: 200px;

}

.links {
    font-size: 132px;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    transition: 0.4s all ease;
}

.links:hover {
    transition: 0.4s all ease;
    background-color: #6a88ff;
}

.content-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 140px;
}

.content-menu-info {}

.content-menu-info__title {
    font-size: 142px;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
}

.content-menu-info__description {
    font-size: 32px;
    color: #6a88ff;
    font-family: 'Montserrat', sans-serif;
}

.content-menu__img {
    height: 480px;
    width: 480px;
}

@media only screen and (max-width: 768px) {
    .content {
        display: flex;
        width: 768px;
        margin: 0 auto;
        display: inline-grid
    }

    .content-menu-info__title {
        font-size: 32px;
        color: #0e3eff;
        font-family: 'Montserrat', sans-serif;
    }

    .content-menu-info__description {
        font-size: 12px;
        color: #6a88ff;
        font-family: 'Montserrat', sans-serif;
    }

    .content-menu__img {
        height: 200px;
        width: 200px;
    }

    .content-links {
        list-style: none;
        margin-top: 20px;

    }

    .links {
        font-size: 13px;
        color: #0e3eff;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        transition: 0.4s all ease;
    }
}

@media only screen and (max-width: 320px) {
    .content {
        display: flex;
        width: 320px;
        margin: 0 auto;
        display: inline-grid
    }
    .content-menu__img {
        height: 100px;
        width: 100px;
    }
    .content-menu-info__title {
        font-size: 24px;
        color: #0e3eff;
        font-family: 'Montserrat', sans-serif;
    }

    .content-menu-info__description {
        font-size: 12px;
        color: #6a88ff;
        font-family: 'Montserrat', sans-serif;
    }

}
</style>