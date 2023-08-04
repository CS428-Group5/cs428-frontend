<template>
  <div v-if="isMentor">
    <MentorSessionList></MentorSessionList>
  </div>
  <div v-else class="wrapper">
    <h1 class="text-center text-2xl font-bold">Booking Management</h1>
    <div v-for="(session, id) in allBookedSessions" class="item">
      <div class="text-base font-bold">Mentorship session with {{ session.mentor_first_name + ' ' + session.mentor_last_name }}</div>
      <div class="flex my-4 gap-6">
        <div class="flex text-sm font-normal items-center">
          <Calendar></Calendar>
          <div class="ml-2">{{ session.session_date }}</div>
        </div>
        <div class="flex text-sm font-normal items-center">
          <ClockOutline></ClockOutline>
          <div class="ml-2">{{ session.session_time.substring(0, 5) }}</div>
        </div>
      </div>
      <div class="buttons">
        <button class="meet_btn" @click="goToMeeting(session)">Meet</button>
        <button class="reject_btn" @click="cancelBookedSession(session)">Reject</button>
      </div>
      <hr class="mt-6" v-if="id != allBookedSessions.length - 1" />
    </div>
  </div>
</template>

<script setup>
import Calendar from 'vue-material-design-icons/Calendar.vue'
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue'

import client from '../../axios/client'

import { ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/user'

import MentorSessionList from './MentorSessionList.vue'

const userStore = useUserStore()
const isMentor = ref(false)

watchEffect(() => {
  isMentor.value = userStore.getUser?.user?.is_mentor
})
</script>

<script>
import { useUserStore } from '@/stores/user'
export default {
  data() {
    return {
      allBookedSessions: [],
      user: useUserStore().getUser.user,
      error: ''
    }
  },
  mounted() {
    this.getAllBookedSessions()
  },
  watch: {
    date(val, oldVal) {
      console.log(this.date)
    }
  },
  methods: {
    async getAllBookedSessions() {
      await client
        .get(`/session/booked_session/${this.user.id}/all`)
        .then((res) => {
          // console.log('res.data:', res.data)
          this.allBookedSessions = res.data
        })
        .catch((e) => {
          console.log('error,', e)
          this.errors.push(e)
        })
    },
    goToMeeting(session) {
      console.log('go go')
    },
    async cancelBookedSession(session) {
      await client
        .post(`/session/booked_session/${session.id}/canceled`)
        .then((res) => {
          console.log('Cancel')
          this.allBookedSessions = this.allBookedSessions.filter((obj) => {
            return obj.id !== session.id
          })
        })
        .catch((e) => {
          console.log('error,', e)
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 50%;
  margin: 0 auto;
}
.item {
  width: 70%;
  margin: 4% auto;
}
.buttons {
  display: flex;
  gap: 6%;
}
.meet_btn {
  border-radius: 10px;
  padding: 2% 3%;
  background-color: #599bff;
  color: #fff;
  opacity: 0.9;
}
.meet_btn:hover {
  opacity: 1;
}
.reject_btn {
  border-radius: 10px;
  padding: 2% 2%;
  border: 1px solid #599bff;
  color: #599bff;
  opacity: 0.9;
}
.reject_btn:hover {
  color: #061a38;
  border: 1px solid #061a38;
}
hr {
  color: #cccccc;
  background-color: #cccccc;
  height: 2px;
}
</style>
