<template>
  <div>
    <h1 class="text-2xl font-bold text-center mt-10">ADD NEW SESSION</h1>
    <div class="add_session_form_wrapper">
      <form @submit.prevent="submitAddSession">
        <h2 class="mb-5">Choose date</h2>
        <VueDatePicker
          v-model="date"
          :enable-time-picker="false"
          auto-apply
          :close-on-auto-apply="false"
          :min-date="new Date(new Date().setDate(new Date().getDate() + 2))"
        >
        </VueDatePicker>
        <div class="session_time_wrapper">
        <p>Created: </p>
        <div
        v-for="session in allSessions.filter(
          (session) =>
            Date.parse(session.session_date.replaceAll('-', '/')) ==
              Date.parse(this.date.toLocaleDateString()) &&
            session.mentor_id == this.router.params.mentor_id
        )"
        :key="session.id"
        class="session_time"
      >
        <div class="text-center">{{ session.session_time.substring(0, 5) }}</div>
      </div>
      </div>
        <h2 class="mt-5 mb-2">Choose time</h2>
        <input
          class="bg-gray-lightest rounded-xl w-full h-11 px-6 py-4 mt-3"
          placeholder="hh:mm"
          v-model="formAddSession.session_time"
        />
        <button
          class="w-fill h-12 px-4 py-3 mt-5 text-white rounded-xl"
          style="background-color: #599bff"
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const isLogin = ref(false)
const isMentor = ref(false)

watchEffect(() => {
  isLogin.value = userStore.getUser != undefined
  isMentor.value = userStore.getUser?.user?.is_mentor
})
</script>

<script>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import client from '../../axios/client'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

export default {
  data() {
    return {
      router: useRoute(),
      error: '',
      user: useUserStore().getUser.user,
      allSessions: [],
      date: ref(new Date()),
      formAddSession: {
        session_time: '',
        session_date: ''
      }
    }
  },
  mounted() {
    console.log('mentor_id:', this.router.params.mentor_id)
    console.log('user:', this.user)
    console.log('date:', this.date)

    this.getAllMentorSessions()
  },
  watch: {
    date(val, oldVal) {
      console.log(this.date)
    }
  },
  methods: {
    async getAllMentorSessions() {
      await client
        .get(`/session/${this.router.params.mentor_id}/mentor_sessions/all`)
        .then((res) => {
          console.log('res.data:', res.data)
          this.allSessions = res.data
        })
        .catch((e) => {
          console.log('error,', e)
          this.errors.push(e)
        })
    },
    async submitAddSession() {
      const getYear = this.date.toLocaleString('default', { year: 'numeric' })
      const getMonth = this.date.toLocaleString('default', { month: '2-digit' })
      const getDay = this.date.toLocaleString('default', { day: '2-digit' })
      this.formAddSession.session_date = getYear + '-' + getMonth + '-' + getDay
      console.log('formAddSession:', this.formAddSession)

      await client
        .post('/session/mentor_sessions', this.formAddSession)
        .then((res) => {
          // console.log('Add session successfully')
          console.log('res.data:', res.data);
          this.allSessions.push({
            session_time: this.formAddSession.session_time,
            session_date: this.formAddSession.session_date,
            is_book: false,
            mentor_id: this.router.params.mentor_id
          })
        })
        .catch((e) => {
          this.error = e.response.data
        })

    // reset
    },
  }
}
</script>

<style scoped>
.add_session_form_wrapper {
  width: 60%;
  margin: 4% auto 0;
}

.session_time_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  margin: 5% auto 0;
  column-gap: 10%;
  align-items: center;
}
.session_time {
  width: 15%;
  border-radius: 10px;
  border: 1px solid #061a38;
  color: #061a38;
  padding: 1% 3%;
}
</style>

