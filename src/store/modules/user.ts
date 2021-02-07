import { Module } from 'vuex'
import { RootState } from '../'
import {
  login,
  getUserInfo,
  LoginData,
  MenuItem,
  UserInfo,
} from '../../api/login'
import { flatTree } from '@/utils'

const LOCAL_TOKEN = '_tk'

export interface State {
  token: string
  username: string
  nickname: string
  roles: string[]
  menus: MenuItem[]
  flatMenus: MenuItem[]
  avatar: string
}

const initState: () => State = () => ({
  token: localStorage[LOCAL_TOKEN],
  username: '',
  nickname: '',
  roles: [],
  menus: [],
  flatMenus: [],
  avatar: '',
})

const user: Module<State, RootState> = {
  state: initState(),
  mutations: {
    SET_TOKEN: (state, payload: string) => {
      localStorage[LOCAL_TOKEN] = payload
      state.token = payload
    },
    SET_USER_INFO: (state, payload: UserInfo) => {
      const { username, roles, menus, avatar, nickname } = payload
      state.username = username
      state.nickname = nickname
      state.avatar = avatar || ''
      state.roles = roles
      state.menus = menus
      state.flatMenus = flatTree(menus)
    },
    RESET: (state) => {
      localStorage.removeItem(LOCAL_TOKEN)
      state.token = ''
      state.username = ''
      state.nickname = ''
      state.roles = []
      state.menus = []
      state.flatMenus = []
      state.avatar = ''
    },
  },
  actions: {
    async login({ commit }, loginData: LoginData) {
      const { data } = await login(loginData)
      commit('SET_TOKEN', data)
    },
    logout({ commit }) {
      commit('RESET')
    },
    async getUserInfo({ commit }) {
      const { data } = await getUserInfo()
      commit('SET_USER_INFO', data)
    },
  },
  getters: {
    token: (state) => state.token,
    roles: (state) => state.roles,
    flatMenus: (state) => state.flatMenus,
  },
}

export default user
