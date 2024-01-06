import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import components from "./components/UI/index.js";
import axios from 'axios';

const app = createApp(App)
app.use(router)

app.config.globalProperties.$axios = axios;

components.forEach((component) => {
    app.component(component.name, component);
});

app.mount('#app')
