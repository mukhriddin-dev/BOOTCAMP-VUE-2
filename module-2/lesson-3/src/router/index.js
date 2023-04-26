import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "../views/Home/Home.vue";
import Empolyee from "../views/Empolyee/Empolyee.vue";
import ErrorPage from "../views/Error/ErrorPage.vue";


const router = createRouter({   

    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            component: Home,
            name: 'Home'
        }, {
            path: '/add-employee',
            component: Empolyee,
            name: 'Employee'
        },
        {
            path:'/:pathMatch(.*)*',
            name: 'Error',
            component:ErrorPage
        }


    ]


})

export default router;
