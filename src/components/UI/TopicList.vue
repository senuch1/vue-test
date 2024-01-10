<script>
export default {
    name: "TopicList",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
    props: ['topics', 'newTopic'],
    methods: {
        showComments(topicId) {
            this.$emit('show-comments', topicId);
        },
        deleteTopic(topicId) {
            this.$emit('delete-topic', topicId);
        },
    },
};
</script>

<template>
    <section class="topic">
        <h2 class="topic-title">Лента тем</h2>
        <div class="topic-theme">
            <div class="theme" v-for="topic in topics" :key="topic.id">
                <p class="theme-title">{{ topic.title }}</p>
                <div class="theme-btn">
                    <button class="theme-comment_btn" @click="showComments(topic)">Комментарии</button>
                    <button class="theme-delete_btn" @click="deleteTopic(topic.id)">Удалить тему</button>
                </div>
            </div>
        </div>
    </section>
</template>
  
<style scoped>
.topic {
    padding-top: 20px;
    width: 1169px;
    margin: 0 auto;
}

.topic-title {
    font-size: 142px;
    color: #00C65E;
    font-family: 'Montserrat', sans-serif;
    text-align: end;

}

.topic-theme {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 1em;
}

.theme {
    width: 300px;
    height: 300px;
    border: 1px #00C65E solid;
}

.theme-title {
    color: white;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}

.theme-btn {
    text-align: center;
}

.theme-comment_btn {
    background-color: #00C65E;
    border: none;
    color: rgb(43, 43, 43);
    cursor: pointer;
}

.theme-delete_btn {
    border: none;
    color: rgb(43, 43, 43);
    cursor: pointer;
}

@media only screen and (max-width: 768px) {
    .topic {
        padding-top: 20px;
        width: 768px;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 320px) {
    .topic {
        padding-top: 20px;
        width: 320px;
        margin: 0 auto;
    }

    .topic-title {
        font-size: 42px;
        color: #00C65E;
        font-family: 'Montserrat', sans-serif;
        text-align: start;
    }
}
</style>