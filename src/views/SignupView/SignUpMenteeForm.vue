<template>
    <div>
        <button class="w-fill h-12 text-black" v-on:click="backStep">
            <ArrowLeft />
        </button>
        <h1 class="text-3xl mb-9">Sign up as Mentee</h1>
        <form @submit.prevent="signUp">
            <label for="f_name" class="mb-1 text-sm">First Name</label>
            <input id="f_name" name="f_name" v-model="form.f_name"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="First Name" />

            <label for="l_name" class="mb-1 text-sm">Last Name</label>
            <input id="_name" name="l_name" v-model="form.l_name"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="Last Name" />

            <label for="title" class="mb-1 text-sm">Current Title</label>
            <input id="title" name="title" v-model="form.title"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="Current Title" />

            <label for="about" class="mb-1 text-sm">About me</label>
            <textarea id="about" name="about" v-model="form.about"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="About" rows="2"></textarea>
            <button type="submit" class="w-fill h-12 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
                Sign Up
            </button>
        </form>
    </div>
</template>
  
<script setup>
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import client from "../../axios/client.ts"
</script>
<script>
export default {
    name: 'SignUpMenteeForm',
    props: ['setIsBase', 'form',],

    data() {
        return {
            error: ''
        }
    },
    methods: {
        backStep() {
            this.setIsBase(true);
        },
        async signUp() {
            const a = {
                username: this.form.email,
                password: this.form.password,
                email: 'abc@example.com',
                gender: 0,
                first_name: this.form.f_name,
                last_name: this.form.l_name,
                current_title: this.form.title,
                about_me: this.form.about
            }
            client.post(`/authentication/registration/mentee`, a)
                .then(response => { this.$router.push(`/`) })
                .catch(e => {
                    this.error = e.response.data
                })
        }
    }
}
</script>
  
<style lang="scss" scoped></style>
  