const app = Vue.createApp( {
    
    data(){
        return {
            task:[],
            title:"",
        }
    },

    methods:{


    
      addTask(){

        const newTask={
          id: Date.now(),
          title:this.title
        }

        if(!newTask.title.length){
            alert('Please fill the task title');
        }else{
            this.task.push(newTask);
            this.title="";
        }

      }
    },   

});


app.mount(document.getElementById('root'));