<script>
import { RouterLink } from "vue-router";
import loginForm from "../components/LoginForm.vue"

export default {
  components: {
    loginForm,
    RouterLink
  }
}
</script>
<template>
  <section class="login-section">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            I approach the screen, my fingers poised to type, My
            username and password ready, it's ripe, The cursor blinks,
            inviting me to start, To enter my credentials and play my
            part.
          </p>
          <RouterLink to="/"><button class="btn btn-primary">Home Page</button></RouterLink>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <loginForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>