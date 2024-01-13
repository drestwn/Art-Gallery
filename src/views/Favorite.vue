<script>
import { mapActions, mapState, mapStores } from 'pinia';
import { useRenderFavAstore } from '../stores/counter';
import NavBar from '../components/NavBar.vue'
import CardPost from '../components/CardPost.vue';

export default {
    name: 'FavPage',
    methods: {
        ...mapActions(useRenderFavAstore, ['renderFav']),
        ...mapActions(useRenderFavAstore, ['loveButton'])
    },
    computed: {
        ...mapState(useRenderFavAstore, ['postsPig']),
        loveButtonBack() {
            this.loveButton === false
        }

    },
    components: {
        NavBar,
        CardPost
    },
    created() {
        this.renderFav()
    }
}
</script>
<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div class="form-control">
            <label class="cursor-pointer label">
                <div class="container p-1">
                    <span class="label-text">Uncheck to go back </span>
                </div>
                <div>
                    <RouterLink to="/"><input type="checkbox" checked="checked" class="checkbox checkbox-error" />
                    </RouterLink>
                </div>
            </label>
        </div>
    </div>
    <div class="md:container md:mx-auto">
        <div>
            <CardPost :postsPig="postsPig" />
        </div>
    </div>
</template>