import { AxiosPromise } from 'axios';
import request from '@/utils/request';
import { PageParams, ListResult } from '@/utils/types';

type Sex = 'male' | 'female' | undefined
type Role = 'admin' | 'user'

export interface User {
  name: string;
  sex: Sex;
  hobbies: string[];
  email: string;
  roles: Role[];
}

export function getUserPage(params: PageParams): AxiosPromise<ListResult<User>> {
  return request({
    url: '/users',
    method: 'GET',
    params,
  });
}
