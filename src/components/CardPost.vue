<script>
import { usePostDetailStore, useAddFavoriteStore, useRenderFavAstore, useDeleteFavoriteStore, useRenderCatStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
export default {
    name: 'CardPost',
    props: ['postsPig'],
    computed: {
        ...mapState(usePostDetailStore, ['detailPost', 'statusDetail', 'selectedid']),
        ...mapState(useAddFavoriteStore, ['statusLoved', 'statusLovedId']),
        ...mapState(useRenderFavAstore, ['statusPagelove'])
    },
    methods: {
        ...mapActions(usePostDetailStore, ['renderDetail', 'hideDetail', 'renderDetail2']),
        ...mapActions(useAddFavoriteStore, ['addFavorite']),
        ...mapActions(useDeleteFavoriteStore, ['deleteFav']),
        ...mapActions(useRenderCatStore, ['renderCat']),
    },
    created() {
        // this.renderPost()
        this.renderCat()

    }
}
</script>
<template>
    <div class="grid absolut grid-cols-2 gap-5">
        <div class="card card-compact w-96 bg-base-200 shadow-xl mx-auto" v-for="(dp, index) in  postsPig " :key="dp.id">
            <figure class="overflow-hidden" v-if="dp.imgUrl">
                <img :src="dp.imgUrl" alt="image" />
            </figure>
            <div v-else class="text-center">
                Image is not available.
            </div>
            <div class="card-body">
                <h2 class="card-title">{{ dp.title }}!</h2>
                <p>{{ dp.content }}</p>
                <div class="card-actions justify-end" v-if="statusDetail === false">
                    <div class="container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 hover:stroke-pink-500 hover:fill-pink-500"
                            @click.prevent="addFavorite(dp.id)">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <div>
                        <button class="btn btn-primary" @click.prevent="renderDetail2(dp.id)">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>