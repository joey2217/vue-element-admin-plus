import { AxiosPromise } from 'axios';
import request from '@/utils/request';

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
