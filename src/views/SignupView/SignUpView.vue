<template>
    <div v-if="isBase" class="mt-16 grid grid-cols-12">
        <ImageLogin :image="login" />
        <SignUpBaseForm :setIsBase="setIsBase" :setIsMentor="setIsMentor"/>
    </div>
    <div v-else class="flex justify-center w-1/3 mx-auto my-24">
        <SignUpMentorForm v-if="isMentor"/>
        <SignUpMenteeForm v-else/>
    </div>
</template>

<script setup>
import ImageLogin from './ImageSignUp.vue';
import SignUpBaseForm from './SignUpBaseForm.vue';
import login from '@/assets/login.jpeg';
import { ref } from 'vue'
import SignUpMentorForm from './SignUpMentorForm.vue';
import SignUpMenteeForm from './SignUpMenteeForm.vue';

const isBase = ref(true)
const setIsBase = (value) => {isBase.value = value}
const isMentor = ref(true)
const setIsMentor = (value) => {isMentor.value = value}


</script>

<style lang="scss" scoped></style>
  