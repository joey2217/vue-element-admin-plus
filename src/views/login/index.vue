<template>
  <div
    class="w-full h-screen pt-40 bg-gradient-to-br from-indigo-500 via-blue-500 to-green-500"
  >
    <el-card class="w-full max-w-xl mx-auto px-4">
      <template #header>
        <span>Login</span>
      </template>
      <el-form ref="loginForm" :model="form" hide-required-asterisk>
        <el-form-item
          props="username"
          :rules="[
            {
              required: true,
              message: 'Please input username!',
              trigger: 'blur'
            },
            {
              pattern: /^[a-zA-Z]\w{4,15}$/,
              message: 'Please input correct username!',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-input v-model.trim="form.username" placeholder="Username">
            <template #prefix>
              <i class="el-icon-user" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item
          props="password"
          :rules="[
            {
              required: true,
              message: 'Please input password!',
              trigger: 'blur'
            },
            {
              pattern: /^[a-zA-Z]\w{4,15}$/,
              message: 'Please input correct password!',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-input
            v-model.trim="form.password"
            type="password"
            show-password
            placeholder="Password"
          >
            <template #prefix>
              <i class="el-icon-lock" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="w-full"
            :loading="loading"
            type="primary"
            @click="onSubmit"
          >
            Login
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import { defineComponent, reactive, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()
    const form = reactive({
      username: 'admin',
      password: '123456',
    })
    const loading = ref(false)
    const loginForm = ref<any>(null)
    const onSubmit = async () => {
      try {
        loading.value = true
        await loginForm.value?.validate()
        const data = toRaw(loginForm.value?.model)
        await store.dispatch('login', data)
        ElMessage.success('成功!')
        router.push('/')
        // loading.value = false
      } catch (error) {
        console.error(error)
        loading.value = false
      }
    }
    return {
      form,
      loading,
      loginForm,
      onSubmit,
    }
  },
})
</script>
