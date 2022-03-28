<script lang="tsx">
import { h } from 'vue'
import { storeToRefs } from 'pinia'
import { ElMenuItem, ElSubMenu, ElIcon } from 'element-plus'
import { Menu as IconMenu, User, Reading } from '@element-plus/icons-vue'
import { useUserStore } from '../../stores/user'
import type { MenuItem } from '@/types'

const menuIconMap = {
  user: User,
  menu: IconMenu,
  form: Reading,
} as const

export default {
  setup() {
    const userStore = useUserStore()
    const { menus } = storeToRefs(userStore)

    const getIcon = (iconName: string) => {
      const Icon = menuIconMap[iconName as keyof typeof menuIconMap] || IconMenu
      return <ElIcon>{h(Icon)}</ElIcon>
    }

    const generateMenus = (menus: MenuItem[]) =>
      menus.map((menu) => {
        if (menu.children && menu.children.length > 0) {
          return (
            <ElSubMenu key={menu.fullPath} index={menu.fullPath}>
              {{
                title: () => (
                  <>
                    {menu.icon && getIcon(menu.icon)}
                    <span>{menu.title}</span>
                  </>
                ),
                default: () => menu.children && generateMenus(menu.children),
              }}
            </ElSubMenu>
          )
        } else {
          return (
            <ElMenuItem key={menu.fullPath} index={menu.fullPath}>
              {{
                title: () => menu.title,
                default: () => menu.icon && getIcon(menu.icon),
              }}
            </ElMenuItem>
          )
        }
      })

    return () => generateMenus(menus.value)
  },
}
</script>
