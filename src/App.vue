<template>
  <main class="max-w-default mx-auto h-fit px-20 mb-10">
    <Navbar v-show="shouldShowNavbar" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, watchEffect } from 'vue'
import client from '@/axios/client.ts'
import { useUserStore } from '@/stores/user'
import LOCAL_STORAGE_KEYS from '@/constants/local_storage.ts'
import APIS from '@/constants/apis.ts'

const shouldShowNavbar = ref(true)
const userStore = useUserStore()

const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN_KEY)

watchEffect(() => {
  if (token || !userStore.getUser) {
    client
      .get(APIS.GET_ACCOUNT, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        client.defaults.headers.common.Authorization = `Bearer ${token}`
        userStore.setUser(response.data)
        console.log(userStore.getUser)
      })
      .catch(() => {
        userStore.setUser(undefined)
        localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN_KEY)
        client.defaults.headers.common.Authorization = ``
      })
  }
  const currentPath = window.location.pathname
  shouldShowNavbar.value = !currentPath.startsWith('/sign-up') && !currentPath.startsWith('/login')
})
</script>
<script></script>

<style lang="scss" scoped></style>
