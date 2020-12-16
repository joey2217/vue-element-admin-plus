<template>
  <div class="container">
    <div class="card">
      <h3>Name:{{ name }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore<RootState>();
    return {
      name: computed(() => store.state.user.nickname),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
