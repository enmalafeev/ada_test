import Vue from 'vue';
import VueRouter from 'vue-router';
import Calculator from '../views/Calculator.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'calculator',
    component: Calculator,
  },
  {
    path: '/websocket',
    name: 'websocket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "websocket" */ '../views/Websocket.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
