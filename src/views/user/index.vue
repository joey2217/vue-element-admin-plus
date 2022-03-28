<template>
  <div>
    <div></div>
    <div>
      <el-table v-loading="loading" :data="list" style="width: 100%">
        <el-table-column prop="name" label="name" show-overflow-tooltip />
        <el-table-column prop="sex" label="sex" show-overflow-tooltip />
        <el-table-column prop="email" label="email" show-overflow-tooltip />
        <el-table-column prop="roles" label="roles" show-overflow-tooltip />
        <el-table-column prop="hobbies" label="hobbies" show-overflow-tooltip />
      </el-table>
      <div class="flex justify-end my-4">
        <el-pagination
          v-model:currentPage="page"
          v-model:page-size="size"
          :page-sizes="[10, 20, 50, 100]"
          background
          layout="sizes, prev, pager, next"
          :total="total"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUserPage } from '@/api/user'
import usePage from '@/hooks/usePage'

const { list, loading, total, page, size } = usePage(getUserPage)
</script>

<style scoped></style>
