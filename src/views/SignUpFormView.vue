<template>
  <div class="flex justify-center w-1/3 mx-auto">
    <form v-if="isMentor" action="">
      <h1 class="text-3xl mb-9">Sign up as Mentor</h1>

      <label for="name" class="mb-1 text-sm">Name</label>
      <input
        id="name"
        name="name"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
        placeholder="Name"
      />

      <div class="form-control">
        <label for="expertise" class="mb-1 text-sm">Expertise</label>
        <select
          name="expertise"
          id="expertise"
          class="bg-gray-lightest rounded-xl w-full h-full px-6 py-4 mb-6"
        >
          <option selected>Select</option>
          <option value="ds">Data Science</option>
          <option value="mlai">ML/AI</option>
          <option value="web">Web Developer</option>
          <option value="security">Security</option>
          <option value="qa">Quality Assurance</option>
          <option value="testing">Testing</option>
        </select>
      </div>

      <label for="position" class="mb-1 text-sm">Current Position</label>
      <input
        id="position"
        name="position"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
        placeholder="Current Position"
      />

      <label for="company" class="mb-1 text-sm">Current Company</label>
      <input
        id="company"
        name="company"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
        placeholder="Current Company"
      />

      <label for="about" class="mb-1 text-sm">About me</label>
      <textarea
        id="about"
        name="about"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
        placeholder="About"
        rows="2"
      ></textarea>

      <label for="sessionPrice" class="mb-1 text-sm">Pricing for a session</label>
      <input
        id="sessionPrice"
        name="sessionPrice"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
        placeholder="50000"
      />
      <button class="w-fill h-12 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
        Confirm
      </button>
    </form>

    <form v-else action="">
      <h1 class="text-3xl mb-9">Sign up as Mentee</h1>

      <label for="name" class="mb-1 text-sm">Name</label>
      <input
        id="name"
        name="name"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
        placeholder="Name"
      />

      <label for="title" class="mb-1 text-sm">Current Title</label>
      <input
        id="title"
        name="title"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
        placeholder="Current Title"
      />

      <label for="about" class="mb-1 text-sm">About me</label>
      <textarea
        id="about"
        name="about"
        class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base"
        placeholder="About"
        rows="2"
      ></textarea>

      <button class="w-fill h-12 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
        Confirm
      </button>
    </form>
  </div>
</template>

<script setup>
const isMentor = true
</script>

<style lang="scss" scoped></style>
