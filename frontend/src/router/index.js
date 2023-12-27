import { createRouter, createWebHistory } from "vue-router";
import CraftList from "../components/CraftList.vue";
import About from "../components/About.vue";
import CraftView from "../components/CraftView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CraftList,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/crafts/:id",
    component: CraftView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
