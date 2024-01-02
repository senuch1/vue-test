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
                    <li><a class="footer-links__link" href="">Главная</a></li>
                    <li><a class="footer-links__link" href="">Агенты</a></li>
                    <li><a class="footer-links__link" href="">Карты</a></li>
                    <li><a class="footer-links__link" href="">Коллекции</a></li>
                    <li><a class="footer-links__link" href="">Скины</a></li>
                    <li><a class="footer-links__link" href="">Спреи</a></li>
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
                        <li><a class="society-links__link" href="">Фейсбук</a></li>
                        <li><a class="society-links__link" href="">ТикТок</a></li>
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
    color: white;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-around;
    font-size: 32px;

}

.footer-links__link:hover {
    background-color: #00C65E;
}

.society-links {
    list-style: none;
    width: 522px;
}

.society-links__link {
    text-decoration: none;
    color: white;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-around;
    font-size: 32px;
}

.society-links__link:hover {
    background-color: #00C65E;
}

.footer-link__title {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 42px;
}
</style>