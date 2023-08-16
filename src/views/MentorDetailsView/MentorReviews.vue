<template>
  <div class="col-span-6 flex flex-col p-2">
    <div v-if="isLogin">
      <h1 class="text-xl font-bold">Reviews</h1>
      <form @submit.prevent="submitReview">
        <input
          class="bg-gray-lightest rounded-xl w-full h-11 px-6 py-4 mt-3"
          placeholder="Your comment"
          v-model="form.content"
        />

        <span class="flex flex-row mt-4">
          <p class="my-auto text-base mr-3">Which score will you rate your mentor?</p>
          <div class="flex flex-col px-1" v-for="i in 5" :key="i">
            <div
              class="ratingButton"
              :id="`ratingButton${i}`"
              style="background-color: #ffffff"
              @mouseenter="addHoverClass(i)"
              @mouseleave="removeHoverClass(i)"
              @click="addClickClass(i)"
            >
              {{ i }}
            </div>
          </div>
        </span>

        <button
          class="w-fill h-12 px-4 py-3 mt-4 text-white rounded-xl"
          style="background-color: #599bff"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    <div class="mt-4">
      <h3 style="size: 18px">
        Rating:
        <span class="font-bold">{{ calculateAverageRating(reviews) }}/5</span>
      </h3>
      <div class="my-4" v-for="(review, index) in reviews" :key="index">
        <div class="flex flex-row">
          <img
            :src="
              review.avatar
                ? review.avatar
                : `https://source.unsplash.com/random/300x300?sig=${Math.random() * 1000 + 1}`
            "
            class="w-10 h-10 rounded-full mr-2"
            alt=""
          />
          <p class="font-bold my-auto">{{ review.lastname + ' ' + review.firstname }}</p>
        </div>
        <p class="text-blue-darkest my-2">Score: {{ review.rating }}</p>
        <p class="text-blue-darkest">{{ review.content }}</p>
        <hr v-if="index != reviews.length - 1" class="mt-4 text-gray-light" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const isLogin = ref(false)
const isMentor = ref(false)

watchEffect(() => {
  isLogin.value = userStore.getUser != undefined
  isMentor.value = userStore.getUser?.user?.is_mentor
})
</script>

<script>
import client from '@/axios/client'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

export default {
  data() {
    return {
      router: useRoute(),
      reviews: [],
      form: {
        mentor_id: '',
        rating: 0,
        content: ''
      },
      errors: [],
      user: userStore.getUser?.user
    }
  },
  created() {
    this.fetchReview()
  },
  mounted() {
    this.form.mentor_id = this.router.params.mentor_id
  },
  methods: {
    calculateAverageRating(reviews) {
      let averageRating = 0
      for (let review of reviews) {
        averageRating += review.rating
      }
      return (averageRating = Math.round((averageRating / reviews.length) * 10) / 10)
    },
    addHoverClass(buttonValue) {
      document.getElementById('ratingButton' + buttonValue).classList.add('button-hover')
    },
    removeHoverClass(buttonValue) {
      document.getElementById('ratingButton' + buttonValue).classList.remove('button-hover')
    },
    addClickClass(buttonValue) {
      for (let i = 1; i < 6; i++) {
        i != buttonValue
          ? document.getElementById('ratingButton' + i).classList.remove('button-click')
          : ''
      }
      const button = document.getElementById('ratingButton' + buttonValue)
      button.classList.add('button-click')

      this.form.rating = buttonValue
    },

    async fetchReview() {
      await client
        .get(`/mentors/${this.router.params.mentor_id}/reviews`)
        .then((res) => {
          console.log(res.data)
          this.reviews = res.data
        })
        .catch((e) => {
          console.log('error,', e)
          this.errors.push(e)
        })
    },
    async submitReview() {
      await client.post('/mentors/reviews', this.form).catch((e) => {
        console.log('error,', e)
        this.errors.push(e)
      })

      // reset
      this.form.content = ''
      this.form.rating = 0

      let buttons = []
      for (let i = 1; i < 6; i++) {
        buttons.push(document.getElementById('ratingButton' + i))
      }
      buttons.forEach((b) => b.classList.remove('button-click'))

      this.fetchReview()
    }
  }
}
</script>

<style>
.ratingButton {
  width: 38px;
  height: 38px;
  color: #23467c;
  border: 1px solid #23467c;
  border-radius: 30%;
  padding: 17%;
  text-align: center;
}

.button-hover {
  color: #599bff;
  border-color: #599bff;
}

.button-click {
  color: #fff;
  background-color: #599bff !important;
  border-color: #599bff;
}
</style>
