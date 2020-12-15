import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import store from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

const allowList = ['/login'];

router.beforeEach(async (to, from) => {
  NProgress.start();
  if (allowList.includes(to.path)) {
    return true;
  } else {
    const token = store.getters.token;
    if (token) {
      const username = store.getters.username;
      if (username) {
        return true;
      } else {
        try {
          await store.dispatch('getUserInfo');
          return true;
        } catch (error) {
          console.error(error);
          router.replace('/login');
          return false;
        }
      }
    } else {
      router.replace('/login');
      return false;
    }
  }
});

router.beforeEach((to, from) => {
  // canUserAccess() returns `true` or `false`
  NProgress.done();
  return true;
});
