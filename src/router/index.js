import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import RegisPage from "../views/RegisPage.vue";
import DetailPage from "../views/DetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "loginPage",
      component: LoginPage,
    },
    {
      path: "/registration",
      name: "regisPage",
      component: RegisPage,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../views/Favorite.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: DetailPage,
    },
  ],
});

export default router;
