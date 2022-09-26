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
                    <notifications position="bottom right" />
                    <div class="alert alert-dark" role="alert" v-if="error">
                        <pre>
                        {{error}}
                        </pre>
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
// import { notify } from "@kyvg/vue3-notification";
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
            if (this.email == 465 || this.password == 54) {
                console.warn('not valid');
                this.$notify({
                    type: "wrong",
                    title: "Important message",
                    text: "login details are not valid",
                });

            } else {
                const options = {
                    'email': this.email,
                    'password': this.password,
                };
                let resualt = axios.post('http://localhost:8000/api/user/login', options)
                    .then(resp => {
                        // this.error = resualt
                        console.log(resp);
                        if (resp.data.status == 404) {
                            console.warn(resp)
                            this.$notify({
                                type: "error",
                                title: "Important message",
                                text: resp.data.message
                            });

                        } else if (resp.data.status == 200) {
                            this.$notify({
                                type: "success",
                                title: "Important message",
                                text: "login sucsees",
                                
                            });
                            console.log('login');
                            sessionStorage.setItem("token", resp.data.token);
                            //  setTimeout(() => {
                               window.location = "http://localhost:8000/";
                            // }, 3000);
                        }
                    })
                    .catch(error=> {
                        console.log(error);
                        if (errors.response.status === 401) {
                            // localStorage.removeItem('token')
                            // this.$router.push({ name: 'Login'})
                        }
                    });
            }
        }
    },
    mounted() {
        // this.token = sessionStorage.getItem('token')
        //  window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
    },

}
</script>

<style scoped>
/* :root {
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
} */
</style>
