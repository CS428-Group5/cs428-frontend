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
      :mentor="mentor"
      :removeFavoriteMentor="removeFavoriteMentor"
      :addFavoriteMentor="addFavoriteMentor"
    />
  </section>

  <section class="mt-16 grid grid-cols-12 gap-x-6">
    <MentorInfo
      :expertise="mentor.expertise"
      :experience="mentor.experience"
      :about="mentor.about_me"
    />
    <MentorReviews />
  </section>
</template>

<script>
import Image from './Image.vue'
import SessionInfo from './SessionInfo.vue'
import MentorInfo from './MentorInfo.vue'
import MentorReviews from './MentorReviews.vue'
import { useFavStore } from '@/stores/fav';
import client from '@/axios/client.ts'
import { useRoute } from 'vue-router'

export default {
  components: { Image, SessionInfo, MentorInfo, MentorReviews },
  data() {
    return {
      router: useRoute(),
      mentor: {},
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
  },
  methods: {
    async removeFavoriteMentor(id) {
      client
        .delete('/mentors/favorite', { data: { mentor_id: id } })
        .then((response) => {
          useFavStore().removeFav(id)
          location.reload()
        })
        .catch((e) => {
          this.error = e.response
        })
    },
    async addFavoriteMentor(mentor) {
      client
        .post('/mentors/favorite', { mentor_id: mentor.id })
        .then((response) => {
          useFavStore().addFav(mentor)
          location.reload()
        })
        .catch((e) => {
          this.error = e.response
        })
    },
  }
}
</script>

<style lang="scss" scoped></style>
