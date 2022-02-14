<template>
  <div
    class="w-full h-screen pt-40 bg-gradient-to-br from-indigo-500 via-blue-500 to-green-500"
  >
    <el-card class="max-w-xl mx-auto">
      <template #header>
        <div class="text-center font-bold text-xl">Login</div>
      </template>
      <el-form ref="loginFormRef" :model="loginForm" label-width="80px">
        <el-form-item
          label="Username"
          prop="username"
          :rules="{
            required: true,
            message: 'Please input username',
            trigger: 'blur',
          }"
        >
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item
          label="Password"
          prop="password"
          :rules="{
            required: true,
            message: 'Please input username',
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="loginForm.password"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button
            class="w-full"
            type="primary"
            :loading="loading"
            @click="onSubmit"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { LoginData } from '@/types'
import { login } from '@/api/login'

type FormInstance = InstanceType<typeof ElForm>

const router = useRouter()
const loginFormRef = ref<FormInstance>()

const loginForm = reactive<LoginData>({
  username: '123',
  password: '123456',
})

const loading = ref(false)

const onSubmit = async () => {
  try {
    if (loginFormRef.value) {
      loading.value = true
      const valid = await loginFormRef.value.validate()
      if (valid) {
        const res = await login(loginForm)
        router.push({
          path: '/',
          replace: true,
        })
        console.log(res.data)
      } else {
        throw Error('not valid')
      }
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
