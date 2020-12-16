<template>
  <div class="content">
    <div class="card query mb10">
      1
    </div>
    <div class="card">
       <el-table
       v-loading="loading"
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="日期"
        width="180">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getUserPage } from '@/api/user';
import usePage, { Page } from '@/hooks/usePage';

export default defineComponent({
  name: 'User',
  setup() {
    const getPage = async (page: Page) => {
      const { data: { total, list } } = await getUserPage(page);
      return {
        total,
        list,
      };
    };
    const { loading, total, list, page, size, onSearch } = usePage(getPage);
    return {
      loading,
      total,
      list,
      page,
      size,
      onSearch,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
