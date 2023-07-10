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
