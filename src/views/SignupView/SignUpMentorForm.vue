<template>
    <div>
        <button class="w-fill h-12 text-black" v-on:click="backStep">
            <ArrowLeft />
        </button>
        <h1 class="text-3xl mb-9">Sign up as Mentor</h1>
        <form @submit.prevent="signUp">
            <label for="f_name" class="mb-1 text-sm">First Name</label>
            <input id="f_name" name="f_name" v-model="form.f_name"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="First Name" />

            <label for="l_name" class="mb-1 text-sm">Last Name</label>
            <input id="_name" name="l_name" v-model="form.l_name"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="Last Name" />


            <div class="form-control">
                <label for="expertise" class="mb-1 text-sm">Expertise</label>
                <select name="expertise" id="expertise" class="bg-gray-lightest rounded-xl w-full h-full px-6 py-4 mb-6"
                    v-model="form.expertise">
                    <option selected>Select</option>
                    <option value="Data Science">Data Science</option>
                    <option value="ML/AI">ML/AI</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Security">Security</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="Testing">Testing</option>
                </select>
            </div>

            <label for="position" class="mb-1 text-sm">Current Position</label>
            <input id="position" name="position" v-model="form.title"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="Current Position" />

            <label for="company" class="mb-1 text-sm">Current Company</label>
            <input id="company" name="company" v-model="form.company"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="Current Company" />

            <label for="about" class="mb-1 text-sm">About me</label>
            <textarea id="about" name="about" v-model="form.about"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="About" rows="2"></textarea>

            <label for="sessionPrice" class="mb-1 text-sm">Pricing for a session</label>
            <input id="sessionPrice" name="sessionPrice" v-model="form.session_price"
                class="bg-gray-lightest rounded-xl w-full px-6 py-4 mb-6 text-base" placeholder="50000" />
            <div>
                <button type="submit" class="w-fill h-12 px-4 py-3 text-white rounded-xl" style="background-color: #599bff">
                    Sign Up
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import client from "../../axios/client.ts"
</script>
<script>
export default {
    name: 'SignUpMentorForm',
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
            const data = {
                username: this.form.email,
                password: this.form.password,
                email: this.form.email,
                gender: 0,
                first_name: this.form.f_name,
                last_name: this.form.l_name,
                current_title: this.form.title,
                about_me: this.form.about,
                current_company: this.form.company,
                default_session_price: this.form.session_price,
                experience: 0,
                expertise_name: this.form.expertise,
            }
            client.post(`/authentication/registration/mentor`, data)
                .then(response => { 
                    console.log(response)
                    
                    this.$router.push(`/login`)
                })
                .catch(e => {
                    this.error = e.response.data
                })
        }
    }
}
</script>
  
<style lang="scss" scoped></style>
  