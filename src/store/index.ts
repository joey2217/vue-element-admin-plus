import { createStore } from 'vuex';
import app, { AppState } from './modules/app';
import user, { State as UserState } from './modules/user';

export type RootState = {
  app: AppState;
  user: UserState;
};

const store = createStore<RootState>({
  modules: {
    app,
    user,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;

// https://next.vuex.vuejs.org/guide/typescript-support.html
