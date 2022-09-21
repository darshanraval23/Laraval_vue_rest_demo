import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Signin from "./components/sign_in.vue"
import Registration from "./components/Registration.vue"
//emp salary componts
import index from "./components/Emp_salary/index.vue"
import add_salary from "./components/Emp_salary/add_salary.vue"
import edit_salary from "./components/Emp_salary/edit_salary.vue"

const routes = [
  //home routs
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  //user auth routs
  {
    path: "/Employee",
    // name: "Employee.add_salary",
    component: index,
    // props: true
  },
  { 
    path: "/Employee/add_salary",
    // name: "Employee.add_salary",
    component: add_salary,
    // props: true
  },
  {
    path: "/Employee/edit_salary",
    // name: "edit_salary",
    component: edit_salary,
    // props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;