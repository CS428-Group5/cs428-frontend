<template>
    <div class="grid grid-cols-12 gap-x-6">
        <div class="col-start-3 col-span-8">
            <h1 class="text-3xl font-bold mb-8">Booking Management</h1>
            <div v-for="n in 9" :key="n">
                <BookingItem></BookingItem>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import BookingItem from './BookingItem.vue';
</script>
