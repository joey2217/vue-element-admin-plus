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
        <MenuItem
          v-for="menu in menus"
          :menu="menu"
          :key="menu.fullPath"
          :path="menu.fullPath"
          :title="menu.title"
        />
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Logo from './Logo.vue';
import MenuItem, { Menu } from './MenuItem.vue';

const menus: Menu[] = [
  {
    fullPath: '/user',
    title: 'User',
    icon: 'user',
  },
  {
    fullPath: '/menu',
    title: 'Menu',
    icon: 'Menu',
    redirect: '/menu/menu1/menu1-1',
    children: [
      {
        fullPath: '/menu/menu1',
        title: 'Menu1',
        redirect: '/menu/menu1/menu1-1',
        children: [
          {
            fullPath: '/menu/menu1/menu1-1',
            title: 'Menu1-1',
          },
          {
            fullPath: '/menu/menu1/menu1-2',
            title: 'Menu1-2',
          },
        ],
      },
      {
        fullPath: '/menu/menu2',
        title: 'Menu2',
      },
    ],
  },
];

export default defineComponent({
  name: 'Sider',
  components: {
    Logo,
    MenuItem,
  },
  setup() {
    const store = useStore();
    return {
      isCollapse: computed(() => store.state.app.isCollapse),
      backgroundColor: '#001529',
      textColor: '#fff',
      activeTextColor: '#409EFF',
      menus,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
