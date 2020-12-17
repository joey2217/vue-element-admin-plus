<template>
  <section id="content">
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in">
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
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
