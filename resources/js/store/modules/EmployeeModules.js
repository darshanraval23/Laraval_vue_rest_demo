import axios from "axios";
export default {
    namespaced: true,
    state: {
        userList: {
            users: Object,
            error: null
        }
    },
    mutations: {
        //mutation can acsept commit and manuplating state
        GET_EPLOYEE_LIST(state,payload){
            state.userList.users = payload.users
        },
        GET_EPLOYEE_FAILD(state,payload){
            state.userList.error = payload.error;
        },
    },
    actions: {
        //hear we can call api and call mutaions matheds 
        //note:- action can not maniplating state diractly
        getemployee: async function ({commit}) {
            try {
                let dataURL = `http://localhost:8000/api/viewusers`;
                let response = await axios.get(dataURL)
                .then(resp=>{
                    //call mutation mathode
                    commit("GET_EPLOYEE_LIST", {users: resp.data});
                    console.log(resp);
                });
            } catch (error) {
                console.log(error);
                commit("GET_USERS_FAILED", {error: error});
            }
        }
    }
}
