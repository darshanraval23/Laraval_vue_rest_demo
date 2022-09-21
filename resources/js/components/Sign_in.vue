<template>
<!-- Login Form -->
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="card shadow">
                <div class="card-title text-center border-bottom">
                    <h2 class="p-3">Login</h2>
                </div>
                <div class="card-body">
                    <div class="alert alert-dark" role="alert" v-if="error">
                        {{error}}
                    </div>
                    <form>
                        <div class="mb-4">
                            <label for="username" class="form-label">Username/Email</label>
                            <input type="text" class="form-control" id="username" v-model="email" />
                        </div>
                        <div class="mb-4">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password" />
                        </div>
                        <div class="mb-4">
                            <input type="checkbox" class="form-check-input" id="remember" />
                            <label for="remember" class="form-label">Remember Me</label>
                        </div>
                        <div class="d-grid">
                            <!-- <button type="submit" class="btn text-light main-bg">Login</button> -->
                            <button type="button" class="btn btn-danger" v-on:click="login()">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'sgin_in',
    data() {
        return {
            email: null,
            password: null,
            error: null,
        }
    },
    methods: {
        login() {
            if (this.email == '' || this.password == '') {
                this.error = 'not valid';
            } else {
                const options = {
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded ',
                        'email': this.email,
                        'password': this.password,
                    }
                };
            // console.warn(options);
                // let resualt = axios.post('http://127.0.0.1:8000/api/user/login', options);
                // this.error = resualt;
            }
            // console.warn(this.email);
            // console.warn(this.error);
        }
    }

}
</script>

<style scoped>
:root {
    --main-bg: #e91e63;
}

.main-bg {
    background: var(--main-bg) !important;
}

input:focus,
button:focus {
    border: 1px solid var(--main-bg) !important;
    box-shadow: none !important;
}

.form-check-input:checked {
    background-color: var(--main-bg) !important;
    border-color: var(--main-bg) !important;
}

.card,
.btn,
input {
    border-radius: 0 !important;
}
</style>
