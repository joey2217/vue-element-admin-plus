<template>
  <el-switch
    v-model="theme"
    inline-prompt
    active-value="dark"
    :active-icon="Moon"
    inactive-value="light"
    :inactive-icon="Sunny"
    @change="onThemeChange"
  />
</template>

<script lang="ts" setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import type { Theme } from '@/utils/theme'

const store = useAppStore()
const { theme } = storeToRefs(store)

const onThemeChange = (theme: string | number | boolean) => {
  store.toggleTheme(theme as Theme)
}
</script>

<style scoped></style>
