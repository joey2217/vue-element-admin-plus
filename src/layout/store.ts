import { defineStore } from 'pinia'

export interface AppState {
  isCollapse: boolean
}

const COLLAPSE = 'collapse'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    isCollapse: localStorage.getItem(COLLAPSE) === 'true' || false,
  }),
  actions: {
    toggleCollapse(collapse?: boolean) {
      if (collapse != undefined) {
        this.isCollapse = collapse
      } else {
        this.isCollapse = !this.isCollapse
      }
      localStorage.setItem(COLLAPSE, String(this.isCollapse))
    },
  },
})
