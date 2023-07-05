<template>
    <div class="col-span-6 flex flex-col p-2">
        <h1 class="text-xl font-bold">Reviews</h1>
        <div>
            <input class="bg-gray-lightest rounded-xl w-full h-11 p-5 mt-3" placeholder="Your comment" />
            <span class="flex flex-row mt-5">
                <p class="my-auto">Which score will you rate your mentor?</p>
                <div class="flex flex-col" v-for="i in 4" :key="i">
                    <button class="w-9 h-9 ml-3 px-1 text-blue-dark border border-blue-dark rounded-xl"
                        style="background-color: #ffffff">
                        {{ i }}
                    </button>
                </div>
                <button class="w-9 h-9 ml-3 px-1 text-blue border border-blue rounded-xl" style="background-color: #ffffff">
                    5
                </button>
            </span>
            <button class="w-fill h-10 px-3 mt-3 text-white rounded-xl" style="background-color: #599bff">
                Submit
            </button>
        </div>

        <div class="mt-3">
            <h3>
                Rating: <span class="font-bold">{{ calculateAverageRating(reviews) }}/5</span>
            </h3>
            <div class="my-3" v-for="(review, index) in reviews" :key="index">
                <div class="flex flex-row mb-3">
                    <img :src="review.avatar" class="w-10 h-10 rounded-full mr-3" alt="" />
                    <p class="font-bold my-auto">{{ review.author }}</p>
                </div>
                <p class="text-blue-darkest">Score: {{ review.score }}</p>
                <p class="text-blue-darkest">{{ review.comment }}</p>
                <hr v-if="index != reviews.length - 1" class="mt-2 text-gray-light" />
            </div>
        </div>
    </div>
</template>
<script setup>
function calculateAverageRating(reviews) {
    let averageRating = 0
    for (let review of reviews) {
        averageRating += review.score
    }
    return averageRating = Math.round((averageRating / reviews.length) * 10) / 10
}

</script>
<script>
export default {
    props: ['reviews']

}
</script>

<style></style>