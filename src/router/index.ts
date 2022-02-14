import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * @link https://router.vuejs.org/zh/
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
  return true
})
