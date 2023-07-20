<template>
  <div>
    <div class="font-bold mb-3">{{ name }}</div>
    <div class="flex flex-col gap-y-3">
      <div
        v-for="(choice, index) in choices"
        :key="index"
        class="flex flex-row gap-x-2 items-center"
        @click="toggleChoice(choice)"
      >
        <CheckboxOutlineIcon v-if="selected.includes(choice)" class="w-6 aspect-square" />
        <CheckboxBlankOutlineIcon v-else class="w-6 aspect-square" />
        <div class="text-blue-darkest text-center">{{ choice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckboxOutlineIcon from 'vue-material-design-icons/CheckboxOutline.vue'
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import { ref } from 'vue'

const props = defineProps({
  choices: Array,
  name: String
})

const emit = defineEmits(['update'])

const selected = ref([])

function toggleChoice(choice) {
  if (selected.value.includes(choice)) {
    selected.value = selected.value.filter((item) => item !== choice)
  } else {
    selected.value.push(choice)
  }

  emit('update', selected.value)
}
</script>

<style lang="scss" scoped></style>
