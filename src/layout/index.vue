<template>
  <div class="w-full h-screen overflow-hidden flex">
    <Sider />
    <main class="flex-1">
      <AppHeader />
      <AppMain />
    </main>
  </div>
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
