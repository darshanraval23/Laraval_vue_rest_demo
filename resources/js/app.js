import { createApp } from 'vue'
import { createStore } from 'vuex'
import app from './layouts/app.vue'
import router from './router.js'
import axios from 'axios'
import Notifications from '@kyvg/vue3-notification'
import store from "./store/index.js";


if(sessionStorage.getItem('token')){
  axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token');
}

createApp(app).use(store).use(router).use(Notifications).mount('#app')
