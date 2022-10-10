import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pagina1 from "../views/Pagina1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Admin.vue"),
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/page1",
      name: "page1",
      component: Pagina1,
    },
    {
      path: "/page2",
      name: "page2",
      component: () => import("../views/Pagina2.vue"),
    },
  ],
});

export default router;
