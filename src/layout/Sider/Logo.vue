<template>
  <router-link to="/" tag="div" class="logo">
    <div class="icon">
      <svg
        t="1608020894498"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="14126"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="40"
        height="40"
      >
        <path
          d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
          fill="#1296db"
          p-id="14127"
          data-spm-anchor-id="a313x.7781069.0.i9"
          class="selected"
        ></path>
        <path
          d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
          fill="#34495E"
          p-id="14128"
        ></path>
      </svg>
    </div>
    <div class="title">VueAdmin+</div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
  setup() {
    return {};
  },
});
</script>
