<template>
  <div class="container mx-auto text-center mt-40">
    <h2 class="p-6 text-7xl font-bold">403</h2>
    <h3 class="p-4 font-medium">Forbidden!</h3>
    <router-link to="/">
      <el-button type="primary">Home</el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error',
  components: {},
  setup() {
    return {}
  },
})
</script>
