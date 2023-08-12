<template>
  <div v-if="isLogin" class="flex flex-col mx-auto w-2/5 items-center">
    <div class="w-2/5">
      <Image
        :image="
          user?.avatar
            ? user?.avatar
            : `https://source.unsplash.com/random/300x300?sig=${Math.random() * 1000 + 1}`
        "
      />

      <div class="text-blue mt-3 flex items-center justify-evenly w-9/10">
        <CameraOutlineIcon></CameraOutlineIcon>
        <div class="text-center">Change avatar</div>
      </div>
    </div>

    <div class="w-full mt-6">
      <form @submit.prevent="submitUpdateProfile">
        <label for="first_name">First Name</label>
        <input
          id="first_name"
          name="first_name"
          v-model="form.first_name"
          class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
          placeholder="First Name"
        />
        <label for="last_name">Last Name</label>
        <input
          id="last_name"
          name="last_name"
          v-model="form.last_name"
          class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
          placeholder="Last Name"
        />

        <div v-if="isMentor">
          <label for="expertise">Expertise</label>
          <input
            id="expertise"
            name="expertise"
            v-model="form.expertise_id"
            class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
            placeholder="Expertise"
          />
          <label for="current_title">Current Position</label>
          <input
            id="current_title"
            name="current_title"
            v-model="form.current_title"
            class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
            placeholder="Curent Position"
          />
          <label for="current_company">Current Company</label>
          <input
            id="current_company"
            name="current_company"
            v-model="form.current_company"
            class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
            placeholder="Current Company"
          />
          <label for="about_me">About me</label>
          <input
            id="about_me"
            name="about_me"
            v-model="form.about_me"
            class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
            placeholder="About me"
          />
          <label for="default_session_price">Pricing for a session</label>
          <input
            id="default_session_price"
            name="default_session_price"
            v-model="form.default_session_price"
            class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
            placeholder="Pricing for a session"
          />
        </div>

        <div v-else>
          <label for="current_title">Current Title</label>
          <input
            id="current_title"
            name="current_title"
            v-model="form.current_title"
            class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
            placeholder="Curent Position"
          />
          <label for="about_me">About me</label>
          <input
            id="about_me"
            name="about_me"
            v-model="form.about_me"
            class="bg-gray-lightest rounded-xl w-full px-6 py-4 mt-4 mb-6 text-base"
            placeholder="About me"
          />
        </div>

        <button class="w-1/4 bg-blue text-white rounded-2xl h-12" type="submit">Confirm</button>
      </form>
    </div>
  </div>

  <div v-else class="text-center text-3xl">Please login!</div>
</template>

<script setup>
import Image from '../MentorDetailsView/Image.vue'
import CameraOutlineIcon from 'vue-material-design-icons/CameraOutline.vue'

import { ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/user'

const isLogin = ref(false)
const isMentor = ref(false)

watchEffect(() => {
  isLogin.value = useUserStore().getUser != undefined
  isMentor.value = useUserStore().getUser?.user?.is_mentor
})
</script>

<script>
import client from '@/axios/client.ts'
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router'

const userStore = useUserStore()

export default {
  props: ['setIsBase'],
  data() {
    return {
      router: useRoute(),
      user: userStore.getUser?.user,
      form: {
        first_name: '',
        last_name: '',
        about_me: '',
        current_title: '',
        avatar: '',
        expertise_id: 0,
        current_company: '',
        default_session_price: 0
      },
      curExpertise: ''
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      await client
        .get(`/users/${this.router.params.id}`)
        .then((res) => {
          this.user = res.data
          // console.log('user:', this.user)

          this.form.first_name = this.user?.user.first_name
          this.form.last_name = this.user?.user.last_name
          this.form.about_me = this.user?.user.about_me
          this.form.current_title = this.user?.user.current_title
          this.form.avatar = this.user?.user.avatar
          this.form.expertise_id = this.user?.expertise
          this.form.current_company = this.user?.current_company
          this.form.default_session_price = this.user?.default_session_price
          // console.log('form:', this.form)
        })
        .catch((e) => {
          console.log('error,', e)
        })

      await client
        .get('/expertises/')
        .then((res) => {
          const temp = res.data.filter((ex) => ex.id === this.user?.expertise)
          this.curExpertise = temp[0].expertise_name
          // console.log('curExpertiseName:', this.curExpertise)
        })
        .catch((e) => {
          console.log('error,', e)
        })
    },
    async submitUpdateProfile() {
      await client
        .put(`/users/${this.router.params.id}`, this.form)
        .then((res) => {
          console.log('res.data:', res.data)
        })
        .catch((e) => {
          console.log('error,', e)
        })
      this.setIsBase(true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
