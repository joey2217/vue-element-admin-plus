import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
]

export default routes
