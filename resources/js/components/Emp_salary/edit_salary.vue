<template>
<div class="container">
    <div class="align-items-center">
         <notifications position="bottom right" />
        <form class="requires-validation" novalidate>
            <div class="col-md-6 mt-2">
                <label for="">employee leave</label>
                <input class="form-control" type="text" name="emp_leave" placeholder="employee totale leave" v-model="formdata.total_leaves_of_emp" />
                <!-- <input class="form-control" type="text" name="emp_id" v-bind="employeeid" hidden> -->
            </div>
            <div class="col-md-6 mt-2">
                <label for="">calculated_salary</label>
                <input class="form-control" type="text" name="calculated_salary" placeholder="calculated_salary" v-model="formdata.calculated_salary" />
            </div>
            <div class="col-md-6 mt-2">
                <label for="">total_holiday</label>
                <input class="form-control" type="text" name="total_holiday" placeholder="total_holiday" v-model="formdata.total_holiday" />
            </div>
            <div class="col-md-6 mt-2">
                <label for="">working_day</label>
                <input class="form-control" type="text" name="working_day" placeholder="working_day" v-model="formdata.working_day" />
            </div>
            <div class="col-md-6 mt-2">
                <label for="">emp_bonus</label>
                <input class="form-control" type="text" name="emp_bonus" placeholder="emp_bonus" v-model="formdata.emp_bonus" />
            </div>
            <div class="col-md-6 mt-2">
                <label for="">emp_paybal_salary</label>
                <input class="form-control" type="text" name="emp_paybal_salary" placeholder="emp_paybal_salary" v-model="formdata.emp_paybal_salary" />
            </div>
            <div class="form-button mt-3">
                <button type="button" @click="updated_emp_salary" class="btn btn-primary">
                    pay salary
                </button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import {
    useRouter,
    useRoute
} from 'vue-router';
export default {
    name: 'edit_salary',
    props: {
        id: String,
    },
    data() {
        return {
            formdata: null,
        }
    },
    methods: {
        async getlist() {
            let resualt = await axios.get('http://127.0.0.1:8000/api/user/viewsalary/' + this.$route.params.id)
                .then(resp => {
                    this.formdata = resp.data;
                });
            // console.warn(resualt);
        },
        updated_emp_salary() {
            // console.log(this.formdata);
            let resualt = axios.put('http://127.0.0.1:8000/api/user/updatesalary/' + this.$route.params.id, this.formdata)
                .then(resp => {
                    if(resp.data.status == 404) {
                        this.$notify({
                            type: "error",
                            title: "Important message",
                            text: resp.data.message,
                        });

                    } else if (resp.data.status == 200) {
                        // console.warn(resp.data.message);
                        this.$notify({
                            type: "success",
                            title: "Important message",
                            text: resp.data.message,

                        });
                    }
                });
        }
    },
    created() {
        // this.empid = this.$route.params.id
        const router = useRouter();
        const route = useRoute();
        if (!sessionStorage.getItem('token')) {
            router.push('/signin');
        }
        this.getlist()
    }
}
</script>
