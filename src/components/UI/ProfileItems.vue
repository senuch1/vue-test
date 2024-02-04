<script>
import axios from 'axios';
export default {
    name: "ProfileItems",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
    data() {
        return {
            user: {}, // Здесь будут храниться данные о пользователе
        };
    },
    computed: {
        isLoggedIn() {
            // Проверяем наличие токена в localStorage
            const authToken = localStorage.getItem('authToken');
            return !!authToken;
        },
    },

    methods: {
        async fetchUserProfile() {
            try {
                // Получение данных о пользователе из сервера (замените URL на ваш)
                const response = await axios.get(`http://localhost:3000/profile/${this.$route.params.username}`);

                // Присвоение данных о пользователе переменной user
                this.user = response.data.user;
            } catch (error) {
                console.error('Ошибка при получении данных о пользователе:', error);
            }
        },
        logout() {
            this.userData = null;
            localStorage.removeItem('authToken');
        }
    },
    created() {
        if (this.isLoggedIn) {
            this.fetchUserData();
            
        }
        
    },
    created() {
        this.fetchUserProfile();
    },
}
</script>

<template>
    <section class="profile-menu">
        <div v-if="isLoggedIn" class="profile-menu_logged">
            <p>Ты ЗАРЕГАН</p>
            <p>Username: {{ user }} </p>
            <p>Email: {{ email }} </p>
            <a href="/profile"><button v-if="isLoggedIn" @click="logout">Выйти</button></a>
        </div>
        <div class="profile-menu_unlogged" v-if="!isLoggedIn">
            <p><a class="unlogged-registration" href="/registration">Регистрация</a></p>
            <p class="unloged-login_desc">Уже зарегистрированы? <br><a class="unlogged-login" href="/login">Войти в
                    аккаунт</a></p>
        </div>
    </section>
</template>

<style>
.profile-menu {
    width: 1169px;
    margin: 0 auto;
}

.profile-menu_logged {}

.profile-menu_unlogged {
    width: 520px;
    height: 520px;
    margin: 0 auto;
    text-align: center;
    margin-top: 220px;

}

.unlogged-registration {
    font-size: 82px;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;

}

.unlogged-registration:hover {
    transition: 0.4s all ease;
    background-color: #6a88ff;
}

.unloged-login_desc {
    font-size: 24px;
    color: #252525;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
}

.unlogged-login {
    font-size: 24px;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
}
</style>