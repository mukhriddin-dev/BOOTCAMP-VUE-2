import {defineStore} from "pinia"
import {reactive , ref} from "vue";

export const useTodoStore=defineStore('todo', ()=>{  

    const state=reactive({
        todo:[],
        completed:false,
        status:"NO DATA"
    })


    const setTodo=(task)=>{
      state.todo.push(task);
    }




    return { state  , setTodo}
    
})

