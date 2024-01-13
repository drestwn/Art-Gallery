<script>
import { mapActions, mapState } from 'pinia';
import DrawerBut from './DrawerBut.vue';
import { RouterLink, RouterView } from 'vue-router'
import { useLoginStore, useMainStore } from '../stores/gettingIn'


export default {
  name: 'NavBar',
  components: {
    DrawerBut
  },
  computed: {
    ...mapState(useLoginStore, ['isLoggedin', 'loginData']),

  },
  methods: {
    ...mapActions(useLoginStore, ['checkStatusLog', 'logoutHelp']),


  },
  created() {
    this.checkStatusLog()
  }
}
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Art Gallery</a>
    </div>
    <div class="flex-none">
      <ul v-if="isLoggedin === false" class="menu menu-horizontal px-1">
        <RouterLink to="/regisPage">
          <li><a>Sign Up</a></li>
        </RouterLink>
        <RouterLink to="/loginPage">
          <li><a>Login</a></li>
        </RouterLink>
      </ul>
      <div v-else="isLoggedin" class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="../assets/user.svg" width="90" class="d-inline-block me-2" alt="IDEA" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
          <h1>Welcome, {{ loginData.email }}</h1>
          <h1>{{ loginData.role }}</h1>
          <button class="btn btn-xs" @click.prevent="logoutHelp"><a>Logout</a></button>
        </ul>
      </div>
      <label for="my-drawer-4" class="drawer-button btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg></label>
    </div>
  </div>
</template>
<style scoped></style>