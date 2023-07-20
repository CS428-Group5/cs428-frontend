<template>
    <div class="mt-16 grid grid-cols-12">
        <ImageLogin :image="login" />
        <LoginForm/>
    </div>
</template>

<script setup>
import ImageLogin from './ImageLogin.vue';
import LoginForm from './LoginForm.vue';
import login from '@/assets/login.jpeg'

</script>

<style lang="scss" scoped></style>
  