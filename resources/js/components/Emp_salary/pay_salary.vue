<template>
<div class="container">
    <h1>paid employee salary </h1>
    <notifications position="bottom right"/>
    <div class=" align-items-center ">
        <!-- form error message -->
            <div class="alert alert-danger" v-if="Object.keys(error).length">

                            <p class="mb-0"><strong>Whoops!</strong> Something went wrong!</p>
                            <br>
                            <ul>
                                <li v-for="(v, k) in error" :key="k" >
                                    {{v[0]}}
                                </li>
                            </ul>
                        </div>
        <!-- {{error}} -->
        <form class="requires-validation" novalidate>
            <div class="col-md-6 mt-2">
                <label for="">employee leave</label>
                <input class="form-control" type="text" name="emp_leave" placeholder="employee totale leave" v-model="total_leaves_of_emp">
                <input class="form-control" type="text" name="emp_id" v-model="id" hidden>
                <span v-if="error.total_leaves_of_emp">{{error.total_leaves_of_emp[0]}}</span>
            </div>
            <div class="col-md-6 mt-2">
                <label for="">calculated_salary</label>
                <input class="form-control" type="text" name="calculated_salary" placeholder="calculated_salary" v-model="calculated_salary">
                <span v-if="error.calculated_salary">{{error.calculated_salary[0]}}</span>
            </div>
            <div class="col-md-6 mt-2">
                <label for="">total_holiday</label>
                <input class="form-control" type="text" name="total_holiday" placeholder="total_holiday" v-model="total_holiday">
                <span v-if="error.total_holiday">{{error.total_holiday[0]}}</span>
            </div>
            <div class="col-md-6 mt-2">
                <label for="">working_day</label>
                <input class="form-control" type="text" name="working_day" placeholder="working_day" v-model="working_day" >
                <span v-if="error.working_day">{{error.working_day[0]}}</span>
            </div>
            <div class="col-md-6 mt-2">
                <label for="">emp_bonus</label>
                <input class="form-control" type="text" name="emp_bonus" placeholder="emp_bonus" v-model="emp_bonus">
                <span v-if="error.emp_bonus">{{error.emp_bonus[0]}}</span>
            </div>
            <div class="col-md-6 mt-2">
                <label for="">emp_paybal_salary</label>
                <input class="form-control" type="text" name="emp_paybal_salary" placeholder="emp_paybal_salary" v-model="emp_paybal_salary">
                <span v-if="error.emp_paybal_salary">{{error.emp_paybal_salary[0]}}</span>
            </div>
            <div class="form-button mt-3">
                <button type="button" @click="pay_salary" class="btn btn-primary">pay salary</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {
    useRouter,
    useRoute
} from 'vue-router';
export default {
    name: 'pay_salary',
    data() {    
        return {
            error:[ ],
            employeeid: this.id,
            total_leaves_of_emp: null,
            calculated_salary: null,
            total_holiday: null,
            working_day: null,
            emp_bonus: null,
            emp_paybal_salary: null
        };
    },
    props: {
        id: String
    },
    methods: {
        pay_salary() {
            const recode = {
                "user_id": this.id,
                "total_leaves_of_emp": this.total_leaves_of_emp,
                "calculated_salary": this.calculated_salary,
                "total_holiday": this.total_holiday,
                "working_day": this.working_day,
                "emp_bonus": this.emp_bonus,
                "emp_paybal_salary": this.emp_paybal_salary
            }
           const router = useRouter();
            let resualt = axios.post('http://127.0.0.1:8000/api/user/pay_salary', recode)
                .then(resp => {
                    if(resp.data.status == 404) {
                        this.error = resp.data.message
                        console.log(this.error);
                    } else if (resp.data.status == 200) {
                        this.$notify({
                            type: "success",
                            title: "Important message",
                            text: resp.data.message,
                        });

                    this.$router.push("/Employee");
                    }
                        //  router.push('/Employee');
                }); 
        }
    },
    created() {
        // console.log(this.employeeid);
        const router = useRouter();
        const route = useRoute();
        if (!sessionStorage.getItem('token')) {
            router.push('/signin');
        }
    }

}
</script>
<style  scoped>
span {
    color: red;
}

</style>
    
