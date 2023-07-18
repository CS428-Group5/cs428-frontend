<template>
        <form action="">
            <h1 class="text-3xl mb-9">Sign up as Mentee</h1>

            <label for="name" class="mb-1 text-sm">Name</label>
            <input id="name" name="name" class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
                placeholder="Name" />

            <label for="title" class="mb-1 text-sm">Current Title</label>
            <input id="title" name="title" class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
                placeholder="Current Title" />

            <label for="about" class="mb-1 text-sm">About me</label>
            <textarea id="about" name="about" class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
                placeholder="About" rows="2"></textarea>

            <button class="w-fill h-12 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
                Confirm
            </button>
        </form>
</template>
  
<script setup>
</script>
  
<style lang="scss" scoped></style>
  