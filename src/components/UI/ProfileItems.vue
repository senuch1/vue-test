<script>
export default {
    name: "ProfileItems",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
    computed: {
        isLoggedIn() {
            // Проверяем наличие токена в localStorage
            const authToken = localStorage.getItem('authToken');
            return !!authToken;
        },
    },
    data() {
        return {
            loginData: {
                email: '',
                username: '',
                password: '',
            },
            email: '',
            username: '',
        };
    },
    methods: {
        logout() {
            // Реализация выхода
            // Установка isLoggedIn в false и очистка данных пользователя
            this.isLoggedIn = false;
            this.email = '';
            this.username = '';
            // Очистка токена из localStorage
            localStorage.removeItem('username');
            localStorage.removeItem('authToken');
        }
    }
}
</script>

<template>
    <section class="profile-menu">
        <a v-if="!isLoggedIn" href="/registration">register</a>
        <a v-if="!isLoggedIn" href="/login">login</a>
        <p v-if="isLoggedIn" href="/profile">Ты ЗАРЕГАН</p>
        <button @click="logout">Выйти</button>
    </section>
</template>

<style>
.profile-menu {
    width: 1169px;
    margin: 0 auto;
}
</style>