import { defineStore } from 'pinia'
import { type Theme, getTheme, setTheme } from '@/utils/theme'

export interface AppState {
  theme: Theme
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    theme: getTheme(),
  }),
  actions: {
    toggleTheme(theme?: Theme) {
      if (theme == undefined) {
        theme = this.theme === 'dark' ? 'light' : 'dark'
      }
      this.theme = theme
      setTheme(theme)
    },
  },
})
