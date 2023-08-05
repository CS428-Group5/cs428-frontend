<template>
  <section class="grid grid-cols-12 gap-x-6">
    <Image
      :image="
        mentor.avatar
          ? mentor.avatar
          : `https://source.unsplash.com/random/300x300?sig=${Math.random() * 1000 + 1}`
      "
    />
    <SessionInfo
      :mentorName="mentor.fullname"
      :mentorWork="`${mentor.current_title} at ${mentor.current_company}`"
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

import client from '@/axios/client.ts'
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
    console.log(this.router.params)
    client
      .get(`/mentors/${this.router.params.mentor_id}`)
      .then((res) => {
        console.log(res.data)
        this.mentor = res.data
        this.mentor.fullname = this.mentor.firstname + ' ' + this.mentor.lastname
        this.mentor.remainingSession = 2
      })
      .catch((e) => {
        console.log('error,', e)
        this.errors.push(e)
      })

    client
      .get(`/mentors/${this.router.params.mentor_id}/reviews`)
      .then((res) => {
        this.reviews = res.data
      })
      .catch((e) => console.log('error,', e))
  }
}
</script>

<style lang="scss" scoped></style>
