<template>
    <div class=" col-span-4 flex flex-col p-2 ml-8">
        <div class="col-span-3 flex items-center mb-6">
            <img style="height: 32px;" class="" src="@/assets/logo_mentoree.svg" alt="avatar" />
        </div>
        <h1 class="text-3xl mb-4">Sign Up</h1>
        <div class="flex flex-row mb-9">
            <p class="text-base" >Already had an account ? </p>
            <a class="px-2 text-base" style="color: #599bff" href="/login">Login</a>
        </div>

        <form @submit.prevent="nextStep" action="">
            <label for="email" class="text-sm">Email</label>
            <input id="email" name="email" class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-4 text-base"
                placeholder="Email" />

            <label for="password" class="text-sm">Password</label>
            <input id="password" name="password" type="password"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-4 text-base" />
            <div class="mb-4">
            <p class="text-sm" > What is your role? </p>
            <input class="accent-black" type="radio" id="mentor" value="true" v-model="isMentor">
            <label class="ml-3 text-base" for="mentor">Mentor</label><br>
            <input class="accent-black" type="radio" id="mentee" value="false" v-model="isMentor">
            <label class="ml-3 text-base" for="mentee">Mentee</label><br>
            </div>

            <button class="w-full h-12 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
                Sign Up
            </button>
        </form>

    </div>
</template>
  
<script setup>


</script>
<script>
export default {
  name: "SignUpBaseForm",
  data() {
    return {
      isMentor: "",
    };
  },
  props: ['setIsBase', 'setIsMentor',],
  methods: {
    nextStep(){
        this.setIsBase(false);
        console.log(this.isMentor =='true')
        this.setIsMentor(this.isMentor == 'true')
    },
  }
};
</script>  

<style lang="scss" scoped></style>
  