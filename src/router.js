import { createRouter, createWebHistory } from "vue-router";
import RegistPage from "./components/RegistPage.vue"
import MainPage from "./components/MainPage.vue"
import AgentPage from "./components/AgentPage.vue"
import MapPage from "./components/MapPage.vue"
import BundlePage from "./components/BundlePage.vue"
import ForumPage from "./components/ForumPage.vue"
import ContentPage from "./components/ContentPage.vue"
import LoginPage from "./components/LoginPage.vue"
import ProfilePage from "./components/ProfilePage.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/registration', component: RegistPage},
    { path: '/login', component: LoginPage},
    { path: '/main', component: MainPage, alias:'/main'},
    { path: '/content', component: ContentPage},
    { path: '/content/agents', component: AgentPage},
    { path: '/content/maps', component: MapPage},
    { path: '/content/bundles', component: BundlePage},
    { path: '/forum', component: ForumPage},
    { path: '/profile', component: ProfilePage},
  ],
  
});

