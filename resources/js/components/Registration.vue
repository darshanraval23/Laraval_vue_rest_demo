<template>
<!-- user Registration Form -->
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="card shadow">
                <div class="card-title text-center border-bottom">
                    <h2 class="p-3">Registration</h2>
                </div>
                <div class="alert alert-dark" role="alert" v-if="error.length > 0">
                        {{error}}
                </div>
                <!-- {{first_name}}
                {{last_name}}
                {{email}}
                {{gender}}
                {{role_as}}
                {{password}}
                {{cpassword}} -->
                <div class="card-body">
                    <form @submit.prevent="onSubmit">
                        <div class="mb-4">
                            <label for="firstname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstname" v-model="first_name" />
                        </div>
                        <div class="mb-4">
                            <label for="lastname" class="form-label">Last Name</label>
                            <input type="text" name="lastname" class="form-control" id="lastname" v-model="last_name" />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" v-model="email" />
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
                        </div>
                        <div class="mb-4 form-group">
                            <label for="" >Selact role</label>
                            <select v-model="role_as" class="form-control">
                                <option selected value="">select role</option>
                                <option value="1">Admin</option>
                                <option value="2">User</option>
                                <option value="3">Hr</option>
                                <option value="4">Inten</option>
                            </select>
                        </div>
                        
                        <div class="mb-4">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password" />
                        </div>
                        <div class="mb-4">
                            <label for="cpassword" class="form-label">Conform Password</label>
                            <input type="password" class="form-control" id="cpassword" v-model="cpassword" />
                        </div>
                        <div class="d-grid">
                            <!-- <button type="submit" class="btn text-light main-bg">Registration</button> -->
                            <button  class="btn btn-danger" v-bind="clear">Registration</button>
                        </div>
                    </form>
                </div>
            </div>
            <pre v-if="resualt">
                  <!-- {{resualt.data.tokan}} -->
                  {{resualt}}
                </pre>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
// import { Form, Field, ErrorMessage } from 'vee-validate';
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
            error: [],
            resualt: null,
        }
    },
    methods:{
      onSubmit(){
          if(this.first_name != null && this.last_name != null&& this.email != null&&this.gender != null&&this.role_as != null&&this.password != null){

            const options = {
                        'first_name':this.first_name,
                        'last_name':this.last_name,
                        'email': this.email,
                        'gender':this.gender,
                        'role_as':this.role_as,
                        'password': this.password,
                        'cpassword': this.cpassword,
                };
             let resualt = axios.post('http://localhost:8000/api/user/ragister', options)
               .then(resp => {
                if(resp.data.tokan){
                  sessionStorage.setItem("token", resp.data.tokan);
                }else if(resp.data.massage){
                    this.error.push(resp.data.massage)
                }
                
                  this.resualt = resp;
                    this.error.push(resp.data.massage)
            })
            .catch(() => {
                    console.warn('Some error occurred. Please try again!')
                    this.error.push('Some error occurred. Please try again!');
                    this.resualt = resp;
            });

          }else {
            this.error.push('form not valid');
          }                             

      },
      
      
    }
   
   
}
</script>
