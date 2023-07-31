<template>
  <main class="max-w-default mx-auto h-fit px-20 mb-10">
    <Navbar v-show="shouldShowNavbar" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, watchEffect } from 'vue'
import useUserStore from '@/stores/user'
import LOCAL_STORAGE_KEYS from '@/constant/local_storage.ts'

const shouldShowNavbar = ref(true)
const userStore = useUserStore()

const { user, setUser } = userStore
const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN_KEY)

watchEffect(() => {
  if (user.account || !token) return
		client
			.get<Account>(APIS.TRACK_TOKEN, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
        console.log("asdasd")
				client.defaults.headers.common.Authorization = `Bearer ${token}`
			})
			.catch(() => {
				console.log('failed')
			})
  const currentPath = window.location.pathname
  shouldShowNavbar.value = !currentPath.startsWith('/sign-up') && !currentPath.startsWith('/login')
})
</script>

<style lang="scss" scoped></style>
