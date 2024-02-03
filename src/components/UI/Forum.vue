<script>
export default {
    name: "Forum",
    props: {

    },
    data() {
        return {
            newTopic: '',
        };
    },
    methods: {
        createTopic() {
            this.$emit('new-topic', this.newTopic);
            this.newTopic = '';
        },
    },
}
</script>

<template>
    <section class="forum">
        <h2 class="forum-title">Форум</h2>
        <p class="forum-description">Место связи сообщевства</p>
        <div class="forum-themes">
            <input class="themes-input" v-model="newTopic" placeholder="Введите тему" />
            <button class="themes-btn" @click="createTopic">Создать тему</button>
        </div>
    </section>
</template>

<style  scoped>
.forum {
    padding-top: 20px;
    width: 1169px;
    margin: 0 auto;
}

.forum-description {
    color: #6a88ff;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
}

.forum-title {
    font-size: 146px;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
}

.themes-input {
    width: 200px;
    height: 62px;
    border: #0e3eff 1px solid;

    color: #6a88ff;
}

.themes-input::placeholder {
    text-align: center;
    color: #0e3eff;
}

.themes-btn {
    width: 200px;
    height: 66px;
    background-color: #0e3eff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: white;
    border: none;

}

.themes-btn:hover {
    transition: 1s;
    background-color: #0e3eff;
    color: #6a88ff;
    box-shadow: inset 0 0 0 3px #6a88ff;
    cursor: pointer;
}

@media only screen and (max-width: 768px) {
    .forum {
        padding-top: 20px;
        width: 768px;
        margin: 0 auto;
    }

    .forum-title {
        font-size: 82px;
        color:#0e3eff;
        font-family: 'Montserrat', sans-serif;
    }
}

@media only screen and (max-width: 320px) {
    .forum {
        padding-top: 20px;
        width: 320px;
        margin: 0 auto;
    }

    .forum-title {
        font-size: 42px;
        color: #0e3eff;
        font-family: 'Montserrat', sans-serif;
    }
}
</style>