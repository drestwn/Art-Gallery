<script>
import NavBar from '../components/NavBar.vue';
import { RouterLink, RouterView } from 'vue-router'
import { usePostPignationStore, usePostStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
import DrawerBut from '../components/DrawerBut.vue';
import CardPost from '../components/CardPost.vue';

export default {
    name: 'HomePage',
    components: {
        NavBar,
        DrawerBut,
        CardPost
    },
    computed: {

    },
    methods: {
        ...mapActions(usePostStore, ['renderPost']),
    },
    created() {
        this.renderPost()
    }
}
</script>
<template>
    <NavBar />
    <DrawerBut />
    <br />
</template>