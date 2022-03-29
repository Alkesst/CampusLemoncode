import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:login",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
