import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: undefined
  }),
  getters: {
    getUser(state) {
      return state.user
    }
  },
  actions: {
    setUser(data) {
      this.user = data
    }
  }
})
