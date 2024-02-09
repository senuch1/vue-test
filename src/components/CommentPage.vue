<template>
    <div class="comment-page">
        <div>
            <p><strong>{{ topic.title }}</strong></p>
            <p>{{ topic.description }}</p>
            <p>Автор: {{ topic.username }}</p>
        </div>

        <h3>Комментарии</h3>
        <ul>
            <li v-for="comment in comments" :key="comment._id">
                {{ comment.text }}
            </li>
        </ul>

        <form @submit.prevent="submitComment">
            <textarea v-model="newCommentText"></textarea>
            <button type="submit">Добавить комментарий</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            topic: {},
            comments: [],
            newCommentText: '',
            error: null // Добавляем переменную для отображения ошибки
        };
    },
    async mounted() {
        try {
            const topicId = this.$route.params.topicId;
            const topicResponse = await axios.get(`http://localhost:3000/topic/${topicId}`);
            this.topic = topicResponse.data.topic;

            const commentsResponse = await axios.get(`http://localhost:3000/comments/${topicId}`);
            this.comments = commentsResponse.data.comments;
        } catch (error) {
            this.error = 'Ошибка при загрузке данных. Пожалуйста, повторите попытку позже.'; // Обрабатываем ошибку
            console.error('Ошибка при получении данных:', error);
        }
    },
    methods: {
        async submitComment() {
            try {
                const topicId = this.$route.params.topicId;
                const response = await axios.post(`http://localhost:3000/comments/${topicId}`, {
                    text: this.newCommentText
                });
                if (response.data.success) {
                    this.newCommentText = '';
                    this.comments.push(response.data.comment);
                }
            } catch (error) {
                this.error = 'Ошибка при добавлении комментария. Пожалуйста, повторите попытку позже.'; // Обрабатываем ошибку
                console.error('Ошибка при добавлении комментария:', error);
            }
        }
    }
};
</script>
  
<style scoped>
.comment-page {
    padding: 20px;
}

.comment-page-title {
    font-size: 24px;
    margin-bottom: 20px;
}

textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

button {
    background-color: #0e3eff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background-color: #6a88ff;
}

.comment {
    margin-bottom: 20px;
}

.comment p {
    margin-bottom: 5px;
}

.comment p:last-child {
    margin-bottom: 0;
}
</style>
