import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ToDo from "../views/ToDo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/todo",
    name: "todo",
    component: ToDo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
