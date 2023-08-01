<template>
  <div class="grid grid-cols-12 gap-x-6 pt-3 pb-8">
    <div class="col-span-3 flex items-center" @click="this.$router.push(`/`)">
      <img style="height: 32px" class="" src="@/assets/logo_mentoree.svg" alt="avatar" />
    </div>
    <input
      type="text"
      placeholder="Search for a mentor"
      name="from"
      id="from"
      class="px-6 py-4 bg-gray-lightest rounded-2xl col-span-6 focus:outline-none"
    />
    <div v-if="!isLogin" class="col-span-3 flex justify-end gap-6">
      <button
        type="button"
        class="bg-white w-fit px-4 py-3 text-blue rounded-2xl"
        @click="this.$router.push(`/sign-up`)"
      >
        Sign up
      </button>
      <button
        type="button"
        class="bg-blue w-fit px-4 py-3 text-white rounded-2xl"
        @click="this.$router.push(`/login`)"
      >
        Log in
      </button>
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
          <li class="px-4 py-2 hover:bg-gray-lightest">Session Inventory</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Booking Management</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Purchase History</li>
          <li class="px-4 py-2 hover:bg-gray-lightest text-red">Log Out</li>
        </ul>
        <ul v-else>
          <li class="px-4 py-2 hover:bg-gray-lightest">My Profile</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Favorite Mentors</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Session Inventory</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Time Slot Management</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Booking Management</li>
          <li class="px-4 py-2 hover:bg-gray-lightest">Purchase History</li>
          <li @click="logoutAccount" class="px-4 py-2 hover:bg-gray-lightest text-red">Log Out</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

import MessageTextOutline from 'vue-material-design-icons/MessageTextOutline.vue'
import BellOutline from 'vue-material-design-icons/BellOutline.vue'
import client from '@/axios/client.ts'
import { useUserStore } from '@/stores/user'
import LOCAL_STORAGE_KEYS from '@/constants/local_storage.ts'

const userStore = useUserStore()
console.log(userStore.getUser)
const isLogin = ref(false)
const isMentor = ref(false)

const showDropDown = ref(false)
watchEffect(() => {
  isLogin.value = userStore.getUser != undefined
  isMentor.value = userStore.getUser?.user?.is_mentor
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
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>
