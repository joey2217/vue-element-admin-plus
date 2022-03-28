<template>
  <div>
    <el-result icon="error" title="Not Found" sub-title="Not Found">
      <template #extra>
        <router-link to="/">
          <el-button type="primary">Back Home</el-button>
        </router-link>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
