import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/essentials",
      name: "Essentials",
      component: () => import("../views/EssentialsView.vue"),
    },
    {
      path: "/Components-in-depth",
      name: "Components In-Depth",
      component: () => import("../views/ComponentsInDepthView.vue"),
    },
    {
      path: "/reusability",
      name: "Reusability",
      component: () => import("../views/ReusabilityView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
