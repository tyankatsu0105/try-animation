import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FullCanvas from './views/FullCanvas.vue';
import TweenMaxTo from './views/TweenMaxTo.vue';
import AnimeJs from './views/AnimeJs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/full-canvas',
      name: 'full-canvas',
      component: FullCanvas
    },
    {
      path: '/tween-max-to',
      name: 'tween-max-to',
      component: TweenMaxTo
    },
    {
      path: '/anime-js',
      name: 'anime-js',
      component: AnimeJs
    }
  ]
});
