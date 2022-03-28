<template>
  <div class="overflow-auto" id="main">
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
#main {
  height: calc(100vh - 100px);
}
</style>
