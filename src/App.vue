<template>
  <main class="w-full h-fit px-20">
    <Navbar />
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style lang="scss" scoped></style>
