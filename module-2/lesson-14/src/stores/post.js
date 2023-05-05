import {defineStore} from "pinia";
import {ref, reactive} from "vue";


export const usePost = defineStore("post", () => {

    const post = reactive({data: [], load: true, status: ""})

    const getPost = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const res = await response.json();
            if (response.status === 200) {
                post.data = res;
                post.load = false;
            }

        } catch (err) {
            console.log(err)
        }
    }


    return { getPost , post}


})
