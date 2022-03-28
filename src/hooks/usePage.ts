import type { AxiosPromise } from 'axios'
import type { Page, PageResponse } from '@/types'
import { onMounted, reactive, watch, toRefs } from 'vue'

export interface PageState<T = unknown> {
  loading: boolean
  total: number
  list: T[]
}

export default function usePage<T>(
  getPage: (params?: Partial<Page & T>) => AxiosPromise<PageResponse<T>>
) {
  const state = reactive<PageState<T>>({
    loading: false,
    total: 0,
    list: [],
  })

  const pageParams = reactive<Page>({
    page: 1,
    size: 10,
  })

  const getData = async (params?: Partial<T>) => {
    try {
      state.loading = true
      const {
        data: { list, total },
      } = await getPage({ ...params, ...pageParams } as Partial<Page & T>)
      state.total = total
      state.list = reactive(list)
    } catch (error) {
      console.error(error)
    } finally {
      state.loading = false
    }
  }

  onMounted(() => {
    getData()
  })

  watch(
    pageParams,
    () => {
      getData()
    },
    {
      deep: true,
    }
  )
  return {
    ...toRefs(state),
    ...toRefs(pageParams),
    getData,
  }
}
