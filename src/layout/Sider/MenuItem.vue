<script lang="ts">
import { defineComponent, h, PropType, reactive, ref } from 'vue';

export interface Menu {
  fullPath: string;
  title: string;
  redirect?: string;
  icon?: string;
  children?: Menu[];
}

export default defineComponent({
  name: 'MenuItem',
  props: {
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    menu: {
      type: Object as PropType<Menu>,
      required: true,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const hasChildren = !!props.menu.children;
    console.log(hasChildren);
    return () => {
      if (hasChildren) {
        return h('h1', 'hasChildren');
      } else {
        //       <el-menu-item index="2">
        //   <i class="el-icon-menu"></i>
        //   <template #title>导航二</template>
        // </el-menu-item>
        return h('el-menu-item',
          { index: props.path },
          {
            // default: () => h('i', { class: 'el-icon-menu' }),
            default: () => h('h1', 'H1'),
            title: () => h('span', props.title),
          },
        );
      }
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
