<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-span-3 flex flex-col gap-y-6">
      <FilterList :choices="expertises" name="Expertise" @update="updateExpertise" />
      <FilterList :choices="experiences" name="Experience" @update="updateExperience" />
      <div class="w-48">
        <div class="font-bold mb-3">Price</div>
        <div class="flex flex-col gap-y-2">
          <div>From</div>
          <input
            type="text"
            name="from"
            id="from"
            class="px-6 py-4 bg-gray-lightest rounded-2xl"
            v-model="priceFrom"
          />
          <div>To</div>
          <input
            type="text"
            name="to"
            id="to"
            class="px-6 py-4 bg-gray-lightest rounded-2xl"
            v-model="priceTo"
          />
        </div>
      </div>
      <button
        type="button"
        class="bg-blue w-fit px-4 py-3 text-white rounded-2xl"
        @click="applyFilter"
      >
        Apply filter
      </button>
    </div>
    <div class="col-span-9 grid grid-cols-9 gap-x-6 gap-y-8">
      <div v-if="mentors.length === 0" class="col-span-3">No result.</div>
      <template v-else>
        <div v-for="(mentor, index) in mentors" :key="index" class="col-span-3">
          <router-link :to="{ path: `/mentors/${mentor.id}` }">
            <MentorItem :mentor="mentor" />
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import MentorItem from './MentorItem.vue'
import FilterList from './FilterList.vue'

import { ref } from 'vue'
import client from '@/axios/client'
import { useRoute } from 'vue-router'

const route = useRoute()

const experiences = ['1-3 years', '3-5 years', '>5 years']
const expertises = ref([])
const mentors = ref([])

const selectedExpertises = ref([])
const selectedExperiences = ref([])
const priceFrom = ref()
const priceTo = ref()
const nameQuery = ref(route.query.name)

function updateExpertise(newExpertises) {
  selectedExpertises.value = newExpertises
}

function updateExperience(newExperiences) {
  selectedExperiences.value = newExperiences
}

function fetchMentors() {
  client
    .get('/mentors/', {
      params: {
        expertise: selectedExpertises.value,
        experience: selectedExperiences.value,
        price_from: priceFrom.value ? priceFrom.value : 0,
        price_to: priceTo.value ? priceTo.value : 1000000000,
        name: nameQuery.value
      },
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

function applyFilter() {
  fetchMentors()
}

client
  .get('/expertises/')
  .then((res) => {
    console.log(res.data)
    expertises.value = res.data.map((expertise) => expertise.expertise_name)
  })
  .catch((err) => {
    console.log(err)
  })

fetchMentors()
</script>

<style lang="scss" scoped></style>
