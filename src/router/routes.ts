import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import Layout from '../layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    meta: {
      auth: true,
    },
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: '/user',
    component: Layout,
    meta: {
      auth: true,
    },
    children: [
      {
        path: '',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
      },
    ],
  },
  {
    path: '/form',
    component: Layout,
    meta: {
      auth: true,
    },
    children: [
      {
        path: '',
        component: () => import('@/views/form/index.vue'),
      },
    ],
  },
  {
    path: '/menu',
    component: Layout,
    meta: {
      auth: true,
    },
    children: [
      {
        path: '/:chapters*',
        component: () => import('@/views/menu/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default routes
