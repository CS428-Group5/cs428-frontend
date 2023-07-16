<template>
    <div class=" col-span-4 flex flex-col p-2 ml-8">
        <div class="col-span-3 flex items-center mb-6">
            <img style="height: 32px;" class="" src="@/assets/logo_mentoree.svg" alt="avatar" />
        </div>
        <h1 class="text-3xl mb-4">Login</h1>
            <div class="flex flex-row mb-9">
                <p>Don't have account ? </p> 
                <a class="px-2" style="color: #599bff" href="/sign-up">Sign up</a>
            </div>

        <form action="">
            <label for="email" class="text-sm">Email</label>
            <input id="email" name="email" class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-4 text-base"
                placeholder="Email" />

            <label for="password" class="text-sm">Password</label>
            <input id="password" name="password" type="password" class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-4 text-base"/>

            <input type="checkbox" id="remember" name="remember" value="remember">
            <label class="mb-3 text-sm" for="remember"> Remember me</label><br>

            <p class="text-sm text-red mb-3">Wrong account or password.</p>

            <button class="w-full h-12 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
                Login
            </button>
        </form>
    </div>
</template>
  
<script setup>
const isMentor = true
</script>
  
<style lang="scss" scoped></style>
  