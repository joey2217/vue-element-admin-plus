<template>
  <div>
    Menu:{{path}}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Menu',
  setup() {
    const route = useRoute();
    return {
      path: computed(() => route.path),
    };
  },
});
</script>
