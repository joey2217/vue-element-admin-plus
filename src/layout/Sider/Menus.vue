<script lang="tsx">
import { storeToRefs } from 'pinia'
import { h } from 'vue'
import { ElMenuItem, ElSubMenu, ElIcon } from 'element-plus'
import { Menu as IconMenu, User, Reading } from '@element-plus/icons-vue'
import { useUserStore } from '../../stores/user'
import type { MenuItem } from '@/types'

const menuIconMap = {
  user: User,
  menu: IconMenu,
  form: Reading,
} as const

// TODO icon
export default {
  setup() {
    const userStore = useUserStore()
    const { menus } = storeToRefs(userStore)

    const getMenuTitleWithIcon = (menu: MenuItem) => {
      if (menu.icon) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const Icon = menuIconMap[menu.icon]
        if (Icon) {
          return (
            <>
              <ElIcon>{h(Icon)}</ElIcon>
              <span>{menu.title}</span>
            </>
          )
        }
      }
      return menu.title
    }

    const generateMenus = (menus: MenuItem[]) =>
      menus.map((menu) => {
        if (menu.children && menu.children.length > 0) {
          return (
            <ElSubMenu key={menu.fullPath} index={menu.fullPath}>
              {{
                title: () => getMenuTitleWithIcon(menu),
                default: () => menu.children && generateMenus(menu.children),
              }}
            </ElSubMenu>
          )
        } else {
          return (
            <ElMenuItem key={menu.fullPath} index={menu.fullPath}>
              {{
                // title: () => menu.title,
                default: () => getMenuTitleWithIcon(menu),
              }}
            </ElMenuItem>
          )
        }
      })

    return () => generateMenus(menus.value)
  },
}
</script>
