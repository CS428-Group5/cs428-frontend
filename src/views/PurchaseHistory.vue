<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-start-3 col-span-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Purchase History</h1>
      <div v-if="isMentee" v-for="n in 3" :key="n">
        <PurchaseItemMentee>
        </PurchaseItemMentee>
      </div>
      <div v-else v-for="n in 3" :key="n + 1">
        <PurchaseItemMentor>
        </PurchaseItemMentor>
      </div>
    </div>
  </div>
</template>

<script setup>
import PurchaseItemMentee from './PurchaseItemMentee.vue';
import PurchaseItemMentor from './PurchaseItemMentor.vue';
const isMentee = ref(true)
</script>
