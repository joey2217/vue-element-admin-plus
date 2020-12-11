<template>
  <aside
    id="aside"
    :style="{
      width: isCollapse ? '64px' : '200px',
    }"
  >
    <Logo />
    <el-scrollbar wrap-class="menu-scrollbar">
      <el-menu
        default-active="/"
        :collapse="isCollapse"
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        mode="vertical"
        router
      >
        <Menu />
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Logo from './Logo.vue';
import Menu from './Menu.vue';

export default defineComponent({
  name: 'Sider',
  components: {
    Logo,
    Menu,
  },
  setup() {
    const store = useStore();
    return {
      isCollapse: computed(() => store.state.app.isCollapse),
      backgroundColor: '#001529',
      textColor: '#fff',
      activeTextColor: '#409EFF',
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
