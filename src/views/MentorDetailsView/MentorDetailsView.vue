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

<script>
import Image from './Image.vue'
import SessionInfo from './SessionInfo.vue'
import MentorInfo from './MentorInfo.vue'
import MentorReviews from './MentorReviews.vue'
import avatar from '@/assets/avatar.jpg'

import client from '../../axios/client.ts'
import { useRoute } from 'vue-router'

export default {
  components: { Image, SessionInfo, MentorInfo, MentorReviews },
  data() {
    return {
      router: useRoute(),
      mentor: {},
      reviews: [],
      errors: []
    }
  },
  mounted() {
    console.log('mentor id nek', this.router.params.id)

    client
      .get(`http://localhost:8000/api/mentors/${this.router.params.id}`, { withCredentials: true })
      .then((res) => {
        // console.log(res.data)
        this.mentor = res.data
        this.mentor.fullname = this.mentor.lastname + ' ' + this.mentor.firstname
        this.mentor.avatar = avatar
        this.mentor.remainingSession = 2
        console.log('Mentor info nek: ', this.mentor)
      })
      .catch((e) => {
        console.log('error,', e)
        this.errors.push(e)
      })

    client
      .get(`http://localhost:8000/api/mentors/${this.router.params.id}/reviews`, {
        withCredentials: true
      })
      .then((res) => {
        // console.log(res.data)
        this.reviews = res.data
        console.log('mentor reviews nek', this.reviews)
      })
      .catch((e) => console.log('error,', e))
  }
}
</script>

<style lang="scss" scoped></style>
