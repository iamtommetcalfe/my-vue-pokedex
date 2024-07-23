import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeDefault from "../views/HomeDefault.vue";
import PokemonPage from "../views/PokemonPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeDefault,
  },
  {
    path: "/pokemon/:name",
    name: "PokemonPage",
    component: PokemonPage,
    props: true, // Enables passing route params as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // uses HTML5 history mode
  routes,
});

export default router;
