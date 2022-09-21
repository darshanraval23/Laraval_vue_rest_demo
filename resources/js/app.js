// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
// require('@popperjs/core');
// require('./bootstrap');
import { createApp } from 'vue'
import app from './layouts/app.vue'
import router from './router.js'
import Notifications from '@kyvg/vue3-notification'
// import axios from 'axios'
// const app = createApp({...})
// app.use(Notifications)
// import './assets/custum.css'
createApp(app).use(router).use(Notifications).mount('#app')
// import 'bootstrap/dist/js/bootstrap.min.js'
