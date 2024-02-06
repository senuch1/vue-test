<template>
    <section class="forum">
        <h2 class="forum-title">Форум</h2>
        <p class="forum-description">Место связи сообщества</p>
        <div v-if="isLoggedIn" class="forum-themes">
            <input class="themes-input" v-model="newTopic.title" placeholder="Введите тему" />
            <input class="themes-input" v-model="newTopic.description" placeholder="Введите описание">
            <button class="themes-btn" @click="createTopic">Создать тему</button>
        </div>
    </section>
    <section class="topic">
        <h2 class="topic-title">Лента тем</h2>
        <div class="topic-theme">
            <div class="theme" v-for="topic in topics" :key="topic.id">
                <div>
                    <p><strong>{{ topic.title }}</strong></p>
                    <p>{{ topic.description }}</p>
                    <p>Автор: {{ topic.username }}</p>
                </div>
                <div class="theme-btn">
                    <button class="theme-comment_btn" @click="showComments(topic)">Комментарии</button>
                    <button class="theme-delete_btn" @click="deleteTopic(topic.id)">Удалить тему</button>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import axios from 'axios';

export default {
    name: "Forum",
    data() {
        return {
            newTopic: {
                title: '',
                description: '',
            },
            isLoggedIn: false,
            topics: [], // Список тем
        };
    },
    methods: {
        async createTopic() {
            try {
                const response = await axios.post('http://localhost:3000/create-topic', this.newTopic);

                if (response.data.success) {
                    // Очищаем поля после успешного создания темы
                    this.newTopic.title = '';
                    this.newTopic.description = '';

                    // Обновляем список тем
                    this.fetchTopics();
                } else {
                    alert('Ошибка при создании темы');
                }
            } catch (error) {
                console.error('Ошибка при создании темы:', error);
            }
        },
        async fetchTopics() {
            try {
                const response = await axios.get('http://localhost:3000/get-topics');
                this.topics = response.data.topics;
            } catch (error) {
                console.error('Ошибка при получении списка тем:', error);
            }
        },
        showComments(topic) {
            // Перенаправляем на маршрут для CommentList.vue
            router.push({ name: 'CommentList', params: { topicId: topic.id } });
        }
    },
    created() {
        // Проверяем, авторизован ли пользователь
        const authToken = localStorage.getItem('authToken');
        this.isLoggedIn = !!authToken;

        // Загружаем список тем при создании компонента
        this.fetchTopics();
    },
};
</script>
  

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

.topic {
    padding-top: 20px;
    width: 1169px;
    margin: 0 auto;
}


.topic-title {
    font-size: 142px;
    color: #0e3eff;
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
    border: 1px #0e3eff solid;
}

.theme-title {
    color: #0e3eff;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}

.theme-btn {
    text-align: center;
}

.theme-comment_btn {
    background-color: #0e3eff;
    border: none;
    color: white;
    cursor: pointer;
}

.theme-delete_btn {
    border: none;
    color: rgb(43, 43, 43);
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
        color: #0e3eff;
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