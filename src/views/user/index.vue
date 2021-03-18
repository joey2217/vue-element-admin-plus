<template>
  <div class="container">
    <div class="query">
      <el-form :inline="true" ref="queryForm" :model="query" class="query-form">
        <el-form-item prop="username">
          <el-input v-model="query.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="query.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">Search</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-loading="loading"
      :data="list"
    >
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
    <div class="page">
      <el-pagination
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue'
import { getUserPage } from '@/api/user'
import usePage, { Page } from '@/hooks/usePage'
import { ElForm } from 'element-plus'

export default defineComponent({
  name: 'User',
  setup() {
    const queryForm = ref<typeof ElForm>()
    const query = reactive({
      username: undefined,
      email: undefined,
    })
    const reset = () => {
      queryForm.value?.resetFields()
      onSearch()
    }
    const getPage = async (page: Page) => {
      const params = {
        ...page,
        ...toRaw(query),
      }
      const {
        data: { total, list },
      } = await getUserPage(params)
      return {
        total,
        list,
      }
    }
    const {
      loading,
      total,
      list,
      page,
      size,
      onSearch,
      onSizeChange,
      onCurrentChange,
    } = usePage(getPage)

    return {
      loading,
      total,
      list,
      page,
      size,
      onSearch,
      onSizeChange,
      onCurrentChange,
      tagTypes: ['success', 'info'],
      query,
      queryForm,
      reset,
    }
  },
})
</script>
