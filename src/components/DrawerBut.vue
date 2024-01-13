<script>
import { usePostStore, useRenderCatStore, usePostPignationStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import CarousellPage from './CarousellPage.vue';
import CardPost from './CardPost.vue';

export default {
  name: 'DrawerBut',
  computed: {
    ...mapState(usePostStore, ['posts']),
    ...mapState(useRenderCatStore, ['dataCat']),
    ...mapState(usePostPignationStore, ['postsPig', 'totalPage']),
  },
  methods: {

    ...mapActions(usePostPignationStore, ['renderPignation']),
  },
  created() {
    this.renderPignation()
  },
  components: {
    CarousellPage,
    CardPost
  }

}
</script>
<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <CarousellPage />
      <div class="container mx-auto">
        <div class="container max-height: 20px">
          <div class="place-content-evenly justify-content evently">
            <div class="container p-7">
              <div class="container p-9 absolut">
                <div class="container">
                  <div class="grid grid-cols-6 gap-1">
                    <div v-for="(item, index) in items" :key="index">
                    </div>
                    <div class="dropdown dropdown-right">
                      <label tabindex="0" class="btn m-1">filter</label>
                      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a @click.prevent="renderPignation()">AllPost</a></li>
                        <li v-for="(ct) in dataCat" :key="ct.id">
                          <a @click.prevent="renderPignation(1, ct.id)">{{ ct.name }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <CardPost :postsPig="postsPig" />
              </div>
              <div class="btn-group container p-5">
                <button class="btn btn-sm" v-for="( tp, index ) in totalPage" :key="tp.id"
                  @click.prevent="renderPignation(tp)">{{ tp }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" drawer-side">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <RouterLink to="/fav">
          <li>
            <button class="btn btn-sm">FAVORITE</button>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
