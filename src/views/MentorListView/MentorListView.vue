<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-span-3">Filter</div>
    <div class="col-span-9 grid grid-cols-9 gap-x-6 gap-y-8">
      <div v-for="n in 9" :key="n" class="col-span-3">
        <MentorItem />
      </div>
    </div>
  </div>
</template>

<script setup>
import MentorItem from './MentorItem.vue'
</script>

<style lang="scss" scoped></style>
