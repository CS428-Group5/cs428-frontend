<template>
    <div v-if="isBase" class="mt-20 grid grid-cols-3">
        <ImageSignUp :image="login" />
        <SignUpBaseForm :setIsBase="setIsBase" :form="form" />
    </div>
    <div v-else class="flex justify-center w-5/12 mx-auto my-24">
        <SignUpMentorForm v-if="form.isMentor == 'true'" :setIsBase="setIsBase" :form="form" />
        <SignUpMenteeForm v-else :setIsBase="setIsBase" :form="form" />
    </div>
</template>

<script setup>
import ImageSignUp from './ImageSignUp.vue';
import SignUpBaseForm from './SignUpBaseForm.vue';
import login from '@/assets/login.jpeg';
import { ref } from 'vue'
import SignUpMentorForm from './SignUpMentorForm.vue';
import SignUpMenteeForm from './SignUpMenteeForm.vue';

const isBase = ref(true)
const setIsBase = (value) => { isBase.value = value }

</script>
<script>
export default {
    name: "SignUpView",
    data() {
        return {
            form: {
                email: '',
                password: '',
                f_name: '',
                l_name: '',
                isMentor: 'true',
                title: '',
                about: '',
                company: '',
                session_price: 0,
                expertise: '',
            },
        }
    }
}
</script>

<style lang="scss" scoped></style>
  