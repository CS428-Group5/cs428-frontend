<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-start-5 col-span-4">
      <div class="flex flex-col gap-y-4">
        <a href="#" class="font-bold">Back</a>
        <p class="text-3xl font-bold">Payment</p>
        <div>
          <div class="mb-12">
            <p class="text-2xl font-bold mb-4">Order Summary</p>
            <p class="text-xl mb-2">Mentorship session</p>
            <p class="mb-2">Mentor: Darlene Robertson</p>
            <p class="mb-2">Date: 2021-10-10</p>
            <p class="mb-8">Time: 10:00 - 11:00</p>
            <hr class="border-t border-gray-light mb-8" />
            <div class="flex justify-between">
              <p class="text-xl font-bold">Total</p>
              <p class="text-xl font-bold">{{ amount }}đ</p>
            </div>
          </div>
          <div>
            <p class="text-2xl font-bold mb-4">Personal Information</p>
            <p class="mb-4">Name: John Doe</p>
            <p>Email: johndoe@gmail.com</p>
          </div>
        </div>
        <button
          class="w-fit h-12 mt-12 px-4 py-3 text-white rounded-xl"
          style="background-color: #599bff"
          @click="processPayment"
        >
          Proceed to payment
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import client from '@/axios/client'

const amount = ref(100000)

async function processPayment() {
  const response = await client.post('/payment/create_payment_url', null, {
    params: {
      order_id: generateRandomAlphanumeric(20),
      amount: amount.value
    }
  })

  const payment_url = response.data.payment_url
  window.location.href = payment_url
}

function generateRandomAlphanumeric(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    result += charset.charAt(randomIndex)
  }

  return result
}
</script>
