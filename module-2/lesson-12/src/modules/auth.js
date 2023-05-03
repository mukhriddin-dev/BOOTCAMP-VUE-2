import axios from "../services/axios";

const authstore = {
    state: () => ( {
        laoding:true,
        errorMessage:"",
        username:""
    } ),

    mutations:{
        SET_LOAD(state){
          state.loading = false;
        },
        SET_ERROR(state, err){
            state.errorMessage =err
        },
        SET_USERNAME(state, username){
            state.username = username
        }
    },

    actions:{
      
        async signin({commit}, payload){
            try{
             const response =await axios.post("/user/login", payload);
             localStorage.setItem("token", response?.data?.tokens?.access_token)
             commit('SET_USERNAME', response.data.first_name);
            }catch(err){
             commit('SET_ERROR', err);
            }
        }

    }


}

export default authstore;
