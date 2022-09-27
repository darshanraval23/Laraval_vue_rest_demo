import { createApp } from 'vue'
import { createStore } from 'vuex'
import app from './layouts/app.vue'
import router from './router.js'
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
//   store.commit('increment')

// console.log(store.state.count)

createApp(app).use(store).use(router).use(Notifications).mount('#app')
