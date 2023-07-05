<template>
    <div class="col-span-9 flex flex-col p-2">
      <h1 class="text-2xl font-bold">{{ mentorName }}</h1>
      <p class="mt-2 mb-5">{{ mentotWork }}</p>
      <h2 class="text-xl font-bold">{{ sessionPrice }}d / session</h2>
      <div class="mt-5 flex flex-row">
        <button class="w-9 h-9 text-black rounded-xl" style="background-color: #d9e6fa">-</button>
        <p class="mx-4 my-auto">1</p>
        <button class="w-9 h-9 text-black rounded-xl" style="background-color: #d9e6fa">+</button>
        <small class="ml-3 my-auto"
          >Number of sessions left: {{ remainingSession }}</small
        >
      </div>
      <div class="mt-5 flex flex-row space-x-13">
        <button
          class="w-fill h-10 px-3 mr-3 text-white rounded-xl"
          style="background-color: #599bff"
        >
          <span>Book a session</span>
        </button>
        <button
          class="w-fill h-10 px-3 mr-3 text-blue-dark border border-blue-dark rounded-xl"
          style="background-color: #ffffff"
        >
          <span>Buy more sessions</span>
        </button>
        <button class="w-9 h-9 rounded-xl pl-1.5 mr-3" style="background-color: #d9e6fa">
          <MessageTextOutline class="w-2 h-2"></MessageTextOutline>
        </button>
        <button class="w-9 h-9 rounded-xl pl-1.5 mr-3" style="background-color: #d9e6fa">
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
  props: ['mentorName', 'mentotWork', 'sessionPrice', 'remainingSession']

}
</script>

<style lang="scss" scoped></style>