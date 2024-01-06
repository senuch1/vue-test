<script>
export default {
    name: "Forum",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
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
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
}

.forum-title {
    font-size: 146px;
    color: #00C65E;
    font-family: 'Montserrat', sans-serif;
}
.forum-themes{

}
.themes-input{
    width: 200px;
    height: 62px;
    border: #00C65E 1px solid;
    background-color: rgb(43, 43, 43);
    color: #00C65E;
}
.themes-input::placeholder {
 text-align: center;
  color:#00C65E  ;
}

.themes-btn{
    width: 200px;
    height: 66px;
    background-color: #00C65E;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: white;
    border: none;

}
.themes-btn:hover {
    transition: 1s;
	background: rgba(0,0,0,0);
	color: #00C65E;
	box-shadow: inset 0 0 0 3px #00C65E;
    cursor: pointer;
}
</style>