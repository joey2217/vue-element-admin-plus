import request from '@/utils/request'
import type { LoginData, UserInfo } from '@/types'
import type { AxiosPromise } from 'axios'

// 登录
export function login(data: LoginData): AxiosPromise<string> {
  return request({
    url: '/login',
    method: 'POST',
    data,
  })
}

// 获取用户信息
export function fetchUserInfo(): AxiosPromise<UserInfo> {
  return request({
    url: '/user-info',
    method: 'GET',
  })
}
