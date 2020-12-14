import { AxiosPromise } from 'axios';
import request from '@/utils/request';

export interface LoginData {
  username: string;
  password: string;
}
// 登录
export function login(data: LoginData): AxiosPromise<string> {
  return request({
    url: '/login',
    method: 'POST',
    data,
  });
}

export interface MenuItem {
  fullPath: string;
  title: string;
  redirect?: string;
  icon?: string;
  children?: MenuItem[];
}
// 获取菜单
export function getMenus(): AxiosPromise<MenuItem[]> {
  return request({
    url: '/menu',
    method: 'GET',
  });
}
