<template>
  <div class="col-span-1 flex flex-col">
    <div class="col-span-3 flex items-center mb-6">
      <img style="height: 32px" class="" src="@/assets/logo_mentoree.svg" alt="avatar" />
    </div>
    <h1 class="text-3xl mb-4">Login</h1>
    <div class="flex flex-row mb-9">
      <p>Don't have account ? <a style="color: #599bff" href="/sign-up">Sign up</a></p>
    </div>

    <form @submit.prevent="loginAccount">
      <label for="email" class="text-sm">Email</label>
      <input
        id="email"
        name="email"
        v-model="form.email"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-4 text-base"
        placeholder="xyz@email.com"
      />

      <label for="password" class="text-sm">Password</label>
      <input
        id="password"
        name="password"
        v-model="form.password"
        type="password"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-4 text-base"
        placeholder="••••••••"
      />
      <div class="flex items-center mb-3 text-sm">
        <input type="checkbox" id="remember" name="remember" value="remember" />
        <label class="ml-3" for="remember"> Remember me</label><br />
      </div>
      <p class="text-sm text-red mb-3">{{ this.error }}</p>

      <button
        class="w-full h-12 px-4 py-3 text-white rounded-2xl"
        type="submit"
        style="background-color: #599bff"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import client from '../../axios/client.ts'
import LOCAL_STORAGE_KEYS from '@/constants/local_storage.ts'

export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    async loginAccount() {
      const formData = new FormData()
      formData.append('username', this.form.email)
      formData.append('password', this.form.password)
      client
        .post(`/authentication/login`, formData)
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN_KEY, response.data.token)
          }
          this.$router.push(`/`).then(() => {
            this.$router.go()
          })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
