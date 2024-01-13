<style scoped>
/* Add any additional styles or adjustments here */
.carousel {
    /* Adjust the height of the carousel container */
    height: 300px;
    /* background-color: red; */
    /* Additional styling as needed */
}

.carousel-item {
    /* Adjust the spacing between items */
    margin-right: 10px;
}

/* Add any other styles based on your design needs */
</style>
<script>
import Swiper from 'swiper';
import { usePostStore, usePostCarousellStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
export default {
    name: 'CarousellPage',
    computed: {
        ...mapState(usePostStore, ['posts']),
        ...mapState(usePostCarousellStore, ['postCaros'])
    },
    methods: {
        ...mapActions(usePostStore, ['renderPost']),
        ...mapActions(usePostCarousellStore, ['renderPignation'])

    },
    created() {
        this.renderPost()
        this.renderPignation()
    }

}
</script>
<template>
    <div class="relative flex items-center justify-center">
        <div class="container p-9">
            <div class="w-full carousel rounded-box overflow-hidden">
                <div class="carousel-item" v-for="(dp, index) in posts" :key="dp.id">
                    <div class="w-full h-72 flex items-center justify-center">
                        <img :src="dp.imgUrl" alt="Art" class="max-w-full max-h-full rounded" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>