import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default routes
