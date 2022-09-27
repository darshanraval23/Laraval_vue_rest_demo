<template>
<h1>List of paid salary employees</h1>
<router-view></router-view>
<notifications position="bottom right"/>
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
      <td>paybal salary </td>
      <td>paybale date</td>
      <td colspan="2" style="text-align: center">action</td>
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
      <td>{{item.emp_paybal_salary}}</td>
      <td>{{item.created_on}}</td>
      <td><router-link :to="{ name: 'edit_salary', params: { id:item.id } }" class="btn">Edit</router-link></td>
      <td><button  @click="delate_salary(item.user_id,item.created_on)" class="btn">Delate</button></td>

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
            // console.warn(resualt);
        },
       delate_salary(id,date){
        const api_hedder = {
            'employees_id' : id,
            'created_on': date
        };
        // console.log(api_hedder);
        const router = useRouter();
            let resualt = axios.post('http://127.0.0.1:8000/api/user/delatesalary/', api_hedder)
                .then(resp => {
                    if(resp.data.status == 404) {
                        this.$notify({
                            type: "error",
                            title: "Important message",
                            text: resp.data.message,
                        });
                    } else if (resp.data.status == 200) {
                        this.$notify({
                            type: "success",
                            title: "Important message",
                            text: resp.data.message,

                        });
                        this.getlist();
                        // window.location.reload()
                        // this.router.go()
                    }
                }); 
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