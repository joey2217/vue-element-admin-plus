<template>
  <el-aside
    class="h-screen overflow-hidden transition-all duration-300 ease-in border-r border-[#dcdfe6]"
    :width="isCollapse ? '65px' : '201px'"
  >
    <Logo />
    <el-menu
      :default-active="route.path"
      id="menu"
      :collapse="isCollapse"
      router
    >
      <el-menu-item index="/">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Home</template>
      </el-menu-item>
      <Menus />
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '../store'
import { HomeFilled } from '@element-plus/icons-vue'
import Logo from './Logo.vue'
import Menus from './Menus.vue'
import { useRoute } from 'vue-router'

const store = useAppStore()
const route = useRoute()
const { isCollapse } = storeToRefs(store)
</script>

<style scoped>
#menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
