<template>
  <el-aside
    :width="isCollapse ? '64px' : '200px'"
    class="h-screen overflow-hidden bg-gray-900 transition-all duration-500"
    style="overflow: hidden"
  >
    <Logo />
    <el-scrollbar wrap-class="menu-scrollbar">
      <el-menu
        :default-active="active"
        :collapse="isCollapse"
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        mode="vertical"
        router
        class="border-none"
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <template #title>
            <span>Home</span>
          </template>
        </el-menu-item>
        <Menu :menus="menus" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import { RootState } from '../../store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Sider',
  components: {
    Logo,
    Menu,
  },
  setup() {
    const store = useStore<RootState>()
    const route = useRoute()
    return {
      isCollapse: computed(() => store.state.app.isCollapse),
      menus: computed(() => store.state.user.menus),
      backgroundColor: '#111827',
      textColor: '#fff',
      activeTextColor: '#409EFF',
      active: route.path,
    }
  },
})
</script>


<style scoped>
.menu-scrollbar {
  height: calc(100vh - 64px);
  overflow-x: hidden !important;
}
</style>
