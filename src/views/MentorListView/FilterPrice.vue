<template>
  <div class="w-48">
    <div class="font-bold mb-3">Price</div>
    <div class="flex flex-col gap-y-2">
      <div>From</div>
      <input
        type="text"
        name="from"
        id="from"
        class="px-6 py-4 bg-gray-lightest rounded-2xl"
        :value="0"
      />
      <div>To</div>
      <input
        type="text"
        name="to"
        id="to"
        class="px-6 py-4 bg-gray-lightest rounded-2xl"
        :value="500000"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
