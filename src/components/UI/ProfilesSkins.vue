<script>
import axios from 'axios';

export default {
    name: "ProfilesSkins",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
    data() {
        return {
            user: {},
        };
    },
    created() {
        this.fetchUserProfile();
    },
    methods: {
        async fetchUserProfile() {
            try {
                // Получение имени пользователя из URL
                const username = this.$route.params.username;

                // Отправка запроса на сервер для получения данных о пользователе
                const response = await axios.get(`http://localhost:3000/profile/${username}`);

                // Присвоение данных о пользователе переменной user
                this.user = response.data;
            } catch (error) {
                console.error('Ошибка при получении данных о пользователе:', error);
            }
        },
    },
}
</script>

<template>
    <section class="profile-menu">
        <div class="profile-page">
            <h2>Профиль пользователя {{ user.username }}</h2>
            <div>
                <p><strong>Имя пользователя:</strong> {{ user.username }}</p>
                <p><strong>ID пользователя:</strong> {{ user._id }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
            </div>
        </div>
    </section>
</template>

<style>
.profile-menu {
    width: 1169px;
    margin: 0 auto;
}
</style>