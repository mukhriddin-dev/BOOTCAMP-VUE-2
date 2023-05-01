import {createStore} from "vuex";
import getPost from "../modules/post";
import counter from "../modules/counter";

const store = createStore({

   

   

    modules:{
     getPost,
     counter
    }
})


export default store;
