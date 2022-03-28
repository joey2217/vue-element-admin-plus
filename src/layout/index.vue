<template>
  <el-container>
    <Sider />
    <el-container>
      <el-header style="padding: 0"><AppHeader /></el-header>
      <el-main> <AppMain /></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Sider from './Sider/index.vue'
import AppHeader from './AppHeader.vue'
import AppMain from './AppMain.vue'
</script>

<style scoped></style>
