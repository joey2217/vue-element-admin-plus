<template>
  <div class="login-container">
    <el-card class="login-card" shadow="hover">
      <template #header>
        <span>Login</span>
      </template>
      <el-form
        :model="form"
        ref="loginForm"
        hide-required-asterisk
        id="login-form"
      >
        <el-form-item
          props="username"
          :rules="[
            {
              required: true,
              message: 'Please input username!',
              trigger: 'blur',
            },
            {
              pattern: /^[a-zA-Z]\w{4,15}$/,
              message: 'Please input correct username!',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <template #label>
            <svg-icon iconClass="user" />
          </template>
          <el-input v-model.trim="form.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item
          props="password"
          :rules="[
            {
              required: true,
              message: 'Please input password!',
              trigger: 'blur',
            },
            {
              pattern: /^[a-zA-Z]\w{4,15}$/,
              message: 'Please input correct password!',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <template #label>
            <svg-icon iconClass="user" />
          </template>
          <el-input
            v-model.trim="form.password"
            type="password"
            show-password
            placeholder="Password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-btn"
            type="primary"
            @click="onSubmit"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore();
    const router = useRouter();
    const form = reactive({
      username: 'admin',
      password: '123456',
    });
    const loading = ref(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loginForm = ref<any>(null);
    const onSubmit = async () => {
      try {
        loading.value = true;
        await loginForm.value?.validate();
        const data = toRaw(loginForm.value?.model);
        await store.dispatch('login', data);
        ElMessage.success('成功!');
        router.push('/');
        loading.value = false;
      } catch (error) {
        console.error(error);
        loading.value = false;
      }
    };
    return {
      form,
      loading,
      loginForm,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 100%;
    max-width: 500px;
    margin-bottom: 15vh;
    .login-btn {
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
#login-form {
  .el-form-item {
    position: relative;
    .el-form-item__label {
      position: absolute;
      left: 10px;
      z-index: 2;
    }
    .el-input__inner {
      padding: 0 15px 0 30px;
    }
  }
}
</style>
