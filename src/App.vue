<template>
  <main class="max-w-default mx-auto h-fit px-20 mb-10">
    <Navbar v-show="shouldShowNavbar" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import client from '../src/axios/client'
import { ref, watchEffect } from 'vue'

const shouldShowNavbar = ref(true)

watchEffect(() => {
  const currentPath = window.location.pathname
  shouldShowNavbar.value = !currentPath.startsWith('/sign-up') && !currentPath.startsWith('/login')
  
  client
    .get(`/authentication/cookie-acceptance`, {
      withCredentials: true
    })
    .catch((f) => {
      console.log(f.headers['set-cookie'])
    })
})
</script>

<style lang="scss" scoped></style>
