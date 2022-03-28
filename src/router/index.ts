import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/stores/user'

/**
 * @link https://router.vuejs.org/zh/
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

router.beforeEach(async (to, from) => {
  try {
    NProgress.start()
    // TODO
    const store = useUserStore()
    if (to.meta.auth) {
      if (store.username) {
        return store.allowPath.includes(to.path)
      } else {
        await store.getUserInfo()
        return store.allowPath.includes(to.path)
      }
    }
  } catch (error) {
    console.error(error)
    return `/login?ref=${from.path}`
  }
})

router.afterEach(() => {
  NProgress.done()
})
