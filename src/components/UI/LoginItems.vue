<script>
import axios from 'axios';

export default {
  name: "LoginItems",
  props: {
    width: { type: String },
    border: { type: String, required: true },
    background: { type: String, required: true },
    color: { type: String, required: true }
  },
  data() {
    return {
      loginData: {
        email: '',
        username: '',
        password: '',
      },
      isLoggedIn: false,
      email: '',
      username: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', this.loginData);
        if (response.data.success) {
          // Успешный вход
          this.isLoggedIn = true;
          this.email = response.data.email;
          this.username = response.data.username;
          // Сохранение данных пользователя и токена в localStorage
          localStorage.setItem('username', this.username);
          localStorage.setItem('email', this.email);
          localStorage.setItem('authToken', response.data.token);
          this.$router.push('/main');
        } else {
          alert('Неверное имя пользователя или пароль');
        }
      } catch (error) {
        console.error('Ошибка при входе:', error);
      }
    },
    logout() {
      // Реализация выхода
      // Установка isLoggedIn в false и очистка данных пользователя
      this.isLoggedIn = false;
      this.email = '';
      this.username = '';
      // Очистка токена и данных пользователя из localStorage
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('authToken');
    }
  },
  created() {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // Успешный вход
      this.isLoggedIn = true;
      this.username = localStorage.getItem('username');
      this.email = localStorage.getItem('email');
    }
  }
}
</script>

<template>
  <section class="login-items">
    <h3 class="title">Авторизация</h3>
    <div v-if="!isLoggedIn">
      <form @submit.prevent="login">
        <input type="email" v-model="loginData.email" required placeholder="email">
        <input type="password" v-model="loginData.password" required placeholder="password">
        <button  type="submit">Войти</button>
      </form>
    </div>
    <div v-else>
      <h2>Вы уже авторизованы</h2>

    </div>
  </section>
</template>

<style>
.login-items {
  width: 1169px;
  margin: 0 auto;
}

.title {
  color: #0e3eff;
  font-size: 82px;
  font-family: 'Montserrat', sans-serif;
}
</style>
