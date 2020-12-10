import { createStore } from 'vuex';
import app from './modules/app';

export interface RootState {
  id: 1;
}

const store = createStore<RootState>({
  modules: {
    app,
  },
});

export default store;
