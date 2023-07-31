import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const setUser = (data)=> {
    user.value = data
  }
  const removeUser = ()=> {
    user.value = {}
  }

  return { user, setUser, removeUser }
})
