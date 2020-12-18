<template>
  <div class="container text-center error-page">
    <div className="error-img">
      <SvgComponent iconName="403" />
    </div>
    <h1>Forbidden!</h1>
    <router-link to="/">
      <el-button type="primary">Home</el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvgComponent from '@/components/SvgComponent/index.vue';

export default defineComponent({
  name: 'Error',
  components: {
    SvgComponent,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.error-page {
  padding-top: 10vh;
  .error-img {
    max-width: 500px;
    height: 200px;
    margin: auto;
  }
}
</style>
