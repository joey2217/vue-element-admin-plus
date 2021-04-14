<template>
  <el-header class="flex items-center justify-between h-16 px-4">
    <div
      :class="{ 'transform rotate-180': isCollapse }"
      class="cursor-pointer"
      @click="toggleCollapse"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path
          d="M8 11H40"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 24H42"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 37H40"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M36.3433 29.6569L42.0001 24L36.3433 18.3431"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div>
      <el-dropdown>
        <div
          class="h-16 flex items-center px-2 hover:bg-gray-50 focus:outline-none"
        >
          <el-avatar :size="40" :src="avatar">
            Avatar
          </el-avatar>
          <span class="ml-2 uppercase">{{ username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>Home</el-dropdown-item>
            </router-link>
            <a
              href="https://github.com/BurNing1993/vue-element-admin-plus"
              target="_blank"
            >
              <el-dropdown-item divided>Github</el-dropdown-item>
            </a>
            <div @click="logout">
              <el-dropdown-item divided>
                Logout
              </el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { TOGGLE_COLLAPSE } from '../store/modules/app'
import { RootState } from '../store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const store = useStore<RootState>()
    const router = useRouter()
    const logout = () => {
      store.dispatch('logout')
      router.push('/login')
    }
    return {
      isCollapse: computed(() => store.state.app.isCollapse),
      username: computed(() => store.state.user.username),
      avatar: computed(() => store.state.user.avatar),
      toggleCollapse: () => store.commit(TOGGLE_COLLAPSE),
      logout
    }
  }
})
</script>
