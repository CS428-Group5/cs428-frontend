<template>
  <div v-if="isMentor">
    <SessionList></SessionList>
  </div>
  <div v-else class="wrapper">
    <h1 class="text-center text-2xl font-bold">Booking Management</h1>
    <div v-for="(session, id) in bookedSessions" class="item">
      <div class="text-base font-bold">Mentorship session with {{ session.mentorName }}</div>
      <div class="flex my-4 gap-6">
        <div class="flex text-sm font-normal items-center">
          <Calendar></Calendar>
          <div class="ml-2">{{ session.session_date }}</div>
        </div>
        <div class="flex text-sm font-normal">
          <ClockOutline></ClockOutline>
          <div class="ml-2">{{ session.session_time }}</div>
        </div>
      </div>
      <div class="buttons">
        <button class="meet_btn" @click="goToMeeting(session)">Meet</button>
        <button class="reject_btn" @click="cancelBookedSession(session)">Reject</button>
      </div>
      <hr class="mt-6" v-if="id != bookedSessions.length - 1" />
    </div>
  </div>
</template>

<script setup>
import Calendar from 'vue-material-design-icons/Calendar.vue'
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue'

import client from '../../axios/client'

import { ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/user'

import SessionList from './SessionList.vue'

const userStore = useUserStore()
const isMentor = ref(false)

watchEffect(() => {
  isMentor.value = userStore.getUser?.user?.is_mentor
})
</script>

<script>
import { useUserStore } from '@/stores/user'
export default {
  props: ['allBookedSessions'],
  data() {
    return {
      bookedSessions: [
        {
          id:1,
          mentorName: 'jjk',
          session_date: '01/09/2023',
          session_time: '20:00',
        },
        {
          id:2,
          mentorName: 'kth',
          session_date: '31/12/2023',
          session_time: '17:30',
        },
        {
          id:3,
          mentorName: 'pjm',
          session_date: '13/10/2023',
          session_time: '19:15',
        },
        {
          id:4,
          mentorName: 'knj',
          session_date: '12/09/2023',
          session_time: '10:30',
        },
      ],
      allBookedSessions: [],
      user: useUserStore().getUser,
      error: '',
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
          console.log('res.data:', res.data)
          this.allBookedSessions = res.data
        })
        .catch((e) => {
          console.log('error,', e)
          this.errors.push(e)
        })
    },
    goToMeeting(session){
      console.log('go go')
    },
    async cancelBookedSession(session){
      await client
        .post(`/session/booked_session/${session.id}/canceled`)
        .then((res) => {
          console.log('Cancel')
          this.allBookedSessions = this.allBookedSessions.filter(obj => {return obj.id !== session.id;});
        })
        .catch((e) => {
          console.log('error,', e)
          this.errors.push(e)
        })}
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
