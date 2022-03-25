import { defineStore } from 'pinia'

export interface AppState {
  isCollapse: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    isCollapse: false,
  }),
  actions: {
    toggleCollapse(collapse?: boolean) {
      if (collapse != undefined) {
        this.isCollapse = collapse
      } else {
        this.isCollapse = !this.isCollapse
      }
    },
  },
})
