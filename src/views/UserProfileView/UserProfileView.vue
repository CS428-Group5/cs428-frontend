<template>
  <div class="flex flex-col mx-auto w-2/5 items-center">
    <div class="w-2/5">
      <Image
        :image="
          user.avatar
            ? user.avatar
            : `https://source.unsplash.com/random/300x300?sig=${Math.random() * 1000 + 1}`
        "
      />

      <div class="text-blue mt-3">
        <div class="text-center">Change avatar</div>
      </div>
    </div>

    <div class="w-full mt-6">
      <div>
        <div>First Name</div>
        <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
          {{ user.user.first_name }}
        </div>
      </div>
      <div>
        <div>Last Name</div>
        <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
          {{ user.user.last_name }}
        </div>
      </div>

      <div v-if="user.user.is_mentor">
        <div>
          <div>Expertise</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.expertise }}
          </div>
        </div>
        <div>
          <div>Curent Position</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.user.current_title }}
          </div>
        </div>
        <div>
          <div>Current Company</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.current_company }}
          </div>
        </div>
        <div>
          <div>About me</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.user.about_me }}
          </div>
        </div>
        <div>
          <div>Pricing for a session</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.default_session_price }}
          </div>
        </div>
      </div>

      <div v-else>
        <div>
          <div>Curent Title</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.user.current_title }}
          </div>
        </div>
        <div>
          <div>About me</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.user.about_me }}
          </div>
        </div>
      </div>

      <div>
        <button class="w-1/4 bg-blue text-white rounded-2xl h-12" type="submit">Update</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Image from '../MentorDetailsView/Image.vue'
import CameraOutline from 'vue-material-design-icons/CameraOutline.vue'

import client from '@/axios/client.ts'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const user = ref({})
const isLoggedin = ref(true)

watchEffect(async () => {
  await client
    .get(`/users/${router.params.id}`)
    .then((res) => {
      user.value = res.data
      console.log(user)
      console.log('hey')
      console.log(user.current_company)
      console.log(user.user)
    })
    .catch((e) => {
      console.log('error,', e)
      this.errors.push(e)
    })
})
</script>

<style lang="scss" scoped></style>
