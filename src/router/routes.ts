import { RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
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
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/error/404',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
  },
  {
    path: '/error/403',
    name: 'Forbidden',
    component: () => import('@/views/error/403.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/error/404',
  },
]

export default routes
