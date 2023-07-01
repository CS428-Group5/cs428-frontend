<template>
  <div class="relative z-0">
    <img class="aspect-square rounded-3xl mb-3" src="@/assets/avatar.jpg" alt="avatar" />
    <div class="absolute right-3 top-3 z-10 w-10 aspect-square bg-blue-light rounded-2xl p-2">
      <HeartOutlineIcon />
    </div>
  </div>
  <div class="flex flex-col divide-y divide-solid divide-gray-light">
    <div class="py-2 first:pt-0 space-y-1">
      <div class="lg-700">Tu Khai Hoai</div>
      <div>Backend Engineer at Shopee</div>
    </div>
    <div class="py-2 grid grid-cols-2">
      <div class="flex flex-col gap-y-1">
        <div class="text-gray-medium">Experience</div>
        <div>2 years</div>
      </div>
      <div class="flex flex-col gap-y-1">
        <div class="text-gray-medium">Rating</div>
        <div>4.6/5</div>
      </div>
    </div>
    <div class="py-2 last:pb-0 lg-700">50.000đ / session</div>
  </div>
</template>

<script setup>
import HeartOutlineIcon from 'vue-material-design-icons/HeartOutline.vue'
</script>

<style lang="scss" scoped></style>
