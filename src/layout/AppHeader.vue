<template>
  <header id="header">
    <div id="trigger" :class="{ active: isCollapse }" @click="toggleCollapse">
      <svg-icon iconClass="trigger" />
    </div>
  </header>
</template>
<script lang="ts">
// el-icon-s-unfold
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { TOGGLE_COLLAPSE } from '@/store/modules/app';
import { RootState } from '@/store';
import SvgIcon from '@/plugins/icons/SvgIcon.vue';

export default defineComponent({
  components: { SvgIcon },
  name: 'AppHeader',
  setup() {
    const store = useStore<RootState>();
    console.log(store);
    return {
      isCollapse: computed(() => store.state.app.isCollapse),
      toggleCollapse: () => store.commit(TOGGLE_COLLAPSE),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
