<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-start-3 col-span-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Session Management</h1>
      <div v-for="n in 9" :key="n">
        <div
          class="border border-solid border-gray-light rounded-2xl p-4 mb-6 flex flex-row justify-between items-center"
        >
          <div class="flex flex-row items-center">
            <img
              style="height: 64px"
              class="rounded-full mr-4"
              src="@/assets/avatar.jpg"
              alt="avatar"
            />
            <p class="text-lg font-bold">Darlene Robertson</p>
          </div>
          <p>Number of sessions left: 2</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
