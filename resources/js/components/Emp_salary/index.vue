<template>
<h1>List of paid salary employees</h1>
<router-view></router-view>
<table class="table">
  <thead>
    <tr>
      <td>No.</td>
      <td>Emmployee id</td>
      <td>Name</td>
      <td>Email</td>
      <td>working_day</td>
      <td>total_holiday</td>
      <td>total_leaves_of_emp</td>
      <td>calculated_salary</td>
      <td>emp_bonus</td>
      <td>paybale date</td>
      <td>action</td>
    </tr>
  </thead>
  <!-- {{employees}} -->
  
  <tbody v-for="item in employees" :key="item.id">
    <tr>
      <td>{{item.id}}</td>
      <td>{{item.user_id}}</td>
      <td>{{item.first_name+' '+item.last_name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.working_day}}</td>
      <td>{{item.total_holiday}}</td>
      <td>{{item.total_leaves_of_emp}}</td>
      <td>{{item.calculated_salary}}</td>
      <td>{{item.emp_bonus}}</td>
      <td>{{item.created_on}}</td>
      <!-- <td><router-link :to="{ name: 'ProductEdit', v-bind:id=item.id }" class="btn">Edit</router-link></td> -->
      <!-- <td><button class="btn btn-success" :to="/" @click="edit_salary">Edit</button></td> -->
      <!-- <td><button>Edits</button></td> -->
    </tr>   
  </tbody>

</table>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
    // props: [employeesid],
    data() {
        return {
            employees: {},
            // id: null
        };
    },
    methods: {
        async getlist() {
            let resualt = await axios.get("http://127.0.0.1:8000/api/user/employsalary");
            this.employees = resualt.data;
            console.warn(resualt);
        },
        edit_salary(){
            console.log(this.id);
        }
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