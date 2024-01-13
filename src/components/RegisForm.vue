<script>
import { mapActions, mapState } from 'pinia';
import { useRegisStore } from '../stores/gettingIn'
export default {
    name: 'RegisForm',
    data() {
        return {
            dataSignup: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useRegisStore, ['submitregis'])
    }
}
</script>
<template>
    <form>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" v-model="this.dataSignup.email" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" class="input input-bordered" v-model="this.dataSignup.password" />
        </div>
        <div class="form-control mt-6">
            <button class="btn btn-primary" @click.prevent="submitregis(this.dataSignup)">Sign Up</button>
        </div>
    </form>
</template>