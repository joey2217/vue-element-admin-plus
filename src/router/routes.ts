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
        name: 'home',
        component: Home,
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
