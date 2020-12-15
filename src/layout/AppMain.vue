<template>
  <section>
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

export default defineComponent({
  name: 'AppMain',
  setup() {
    // TODO 权限
    onBeforeRouteLeave((to, from) => {
      console.log(to, from);
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!',
      );
      // cancel the navigation and stay on the same page
      if (!answer) return false;
    });
    return {

    };
  },
});
</script>

<style lang="scss" scoped>
</style>
