<template>
  <div id="layout">
    <Sider />
    <main id="main">
      <AppHeader />
      <AppMain />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './AppHeader.vue';
import Sider from './Sider/index.vue';
import AppMain from './AppMain.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    AppHeader,
    Sider,
    AppMain,
  },
  setup() {
    return {};
  },
});
</script>
