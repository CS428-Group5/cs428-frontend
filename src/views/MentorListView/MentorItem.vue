<template>
  <div class="relative z-0">
    <img class="aspect-square rounded-3xl mb-3" src="@/assets/avatar.jpg" alt="avatar" />
    <div class="absolute right-3 top-3 z-10 w-10 aspect-square bg-indigo-300 rounded-2xl"></div>
  </div>
  <div class="flex flex-col divide-y divide-solid divide-slate-300">
    <div class="py-2 first:pt-0 space-y-1">
      <div>Name</div>
      <div>Job Title</div>
    </div>
    <div class="py-2 grid grid-cols-2">
      <div class="flex flex-col gap-y-1">
        <div>Experience</div>
        <div>2 years</div>
      </div>
      <div class="flex flex-col gap-y-1">
        <div>Rating</div>
        <div>4.6/5</div>
      </div>
    </div>
    <div class="py-2 last:pb-0">50.000đ / session</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
