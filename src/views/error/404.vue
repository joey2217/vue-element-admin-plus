<template>
  <div class="container text-center not-found">
    <div className="error-img">
      <SvgComponent iconName="404" />
    </div>
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
.not-found {
  padding-top: 10vh;
  .error-img {
    width: 50vw;
    max-width: 500px;
    height: 50vw;
    max-height: 500px;
    margin: auto;
  }
}
</style>
