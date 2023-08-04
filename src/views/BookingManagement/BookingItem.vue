<template>
    <div class="border border-solid border-gray-light rounded-2xl p-4 mb-6">
        <p class="font-bold text-lg mb-2">Mentorship session with {{ isMentor ? session.mentor_first_name :
            session.mentee_first_name + ' ' +
                isMentor ? session.mentor_last_name : session.mentee_last_name }}</p>
        <div class="flex gap-8 mb-4">
            <div class="flex gap-2">
                <CalendarMonthOutline></CalendarMonthOutline>
                <p>{{ session.session_date }}</p>

            </div>
            <div class="flex gap-2">
                <ClockOutline></ClockOutline>
                <p>{{ session.session_time.substring(0, 5) }}</p>
            </div>
        </div>
        <div v-if="session.cancelled_by == 0">
            <a :href="session.event_link">
                <button class="w-fit h-12 mr-4 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
                    Meet
                </button>
            </a>
            <button class="w-fit h-12 px-4 py-3 text-red rounded-xl" style="background-color: #fff"
                @click="cancelBookedSession(session)">
                Cancel
            </button>
        </div>
        <div v-else-if="(session.cancelled_by == 1 && isMentor) || (session.cancelled_by == 2 && !isMentor)">
            <p class="text-red">You have rejected this mentorship session.</p>
        </div>
        <div v-else-if="(session.cancelled_by == 1 && !isMentor)">
            <p class="text-red">The mentor has rejected this mentorship session.</p>
        </div>
        <div v-else-if="(session.cancelled_by == 2 && isMentor)">
            <p class="text-red">The mentee has rejected this mentorship session.</p>
        </div>
    </div>
</template>
  
<script setup>
import CalendarMonthOutline from 'vue-material-design-icons/CalendarMonthOutline.vue'
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue'

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
    props: ['session'],
    data() {
        return {
            user: useUserStore().getUser.user,
            error: ''
        }
    },
    methods: {
        async cancelBookedSession(session) {
            await client
                .post(`/session/booked_session/${session.id}/canceled`)
                .then((res) => {
                    console.log('Cancel');
                    console.log(this.session)
                    this.session.cancelled_by = this.user.is_mentor ? 1 : 2;
                })
                .catch((e) => {
                    console.log('error,', e);
                    this.errors.push(e);
                })
        }
    }
}
</script>