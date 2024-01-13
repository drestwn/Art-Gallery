<script>
import { mapActions, mapState } from 'pinia';
import { usePostDetailStore } from '../stores/counter'

export default {
    name: 'DetailPage',
    methods: {
        ...mapActions(usePostDetailStore, ['renderDetail', 'renderDetail2', 'backtoHome'])
    },
    computed: {
        ...mapState(usePostDetailStore, ['detailPost', 'detailQr'])
    }
}
</script>
<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">P00ST</a>
        </div>
        <div class="flex-none">
        </div>
    </div>

    <div class="container py-1 ">
        <div class="grid grid-cols-1 gap-1">
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <div class="">
                        <img :src="detailPost.imgUrl" alt="image" />
                    </div>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ detailPost.title }}</h2>
                    <p>{{ detailPost.content }}</p>
                    <div v-html="detailQr">
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" @click.prevent="backtoHome">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
div>svg {
    height: 120px;
    width: 120px;
}
</style>