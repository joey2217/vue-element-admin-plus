<template>
  <div>
    Error
    <h1>{{code}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Error',
  setup() {
    const route = useRoute();
    const code = Number(route.params.code);
    return {
      code,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
