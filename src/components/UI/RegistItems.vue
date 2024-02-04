<script>

import axios from 'axios';
export default {

    name: "RegistItems",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },

    },
    data() {
        return {
            registerData: {
                email: '',
                username: '',
                password: '',
            },
            loginData: {
                email: '',
                username: '',
                password: '',
            },
            isLoggedIn: false,
            username: '',
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://localhost:3000/register', this.registerData);

                if (response.data.success) {
                    // Успешная регистрация
                    const username = response.data.username;
                    // Перенаправление на профиль с уникальным именем пользователя
                    this.$router.push({ name: 'ProfilePage', params: { username } });

                } else {
                    alert('Ошибка при регистрации');
                }
            } catch (error) {
                console.error('Ошибка при регистрации:', error);
            }
        },
    },
    created() {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            // Успешный вход
            this.isLoggedIn = true;

            // Вы можете извлечь другие данные о пользователе из токена, если это необходимо
        }
    }
}

</script>

<template>
    <section class="regist-items">
        <h3 class="title">Регистрация</h3>
        <div v-if="!isLoggedIn">
            <form @submit.prevent="register">
                <input type="name" v-model="registerData.username" required placeholder="Username">
                <input type="email" v-model="registerData.email" required placeholder="email">
                <input type="password" v-model="registerData.password" required placeholder="password">
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    </section>
</template>

<style>
.regist-items {
    width: 1169px;
    margin: 0 auto;
}

.title {
    color: #0e3eff;
    font-size: 82px;
    font-family: 'Montserrat', sans-serif;
}
</style>