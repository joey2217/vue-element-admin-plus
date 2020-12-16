import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import routes from './routes';
import store from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

const authAccess = (to: RouteLocationNormalized): boolean => {
  if (to.meta.auth) {
    const flatMenus = store.getters.flatMenus;
    const index = flatMenus && (flatMenus as any[]).findIndex(menu => menu.fullPath === to.path);
    // TODO permission
    return index !== -1;
  } else {
    return true;
  }
};

const AllowList: string[] = ['/login'];

router.beforeEach(async (to, from) => {
  NProgress.start();
  if (AllowList.includes(to.path)) {
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
  const bool = authAccess(to);
  if (bool) {
    NProgress.done();
    return true;
  } else {
    router.replace('/error/403');
    NProgress.done();
    return false;
  }
});
