<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div v-if="mentors.length === 0" class="col-span-3">No result.</div>
    <template v-else>
      <div v-for="(mentor, index) in mentors" :key="index" class="col-span-3">
        <router-link :to="{ path: `/mentors/${mentor.id}` }">
          <FavoriteMentorItem :mentor="mentor" />
        </router-link>
      </div>
    </template>
  </div>
</template>

<script setup>
import FavoriteMentorItem from './FavoriteMentorItem.vue'

import { ref } from 'vue'
import client from '@/axios/client'
import { useRoute } from 'vue-router'

const route = useRoute()
const mentors = ref([])

function fetchMentors() {
  client
    .get('/mentors/', {
      params: {},
      paramsSerializer: {
        indexes: null
      }
    })
    .then((res) => {
      console.log(res.data)
      mentors.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}
fetchMentors();
</script>

<style lang="scss" scoped></style>
