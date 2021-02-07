<template>
  <div class="text-xl">
    <div>
      Username:
      <span>{{ username }}</span>
    </div>
    <div>
      Roles:
      <span>{{ roles }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { RootState } from '../../store'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore<RootState>()
    return {
      username: computed(() => store.state.user.username),
      roles: computed(() => store.state.user.roles.join()),
    }
  },
})
</script>
