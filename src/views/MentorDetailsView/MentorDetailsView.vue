<template>
  <section class="grid grid-cols-12 gap-x-6">
    <Image :image="avatar" />
    <SessionInfo
      :mentorName="sampleMentor.name"
      :mentorWork="sampleMentor.work"
      :sessionPrice="sampleMentor.price"
      :remainingSession="sampleMentor.remainingSession"
    />
  </section>

  <section class="mt-16 grid grid-cols-12 gap-x-6">
    <MentorInfo
      :expertise="sampleMentor.expertise"
      :experience="sampleMentor.experience"
      :about="sampleMentor.about"
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

import axios from 'axios'
import { useRoute } from 'vue-router'

const router = useRoute()
console.log(router.params);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

await axios
  .get(
    `http://127.0.0.1:8000/api/mentors/${router.params.id}`, 
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
      }
    }
  )
  .then(res => console.log(res.data))
  .catch(e => console.log('error', e))

const sampleMentor = {
  name: 'Darlene Robertson',
  work: 'Software Engineer at Microsoft',
  price: 50000,
  remainingSession: 2,
  expertise: 'Engineer',
  experience: 2,
  about:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.\
   Facilis perspiciatis a, velit tenetur ab distinctio optio earum quae atque maiores, dolor fugiat eligendi laudantium?\
   Repellendus ullam temporibus eaque asperiores quaerat.'
}

const reviews = [
  {
    author: 'Kathryn Murphy',
    avatar: avatar,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi corporis, hic voluptatem qui ullam, repellat ipsum suscipit veritatis accusamus libero aut unde animi dolor aperiam accusantium vitae deserunt quae.',
    score: 5
  },
  {
    author: 'Jacob Jones',
    avatar: avatar,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi corporis, hic voluptatem qui ullam, repellat ipsum suscipit veritatis accusamus libero aut unde animi dolor aperiam accusantium vitae deserunt quae.',
    score: 4
  },
  {
    author: 'Savannah Nguyen',
    avatar: avatar,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi corporis, hic voluptatem qui ullam, repellat ipsum suscipit veritatis accusamus libero aut unde animi dolor aperiam accusantium vitae deserunt quae.',
    score: 5
  }
]
</script>

<style lang="scss" scoped></style>
