<template>
    <section class="grid grid-cols-12 gap-x-6 border">
        <div class="col-span-3 flex flex-col p-2">
            <img class="rounded-3xl" src="../assets/avatar.jpg" alt="">
        </div>

        <div class="col-span-3 flex flex-col p-2">
            <h1 class="text-2xl">{{ sampleMentor.name }}</h1>
            <p class="mt-2 mb-5">{{ sampleMentor.work }}</p>
            <h2>{{ sampleMentor.price }}d / session</h2>
            <div class="mt-5 flex flex-row">
                <button class="w-9 h-9 text-black rounded-xl" style="background-color: #D9E6FA;">-</button>
                <p class="mx-4 my-auto">1</p>
                <button class="w-9 h-9 text-black rounded-xl" style="background-color: #D9E6FA;">+</button>
                <small class="ml-3 my-auto">Number of sessions left: {{ sampleMentor.remainingSession }}</small>
            </div>
            <div class="mt-5 flex flex-row space-x-13">
                <button class="w-50 h-10 px-10 text-white rounded-lg" style="background-color: #599BFF;">
                    <span>Book a session</span>
                </button>
                <button class="w-50 h-10 px-10 text-blue-dark border border-blue-dark rounded-lg" style="background-color: #FFFFFF;">
                    <span>Buy more sessions</span>
                </button>
                <button class="w-12 h-12 rounded-xl pl-1" style="background-color: #D9E6FA;">
                    <MessageTextOutline class="w-2 h-2"></MessageTextOutline>
                </button>
                <button class="w-9 h-9 rounded-xl pl-1.5" style="background-color: #D9E6FA;">
                    <HeartOutline class="w-2 h-2"></HeartOutline>
                </button>
            </div>
        </div>
    </section>

    <section>


    </section>
</template>

<script setup>
import MessageTextOutline from 'vue-material-design-icons/MessageTextOutline.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'

const sampleMentor = {
    name: 'Darlene Robertson',
    work: 'Software Engineer at Microsoft',
    price: 50000,
    remainingSession: 2
}

</script>

<style lang="scss" scoped>

</style>