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
                    <!-- form error message -->
                    <div class="alert alert-danger" v-if="Object.keys(error).length">
                        <p class="mb-0"><strong>Whoops!</strong> Something went wrong!</p>
                        <br>
                        <!-- <ul> -->
                        <ul v-for="(v, k) in error" :key="k">
                            <li v-for="(v, k) in v" :key="k">
                                {{v}}
                            </li>
                        </ul>
                        <!-- </ul> -->
                    </div>

                    <form>
                        <div class="mb-4">
                            <label for="username" class="form-label">Email</label>
                            <input type="text" class="form-control" id="username" v-model="email" />
                            <span v-if="error.email">{{error.email[0]}}</span>
                        </div>
                        <div class="mb-4">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password" />
                            <span v-if="error.password">{{error.password[0]}}</span>

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
            error: Object,
            token: null,
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
                let resualt = axios.post('/api/user/login', options)
                    .then(resp => {
                        this.$notify({
                            type: "SUCCESS",
                            title: "Important message",
                            text: resp.data.message
                        });
                        // console.log('login');
                        sessionStorage.setItem("token", resp.data.token);
                        // this.$router.go('/')
                        this.token = sessionStorage.getItem('token')
                        this.$router.push({
                            path: '/',
                            replace: true
                        })
                    }).catch(e => {
                        this.error = e.response.data
                        // console.log(e);
                    });
            }
        }
    },

}
</script>
