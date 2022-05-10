export type Theme = 'dark' | 'light'

export function getTheme(): Theme {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    return 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    return 'light'
  }
}

export function setTheme(theme: Theme) {
  localStorage.setItem('theme', theme)
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
