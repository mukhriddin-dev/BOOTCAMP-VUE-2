const app = Vue.createApp({

    data() {
        return {task: [], title: "", post:[], load:false}
    },

    methods: {

        addTask() {

            const newTask = {
                id: Date.now(),
                title: this.title
            }

            if (! newTask.title.length) {
                alert('Please fill the task title');
            } else {
                this.task.push(newTask);
                this.title = "";
            }

        },

        async getPost() {
          
            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
               
                this.task=result;
                this.load=true;



                  console.log(this.load)
                  console.log(this.task)
               

            } catch (err) {
                console.log(err)
            }
        }


    },


    created() {
        console.log('Created')
    },

    beforeCreate() {
        console.log('Before create')
    },


    beforeMount() {
        console.log('Before mount')
        console.log(this.load)
        console.log(this.task)
    },

    mounted() {
         this.getPost();
       
    }


});


app.mount(document.getElementById('root'));
