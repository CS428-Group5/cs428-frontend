<template>
  <div class="grid grid-cols-12 gap-x-6 pt-3 pb-8">
    <div class="col-span-3 flex items-center">
      <router-link :to="{ name: 'home' }">
        <img style="height: 32px" class="" src="@/assets/logo_mentoree.svg" alt="avatar" />
      </router-link>
    </div>
    <input
      type="text"
      placeholder="Search for a mentor"
      name="from"
      id="from"
      class="px-6 py-4 bg-gray-lightest rounded-2xl col-span-6 focus:outline-none"
    />
    <div v-if="!isLogin" class="col-span-3 flex justify-end gap-6">
      <router-link :to="{ name: 'signup' }">
        <button type="button" class="bg-white w-fit px-4 py-3 text-blue rounded-2xl">
          Sign up
        </button>
      </router-link>
      <router-link :to="{ name: 'login' }">
        <button type="button" class="bg-blue w-fit px-4 py-3 text-white rounded-2xl">Log in</button>
      </router-link>
    </div>
    <div v-else class="col-span-3 flex justify-end items-center gap-6 relative">
      <button type="button" class="bg-blue-light w-fit p-2.5 rounded-2xl">
        <MessageTextOutline />
      </button>
      <button type="button" class="bg-blue-light w-fit p-2.5 rounded-2xl">
        <BellOutline />
      </button>
      <img
        @click="toggleDropDown"
        class="h-11 w-11 aspect-square rounded-3xl"
        src="@/assets/avatar.jpg"
        alt="avatar"
      />
      <div
        v-show="showDropDown"
        class="z-10 absolute top-14 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow"
      >
        <ul v-if="!isMentor">
          <li class="px-4 py-2 hover:bg-gray-lightest">My Profile</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Favorite Mentors</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Booking Management</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Purchase History</li>
          <li @click="logoutAccount" class="px-4 py-2 hover:bg-gray-lightest text-red">Log Out</li>
        </ul>
        <ul v-else>
          <li class="px-4 py-2 hover:bg-gray-lightest">My Profile</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Favorite Mentors</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Booking Management</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Purchase History</li>
          <li @click="logoutAccount" class="px-4 py-2 hover:bg-gray-lightest text-red">Log Out</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MessageTextOutline from 'vue-material-design-icons/MessageTextOutline.vue'
import BellOutline from 'vue-material-design-icons/BellOutline.vue'
import client from '@/axios/client.ts'
import { useUserStore } from '@/stores/user'
import LOCAL_STORAGE_KEYS from '@/constants/local_storage.ts'

const userStore = useUserStore()
const showDropDown = ref(false)

const props = defineProps({
  isLogin: Boolean,
  isMentor: Boolean
})

function toggleDropDown() {
  showDropDown.value = !showDropDown.value
}

function logoutAccount() {
  client
    .get(`/authentication/logout`)
    .then((response) => {
      userStore.setUser({})
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN_KEY)
      client.defaults.headers.common.Authorization = ``
      location.reload()
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>
