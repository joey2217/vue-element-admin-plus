<template>
  <el-container class="h-screen overflow-hidden">
    <Sider />
    <el-container direction="vertical">
      <AppHeader />
      <AppMain />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './AppHeader.vue'
import Sider from './Sider/index.vue'
import AppMain from './AppMain.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    AppHeader,
    Sider,
    AppMain,
  },
})
</script>
