<template>
    <div class="grid grid-cols-12 gap-x-6 pt-3 pb-8">
        <div class="col-span-3 flex items-center">
            <img style="height: 32px;" class="" src="@/assets/logo_mentoree.svg" alt="avatar" />
        </div>
        <input type="text" placeholder="Search for a mentor" name="from" id="from"
            class="px-6 py-4 bg-gray-lightest rounded-2xl col-span-6 focus:outline-none" />
        <div v-if="!login" class="col-span-3 flex justify-end gap-6">
            <button type="button" class="bg-white w-fit px-4 py-3 text-blue rounded-2xl">
                Sign up
            </button>
            <button type="button" class="bg-blue w-fit px-4 py-3 text-white rounded-2xl">
                Log in
            </button>
        </div>
        <div v-else class="col-span-3 flex justify-end items-center gap-6">
            <button type="button" class="bg-blue-light w-fit p-2.5 rounded-2xl">
                <MessageTextOutline />
            </button>
            <button type="button" class="bg-blue-light w-fit p-2.5 rounded-2xl">
                <BellOutline />
            </button>
            <img class="h-11 w-11 aspect-square rounded-3xl" src="@/assets/avatar.jpg" alt="avatar" />
        </div>
    </div>
</template>

<script setup>

import MessageTextOutline from 'vue-material-design-icons/MessageTextOutline.vue'
import BellOutline from 'vue-material-design-icons/BellOutline.vue'
const login = false
</script>