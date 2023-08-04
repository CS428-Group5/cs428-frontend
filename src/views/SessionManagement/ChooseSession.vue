<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-start-4 col-span-6">

      <VueDatePicker v-model="date" :enable-time-picker="false" auto-apply :close-on-auto-apply="false"
        :allowed-dates="allowedDates">
      </VueDatePicker>

      <h2 class="mt-12 text-center text-xl font-bold">
        {{ this.date.toLocaleDateString('en-GB') }}
      </h2>
      <!-- <div v-if="this.allSessions.length == 0">No sessions available</div> -->
      <div class="session_time_wrapper mt-12">
        <div v-for="session in allSessions.filter(
          (session) =>
            Date.parse(session.session_date.replaceAll('-', '/')) ==
            Date.parse(this.date.toLocaleDateString()) &&
            session.mentor_id == this.router.params.mentor_id
        )" :key="session.id" :class="session.id == temp ? 'button_click' : ''" class="session_time"
          @click="clickSession(session)">
          <div class="text-center">{{ session.session_time.substring(0, 5) }}</div>
        </div>
        <button v-if="checkHaveSession(this.date)" type="submit" @click="submitBookSession"
          class="text-base w-fit h-12 px-4 py-3 mr-3 text-white rounded-xl" style="background-color: #599bff">
          Book
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

watchEffect(() => { })
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
      user: useUserStore().getUser,
      allSessions: [],
      allowedDates: [],
      date: ref(new Date()),
      temp: ref(),
      allBookedSession: [],

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

      for (let session of this.allSessions) {
        this.allowedDates.push(new Date(session.session_date))
      }
      console.log('all sessions:', this.allSessions)
      console.log('allowed dates:', this.allowedDates)
    },

    async getAllBookedSessions() {
      await client
        .get(`/session/booked_session/${this.user.id}/all`)
        .then((res) => {
          console.log('res.data:', res.data)
          this.allBookedSessions = res.data
        })
        .catch((e) => {
          console.log('error,', e)
          this.errors.push(e)
        })
    },

    async submitBookSession() {
      await client
        .post(`/session/booked_session/${this.temp}`)
        .then((res) => {
          // console.log('Book session successfully')
          console.log('res.data:', res.data);
        })
        .catch((e) => {
          this.error = e.response.data
        })
    },

    checkHaveSession(date) {
      for (let d of this.allowedDates) {
        if (d.toLocaleDateString() == date.toLocaleDateString()) return true
      }
      return false
    },

    clickSession(session) {
      console.log('session:', session)
      this.temp = session.id
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 10%;
}

.session_time {
  width: 15%;
  border-radius: 10px;
  border: 1px solid #061a38;
  color: #061a38;
  padding: 1% 3%;
  margin-bottom: 3%;
}

.session_time:hover {
  border: 1px solid #599bff;
  color: #599bff;
}

.button_click {
  color: #599bff;
  border-color: #599bff;
}
</style>
