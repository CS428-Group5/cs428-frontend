<template>
    <div class="grid grid-cols-12 gap-x-6">
        <div class="col-start-3 col-span-8 ">
            <h1 class="text-3xl font-bold mb-4 text-center">Purchase History</h1>
            <div v-for="n in 3" :key="n">
                <PurchaseItem></PurchaseItem>
            </div>
        </div>
    </div>
</template>

<script setup>
import PurchaseItem from './PurchaseItem.vue';
</script>