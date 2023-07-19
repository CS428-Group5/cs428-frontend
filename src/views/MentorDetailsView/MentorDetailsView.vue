<template>
  <section class="grid grid-cols-12 gap-x-6">
    <Image :image="mentor.avatar" />
    <SessionInfo
      :mentorName="mentor.fullname"
      :mentorWork="mentor.current_company"
      :sessionPrice="mentor.default_session_price"
      :remainingSession="mentor.remainingSession"
    />
  </section>

  <section class="mt-16 grid grid-cols-12 gap-x-6">
    <MentorInfo
      :expertise="mentor.expertise"
      :experience="mentor.experience"
      :about="mentor.about_me"
    />
    <MentorReviews :reviews="reviews" />
  </section>
</template>

<script setup>
import Image from './Image.vue'
import SessionInfo from './SessionInfo.vue'
import MentorInfo from './MentorInfo.vue'
import MentorReviews from './MentorReviews.vue'
import avatar from '@/assets/avatar.jpg'

import client from '../../axios/client.ts'
import { useRoute } from 'vue-router'

let mentor = {}
let reviews = []

const router = useRoute()
console.log('mentor id nek', router.params.id)
await client
  .get(`http://localhost:8000/api/mentors/${router.params.id}`, { withCredentials: true })
  .then((res) => {
    // console.log(res.data)
    mentor = res.data
    console.log('Mentor info nek: ', mentor)
    mentor.fullname = mentor.lastname + ' ' + mentor.firstname
    mentor.avatar = '@/assets/avatar.jpg'
    mentor.remainingSession = 2
  })
  .catch((e) => console.log('error,', e))

// about_me: 'njnjkjjnnjkjkn'
// current_company: 'Bighit'
// current_title: 'myg nek'
// default_session_price: '1000.0000'
// experience: 10
// expertise: 'Song Composer'
// firstname: 'YG'
// id: 2
// lastname: 'Min'

await client
  .get(`http://localhost:8000/api/mentors/${router.params.id}/reviews`, { withCredentials: true })
  .then((res) => {
    // console.log(res.data)
    reviews = res.data
    console.log('mentor reviews nek', reviews)
  })
  .catch((e) => console.log('error,', e))
</script>

<style lang="scss" scoped></style>
