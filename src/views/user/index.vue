<template>
  <div class="w-full">
    <el-form ref="formRef" :model="searchForm" label-width="80px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="name" prop="name">
            <el-input v-model="searchForm.name" placeholder="name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="primary" @click="onSearch">Search</el-button>
            <el-button @click="onReset(formRef)">Reset</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <el-table v-loading="loading" :data="list">
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
import { reactive, ref } from 'vue'
import { getUserPage } from '@/api/user'
import usePage from '@/hooks/usePage'
import type { User } from '@/types'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const searchForm = reactive<Partial<User>>({
  name: '',
})
const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const { list, loading, total, page, size, getData } = usePage(getUserPage)

const onSearch = () => {
  getData(searchForm)
}
</script>

<style scoped></style>
