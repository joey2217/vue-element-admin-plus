<script lang="ts">
import { defineComponent, h, PropType, Fragment } from 'vue'
import { ElMenuItem, ElSubmenu } from 'element-plus'
import { MenuItem } from '../../api/login'

export default defineComponent({
  name: 'Menu',
  props: {
    menus: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
  },
  setup(props) {
    const generateMenus = (menus: MenuItem[]) =>
      menus.map((menu) => {
        if (menu.children && menu.children.length > 0) {
          return h(
            ElSubmenu,
            {
              index: menu.fullPath,
            },
            {
              default: () => menu.children && generateMenus(menu.children),
              title: () =>
                h(Fragment, [
                  menu.icon && h('i', { class: menu.icon }),
                  h('span', [menu.title]),
                ]),
            }
          )
        } else {
          return h(
            ElMenuItem,
            {
              index: menu.fullPath,
            },
            {
              default: () => menu.icon && h('i', { class: menu.icon }),
              title: () => h('span', [menu.title]),
            }
          )
        }
      })
    return () => props.menus && generateMenus(props.menus)
  },
})
</script>
