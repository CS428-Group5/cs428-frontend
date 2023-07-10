<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-span-3 flex flex-col gap-y-6">
      <FilterList :choices="expertises" name="Expertise" />
      <FilterList :choices="experiences" name="Experience" />
      <FilterPrice />
      <button type="button" class="bg-blue w-fit px-4 py-3 text-white rounded-2xl">
        Apply filter
      </button>
    </div>
    <div class="col-span-9 grid grid-cols-9 gap-x-6 gap-y-8">
      <div v-for="n in 9" :key="n" class="col-span-3">
        <MentorItem />
      </div>
    </div>
  </div>
</template>

<script setup>
import MentorItem from './MentorItem.vue'
import FilterList from './FilterList.vue'
import FilterPrice from './FilterPrice.vue'

const expertises = ['Data Science', 'Engineering', 'Design', 'Marketing', 'Business']
const experiences = ['1-3 years', '3-5 years', '5-10 years']
</script>

<style lang="scss" scoped></style>
