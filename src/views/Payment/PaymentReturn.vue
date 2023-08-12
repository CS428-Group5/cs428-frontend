<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-start-3 col-span-8">
      <div class="flex flex-col gap-y-4 items-center">
        <div v-if="responseCode == '00'">
          <img src="@/assets/success.png" alt="success" />
          <p class="text-3xl font-bold text-center">Payment Successful!</p>
          <p class="text-center">
            Let’s have a meeting with your desired mentor to level up your career!
          </p>
        </div>
        <div v-else>
          <p class="text-3xl font-bold text-center">Payment Unsuccessful!</p>
          <p>Oops! Payment failed. Please try again</p>
        </div>
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
import client from '@/axios/client'
import LOCAL_STORAGE_KEYS from '@/constants/local_storage.ts'
import { ref } from 'vue'

const route = useRoute()
const responseCode = ref(route.query.vnp_ResponseCode)
const sessionId = route.query.vnp_TxnRef
const baseId = sessionId.slice(0, sessionId.length - 6)

console.log(typeof route.query.vnp_ResponseCode)

if (responseCode.value == '00') {
  client
    .post(
      `/session/booked_session/${baseId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN_KEY)}`
        }
      }
    )
    .then((response) => {
      console.log(response.data)
    })
}
</script>
