<template>
  <div class="mt-20 grid grid-cols-3">
    <ImageLogin :image="login" />
    <LoginForm />
  </div>
</template>

<script setup>
import ImageLogin from './ImageLogin.vue'
import LoginForm from './LoginForm.vue'
import login from '@/assets/login.jpeg'
</script>

<style lang="scss" scoped></style>
