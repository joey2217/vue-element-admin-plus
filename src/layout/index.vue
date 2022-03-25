<template>
  <section class="h-screen flex">
    <Sider />
    <section class="flex-1">
      <AppHeader />
      <AppMain />
    </section>
  </section>
</template>

<script lang="ts" setup>
import Sider from './Sider/index.vue'
import AppHeader from './AppHeader.vue'
import AppMain from './AppMain.vue'
</script>

<style scoped></style>
