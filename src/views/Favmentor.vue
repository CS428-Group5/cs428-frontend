<template>
  <h1 class="text-3xl font-bold mb-12">My favorite mentors</h1>
  <div class="grid grid-cols-12 gap-x-6 gap-y-8">
    <div v-for="n in 9" :key="n" class="col-span-3">
      <MentorItem />
    </div>
  </div>
</template>

<script setup>
import MentorItem from './MentorListView/MentorItem.vue'
</script>
