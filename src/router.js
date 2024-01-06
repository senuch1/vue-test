import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./components/MainPage.vue"
import AgentPage from "./components/AgentPage.vue"
import MapPage from "./components/MapPage.vue"
import BundlePage from "./components/BundlePage.vue"
import ForumPage from "./components/ForumPage.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/main', component: MainPage, alias:'/main'},
    { path: '/agents', component: AgentPage},
    { path: '/maps', component: MapPage},
    { path: '/bundles', component: BundlePage},
    { path: '/forum', component: ForumPage},
  ],
  
});

