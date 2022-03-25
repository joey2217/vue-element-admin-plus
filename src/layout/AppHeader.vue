<template>
  <header class="flex items-center h-16 pr-4 shadow">
    <div
      class="cursor-pointer h-full flex items-center px-4 hover:text-[#409EFF]"
      @click="onClick"
    >
      <el-icon :size="20">
        <expand v-if="isCollapse" />
        <fold v-else />
      </el-icon>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useAppStore } from './store'

const store = useAppStore()
const { isCollapse } = storeToRefs(store)
const { toggleCollapse } = store

const onClick = () => {
  toggleCollapse()
}
</script>

<style scoped></style>
