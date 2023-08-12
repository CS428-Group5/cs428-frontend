<template>
  <div v-if="isLogin" class="grid grid-cols-12 gap-x-6">
    <div class="col-start-3 col-span-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Purchase History</h1>
      <div v-if="isMentor">
        <PurchaseItemMentor></PurchaseItemMentor>
      </div>
      <div v-else>
        <PurchaseItemMentee></PurchaseItemMentee>
      </div>
    </div>
  </div>

  <div v-else class="text-center text-3xl">Please login!</div>
</template>

<script setup>
import PurchaseItemMentee from './PurchaseItemMentee.vue';
import PurchaseItemMentor from './PurchaseItemMentor.vue';

import { ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/user'

const isLogin = ref(false)
const isMentor = ref(false)

watchEffect(() => {
  isLogin.value = useUserStore().getUser != undefined
  isMentor.value = useUserStore().getUser?.user?.is_mentor
})
</script>
