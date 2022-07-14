// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.js";

export default createRouter({
  history: createWebHistory(),
  routes,
});

//router
