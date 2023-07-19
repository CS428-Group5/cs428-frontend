<template>
  <div class="col-span-6 flex flex-col p-2">
    <h1 class="text-xl font-bold">Reviews</h1>
    <div>
      <input
        class="bg-gray-lightest rounded-xl w-full h-11 px-6 py-4 mt-3"
        placeholder="Your comment"
      />
      <span class="flex flex-row mt-4">
        <p class="my-auto text-base mr-4">Which score will you rate your mentor?</p>
        <div class="flex flex-col" v-for="i in 4" :key="i">
          <button
            class="text-base w-9 h-9 mr-3 px-1 text-blue-dark border border-blue-dark rounded-xl"
            style="background-color: #ffffff"
          >
            {{ i }}
          </button>
        </div>
        <button
          class="text-base w-9 h-9 mr-3 px-1 text-blue border border-blue rounded-xl"
          style="background-color: #ffffff"
        >
          5
        </button>
      </span>
      <button
        class="w-fill h-12 px-4 py-3 mt-4 text-white rounded-xl"
        style="background-color: #599bff"
      >
        Submit
      </button>
    </div>

    <div class="mt-4">
      <h3 style="size: 18px">
        Rating:
        <span class="font-bold">{{ calculateAverageRating(reviews) }}/5</span>
      </h3>
      <div class="my-4" v-for="(review, index) in reviews" :key="index">
        <div class="flex flex-row">
          <img :src="review.avatar" class="w-10 h-10 rounded-full mr-2" alt="" />
          <p class="font-bold my-auto">{{ review.lastname + review.firstname }}</p>
        </div>
        <p class="text-blue-darkest my-2">Score: {{ review.rating }}</p>
        <p class="text-blue-darkest">{{ review.content }}</p>
        <hr v-if="index != reviews.length - 1" class="mt-4 text-gray-light" />
      </div>
    </div>
  </div>
</template>
<script setup>
function calculateAverageRating(reviews) {
  let averageRating = 0
  for (let review of reviews) {
    averageRating += review.rating
  }
  return (averageRating = Math.round((averageRating / reviews.length) * 10) / 10)
}
</script>
<script>
export default {
  props: ['reviews']
}

// avatar: '/media/avatars/149.jpeg'
// content: 'Thanks to him, I stayed.'
// firstname: 'JK'
// id: 1
// lastname: 'Jeon'
// rating: 5
</script>

<style></style>
