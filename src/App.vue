<template>
  <main class="max-w-default mx-auto h-fit px-20">
    <Navbar />
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, watchEffect } from 'vue'

const shouldShowNavbar = ref(true)

watchEffect(() => {
  const currentPath = window.location.pathname
  shouldShowNavbar.value = !currentPath.startsWith('/sign-up') && !currentPath.startsWith('/login')
})
</script>

<style lang="scss" scoped></style>
