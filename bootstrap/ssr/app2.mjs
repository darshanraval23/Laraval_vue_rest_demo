import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createApp } from "vue";
import axios from "axios";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { useRouter, useRoute, createRouter, createWebHistory } from "vue-router";
import { createStore, mapGetters } from "vuex";
import Notifications from "@kyvg/vue3-notification";
const Header_vue_vue_type_style_index_0_scoped_dcd2cb02_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {
  name: "Header_componets",
  data() {
    return {
      token: sessionStorage.getItem("token"),
      error: []
    };
  },
  methods: {
    emplogout() {
      axios.post("http://localhost:8000/api/user/logout").then((resp) => {
        if (resp.data.status == "200") {
          this.$notify({
            type: "success",
            title: "Important message",
            text: resp.data.message
          });
          sessionStorage.removeItem("token");
          this.token = null;
          this.$router.push("/signin");
        } else if (resp.data.status == "404") {
          this.$notify({
            type: "error",
            title: "Important message",
            text: resp.data.message
          });
          this.error = resp.data.message;
        }
      });
    }
  },
  mounted() {
    console.warn(this.token);
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg navbar-light bg-light" }, _attrs))} data-v-dcd2cb02><div class="container-fluid" data-v-dcd2cb02>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "navbar-brand",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-dcd2cb02><span class="navbar-toggler-icon" data-v-dcd2cb02></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-dcd2cb02><ul class="navbar-nav" data-v-dcd2cb02><li class="nav-item" data-v-dcd2cb02>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/Employee",
    class: "nav-link",
    "aria-current": "page"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Employe salary`);
      } else {
        return [
          createTextVNode("Employe salary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li>`);
  if (!$data.token) {
    _push(`<li class="nav-item" data-v-dcd2cb02>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: "/signin",
      class: "nav-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Sign in`);
        } else {
          return [
            createTextVNode("Sign in")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.token) {
    _push(`<li class="nav-item" data-v-dcd2cb02>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: "/registration",
      class: "nav-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Ragister`);
        } else {
          return [
            createTextVNode("Ragister")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<li class="nav-item" data-v-dcd2cb02>`);
  if ($data.token) {
    _push(`<a class="nav-link" data-v-dcd2cb02>loge out</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="nav-item" data-v-dcd2cb02>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/vuexEmployee",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vuex`);
      } else {
        return [
          createTextVNode("Vuex")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></nav>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Header_components = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-dcd2cb02"]]);
const _sfc_main$9 = {
  components: {
    Header_components
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header_components = resolveComponent("Header_components");
  const _component_router_view = resolveComponent("router-view");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header_components, null, null, _parent));
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/app.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const app = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$8 = {
  data() {
    return {
      employees: {}
    };
  },
  methods: {
    async getlist() {
      let resualt = await axios.get("http://localhost:8000/api/viewusers");
      this.employees = resualt.data;
    }
  },
  created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + sessionStorage.getItem("token");
    const router2 = useRouter();
    if (!sessionStorage.getItem("token")) {
      router2.push("/signin");
    }
    this.getlist();
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><h1>List of employees</h1><table class="table"><thead><tr><td>Emmployee id</td><td>Name</td><td>Email</td><td>Gender</td><td>Role as</td><td>Salary</td><td>Action</td></tr></thead><!--[-->`);
  ssrRenderList($data.employees, (item) => {
    _push(`<tbody><tr><td>${ssrInterpolate(item.id)}</td><td>${ssrInterpolate(item.first_name + " " + item.last_name)}</td><td>${ssrInterpolate(item.email)}</td><td>${ssrInterpolate(item.gender)}</td><td>${ssrInterpolate(item.role_as)}</td>`);
    if (item.salary != null) {
      _push(`<td>${ssrInterpolate(item.salary)}</td>`);
    } else {
      _push(`<td>not set</td>`);
    }
    _push(`<td>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: { name: "pay_salary", params: { id: item.id } }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`pay salary`);
        } else {
          return [
            createTextVNode("pay salary")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr></tbody>`);
  });
  _push(`<!--]--></table><!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {
  methods: {
    async mounted() {
      console.warn("ok");
      let resualt = await axios.get(`http://127.0.0.1:8000/api/viewusers`);
      console.warn(resualt);
    }
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/About.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  name: "sgin_in",
  data() {
    return {
      email: null,
      password: null,
      error: Object,
      token: null
    };
  },
  methods: {
    login() {
      if (this.email == 465 || this.password == 54) {
        console.warn("not valid");
        this.$notify({
          type: "wrong",
          title: "Important message",
          text: "login details are not valid"
        });
      } else {
        const options = {
          "email": this.email,
          "password": this.password
        };
        axios.post("http://localhost:8000/api/user/login", options).then((resp) => {
          this.$notify({
            type: "SUCCESS",
            title: "Important message",
            text: resp.data.message
          });
          sessionStorage.setItem("token", resp.data.token);
          this.token = sessionStorage.getItem("token");
          this.$router.push({
            path: "/",
            replace: true
          });
        }).catch((e) => {
          this.error = e.response.data;
        });
      }
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_notifications = resolveComponent("notifications");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="row justify-content-center mt-5"><div class="col-lg-4 col-md-6 col-sm-6"><div class="card shadow"><div class="card-title text-center border-bottom"><h2 class="p-3">Login</h2></div><div class="card-body">`);
  _push(ssrRenderComponent(_component_notifications, { position: "bottom right" }, null, _parent));
  if (Object.keys($data.error).length) {
    _push(`<div class="alert alert-danger"><p class="mb-0"><strong>Whoops!</strong> Something went wrong!</p><br><!--[-->`);
    ssrRenderList($data.error, (v, k) => {
      _push(`<ul><!--[-->`);
      ssrRenderList(v, (v2, k2) => {
        _push(`<li>${ssrInterpolate(v2)}</li>`);
      });
      _push(`<!--]--></ul>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form><div class="mb-4"><label for="username" class="form-label">Email</label><input type="text" class="form-control" id="username"${ssrRenderAttr("value", $data.email)}>`);
  if ($data.error.email) {
    _push(`<span>${ssrInterpolate($data.error.email[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="mb-4"><label for="password" class="form-label">Password</label><input type="password" class="form-control" id="password"${ssrRenderAttr("value", $data.password)}>`);
  if ($data.error.password) {
    _push(`<span>${ssrInterpolate($data.error.password[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="d-grid"><button type="button" class="btn btn-danger">Login</button></div></form></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Sign_in.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Signin = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const Registration_vue_vue_type_style_index_0_scoped_14c4c9e6_lang = "";
const _sfc_main$5 = {
  name: "ragistration",
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      gender: null,
      role_as: [],
      password: null,
      cpassword: null,
      error: Object,
      resualt: null
    };
  },
  methods: {
    onSubmit() {
      const options = {
        "first_name": this.first_name,
        "last_name": this.last_name,
        "email": this.email,
        "gender": this.gender,
        "role_as": this.role_as,
        "password": this.password,
        "cpassword": this.cpassword
      };
      axios.post("http://localhost:8000/api/user/ragister", options).then((resp) => {
        console.log(resp);
        this.$notify({
          type: "success",
          title: "Important message",
          text: resp.data.message
        });
      }).catch((e) => {
        console.log(e);
        this.error = e.response.data;
      });
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_notifications = resolveComponent("notifications");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-14c4c9e6><div class="row justify-content-center mt-5" data-v-14c4c9e6><div class="col-lg-4 col-md-6 col-sm-6" data-v-14c4c9e6><div class="card shadow" data-v-14c4c9e6><div class="card-title text-center border-bottom" data-v-14c4c9e6><h2 class="p-3" data-v-14c4c9e6>Registration</h2></div>`);
  if (Object.keys($data.error).length) {
    _push(`<div class="alert alert-danger" data-v-14c4c9e6><p class="mb-0" data-v-14c4c9e6><strong data-v-14c4c9e6>Whoops!</strong> Something went wrong!</p><br data-v-14c4c9e6><!--[-->`);
    ssrRenderList($data.error, (v, k) => {
      _push(`<ul data-v-14c4c9e6><!--[-->`);
      ssrRenderList(v, (v2, k2) => {
        _push(`<li data-v-14c4c9e6>${ssrInterpolate(v2)}</li>`);
      });
      _push(`<!--]--></ul>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="card-body" data-v-14c4c9e6><form data-v-14c4c9e6><div class="mb-4" data-v-14c4c9e6><label for="firstname" class="form-label" data-v-14c4c9e6>First Name</label><input type="text" class="form-control" id="firstname"${ssrRenderAttr("value", $data.first_name)} data-v-14c4c9e6>`);
  if ($data.error.first_name) {
    _push(`<span data-v-14c4c9e6>${ssrInterpolate($data.error.first_name[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="mb-4" data-v-14c4c9e6><label for="lastname" class="form-label" data-v-14c4c9e6>Last Name</label><input type="text" name="lastname" class="form-control" id="lastname"${ssrRenderAttr("value", $data.last_name)} data-v-14c4c9e6>`);
  if ($data.error.last_name) {
    _push(`<span data-v-14c4c9e6>${ssrInterpolate($data.error.last_name[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="mb-4" data-v-14c4c9e6><label for="email" class="form-label" data-v-14c4c9e6>Email</label><input type="text" class="form-control" id="email"${ssrRenderAttr("value", $data.email)} data-v-14c4c9e6>`);
  if ($data.error.email) {
    _push(`<span data-v-14c4c9e6>${ssrInterpolate($data.error.email[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><label for="" class="form-label" data-v-14c4c9e6>Selact Gender</label><div class="mb-4" data-v-14c4c9e6><div class="form-check form-check-inline" data-v-14c4c9e6><input type="radio" class="form-check-input" name="male" value="male"${ssrIncludeBooleanAttr(ssrLooseEqual($data.gender, "male")) ? " checked" : ""} data-v-14c4c9e6><label for="male" class="form-check-label" data-v-14c4c9e6>Male</label></div><div class="form-check form-check-inline" data-v-14c4c9e6><input type="radio" class="form-check-input" name="female" value="female"${ssrIncludeBooleanAttr(ssrLooseEqual($data.gender, "female")) ? " checked" : ""} data-v-14c4c9e6><label for="female" class="form-check-label" data-v-14c4c9e6>Female</label></div>`);
  if ($data.error.gender) {
    _push(`<span data-v-14c4c9e6>${ssrInterpolate($data.error.gender[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="mb-4 form-group" data-v-14c4c9e6><label for="" data-v-14c4c9e6>Selact role</label><select class="form-control" data-v-14c4c9e6><option selected value="" data-v-14c4c9e6>select role</option><option value="1" data-v-14c4c9e6>Admin</option><option value="2" data-v-14c4c9e6>User</option><option value="3" data-v-14c4c9e6>Hr</option><option value="4" data-v-14c4c9e6>Inten</option></select>`);
  if ($data.error.role_as) {
    _push(`<span data-v-14c4c9e6>${ssrInterpolate($data.error.role_as[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="mb-4" data-v-14c4c9e6><label for="password" class="form-label" data-v-14c4c9e6>Password</label><input type="password" class="form-control" id="password"${ssrRenderAttr("value", $data.password)} data-v-14c4c9e6>`);
  if ($data.error.password) {
    _push(`<span data-v-14c4c9e6>${ssrInterpolate($data.error.password[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="mb-4" data-v-14c4c9e6><label for="cpassword" class="form-label" data-v-14c4c9e6>Conform Password</label><input type="password" class="form-control" id="cpassword"${ssrRenderAttr("value", $data.cpassword)} data-v-14c4c9e6>`);
  if ($data.error.cpassword) {
    _push(`<span data-v-14c4c9e6>${ssrInterpolate($data.error.cpassword[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="d-grid" data-v-14c4c9e6><button${ssrRenderAttrs(mergeProps({ class: "btn btn-danger" }, _ctx.clear))} data-v-14c4c9e6>Registration</button></div></form></div></div>`);
  _push(ssrRenderComponent(_component_notifications, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Registration.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Registration = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-14c4c9e6"]]);
const _sfc_main$4 = {
  data() {
    return {
      employees: {}
    };
  },
  methods: {
    async getlist() {
      let resualt = await axios.get("http://127.0.0.1:8000/api/user/employsalary");
      this.employees = resualt.data;
    },
    delate_salary(id, date) {
      const api_hedder = {
        "employees_id": id,
        "created_on": date
      };
      useRouter();
      axios.post("http://127.0.0.1:8000/api/user/delatesalary/", api_hedder).then((resp) => {
        if (resp.data.status == 404) {
          this.$notify({
            type: "error",
            title: "Important message",
            text: resp.data.message
          });
        } else if (resp.data.status == 200) {
          this.$notify({
            type: "success",
            title: "Important message",
            text: resp.data.message
          });
          this.getlist();
        }
      });
    }
  },
  created() {
    const router2 = useRouter();
    if (!sessionStorage.getItem("token")) {
      router2.push("/signin");
    }
    this.getlist();
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_notifications = resolveComponent("notifications");
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><h1>List of paid salary employees</h1>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(ssrRenderComponent(_component_notifications, { position: "bottom right" }, null, _parent));
  _push(`<table class="table"><thead><tr><td>No.</td><td>Emmployee id</td><td>Name</td><td>Email</td><td>working_day</td><td>total_holiday</td><td>total_leaves_of_emp</td><td>calculated_salary</td><td>emp_bonus</td><td>paybal salary </td><td>paybale date</td><td colspan="2" style="${ssrRenderStyle({ "text-align": "center" })}">action</td></tr></thead><!--[-->`);
  ssrRenderList($data.employees, (item) => {
    _push(`<tbody><tr><td>${ssrInterpolate(item.id)}</td><td>${ssrInterpolate(item.user_id)}</td><td>${ssrInterpolate(item.first_name + " " + item.last_name)}</td><td>${ssrInterpolate(item.email)}</td><td>${ssrInterpolate(item.working_day)}</td><td>${ssrInterpolate(item.total_holiday)}</td><td>${ssrInterpolate(item.total_leaves_of_emp)}</td><td>${ssrInterpolate(item.calculated_salary)}</td><td>${ssrInterpolate(item.emp_bonus)}</td><td>${ssrInterpolate(item.emp_paybal_salary)}</td><td>${ssrInterpolate(item.created_on)}</td><td>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: { name: "edit_salary", params: { id: item.id } },
      class: "btn"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Edit`);
        } else {
          return [
            createTextVNode("Edit")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td><button class="btn">Delate</button></td></tr></tbody>`);
  });
  _push(`<!--]--></table><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Emp_salary/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const pay_salary_vue_vue_type_style_index_0_scoped_5c221ead_lang = "";
const _sfc_main$3 = {
  name: "pay_salary",
  data() {
    return {
      error: [],
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
      };
      useRouter();
      axios.post("http://127.0.0.1:8000/api/user/pay_salary", recode).then((resp) => {
        if (resp.data.status == 404) {
          this.error = resp.data.message;
          console.log(this.error);
        } else if (resp.data.status == 200) {
          this.$notify({
            type: "success",
            title: "Important message",
            text: resp.data.message
          });
          this.$router.push("/Employee");
        }
      });
    }
  },
  created() {
    const router2 = useRouter();
    useRoute();
    if (!sessionStorage.getItem("token")) {
      router2.push("/signin");
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_notifications = resolveComponent("notifications");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-5c221ead><h1 data-v-5c221ead>paid employee salary </h1>`);
  _push(ssrRenderComponent(_component_notifications, { position: "bottom right" }, null, _parent));
  _push(`<div class="align-items-center" data-v-5c221ead>`);
  if (Object.keys($data.error).length) {
    _push(`<div class="alert alert-danger" data-v-5c221ead><p class="mb-0" data-v-5c221ead><strong data-v-5c221ead>Whoops!</strong> Something went wrong!</p><br data-v-5c221ead><ul data-v-5c221ead><!--[-->`);
    ssrRenderList($data.error, (v, k) => {
      _push(`<li data-v-5c221ead>${ssrInterpolate(v[0])}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form class="requires-validation" novalidate data-v-5c221ead><div class="col-md-6 mt-2" data-v-5c221ead><label for="" data-v-5c221ead>employee leave</label><input class="form-control" type="text" name="emp_leave" placeholder="employee totale leave"${ssrRenderAttr("value", $data.total_leaves_of_emp)} data-v-5c221ead><input class="form-control" type="text" name="emp_id"${ssrRenderAttr("value", $props.id)} hidden data-v-5c221ead>`);
  if ($data.error.total_leaves_of_emp) {
    _push(`<span data-v-5c221ead>${ssrInterpolate($data.error.total_leaves_of_emp[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="col-md-6 mt-2" data-v-5c221ead><label for="" data-v-5c221ead>calculated_salary</label><input class="form-control" type="text" name="calculated_salary" placeholder="calculated_salary"${ssrRenderAttr("value", $data.calculated_salary)} data-v-5c221ead>`);
  if ($data.error.calculated_salary) {
    _push(`<span data-v-5c221ead>${ssrInterpolate($data.error.calculated_salary[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="col-md-6 mt-2" data-v-5c221ead><label for="" data-v-5c221ead>total_holiday</label><input class="form-control" type="text" name="total_holiday" placeholder="total_holiday"${ssrRenderAttr("value", $data.total_holiday)} data-v-5c221ead>`);
  if ($data.error.total_holiday) {
    _push(`<span data-v-5c221ead>${ssrInterpolate($data.error.total_holiday[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="col-md-6 mt-2" data-v-5c221ead><label for="" data-v-5c221ead>working_day</label><input class="form-control" type="text" name="working_day" placeholder="working_day"${ssrRenderAttr("value", $data.working_day)} data-v-5c221ead>`);
  if ($data.error.working_day) {
    _push(`<span data-v-5c221ead>${ssrInterpolate($data.error.working_day[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="col-md-6 mt-2" data-v-5c221ead><label for="" data-v-5c221ead>emp_bonus</label><input class="form-control" type="text" name="emp_bonus" placeholder="emp_bonus"${ssrRenderAttr("value", $data.emp_bonus)} data-v-5c221ead>`);
  if ($data.error.emp_bonus) {
    _push(`<span data-v-5c221ead>${ssrInterpolate($data.error.emp_bonus[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="col-md-6 mt-2" data-v-5c221ead><label for="" data-v-5c221ead>emp_paybal_salary</label><input class="form-control" type="text" name="emp_paybal_salary" placeholder="emp_paybal_salary"${ssrRenderAttr("value", $data.emp_paybal_salary)} data-v-5c221ead>`);
  if ($data.error.emp_paybal_salary) {
    _push(`<span data-v-5c221ead>${ssrInterpolate($data.error.emp_paybal_salary[0])}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-button mt-3" data-v-5c221ead><button type="button" class="btn btn-primary" data-v-5c221ead>pay salary</button></div></form></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Emp_salary/pay_salary.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const pay_salary = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-5c221ead"]]);
const _sfc_main$2 = {
  name: "edit_salary",
  props: {
    id: String
  },
  data() {
    return {
      formdata: {
        "emp_paybal_salary": null,
        "emp_bonus": null,
        "working_day": null,
        "total_holiday": null,
        "calculated_salary": null,
        "total_leaves_of_emp": null
      }
    };
  },
  methods: {
    async getlist() {
      await axios.get("http://127.0.0.1:8000/api/user/viewsalary/" + this.$route.params.id).then((resp) => {
        this.formdata = resp.data;
      });
    },
    updated_emp_salary() {
      useRouter();
      axios.put("http://127.0.0.1:8000/api/user/updatesalary/" + this.$route.params.id, this.formdata).then((resp) => {
        if (resp.data.status == 404) {
          this.$notify({
            type: "error",
            title: "Important message",
            text: resp.data.message
          });
        } else if (resp.data.status == 200) {
          this.$notify({
            type: "success",
            title: "Important message",
            text: resp.data.message
          });
          this.$router.push("/Employee");
        }
      });
    }
  },
  created() {
    const router2 = useRouter();
    useRoute();
    if (!sessionStorage.getItem("token")) {
      router2.push("/signin");
    }
    this.getlist();
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_notifications = resolveComponent("notifications");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="align-items-center">`);
  _push(ssrRenderComponent(_component_notifications, { position: "bottom right" }, null, _parent));
  _push(`<form class="requires-validation" novalidate><div class="col-md-6 mt-2"><label for="">employee leave</label><input class="form-control" type="text" name="emp_leave" placeholder="employee totale leave"${ssrRenderAttr("value", $data.formdata.total_leaves_of_emp)}></div><div class="col-md-6 mt-2"><label for="">calculated_salary</label><input class="form-control" type="text" name="calculated_salary" placeholder="calculated_salary"${ssrRenderAttr("value", $data.formdata.calculated_salary)}></div><div class="col-md-6 mt-2"><label for="">total_holiday</label><input class="form-control" type="text" name="total_holiday" placeholder="total_holiday"${ssrRenderAttr("value", $data.formdata.total_holiday)}></div><div class="col-md-6 mt-2"><label for="">working_day</label><input class="form-control" type="text" name="working_day" placeholder="working_day"${ssrRenderAttr("value", $data.formdata.working_day)}></div><div class="col-md-6 mt-2"><label for="">emp_bonus</label><input class="form-control" type="text" name="emp_bonus" placeholder="emp_bonus"${ssrRenderAttr("value", $data.formdata.emp_bonus)}></div><div class="col-md-6 mt-2"><label for="">emp_paybal_salary</label><input class="form-control" type="text" name="emp_paybal_salary" placeholder="emp_paybal_salary"${ssrRenderAttr("value", $data.formdata.emp_paybal_salary)}></div><div class="form-button mt-3"><button type="button" class="btn btn-primary"> pay salary </button></div></form></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Emp_salary/edit_salary.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const edit_salary = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  methods: {
    use() {
      console.log("ok");
      const router2 = useRouter();
      router2.push("/");
    }
  },
  created() {
    const store2 = createStore();
    store2.commit("increment");
    console.log(store2.state.count);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>child route</h1><button>click me</button></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/child.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const child = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "VuexEmployees",
  methods: {},
  created() {
    this.$store.dispatch("EmployeeModules/getemployee");
  },
  computed: mapGetters({
    employeelist: "getemployees",
    name: "getname"
  }),
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h1>List of employees</h1><table class="table"><thead><tr><td>Emmployee id</td><td>Name</td><td>Email</td><td>Gender</td><td>Role as</td><td>Salary</td><td>Action</td></tr></thead><!--[-->`);
  ssrRenderList(_ctx.employeelist.users, (item) => {
    _push(`<tbody><tr><td>${ssrInterpolate(item.id)}</td><td>${ssrInterpolate(item.first_name + " " + item.last_name)}</td><td>${ssrInterpolate(item.email)}</td><td>${ssrInterpolate(item.gender)}</td><td>${ssrInterpolate(item.role_as)}</td>`);
    if (item.salary != null) {
      _push(`<td>${ssrInterpolate(item.salary)}</td>`);
    } else {
      _push(`<td>not set</td>`);
    }
    _push(`<td><button class="btn-btn-Success">Delate</button></td></tr></tbody>`);
  });
  _push(`<!--]--></table><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/vuex/Employee.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VuexEmployeeList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration
  },
  {
    path: "/Employee",
    component: index,
    name: "Employee",
    props: true,
    children: [
      {
        path: "child",
        component: child
      }
    ]
  },
  {
    path: "/Employee/pay_salary/:id",
    name: "pay_salary",
    component: pay_salary,
    props: true
  },
  {
    path: "/Employee/:id/edit_salary/",
    name: "edit_salary",
    component: edit_salary,
    props: true
  },
  {
    path: "/vuexEmployee",
    name: "vuexEmployee",
    component: VuexEmployeeList
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
const EmployeeModules = {
  namespaced: true,
  state: {
    userList: {
      users: Object,
      error: null
    }
  },
  mutations: {
    GET_EPLOYEE_LIST(state, payload) {
      state.userList.users = payload.users;
    },
    GET_EPLOYEE_FAILD(state, payload) {
      state.userList.error = payload.error;
    }
  },
  actions: {
    getemployee: async function({ commit }) {
      try {
        let dataURL = `http://localhost:8000/api/viewusers`;
        let response = await axios.get(dataURL).then((resp) => {
          commit("GET_EPLOYEE_LIST", { users: resp.data });
          console.log(resp);
        });
      } catch (error) {
        console.log(error);
        commit("GET_USERS_FAILED", { error });
      }
    }
  }
};
const store = createStore({
  state() {
    return {
      EmployeeState: EmployeeModules.state,
      name: "darshan"
    };
  },
  mutations: {},
  actions: {},
  modules: {
    EmployeeModules
  },
  getters: {
    getemployees: function(state) {
      return state.EmployeeState.userList;
    },
    getname(state) {
      return state.name;
    }
  }
});
if (sessionStorage.getItem("token")) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + sessionStorage.getItem("token");
}
createApp(app).use(store).use(router).use(Notifications).mount("#app");
