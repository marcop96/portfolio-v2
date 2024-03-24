import { createRouter, createWebHistory } from "vue-router";

// Update once you need routes
// Remember to import over at `main.ts` by adding
// `app.use(router)` before `app.mount('#app')`

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/home.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("./views/resume.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
