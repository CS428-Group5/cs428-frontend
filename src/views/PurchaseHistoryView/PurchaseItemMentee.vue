<template>
    <div v-for="his in allHistory">
        <div class="border border-solid border-gray-light rounded-2xl p-4 mb-6">
            <p class="text-xl mb-2">Purchased a session from {{ his.mentor_first_name + ' ' + his.mentor_last_name }}</p>
            <p class="mb-2">Transaction ID: {{ his.id }}</p>
            <div class="flex flex-row justify-between items-center">
                <p>Date: {{ his.booked_date }}</p>
                <p class="text-lg font-bold">{{ his.session_price }} đ</p>
            </div>
      </div>
    </div>
</template>

<script setup></script>

<script>
import client from '../../axios/client'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

export default {
  data() {
	return {
		error: '',
		user: userStore.getUser.user,
		allHistory: []
	}
  },
  mounted() {
	// console.log('user:', this.user)
	this.getPurchaseHistory()
  },
  methods: {
    async getPurchaseHistory() {
      await client
        .get('/users/purchase-history/')
        .then((res) => {
          this.allHistory = res.data
          this.allHistory = this.allHistory.filter(this.checkHisPossess)
          // console.log('allHistory:', this.allHistory)
          // console.log('length:', this.allHistory.length)
        })
        .catch((e) => {
          this.error = e.response.data
        })
    },
    checkHisPossess(his) {
      return (his.cancelled_by === 0 && his.mentee_user_id === this.user.id)
    }
  }
}
</script>
