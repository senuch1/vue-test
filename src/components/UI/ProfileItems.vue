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
            email: {},
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
            <h4 class="profile-menu_title">профиль</h4>
            <p class="profile-menu_text">Ваш логин: {{ user.username }} </p>
            <p class="profile-menu_text">Ваша почта: {{ user.email }} </p>
            <a href="/profile"><button v-if="isLoggedIn" class="profile-menu_btn" @click="logout">Выйти из
                    профиля</button></a>
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

.profile-menu_title {
    color: #0e3eff;
    font-size: 82px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}

.profile-menu_text {
    color: #202020;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}

.profile-menu_btn {
    height: 42px;
    width: 82px;
    margin-top: 30px;
    background-color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
    border: none;
    color: white;
    cursor: pointer;
}

@media only screen and (max-width: 768px) {
    .profile-menu {
        width: 768px;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 320px) {
    .profile-menu {
        width: 320px;
        margin: 0 auto;
    }

    .profile-menu_logged {
        width: 0px;
        margin: 0;
    }

    .profile-menu_title {
        font-size: 32px;
    }
}
</style>
