<template>
<div class="container">
    <h1>paid employee salary </h1>
    <div class=" align-items-center ">
    <form class="requires-validation" novalidate>
        <div class="col-md-6 mt-2">
            <label for="">employee leave</label>
            <input class="form-control" type="text" name="emp_leave" placeholder="employee totale leave" required>
            <input class="form-control" type="text" name="emp_id" v-bind="employeeid" hidden>
        </div>
        <div class="col-md-6 mt-2">
            <label for="">calculated_salary</label>
            <input class="form-control" type="text" name="calculated_salary" placeholder="calculated_salary" required>
        </div>
        <div class="col-md-6 mt-2">
            <label for="">total_holiday</label>
            <input class="form-control" type="text" name="total_holiday" placeholder="total_holiday" required>
        </div>
        <div class="col-md-6 mt-2">
            <label for="">working_day</label>
            <input class="form-control" type="text" name="working_day" placeholder="working_day" required>
        </div>
        <div class="col-md-6 mt-2">
            <label for="">emp_bonus</label>
            <input class="form-control" type="text" name="emp_bonus" placeholder="emp_bonus" required>
        </div>
        <div class="col-md-6 mt-2">
            <label for="">emp_paybal_salary</label>
            <input class="form-control" type="text" name="emp_paybal_salary" placeholder="emp_paybal_salary" required>
        </div>
        <div class="form-button mt-3">
            <button id="submit" type="submit" class="btn btn-primary">pay salary</button>
        </div>
    </form>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import { useRouter } from 'vue-router'
export default {
    data(){
        return {
            employeeid: null,
            total_leaves_of_emp: null,
	        calculated_salary : null,
	        total_holiday : null,
	        working_day: null,
	        emp_bonus : null,	
	        emp_paybal_salary: null
        };
    },
    created() {
      const router = useRouter();
      if(!sessionStorage.getItem('token')){
        router.push('/signin');
        }
    }
    
}
</script>
