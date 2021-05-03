import Vue from "vue";
import store from "../store";
import Router from "vue-router";

import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import AboutPage from "../views/AboutPage.vue";

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  if( to.name !== 'Login' && !store.getters.isLoggedIn){
    next({ name: 'Login'})
  }
  else if( to.name === 'Login' && store.getters.isLoggedIn){
    next('/')
  }
  else{
    next()
  }
});

