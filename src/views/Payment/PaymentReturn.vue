<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-start-3 col-span-8">
      <div class="flex flex-col gap-y-4 items-center">
        <img src="@/assets/success.png" alt="success" />
        <p class="text-3xl font-bold">Payment Successful!</p>
        <p>Let’s have a meeting with your desired mentor to level up your career!</p>
        <router-link :to="{ name: 'mentors.list' }">
          <button type="button" class="bg-blue w-fit px-4 py-3 text-white rounded-2xl">
            Back to Mentor
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const sessionId = route.query.vnp_Txnref

console.log(sessionId)
</script>
