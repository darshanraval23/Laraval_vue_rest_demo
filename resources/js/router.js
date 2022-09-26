import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Signin from "./components/Sign_in.vue"
import Registration from "./components/Registration.vue"
//emp salary componts
import index from "./components/Emp_salary/index.vue"
import pay_salary from "./components/Emp_salary/pay_salary.vue"
import edit_salary from "./components/Emp_salary/edit_salary.vue"

//child components
import child from "./components/child.vue"

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
    props: true,
    meta: {
      requiresAuth: true
    },
    children:[
      {
      path: "child",
      component: child,
      },
    ],
  },
  { 
    path: "/Employee/pay_salary",
    // name: "Employee.add_salary",
    component: pay_salary,
    // props: true
  },
  {
    path: "/Employee/edit_salary",
    // name: "edit_salary",
    component: edit_salary,
    props: true
  }
];

// router.beforeEach((to, from, next) => {
//   const authUser = store.getters["auth/authUser"];
//   const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

//   if (reqAuth && !authUser) {
//     store.dispatch("auth/getAuthUser").then(() => {
//       if (!store.getters["auth/authUser"]) {
//         next(loginQuery);
//       } else {
//         next();
//       }
//     });
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;