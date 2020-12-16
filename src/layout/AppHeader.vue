<template>
  <header id="header">
    <div id="trigger" :class="{ active: isCollapse }" @click="toggleCollapse">
      <svg-icon iconClass="trigger" />
    </div>
    <el-dropdown class="d-flex align-items-center block">
      <el-avatar id="avatar" :size="40" :src="avatar"> User </el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <router-link to="/">
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <div @click="logout">
            <el-dropdown-item divided>Logout</el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { TOGGLE_COLLAPSE } from '@/store/modules/app';
import { RootState } from '@/store';
import SvgIcon from '@/plugins/icons/SvgIcon.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { SvgIcon },
  name: 'AppHeader',
  setup() {
    const store = useStore<RootState>();
    const router = useRouter();
    const logout = () => {
      store.dispatch('logout');
      router.push('/login');
    };
    return {
      isCollapse: computed(() => store.state.app.isCollapse),
      avatar: computed(() => store.state.user.avatar),
      toggleCollapse: () => store.commit(TOGGLE_COLLAPSE),
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
