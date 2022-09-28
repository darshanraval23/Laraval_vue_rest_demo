<template>
<!-- user Registration Form -->
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="card shadow">
                <div class="card-title text-center border-bottom">
                    <h2 class="p-3">Registration</h2>
                </div>
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
                <div class="card-body">
                    <form @submit.prevent="onSubmit">
                        <div class="mb-4">
                            <label for="firstname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstname" v-model="first_name" />
                            <span v-if="error.first_name    ">{{error.first_name[0]}}</span>
                        </div>
                        <div class="mb-4">
                            <label for="lastname" class="form-label">Last Name</label>
                            <input type="text" name="lastname" class="form-control" id="lastname" v-model="last_name" />
                            <span v-if="error.last_name">{{error.last_name[0]}}</span>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" v-model="email" />
                            <span v-if="error.email">{{error.email[0]}}</span>
                        </div>
                        <label for="" class="form-label">Selact Gender</label>
                        <div class="mb-4">
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="male" value="male" v-model="gender">
                                <label for="male" class="form-check-label">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="female" value="female" v-model="gender">
                                <label for="female" class="form-check-label">Female</label>
                            </div>
                            <span v-if="error.gender">{{error.gender[0]}}</span>
                        </div>
                        <div class="mb-4 form-group">
                            <label for="">Selact role</label>
                            <select v-model="role_as" class="form-control">
                                <option selected value="">select role</option>
                                <option value="1">Admin</option>
                                <option value="2">User</option>
                                <option value="3">Hr</option>
                                <option value="4">Inten</option>
                            </select>
                            <span v-if="error.role_as">{{error.role_as[0]}}</span>
                        </div>

                        <div class="mb-4">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password" />
                            <span v-if="error.password">{{error.password[0]}}</span>
                        </div>
                        <div class="mb-4">
                            <label for="cpassword" class="form-label">Conform Password</label>
                            <input type="password" class="form-control" id="cpassword" v-model="cpassword" />
                            <span v-if="error.cpassword">{{error.cpassword[0]}}</span>
                        </div>
                        <div class="d-grid">
                            <!-- <button type="submit" class="btn text-light main-bg">Registration</button> -->
                            <button class="btn btn-danger" v-bind="clear">Registration</button>
                        </div>
                    </form>
                </div>
            </div>
            <notifications />
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ragistration',
    data() {
        return {
            first_name: null,
            last_name: null,
            email: null,
            gender: null,
            role_as: [],
            password: null,
            cpassword: null,
            error: Object,
            resualt: null,
        }
    },
    methods: {
        onSubmit() {
            // if (this.first_name != null && this.last_name != null && this.email != null && this.gender != null && this.role_as != null && this.password != null) {
                const options = {
                    'first_name': this.first_name,
                    'last_name': this.last_name,
                    'email': this.email,
                    'gender': this.gender,
                    'role_as': this.role_as,
                    'password': this.password,
                    'cpassword': this.cpassword,
                };
                let resualt = axios.post('http://localhost:8000/api/user/ragister', options)
                    .then(resp => {
                        console.log(resp);
                        this.$notify({
                                type: "success",
                                title: "Important message",
                                text: resp.data.message,
                            });
                    })
                    .catch(e => {
                        console.log(e);
                        this.error = e.response.data
                    });
            // } else {
            //      this.$notify({
            //                     type: "wrong",
            //                     title: "Important message",
            //                     text: "form not valid",
            //                 });
            //     this.error.push('form not valid');
            // }
        },
    }
}
</script>
<style scoped>
    span {
        color: red;
    }
</style>
