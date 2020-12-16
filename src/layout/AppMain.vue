<template>
  <section id="content">
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppMain',
  setup() {
    console.log('AppMain');
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
