<script>
import { mapActions, mapState } from 'pinia';
import { useLoginStore } from '../stores/gettingIn'
export default {
  name: 'loginForm',
  data() {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useLoginStore, ['submitLogin', 'callback']),

  }

}

</script>
<template>
  <section>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" name="email"
              v-model="this.dataLogin.email" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" class="input input-bordered" name="password"
              v-model="this.dataLogin.password" />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" @click.prevent="submitLogin(this.dataLogin)">Login</button>
          </div>
          <div class="form-control mt-6">
            <GoogleLogin :callback="callback" prompt />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<style scoped></style>