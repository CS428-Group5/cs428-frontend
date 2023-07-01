<template>
  <div>
    <div class="font-bold mb-3">{{ name }}</div>
    <div class="flex flex-col gap-y-3">
      <div
        v-for="(choice, index) in choices"
        :key="index"
        class="flex flex-row gap-x-2 items-center"
      >
        <CheckboxOutlineIcon v-if="index % 2 == 0" class="w-6 aspect-square" />
        <CheckboxBlankOutlineIcon v-else class="w-6 aspect-square" />
        <div class="text-blue-darkest text-center">{{ choice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckboxOutlineIcon from 'vue-material-design-icons/CheckboxOutline.vue'
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue'

const props = defineProps({
  choices: Array,
  name: String
})
</script>

<style lang="scss" scoped></style>
