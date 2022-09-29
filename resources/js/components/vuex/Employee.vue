<template>
<h1>List of employees</h1>
<table class="table">
  <thead>
    <tr>
      <td>Emmployee id</td>
      <td>Name</td>
      <td>Email</td>
      <td>Gender</td>
      <td>Role as</td>
      <td>Salary</td>
      <td>Action</td>
    </tr>
  </thead>
        <!-- {{employeelist.users}} -->
  <tbody v-for="item in employeelist.users" :key="item.id">
    <tr>
      <td>{{item.id}}</td>
      <td>{{item.first_name+' '+item.last_name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.gender}}</td> 
      <td>{{item.role_as}}</td>
      <td v-if="item.salary != null" >{{item.salary}}</td>
      <td v-else>not set</td>
      <td><button class="btn-btn-Success">Delate</button></td>    
    </tr>
  </tbody>
</table>
</template>

<script>
import {
    mapGetters
} from "vuex";
export default {
    name: "VuexEmployees",
    methods: {
       
    },
    created() {
      //call action mathode 
      this.$store.dispatch("EmployeeModules/getemployee")
    },
    computed: mapGetters({
      //set property/varibale || get data frome globale file whith the help of mapgetter
        employeelist: "getemployees",
        name: "getname"

    }),
    mounted() {
        // console.log('ok');
        // console.log(EmployeeList);
    }
};
</script>
