<script lang="ts">
import { defineComponent, h, onMounted, ref } from 'vue';
import { ElMenuItem } from 'element-plus';
import { getMenus, MenuItem } from '@/api/login';

export default defineComponent({
  name: 'Menu',
  setup() {
    const menus = ref<MenuItem[]>([]);
    onMounted(async () => {
      const { data } = await getMenus();
      menus.value = data;
    });
    return () => {
      return h(
        ElMenuItem,
        { index: 1 },
        {
          default: () => h('i', { class: 'el-icon-menu' }),
          title: () => h('span', 'props.title'),
        },
      );
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
