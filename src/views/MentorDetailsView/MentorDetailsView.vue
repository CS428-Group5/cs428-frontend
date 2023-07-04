<template>
  <section class="grid grid-cols-12 gap-x-6">
    <div class="col-span-3 flex flex-col p-2">
      <img class="rounded-3xl" src="@/assets/avatar.jpg" alt="" />
    </div>

    <div class="col-span-9 flex flex-col p-2">
      <h1 class="text-2xl font-bold">{{ sampleMentor.name }}</h1>
      <p class="mt-2 mb-5">{{ sampleMentor.work }}</p>
      <h2 class="text-xl font-bold">{{ sampleMentor.price }}d / session</h2>
      <div class="mt-5 flex flex-row">
        <button class="w-9 h-9 text-black rounded-xl" style="background-color: #d9e6fa">-</button>
        <p class="mx-4 my-auto">1</p>
        <button class="w-9 h-9 text-black rounded-xl" style="background-color: #d9e6fa">+</button>
        <small class="ml-3 my-auto"
          >Number of sessions left: {{ sampleMentor.remainingSession }}</small
        >
      </div>
      <div class="mt-5 flex flex-row space-x-13">
        <button
          class="w-fill h-10 px-3 mr-3 text-white rounded-xl"
          style="background-color: #599bff"
        >
          <span>Book a session</span>
        </button>
        <button
          class="w-fill h-10 px-3 mr-3 text-blue-dark border border-blue-dark rounded-xl"
          style="background-color: #ffffff"
        >
          <span>Buy more sessions</span>
        </button>
        <button class="w-9 h-9 rounded-xl pl-1.5 mr-3" style="background-color: #d9e6fa">
          <MessageTextOutline class="w-2 h-2"></MessageTextOutline>
        </button>
        <button class="w-9 h-9 rounded-xl pl-1.5 mr-3" style="background-color: #d9e6fa">
          <HeartOutline class="w-2 h-2"></HeartOutline>
        </button>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-12 gap-x-6">
    <div class="col-span-6 flex flex-col p-2">
      <h1 class="text-xl font-bold">Mentor Information</h1>
      <div class="grid grid-cols-6">
        <div class="col-span-3 flex flex-col py-2">
          <h2 class="font-bold py-1">Expertise</h2>
          <p>{{ sampleMentor.expertise }}</p>
        </div>
        <div class="col-span-3 flex flex-col py-2">
          <h2 class="font-bold py-1">Experience</h2>
          <p>{{ sampleMentor.experience }} year(s)</p>
        </div>
      </div>
      <div>
        <h2 class="font-bold py-1">About me</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis perspiciatis a, velit
          tenetur ab distinctio optio earum quae atque maiores, dolor fugiat eligendi laudantium?
          Repellendus ullam temporibus eaque asperiores quaerat.
        </p>
      </div>
    </div>

    <div class="col-span-6 flex flex-col p-2">
      <h1 class="text-xl font-bold">Reviews</h1>
      <div>
        <input
          class="bg-gray-lightest rounded-xl w-full h-11 p-5 mt-3"
          placeholder="Your comment"
        />
        <span class="flex flex-row mt-5">
          <p class="my-auto">Which score will you rate your mentor?</p>
          <div class="flex flex-col" v-for="i in 4" :key="i">
            <button
              class="w-9 h-9 ml-3 px-1 text-blue-dark border border-blue-dark rounded-xl"
              style="background-color: #ffffff"
            >
              {{ i }}
            </button>
          </div>
          <button
            class="w-9 h-9 ml-3 px-1 text-blue border border-blue rounded-xl"
            style="background-color: #ffffff"
          >
            5
          </button>
        </span>
        <button
          class="w-fill h-10 px-3 mt-3 text-white rounded-xl"
          style="background-color: #599bff"
        >
          Submit
        </button>
      </div>

      <div class="mt-3">
        <h3>
          Rating: <span class="font-bold">{{ averageRating }}/5</span>
        </h3>
        <div class="my-3" v-for="(review, index) in reviews" :key="index">
          <div class="flex flex-row mb-3">
            <img src="@/assets/avatar.jpg" class="w-10 h-10 rounded-full mr-3" alt="" />
            <p class="font-bold my-auto">{{ review.author }}</p>
          </div>
          <p class="text-blue-darkest">Score: {{ review.score }}</p>
          <p class="text-blue-darkest">{{ review.comment }}</p>
          <hr v-if="index != reviews.length - 1" class="mt-2 text-gray-light" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MessageTextOutline from 'vue-material-design-icons/MessageTextOutline.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'

const sampleMentor = {
  name: 'Darlene Robertson',
  work: 'Software Engineer at Microsoft',
  price: 50000,
  remainingSession: 2,
  expertise: 'Engineer',
  experience: 2
}

const reviews = [
  {
    author: 'Kathryn Murphy',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi corporis, hic voluptatem qui ullam, repellat ipsum suscipit veritatis accusamus libero aut unde animi dolor aperiam accusantium vitae deserunt quae.',
    score: 5
  },
  {
    author: 'Jacob Jones',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi corporis, hic voluptatem qui ullam, repellat ipsum suscipit veritatis accusamus libero aut unde animi dolor aperiam accusantium vitae deserunt quae.',
    score: 4
  },
  {
    author: 'Savannah Nguyen',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi corporis, hic voluptatem qui ullam, repellat ipsum suscipit veritatis accusamus libero aut unde animi dolor aperiam accusantium vitae deserunt quae.',
    score: 5
  }
]

let averageRating = 0
for (let review of reviews) {
  averageRating += review.score
}
averageRating = Math.round((averageRating / reviews.length) * 10) / 10
// console.log(averageRating);
</script>

<style lang="scss" scoped></style>
