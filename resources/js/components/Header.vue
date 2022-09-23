<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="/">Home</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="Employee" class="nav-link" aria-current="page">Employe salary</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Employee/add_salary" class="nav-link">Add Employe salary</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Employee/edit_salary" class="nav-link">Edit Employe salary</router-link>
                </li>              
                <li class="nav-item" v-if="!token">
                    <router-link to="/signin" class="nav-link">Sign in</router-link>
                </li>
                <li class="nav-item" v-if="!token">
                    <router-link to="/registration" class="nav-link">Ragister</router-link>
                </li>
                <li class="nav-item">
                    <a @click="emplogout" v-if="token" class="nav-link">loge out</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import axios from 'axios'
export default {
    name: "Header_componets",
    data() {
      return {
        token : sessionStorage.getItem('token')
      }
    },
    methods: {
        emplogout() {
            let resualt = axios.post('http://localhost:8000/api/user/logout')
                .then(resp => {
                    if (resp.data.status == '200') {
                        this.$notify({
                            type: "success",
                            title: "Important message",
                            text: resp.data.message
                        });
                        sessionStorage.removeItem('token')
                        this.token = null;  
                        setTimeout(() => {
                            window.location= 'http://localhost:8000/signin'
                        }, 3000);

                    } else if (resp.data.status == '404') {
                        this.$notify({
                            type: "error",
                            title: "Important message",
                            text: resp.data.message
                        });
                    }
                })
        }
    },
    mounted() {
      console.log(this.token);
      axios.defaults.headers.common['Authorization'] = 'Bearer '+this.token;
    },

};
</script>

<style scoped>
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
    background-color: #eb83a6;
    color: aliceblue;
}
</style>
