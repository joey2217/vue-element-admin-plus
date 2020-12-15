import { Module } from 'vuex';
import { RootState } from '../index';
import { login, LoginData, MenuItem, getUserInfo } from '@/api/login';

export interface State {
  token: string;
  username: string;
  nickname: string;
  roles: string[];
  menus: MenuItem[];
  avatar: string;
}

const TOKEN_KEY = '__token__';

const initState: () => State = () => ({
  token: localStorage[TOKEN_KEY],
  username: '',
  nickname: '',
  roles: [],
  menus: [],
  avatar: '',
});

const user: Module<State, RootState> = {
  state: initState(),
  mutations: {
    SET_TOKEN: (state, payload: string) => {
      state.token = payload;
      localStorage[TOKEN_KEY] = payload;
    },
    SET_USERNAME: (state, payload: string) => {
      state.username = payload;
    },
    SET_NICKNAME: (state, payload: string) => {
      state.nickname = payload;
    },
    SET_ROLES: (state, payload: string[]) => {
      state.roles = payload;
    },
    SET_MENUS: (state, payload: MenuItem[]) => {
      state.menus = payload;
    },
    SET_AVATAR: (state, payload: string) => {
      state.avatar = payload;
    },
  },
  actions: {
    async login({ commit }, loginData: LoginData) {
      const { data } = await login(loginData);
      commit('SET_TOKEN', data);
    },
    async getUserInfo({ commit }) {
      const { data: { username, nickname, roles, menus, avatar } } = await getUserInfo();
      commit('SET_USERNAME', username);
      commit('SET_NICKNAME', nickname);
      commit('SET_ROLES', roles);
      commit('SET_MENUS', menus);
      commit('SET_AVATAR', avatar);
    },
  },
  getters: {
    token: state => state.token,
    username: state => state.username,
  },
};

export default user;
