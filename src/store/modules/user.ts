import { toRaw } from 'vue';
import { Module } from 'vuex';
import { RootState } from '../index';
import { login, LoginData, MenuItem, getUserInfo } from '@/api/login';
import { flatTree } from '@/utils';
export interface State {
  token: string;
  username: string;
  nickname: string;
  roles: string[];
  menus: MenuItem[];
  flatMenus: MenuItem[];
  avatar: string;
}

const TOKEN_KEY = '__token__';

const initState: () => State = () => ({
  token: localStorage[TOKEN_KEY],
  username: '',
  nickname: '',
  roles: [],
  menus: [],
  flatMenus: [],
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
      state.flatMenus = flatTree(payload);
    },
    SET_AVATAR: (state, payload: string) => {
      state.avatar = payload;
    },
    RESET: (state) => {
      localStorage[TOKEN_KEY] = '';
      state.token = '';
      state.username = '';
      state.nickname = '';
      state.roles = [];
      state.menus = [];
      state.flatMenus = [];
      state.avatar = '';
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
    logout({ commit }) {
      // TODO backend logout
      commit('RESET');
    },
  },
  getters: {
    token: state => state.token,
    username: state => state.username,
    flatMenus: state => toRaw(state.flatMenus),
  },
};

export default user;
