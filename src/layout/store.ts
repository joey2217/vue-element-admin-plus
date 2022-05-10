import { defineStore } from 'pinia'

export interface LayoutState {
  isCollapse: boolean
}

const COLLAPSE = 'collapse'

export const useLayoutStore = defineStore('layout', {
  state: (): LayoutState => ({
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
