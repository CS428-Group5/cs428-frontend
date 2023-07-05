<template>
     <div class="col-span-6 flex flex-col p-2">
      <h1 class="text-xl font-bold">Mentor Information</h1>
      <div class="grid grid-cols-6">
        <div class="col-span-3 flex flex-col py-2">
          <h2 class="font-bold py-1">Expertise</h2>
          <p>{{ expertise }}</p>
        </div>
        <div class="col-span-3 flex flex-col py-2">
          <h2 class="font-bold py-1">Experience</h2>
          <p>{{ experience }} year(s)</p>
        </div>
      </div>
      <div>
        <h2 class="font-bold py-1">About me</h2>
        <p>
          {{ about }}
        </p>
      </div>
    </div>
</template>
<script>
export default {
  props: ['expertise', 'experience', 'about']

}
</script>

<style></style>