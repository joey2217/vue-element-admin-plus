import { Module } from 'vuex';
import { RootState } from '../index';
import { login, LoginData } from '@/api/login';

export interface State {
  token: string;
}

const TOKEN_KEY = '__token__';

const initState: () => State = () => ({
  token: localStorage[TOKEN_KEY],
});

const user: Module<State, RootState> = {
  state: initState(),
  mutations: {
    SET_TOKEN: (state, payload: string) => {
      state.token = payload;
      localStorage[TOKEN_KEY] = payload;
    },
  },
  actions: {
    async login({ commit }, loginData: LoginData) {
      const { data } = await login(loginData);
      commit('SET_TOKEN', data);
    },
  },
  getters: {
    token: state => state.token,
  },
};

export default user;
