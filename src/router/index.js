import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../view/HomeView.vue";
import ListView from "../view/ListView.vue";
import LoginView from "../view/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: ListView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
