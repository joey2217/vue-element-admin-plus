import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import Login from '@/views/login/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // TODO
  { path: '/:pathMatch(.*)*', name: 'not-found', component: Layout },
];

export default routes;
