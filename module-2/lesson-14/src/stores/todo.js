import {defineStore} from "pinia"
import {reactive , ref , computed} from "vue";

export const useTodoStore=defineStore('todo', ()=>{  

    const state=reactive({
        todo:[],
        completed:false,
        status:"NO DATA",
        bascket:[]
    })


    const setTodo=(task)=>{
    state.todo.push(task);
    }


    const doneCount=computed(()=> state.bascket.length);



    return { state  , setTodo , doneCount };
    
})

