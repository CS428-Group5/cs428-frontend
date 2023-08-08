<template>
  <Navbar :is-login="isLogin" :is-mentor="isMentor" />
  <router-view></router-view>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, watchEffect } from 'vue'
import client from '@/axios/client.ts'
import { useUserStore } from '@/stores/user'
import LOCAL_STORAGE_KEYS from '@/constants/local_storage.ts'
import APIS from '@/constants/apis.ts'

const userStore = useUserStore()
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
      })
      .catch(() => {
        userStore.setUser(undefined)
        localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN_KEY)
        client.defaults.headers.common.Authorization = ``
      })
  }
})
</script>
<script></script>

<style lang="scss" scoped></style>
