<template>
  <main class="max-w-default mx-auto h-fit px-20 mb-10">
    <Navbar v-show="shouldShowNavbar" :is-login="isLogin" :is-mentor="isMentor" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, watchEffect } from 'vue'
import client from '@/axios/client.ts'
import { useUserStore } from '@/stores/user'
import { useFavStore } from '@/stores/fav'
import LOCAL_STORAGE_KEYS from '@/constants/local_storage.ts'
import APIS from '@/constants/apis.ts'

const shouldShowNavbar = ref(true)
const userStore = useUserStore()
const favStore = useFavStore()
const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN_KEY)

const isLogin = ref(false)
const isMentor = ref(false)

watchEffect(() => {
  if (token || !userStore.getUser) {
    client
      .get(APIS.GET_ACCOUNT, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        // console.log(response.data);
        client.defaults.headers.common.Authorization = `Bearer ${token}`
        userStore.setUser(response.data)
        isLogin.value = userStore.getUser != undefined
        isMentor.value = userStore.getUser?.user?.is_mentor
        client
          .get('/mentors/favorite')
          .then((res) => {
            favStore.setFav(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
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
