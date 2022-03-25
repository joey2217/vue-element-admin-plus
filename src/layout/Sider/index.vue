<template>
  <div
    class="h-screen overflow-hidden transition-all duration-300 ease-in border-r border-[#dcdfe6]"
    :class="[isCollapse ? 'w-16' : 'w-[200px]']"
  >
    <Logo />
    <el-menu default-active="2" id="menu" :collapse="isCollapse">
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { Menu as IconMenu } from '@element-plus/icons-vue'
import { useAppStore } from '../store'
import Logo from './Logo.vue'

const store = useAppStore()
const { isCollapse } = storeToRefs(store)
</script>

<style scoped>
#menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
