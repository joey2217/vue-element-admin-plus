<template>
  <el-main class="p-4 bg-gray-100 overflow-auto">
    <div id="content" class="bg-white p-2 h-full">
      <!-- <router-view v-slot="{ Component }">
        <transition name="el-fade-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view> -->
      <router-view />
    </div>
  </el-main>
</template>

<style scoped>
#content {
  height: calc(100vh - 96px);
}
</style>
