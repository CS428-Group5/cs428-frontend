import { defineStore } from 'pinia'

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
    setFav(data) {
      this.fav = data
    },
    removeFav(id) {
      this.fav = this.fav.filter((item) => item.id !== id)
    },
    addFav(fav) {
      console.log('hrllasd')
      console.log(this.fav)
      if(this.fav.length===0)
        this.fav =[fav]
      else
        this.fav = this.fav.push(fav)
      console.log('then')
      console.log(this.fav)
    }
  }
})
