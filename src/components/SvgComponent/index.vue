<template>
  <svg :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="svgName" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'SvgComponent',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return {
      svgName: computed(() => `#icon-${props.iconName}`),
      svgClass: computed(() => `svg-comp ${props.className}`),
    };
  },
});
</script>

<style lang="scss" scoped>
.svg-comp {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
