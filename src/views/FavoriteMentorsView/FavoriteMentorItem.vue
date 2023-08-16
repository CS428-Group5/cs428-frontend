<template>
  <div class="relative z-0">
    <img
      class="aspect-square rounded-3xl mb-3"
      :src="
        mentor.avatar !== null
          ? `http://localhost:8000${mentor.avatar}`
          : `https://source.unsplash.com/random/300x300?sig=${Math.random() * 1000 + 1}`
      "
      alt="avatar"
    />
    <div
      class="absolute right-3 top-3 z-10 w-10 aspect-square bg-blue-light rounded-2xl p-2 cursor-pointer"
    >
      <Heart style="color: #599bff" @click="$emit('removeFavoriteMentor', mentor.id)" />
    </div>
  </div>
  <router-link :to="{ path: `/mentors/${mentor.id}` }">
    <div class="flex flex-col divide-y divide-solid divide-gray-light">
      <div class="py-2 first:pt-0 space-y-1">
        <div class="lg-700">{{ `${mentor.firstname} ${mentor.lastname}` }}</div>
        <div>{{ mentor.current_title }} at {{ mentor.current_company }}</div>
      </div>
      <div class="py-2 grid grid-cols-2">
        <div class="flex flex-col gap-y-1">
          <div class="text-gray-medium">Experience</div>
          <div>{{ mentor.experience }} years</div>
        </div>
        <div class="flex flex-col gap-y-1">
          <div class="text-gray-medium">Rating</div>
          <div>{{ mentor.average_rating ? mentor.average_rating : '---' }}/5</div>
        </div>
      </div>
      <div class="py-2 last:pb-0 lg-700">
        {{ Math.trunc(mentor.default_session_price).toLocaleString('en') }}đ / session
      </div>
    </div>
  </router-link>
</template>

<script setup>
import Heart from 'vue-material-design-icons/Heart.vue'

const props = defineProps({
  mentor: Object
})

const emit = defineEmits(['removeFavoriteMentor'])
</script>

<style lang="scss" scoped></style>
