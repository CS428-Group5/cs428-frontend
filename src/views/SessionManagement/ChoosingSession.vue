<template>
  <div v-if="isMentor">
    <h1 class="text-xl font-bold">Add new session</h1>
    <form @submit.prevent="submitReview">
      <h2>Choose date</h2>
      <VueDatePicker
        v-model="date"
        :enable-time-picker="false"
        auto-apply
        :close-on-auto-apply="false"
        :allowed-dates="allowedDates"
      >
      </VueDatePicker>

      <h2>Choose time</h2>
      <input
        class="bg-gray-lightest rounded-xl w-full h-11 px-6 py-4 mt-3"
        placeholder="hh:mm"
        v-model="form.session_time"
      />
      <button
        class="w-fill h-12 px-4 py-3 mt-4 text-white rounded-xl"
        style="background-color: #599bff"
        type="submit"
      >
        Confirm
      </button>
    </form>
  </div>

  <div v-else>
    <VueDatePicker
      v-model="date"
      :enable-time-picker="false"
      auto-apply
      :close-on-auto-apply="false"
      :allowed-dates="allowedDates"
    >
    </VueDatePicker>

    <h2 class="mt-6 text-left">
      {{ this.date.toLocaleDateString('en-GB') }}
    </h2>
    <div v-if="this.allSessions.length == 0">No sessions available</div>
    <div v-else class="session_time_wrapper">
      <div v-for="session in allSessions" :key="session.id">
        <!-- <div>{{ session.session_date.replaceAll('-', '/') }}</div>
        <div>{{ this.date.toLocaleDateString() }}</div> -->
        <br/>
        <div
          v-if="
            Date.parse(session.session_date.replaceAll('-', '/')) == Date.parse(this.date.toLocaleDateString()) &&
            session.mentor_id == this.router.params.mentor_id
          "
        >
          <div class="session_time">haha</div>
        </div>
      </div>
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

// const date = ref(new Date())

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
      allSessions: [
        {
          id: 0,
          session_time: '10:00',
          session_date: '2023-08-24',
          is_book: false,
          mentor_id: 1
        },
        {
          id: 1,
          session_time: '18:30',
          session_date: '2023-08-24',
          is_book: false,
          mentor_id: 1
        },
        {
          id: 2,
          session_time: '20:00',
          session_date: '2023-08-04',
          is_book: false,
          mentor_id: 2
        }
      ],
      allowedDates: [
        new Date(),
        new Date(new Date().setDate(new Date().getDate() + 1)),
        'Tue Aug 24 2023 15:50:00 GMT+0700 (Indochina Time)'
      ],
      date: ref(new Date()),
      form: {
        session_time: '',
        session_date: ''
      }
    }
  },
  mounted() {
    console.log('mentor_id:', this.router.params.mentor_id)
    console.log('user:', this.user)
    console.log('date:', this.date)
    console.log('all sessions:', this.allSessions);
  },
  watch: {
    date(val, oldVal) {
      // const getYear = val.toLocaleString('default', { year: 'numeric' })
      // const getMonth = val.toLocaleString('default', { month: '2-digit' })
      // const getDay = val.toLocaleString('default', { day: '2-digit' })
      // val = getYear + '-' + getMonth + '-' + getDay
      // console.log(oldVal)
      // console.log(val)
      console.log(this.date)
    }
  },
  methods: {
    async chooseSession() {
      await client
        .get(`/session/${this.router.params.mentor_id}/mentor_sessions/all`)
        .then((res) => {
          this.allSessions = res.data
          console.log(this.allSessions)
        })
        .catch((e) => {
          console.log('error,', e)
          this.errors.push(e)
        })
    },
    async submitSession() {
      console.log(this.form)

      await client
        .post('/session/mentor_sessions', this.form)
        .then((res) => {
          // console.log('Add session successfully')
          this.allowedDates.push(this.form.session_date)
          this.allSessions.push({
            id: this.user.id,
            session_time: this.form.session_time,
            session_date: this.form.session_date,
            is_book: true,
            mentor_id: this.router.params.mentor_id
          })
        })
        .catch((e) => {
          this.error = e.response.data
        })
    }
  }
}
</script>

<style scoped>
.session_time_wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
}
.session_time {
  width: 22%;
  border-radius: 10px;
  border: 1px solid #061a38;
  color: #061a38;
  padding: 3% 5%;
}
</style>
