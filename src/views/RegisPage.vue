<script>
import RegisForm from '../components/RegisForm.vue';

export default {
    components: {
        RegisForm
    }
}
</script>
<template>
    <section class="signup-section">
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Registration now!</h1>
                    <p class="py-6">
                        The form before me, blank and pure, A canvas waiting for me
                        to ensure, My details are correct, my heart secure, To
                        create an account, my thoughts mature.
                    </p>
                    <RouterLink to="/"><button class="btn btn-primary">Home Page</button></RouterLink>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <RegisForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>