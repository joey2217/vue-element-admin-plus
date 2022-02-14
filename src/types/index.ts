export interface LoginData {
  username: string
  password: string
}

export interface MenuItem {
  fullPath: string
  title: string
  redirect?: string
  icon?: string
  children?: MenuItem[]
}

export interface UserInfo {
  username: string
  nickname: string
  roles: string[]
  menus: MenuItem[]
  avatar?: string
}

type Sex = 'male' | 'female' | undefined
type Role = 'admin' | 'user'

export interface User {
  name: string
  sex: Sex
  hobbies: string[]
  email: string
  roles: Role[]
}
