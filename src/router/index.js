import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/game",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "../views/Game.vue")
  },
  {
    path: "/game-result",
    name: "GameResult",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/GameResult.vue")
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: () => import(/* webpackChunkName: "game" */ "../views/Quiz.vue")
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/Explore.vue")
  },
  {
    path: "/yourvoice",
    name: "YourVoice",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/YourVoice.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
