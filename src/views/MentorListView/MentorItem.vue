<template>
  <div class="relative z-0">
    <img class="aspect-square rounded-3xl mb-3" :src="avatarUrl" alt="avatar" />
    <div
      v-if="isFav"
      class="absolute right-3 top-3 z-10 w-10 aspect-square bg-blue-light rounded-2xl p-2 cursor-pointer"
      @click.prevent.stop="handleEmit"
    >
      <Heart style="color: #599bff" />
    </div>
    <div
      v-else
      @click.prevent.stop="handleEmit"
      class="absolute right-3 top-3 z-10 w-10 aspect-square bg-blue-light rounded-2xl p-2 cursor-pointer"
    >
      <HeartOutline />
    </div>
  </div>
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
</template>

<script setup>
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import { useFavStore } from '@/stores/fav'
import { ref, watchEffect } from 'vue'

const emits = defineEmits(['addFavoriteMentor', 'removeFavoriteMentor'])
const props = defineProps({
  mentor: {
    type: Object,
    required: true
  }
})

const favStore = useFavStore()
const isFav = ref(false)

watchEffect(() => {
  isFav.value = favStore.getAll.map((mentor) => mentor.id).includes(Number(props.mentor.id))
})

function handleEmit() {
  if (isFav.value) {
    emits('removeFavoriteMentor', props.mentor.id)
  } else {
    emits('addFavoriteMentor', props.mentor)
  }
}

const avatarUrl =
  props.mentor.avatar !== null
    ? `http://localhost:8000${props.mentor.avatar}`
    : `https://source.unsplash.com/random/300x300?sig=${Math.random() * 1000 + 1}`
</script>

<style lang="scss" scoped></style>
