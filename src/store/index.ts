import { createStore } from 'vuex';
import app, { AppState } from './modules/app';

export type RootState = {
  app: AppState;
};

const store = createStore<RootState>({
  modules: {
    app,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;

// https://next.vuex.vuejs.org/guide/typescript-support.html
