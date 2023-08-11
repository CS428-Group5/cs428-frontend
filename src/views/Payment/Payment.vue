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
            <p class="mb-2">
              Mentor: {{ sessionDetails.mentor_first_name + ' ' + sessionDetails.mentor_last_name }}
            </p>
            <p class="mb-2">
              Date:
              {{
                new Intl.DateTimeFormat('en-US').format(
                  new Date(sessionDetails.session_date + 'T00:00:00')
                )
              }}
            </p>
            <p class="mb-8">Time: {{ sessionDetails.session_time.slice(0, 5) }}</p>
            <hr class="border-t border-gray-light mb-8" />
            <div class="flex justify-between">
              <p class="text-xl font-bold">Total</p>
              <p class="text-xl font-bold">
                {{ Math.trunc(sessionDetails.session_price).toLocaleString('en') }}đ
              </p>
            </div>
          </div>
          <div>
            <p class="text-2xl font-bold mb-4">Personal Information</p>
            <p class="mb-4">Name: {{ user.user.first_name + ' ' + user.user.last_name }}</p>
            <p>Email: {{ user.user.email }}</p>
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
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const route = useRoute()

const userStore = useUserStore()

const sessionDetails = ref()
const user = ref(userStore.getUser)

console.log(user.value)

client.get(`/session/mentor_sessions/${route.query.mentor_session_id}`).then((response) => {
  sessionDetails.value = response.data
})

async function processPayment() {
  const response = await client.post('/payment/create_payment_url', null, {
    params: {
      order_id: generateIDWithTime(sessionDetails.value.id),
      amount: parseInt(sessionDetails.value.session_price)
    }
  })

  console.log(generateIDWithTime(sessionDetails.value.id))
  const payment_url = response.data.payment_url
  window.location.href = payment_url
}

function generateIDWithTime(baseID) {
  const currentTime = new Date()
  const hours = currentTime.getHours().toString().padStart(2, '0')
  const minutes = currentTime.getMinutes().toString().padStart(2, '0')
  const seconds = currentTime.getSeconds().toString().padStart(2, '0')
  const currentTimeString = `${hours}${minutes}${seconds}`
  const generatedID = `${baseID}${currentTimeString}`
  return generatedID
}
</script>
