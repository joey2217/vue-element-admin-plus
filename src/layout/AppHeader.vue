<template>
  <div class="flex items-center h-full pr-4 shadow dark:shadow-white">
    <div
      class="cursor-pointer h-full flex items-center px-4 hover:text-[#409EFF]"
      @click="onClick"
    >
      <el-icon :size="20">
        <expand v-if="isCollapse" />
        <fold v-else />
      </el-icon>
    </div>
    <div class="ml-auto">
      <ThemeSwitch class="mx-4" />
      <el-dropdown>
        <span class="cursor-pointer flex items-center">
          <el-avatar :src="avatar"> {{ nickname }} </el-avatar>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>Home</el-dropdown-item>
            </router-link>
            <a
              href="https://github.com/joey2217/vue-element-admin-plus"
              target="_blank"
            >
              <el-dropdown-item divided>Github</el-dropdown-item>
            </a>
            <el-dropdown-item @click="logout" divided>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Expand, Fold, ArrowDown } from '@element-plus/icons-vue'
import { useLayoutStore } from './store'
import { useUserStore } from '../stores/user'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'

const router = useRouter()
const layoutStore = useLayoutStore()
const userStore = useUserStore()
const { isCollapse } = storeToRefs(layoutStore)
const { nickname, avatar } = storeToRefs(userStore)
const { toggleCollapse } = layoutStore

const onClick = () => {
  toggleCollapse()
}

const logout = () => {
  userStore.logout()
  router.replace('/login')
}
</script>

<style scoped></style>
