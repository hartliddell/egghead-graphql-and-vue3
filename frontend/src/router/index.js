import { createRouter, createWebHistory } from "vue-router";
import CraftList from "../components/CraftList.vue";
import About from "../components/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CraftList,
  },
  {
    path: "/about",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
