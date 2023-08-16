import { defineStore } from 'pinia'
import client from '@/axios/client.ts'

export const useFavStore = defineStore('fav', {
  state: () => ({
    fav: []
  }),
  getters: {
    getAll(state) {
      return state.fav
    }
  },
  actions: {
    async getFav() {
      client
        .get('/mentors/favorite')
        .then((res) => {
          this.fav = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setFav(data) {
      this.fav = data
    },
    removeFav(id) {
      this.fav = this.fav.filter((item) => item.id !== id)
    },
    addFav(fav) {
      console.log(this.fav)
      if (this.fav.length === 0) this.fav = [fav]
      else this.fav = this.fav.push(fav)
      console.log(this.fav)
    }
  }
})
