<template>
  <div class="col-span-9 flex flex-col p-2">
    <h1 class="text-3xl font-bold">{{ mentor.firstname + ' ' + mentor.lastname }}</h1>
    <p class="text-lg mt-2">{{ mentor.current_title + 'at' + mentor.current_company }}</p>
    <h2 class="mt-4 text-2xl font-bold">
      {{ Math.trunc(mentor.default_session_price).toLocaleString('en') }}d / session
    </h2>
    <div class="mt-4 flex flex-row space-x-13">
      <router-link :to="{ name: 'mentor.addSession' }" v-if="isMentor && userStore.getUser.id == route.params.mentor_id">
        <button class="text-base w-fill h-12 px-4 py-3 mr-3 text-blue-dark border border-blue-dark rounded-xl"
          style="background-color: #ffffff">
          <span>Add more sessions</span>
        </button>
      </router-link>

      <router-link :to="{ name: 'mentee.chooseSession' }" v-else-if="!isMentor">
        <button class="text-base w-fill h-12 px-4 py-3 mr-3 text-white rounded-xl" style="background-color: #599bff">
          <span>Book a session</span>
        </button>
      </router-link>

      <div class="w-10 h-10 aspect-square bg-blue-light rounded-2xl p-2 m-1 cursor-pointer">
        <MessageTextOutline class="w-2 h-2"></MessageTextOutline>
      </div>
      <div v-if="!isFav" class="w-10 h-10 aspect-square bg-blue-light rounded-2xl p-2 m-1 cursor-pointer">
        <HeartOutline @click="addFavoriteMentor(mentor)"/>
      </div>
      <div v-else class="w-10 h-10 aspect-square bg-blue-light rounded-2xl p-2 m-1 cursor-pointer">
        <Heart style="color: #599BFF;" @click="removeFavoriteMentor(mentor.id)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import MessageTextOutline from 'vue-material-design-icons/MessageTextOutline.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import Heart from 'vue-material-design-icons/Heart.vue'

import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/user'
import { useFavStore } from '@/stores/fav'

const userStore = useUserStore()
const favStore = useFavStore()
const isLogin = ref(false)
const isMentor = ref(false)
const isFav = ref(false)
const route = useRoute()

watchEffect(() => {
  isLogin.value = userStore.getUser != undefined
  isMentor.value = userStore.getUser?.user?.is_mentor
  isFav.value = favStore.getAll.map((mentor) => mentor.id).includes(Number(route.params.mentor_id))
  console.log(isFav.value)
})
</script>

<script>
export default {
  name: 'SessionInfo.vue',
  props: ['mentor', 'addFavoriteMentor', 'removeFavoriteMentor'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
