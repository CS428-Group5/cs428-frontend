<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div v-if="list_fav?.length === 0" class="col-span-3">No result.</div>
    <template v-else>
      <div v-for="mentor in list_fav" :key="mentor.id" class="col-span-3">
        <FavoriteMentorItem :mentor="mentor" @remove-favorite-mentor.once="removeFavoriteMentor" />
      </div>
    </template>
  </div>
</template>

<script setup>
import FavoriteMentorItem from './FavoriteMentorItem.vue'
import { useFavStore } from '@/stores/fav'
import { ref } from 'vue'
import client from '@/axios/client.ts'

const list_fav = ref([])
const favStore = useFavStore()

client
  .get('/mentors/favorite')
  .then((res) => {
    favStore.setFav(res.data)
    list_fav.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })

function removeFavoriteMentor(id) {
  client
    .delete('/mentors/favorite', { data: { mentor_id: id } })
    .then(() => {
      favStore.removeFav(id)
      list_fav.value = favStore.getAll
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>

<style lang="scss" scoped></style>
