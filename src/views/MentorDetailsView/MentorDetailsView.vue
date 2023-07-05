<template>
  <section class="grid grid-cols-12 gap-x-6">
    <Image :image="avatar"/>
    <SessionInfo 
      :mentorName="sampleMentor.name" 
      :mentotWork="sampleMentor.work" 
      :sessionPrice="sampleMentor.price"
      :remainingSession="sampleMentor.remainingSession" />
  </section>

  <section class="grid grid-cols-12 gap-x-6">
    <MentorInfo :expertise="sampleMentor.expertise" :experience="sampleMentor.experience" :about="sampleMentor.about" />
    <MentorReviews :reviews="reviews" />
  </section>
</template>

<script setup>
import Image from '../../components/MentorDetailsComponents/Image.vue';
import SessionInfo from '../../components/MentorDetailsComponents/SessionInfo.vue';
import MentorInfo from '../../components/MentorDetailsComponents/MentorInfo.vue';
import MentorReviews from '../../components/MentorDetailsComponents/MentorReviews.vue';
import avatar from '../../assets/avatar.jpg'
const sampleMentor = {
  name: 'Darlene Robertson',
  work: 'Software Engineer at Microsoft',
  price: 50000,
  remainingSession: 2,
  expertise: 'Engineer',
  experience: 2,
  about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.\
   Facilis perspiciatis a, velit tenetur ab distinctio optio earum quae atque maiores, dolor fugiat eligendi laudantium?\
   Repellendus ullam temporibus eaque asperiores quaerat.',
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

// console.log(averageRating);
</script>

<style lang="scss" scoped></style>
