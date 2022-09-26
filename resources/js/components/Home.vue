<template>
<h1>List of employees</h1>
<table class="table">
  <thead>
    <tr>
      <td>Emmployee id</td>
      <td>Name</td>
      <td>Email</td>
      <td>gender</td>
      <td>role_as</td>
      <td>salary</td>
    </tr>
  </thead>
  <!-- {{employees}} -->
  
  <tbody v-for="item in employees" :key="item.id">
    <tr>
      <td>{{item.id}}</td>
      <td>{{item.first_name+' '+item.last_name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.gender}}</td> 
      <td>{{item.role_as}}</td>
      <td v-if="item.salary != null" >{{item.salary}}</td>
      <td v-else>not set</td>
      <!-- <td><button>Edits</button></td> -->
    </tr>
  </tbody>

</table>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            employees: {},
        };
    },
    methods: {
        async getlist() {
          let resualt = await axios.get("http://localhost:8000/api/viewusers");
            this.employees = resualt.data.data;
            // console.warn(resualt);
        },
    },
    created() {
      const router = useRouter();
      if(!sessionStorage.getItem('token')){
        router.push('/signin');
      }
      this.getlist();
    }
}
</script>