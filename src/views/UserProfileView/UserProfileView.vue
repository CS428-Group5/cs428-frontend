<template>
  <div v-if="isLogin">
    <div v-if="isBase">
      <UserProfile :setIsBase="setIsBase"></UserProfile>
    </div>

    <div v-else>
      <UpdatUserProfile :setIsBase="setIsBase"></UpdatUserProfile>
    </div> 
  </div>

  <div v-else class="text-center text-3xl">Please login!</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/user'

import UserProfile from './UserProfile.vue'
import UpdatUserProfile from './UpdateUserProfile.vue'

const isLogin = ref(false)
const isMentor = ref(false)

watchEffect(() => {
  isLogin.value = useUserStore().getUser != undefined
  isMentor.value = useUserStore().getUser?.user?.is_mentor
})

const isBase = ref(true)
const setIsBase = (value) => {
  isBase.value = value
}
</script>

<style lang="scss" scoped></style>
