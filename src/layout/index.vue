<template>
  <div id="layout">
    <Sider />
    <main id="main">
      <AppHeader />
      <section>
        <router-view />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './AppHeader.vue';
import Sider from './Sider/index.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    AppHeader,
    Sider,
  },
  setup(props, { attrs, slots, emit }) {
    return {};
  },
});
</script>
