<template>
  <main class="w-full h-fit px-20">
    <Navbar v-show="shouldShowNavbar" />
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
