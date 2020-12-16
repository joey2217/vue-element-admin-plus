<template>
  <div id="root">
    <router-view v-slot="{ Component }">
      <transition name="el-zoom-in-center">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
</style>
