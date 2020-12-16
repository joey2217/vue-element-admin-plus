export interface ListResult<T> {
  total: number;
  list: T[];
  [prop: string]: any;
}

export interface Params {
  [prop: string]: any;
}

export interface PageParams {
  page: number;
  size: number;
  [prop: string]: any;
}
