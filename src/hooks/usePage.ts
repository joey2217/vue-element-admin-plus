import { onMounted, reactive, toRefs } from 'vue'

export interface ListResult<T> {
  total: number
  list: T[]
  [prop: string]: any
}
export interface Page {
  page: number
  size: number
}
export interface PageState<T> {
  loading: boolean
  total: number
  list: T[]
}

export default function usePage<T>(
  getList: (param: Page) => Promise<ListResult<T>>,
  page?: Page
) {
  const state = reactive<PageState<T>>({
    loading: false,
    total: 0,
    list: [],
  })

  const pageParams = reactive<Page>({
    page: page?.page || 1,
    size: page?.size || 10,
  })

  const getData = async () => {
    try {
      state.loading = true
      const { total, list } = await getList(pageParams)
      state.list = reactive(list)
      state.total = total
    } catch (error) {
      console.error(error)
    } finally {
      state.loading = false
    }
  }
  onMounted(getData)

  const onSearch = () => {
    pageParams.page = 1
    getData()
  }

  const onSizeChange = (size: number) => {
    pageParams.size = size
    getData()
  }
  const onCurrentChange = (page: number) => {
    pageParams.page = page
    getData()
  }

  return {
    ...toRefs(state),
    ...toRefs(pageParams),
    getData,
    onSearch,
    onSizeChange,
    onCurrentChange,
  }
}
