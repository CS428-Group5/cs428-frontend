<template>
    <VueDatePicker 
        v-model="date" 
        :enable-time-picker="false"
        auto-apply 
        :close-on-auto-apply="false"
        :allowed-dates="allowedDates"
    >
    </VueDatePicker>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref(new Date());
watchEffect(() => console.log(date.value))

const allowedDates = computed(() => {
  return [
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 1)),
    "Tue Aug 03 2023 15:50:00 GMT+0700 (Indochina Time)"
  ];
});

</script>

<style lang="scss" scoped></style>
