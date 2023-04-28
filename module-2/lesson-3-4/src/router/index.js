import {createRouter, createWebHashHistory} from 'vue-router';

import Home from "../views/Home/Home.vue";
import Empolyee from "../views/Empolyee/Empolyee.vue";
import ErrorPage from "../views/Error/ErrorPage.vue";
import Login from "../views/Login/Login.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";


const router = createRouter({

    history: createWebHashHistory(import.meta.env.BASE_URL),


    routes: [
        {
            path: "/",
            component: Dashboard,
            name: "Dashboard",

            children: [
                {
                    path: '/home',
                    component: Home,
                    name: 'Home'
                }, {
                    path: '/add-employee',
                    component: Empolyee,
                    name: 'Employee'
                }, {
                    path: '/new-order',
                    name: 'New-Order',
                    redirect: {
                        name: 'Employee'
                    }
                }

            ]
        }, {
            path: '/login',
            component: Login,
            name: 'Login'
        }, {
            path: '/:pathMatch(.*)*',
            name: 'Error',
            component: ErrorPage
        }

    ]


})


router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !localStorage.getItem('token')) 
        next({name: 'Login'})
     else 
        next()


    


})


export default router;
