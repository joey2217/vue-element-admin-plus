import { onMounted, reactive, toRefs } from 'vue';
import { ListResult } from '@/utils/types';
export interface Page {
  page: number;
  size: number;
}
export interface PageState<T> {
  loading: boolean;
  total: number;
  list: T[];
}

export default function usePage<T>(getList: (param: Page) => Promise<ListResult<T>>) {
  const state = reactive<PageState<T>>({
    loading: false,
    total: 0,
    list: [],
  });
  const pageParams = reactive<Page>({
    page: 1,
    size: 10,
  });
  const getData = async () => {
    try {
      state.loading = true;
      const { total, list } = await getList(pageParams);
      state.list = reactive(list);
      state.total = total;
    } catch (error) {
      console.error(error);
    } finally {
      state.loading = false;
    }
  };
  onMounted(getData);

  const onSearch = () => {
    pageParams.page = 1;
    getData();
  };

  return {
    ...toRefs(state),
    ...toRefs(pageParams),
    getData,
    onSearch,
  };
}
