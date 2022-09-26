import { createApp } from 'vue'
import app from './layouts/app.vue'
import router from './router.js'
import Notifications from '@kyvg/vue3-notification'

createApp(app).use(router).use(Notifications).mount('#app')
