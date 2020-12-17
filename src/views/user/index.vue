<template>
  <div class="container">
    <!-- <div class="card query mb10">1</div> -->
    <div class="card">
      <el-table v-loading="loading" :data="list" style="width: 100%">
        <el-table-column prop="name" label="Name" show-overflow-tooltip />
        <el-table-column prop="sex" label="Sex" show-overflow-tooltip />
        <el-table-column
          prop="hobbies"
          label="Hobbies"
          :formatter="(r, c, value) => value.join()"
          show-overflow-tooltip
        />
        <el-table-column prop="email" label="Email" show-overflow-tooltip />
        <el-table-column prop="roles" label="Roles" show-overflow-tooltip>
          <template v-slot="{ row }">
            <el-tag
              v-for="(role, index) in row.roles"
              :key="role"
              :type="tagTypes[index]"
            >
              {{ role }}
            </el-tag>
          </template>
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
      const {
        data: { total, list },
      } = await getUserPage(page);
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
      tagTypes: ['success', 'info'],
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
