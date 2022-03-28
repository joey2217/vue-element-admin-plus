import { defineStore } from 'pinia'
import type { UserInfo } from '@/types'
import { fetchUserInfo, login } from '@/api/login'
import { flatTree } from '@/utils'

export const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    username: '',
    nickname: '',
    roles: [],
    menus: [],
    avatar: '',
  }),
  actions: {
    async getUserInfo() {
      const res = await fetchUserInfo()
      const { username, nickname, roles, menus, avatar } = res.data
      this.username = username
      this.nickname = nickname
      this.roles = roles
      this.menus = menus
      this.avatar = avatar
    },
    async logout() {
      this.$reset()
      // request logout
    },
  },
  getters: {
    allowPath: (state): string[] =>
      flatTree(state.menus)
        .map((item) => item.fullPath)
        .concat('/'),
  },
})
