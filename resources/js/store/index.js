/////////////////////////
///////globale vuex store file
/////////////////////////

import { createStore } from 'vuex'

//importing modules
import EmployeeModules from './modules/EmployeeModules.js'

export default createStore({

  state() {
    return {
      EmployeeState: EmployeeModules.state,
      name: 'darshan'
    }
  },
  mutations: {

  },
  actions: {
      
  },
  //define modules
  modules: {
    EmployeeModules,
  },
  getters: {

    getemployees: function (state){
      return state.EmployeeState.userList;
    },
    getname(state){
      return state.name;
    }

  }
})