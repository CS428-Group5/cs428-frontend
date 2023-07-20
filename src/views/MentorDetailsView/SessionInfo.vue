<template>
  <div class="col-span-9 flex flex-col p-2">
    <h1 class="text-3xl font-bold">{{ mentorName }}</h1>
    <p class="text-lg mt-2">{{ mentorWork }}</p>
    <h2 class="mt-4 text-2xl font-bold">
      {{ Math.trunc(sessionPrice).toLocaleString('en') }}d / session
    </h2>
    <div class="mt-4 flex flex-row">
      <button class="w-10 h-10 text-black rounded-xl" style="background-color: #d9e6fa">-</button>
      <p class="mx-4 my-auto text-base">1</p>
      <button class="w-10 h-10 text-black rounded-xl" style="background-color: #d9e6fa">+</button>
      <small class="text-base ml-6 my-auto">Number of sessions left: {{ remainingSession }}</small>
    </div>
    <div class="mt-4 flex flex-row space-x-13">
      <button
        class="text-base w-fill h-12 px-4 py-3 mr-3 text-white rounded-xl"
        style="background-color: #599bff"
      >
        <span>Book a session</span>
      </button>
      <button
        class="text-base w-fill h-12 px-4 py-3 mr-3 text-blue-dark border border-blue-dark rounded-xl"
        style="background-color: #ffffff"
      >
        <span>Buy more sessions</span>
      </button>
      <button class="w-10 h-10 rounded-xl pl-2 my-1 mr-3" style="background-color: #d9e6fa">
        <MessageTextOutline class="w-2 h-2"></MessageTextOutline>
      </button>
      <button class="w-10 h-10 rounded-xl pl-2 my-1" style="background-color: #d9e6fa">
        <HeartOutline class="w-2 h-2"></HeartOutline>
      </button>
    </div>
  </div>
</template>

<script setup>
import MessageTextOutline from 'vue-material-design-icons/MessageTextOutline.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
</script>
<script>
export default {
  props: ['mentorName', 'mentorWork', 'sessionPrice', 'remainingSession']
}
</script>

<style lang="scss" scoped></style>
