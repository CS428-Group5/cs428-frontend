<template>
    <div class="border border-solid border-gray-light rounded-2xl p-4 mb-6">
        <p class="font-bold text-lg mb-2">Mentorship session with Darlene Robertson</p>
        <div class="flex gap-8 mb-4">
            <div class="flex gap-2">
                <CalendarMonthOutline></CalendarMonthOutline>
                <p>27/6/2023</p>

            </div>
            <div class="flex gap-2">
                <ClockOutline></ClockOutline>
                <p>11:00 AM - 11:30 AM</p>
            </div>
        </div>
        <div v-if="!isReject">
            <button class="w-fit h-12 mr-4 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
                Meet
            </button>
            <button class="w-fit h-12 px-4 py-3 text-red rounded-xl" style="background-color: #fff">
                Cancel
            </button>
        </div>
        <div v-else>
            <p class="text-red">You have rejected this mentorship session.</p>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import CalendarMonthOutline from 'vue-material-design-icons/CalendarMonthOutline.vue'
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue'
const isReject = ref(false)
</script>
  