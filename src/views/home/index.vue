<template>
  <div>
    <el-descriptions title="User Info">
      <el-descriptions-item label="nickname">
        {{ nickname }}
      </el-descriptions-item>
      <el-descriptions-item label="roles">
        {{ roles.join() }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../stores/user'

const store = useUserStore()
const { nickname, roles } = storeToRefs(store)
</script>

<style scoped></style>
