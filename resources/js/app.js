import { createApp } from 'vue'
import { createStore } from 'vuex'
import app from './layouts/app.vue'
import router from './router.js'
import axios from 'axios'
import Notifications from '@kyvg/vue3-notification'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 5
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
if(sessionStorage.getItem('token')){
  axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token');
}

// console.log(store.state.count)

createApp(app).use(store).use(router).use(Notifications).mount('#app')
