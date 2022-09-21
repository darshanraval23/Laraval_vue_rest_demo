// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
// require('@popperjs/core');
// require('./bootstrap');
import { createApp } from 'vue'
import app from './layouts/app.vue'
import router from './router.js'
// import axios from 'axios'

// import './assets/custum.css'
createApp(app).use(router).mount('#app')
// import 'bootstrap/dist/js/bootstrap.min.js'
