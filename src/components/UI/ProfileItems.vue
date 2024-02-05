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
        fetchUserProfile() {
            // Получение данных о пользователе из localStorage
            this.user = {
                username: localStorage.getItem('username') || '',
                email: localStorage.getItem('email') || '',
            };
        },
        logout() {
            localStorage.removeItem('authToken');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            this.user = {};
        },
    },
    created() {
        if (this.isLoggedIn) {
            this.fetchUserProfile();
        }
    },
};
</script>

<template>
    <section class="profile-menu">
        <div v-if="isLoggedIn" class="profile-menu_logged">
            <h4>профиль</h4>
            <p>Ваш логин: {{ user.username }} </p>
            <p>Ваша почта: {{ user.email }} </p>
            <p>Ваше описание:</p>
            <input type="text">
            <button v-if="isLoggedIn" @click="">Сохранить</button>
            <p>Ваш гендер: {{ selected }}</p>
            <select v-model="selected">
                <option>None</option>
                <option>Female</option>
                <option>Male</option>
            </select>
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

.profile-menu_logged {
    width: 520px;
    height: 520px;
    margin: 0 auto;
    text-align: center;
    margin-top: 220px;
}

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
