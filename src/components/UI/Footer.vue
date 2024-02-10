<script>
export default {
    name: "Footer",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
}
</script>

<template>
    <footer>
        <div class="footer">
            <div class="footer-link">
                <ul class="footer-links">
                    <p class="footer-link__title">На форуме</p>
                    <li><a class="footer-links__link" href="/main">Главная</a></li>
                    <li><a class="footer-links__link" href="/content/agents">Агенты</a></li>
                    <li><a class="footer-links__link" href="/content/maps">Карты</a></li>
                    <li><a class="footer-links__link" href="/content/bundles">Коллекции</a></li>
                </ul>
            </div>
            <div class="footer-society">
                <div class="society-link">
                    <ul class="society-links">
                        <p class="footer-link__title">Соц сети</p>
                        <li><a class="society-links__link" href="">Ютуб</a></li>
                        <li><a class="society-links__link" href="">Инстаграм</a></li>
                        <li><a class="society-links__link" href="">Телеграм</a></li>
                        <li><a class="society-links__link" href="">ВК</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    margin-top: 120px;
    border-top: 3px solid #DADCDC;
    flex: 0 0 auto;
}

.footer {
    display: flex;
    width: 1169px;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
}

.footer-link {
    justify-content: space-between;
}

.footer-society {
    justify-content: space-between;
}

.footer-links {

    list-style: none;
    width: 522px;
}

.footer-links__link {
    text-decoration: none;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-around;
    font-size: 32px;

}

.footer-links__link:hover {
    background-color: #6a88ff;
}

.society-links {
    list-style: none;
    width: 522px;
    
}

.society-links__link {
    text-decoration: none;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-around;
    font-size: 32px;
}

.society-links__link:hover {
    background-color: #6a88ff;
}

.footer-link__title {
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
    font-size: 42px;
}

@media only screen and (max-width: 768px) {

    .footer {
        display: flex;
        width: 768px;
        margin: 0 auto;
        display: inline-grid;
        background-color:#0e3eff;
    }

    .footer-links {
        list-style: none;
        width: 200px;
    }

    .footer-links__link {
        text-decoration: none;
        color: white;
        font-family: 'Montserrat', sans-serif;
        justify-content: space-around;
        font-size: 12px;

    }

    .footer-links__link:hover {
        background-color: #0e3eff;
    }

    .society-links {
        list-style: none;
        width: 200px;
    }

    .society-links__link {
        text-decoration: none;
        color: white;
        font-family: 'Montserrat', sans-serif;
        justify-content: space-around;
        font-size: 12px;
    }

    .society-links__link:hover {
        background-color: #0e3eff;
    }

    .footer-link__title {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
    }
}

@media only screen and (max-width: 320px) {
    .footer {
        display: flex;
        width: 320px;
        margin: 0 auto;
        display: inline-grid
    }

    .footer-links {
        list-style: none;
        width: 320px;
    }
}
</style>