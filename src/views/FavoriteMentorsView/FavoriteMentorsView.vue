<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div v-if="list_fav?.length === 0" class="col-span-3">No result.</div>
    <template v-else>
      <div v-for="mentor in list_fav" :key="mentor.id" class="col-span-3">
        <FavoriteMentorItem :mentor="mentor" :removeFavoriteMentor="removeFavoriteMentor" />
      </div>
    </template>
  </div>
</template>

<script setup>
import FavoriteMentorItem from './FavoriteMentorItem.vue'
import { useFavStore } from '@/stores/fav';
client
  .get('/mentors/favorite')
  .then((res) => {
    favStore.setFav(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
</script>

<script>
import { useFavStore } from '@/stores/fav';
import FavoriteMentorItem from './FavoriteMentorItem.vue'
import client from '@/axios/client.ts'
export default {
  name: 'FavoriteMentorsView.vue',
  data() {
    return {
      list_fav: useFavStore().getAll,
      error: '',
    }
  },
  methods: {
    async removeFavoriteMentor(id) {
      client
        .delete('/mentors/favorite', { data: { mentor_id: id } })
        .then((response) => {
          useFavStore().removeFav(id)
          location.reload()
        })
        .catch((e) => {
          this.error = e.response
        })
    },
  }

}
</script>

<style lang="scss" scoped></style>
