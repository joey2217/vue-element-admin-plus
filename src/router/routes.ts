import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import Login from '@/views/login/index.vue';
import Home from '@/views/home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: '',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
        meta: {
          auth: true,
        },
      },
    ],
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Form',
        component: () => import('@/views/form/index.vue'),
        meta: {
          auth: true,
        },
      },
    ],
  },
  {
    path: '/menu',
    component: Layout,
    children: [
      {
        path: '/:chapters*',
        name: 'Menu',
        component: () => import('@/views/menu/index.vue'),
        meta: {
          auth: true,
        },
      },
    ],
  },
  {
    path: '/error',
    component: Layout,
    children: [
      {
        path: '404',
        name: 'NotFound',
        component: () => import('@/views/error/404.vue'),
        alias: '/error',
      },
      {
        path: '403',
        name: 'Forbidden',
        component: () => import('@/views/error/403.vue'),
      },
    ],
  },
  // TODO
  { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/error/404' },
];

export default routes;
