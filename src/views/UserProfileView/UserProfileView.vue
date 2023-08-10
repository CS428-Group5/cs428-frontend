<template>
  <div v-if="isLogin" class="flex flex-col mx-auto w-2/5 items-center">
    <div class="w-2/5">
      <Image
        :image="
          user.avatar
            ? user.avatar
            : `https://source.unsplash.com/random/300x300?sig=${Math.random() * 1000 + 1}`
        "
      />

      <div class="text-blue mt-3 flex items-center justify-evenly w-9/10">
        <CameraOutlineIcon></CameraOutlineIcon>
        <div class="text-center">Change avatar</div>
      </div>
    </div>

    <div class="w-full mt-6">
      <div>
        <div>First Name</div>
        <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
          {{ this.user.first_name }}
        </div>
      </div>
      <div>
        <div>Last Name</div>
        <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
          {{ user.last_name }}
        </div>
      </div>

      <div v-if="isMentor">
        <div>
          <div>Expertise</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.expertise }}
          </div>
        </div>
        <div>
          <div>Curent Position</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.current_title }}
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
            {{ user.about_me }}
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
            {{ user.current_title }}
          </div>
        </div>
        <div>
          <div>About me</div>
          <div class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base">
            {{ user.about_me }}
          </div>
        </div>
      </div>

      <div>
        <button class="w-1/4 bg-blue text-white rounded-2xl h-12" type="submit">Update</button>
      </div>
    </div>
  </div>

  <div v-else class="text-center text-3xl">
    Please login!
  </div>
</template>

<script setup>
import Image from '../MentorDetailsView/Image.vue'
import CameraOutlineIcon from 'vue-material-design-icons/CameraOutline.vue'

import { ref, watchEffect } from 'vue'

const userStore = useUserStore()
const isLogin = ref(false)
const isMentor = ref(false)

watchEffect(() => {
  isLogin.value = userStore.getUser != undefined
  isMentor.value = userStore.getUser?.user?.is_mentor
})
</script>

<script>
import client from '@/axios/client.ts'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

export default {
  data() {
    return {
      router: useRoute(),
      user: useUserStore().getUser?.user,
      error: [],
    }
  },
  mounted() {
    console.log('user info:', this.user);
    console.log('avatar:', this.user.avatar);
    console.log('first_name:', this.user.first_name);
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      await client
        .get(`/users/${this.router.params.id}`)
        .then((res) => {
          this.user = res.data
        })
        .catch((e) => {
          console.log('error,', e)
          this.error.push(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
