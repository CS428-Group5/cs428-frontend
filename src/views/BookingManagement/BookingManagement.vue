<template>
    <div class="grid grid-cols-12 gap-x-6">
        <div class="col-start-3 col-span-8">
            <h1 class="text-3xl font-bold mb-8">Booking Management</h1>
            <div v-for="session in allBookedSessions" :key="session.id">
                <BookingItem :session="session"/>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import BookingItem from './BookingItem.vue'
import client from '../../axios/client'

import { ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/user'


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
  }
}
</script>