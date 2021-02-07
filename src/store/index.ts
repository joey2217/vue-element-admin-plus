import { createStore } from 'vuex'
import user, { State as UserState } from './modules/user'
import app, { AppState } from './modules/app'

export interface RootState {
  user: UserState
  app: AppState
}

const store = createStore({
  modules: {
    user,
    app,
  },
})

export default store
