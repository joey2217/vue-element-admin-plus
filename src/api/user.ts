import type { AxiosPromise } from 'axios'
import request from '@/utils/request'
import type { User, Page, PageResponse } from '@/types'

export function getUserPage(
  params?: Partial<Page & User>
): AxiosPromise<PageResponse<User>> {
  return request({
    url: '/users',
    method: 'GET',
    params,
  })
}
