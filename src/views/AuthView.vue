<template>
    <div class="card shadow">
        <div class="card-header bg-white">
            <h2 class="card-title">
                Login
            </h2>
        </div>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input v-model="credentials.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="credentials.password" type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { IAuthCredentials } from "../interfaces/auth";


const credentials = reactive<IAuthCredentials>({
    email: '',
    password: ''
})

</script>

<style scoped></style>