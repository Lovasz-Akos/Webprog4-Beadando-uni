import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/tasks',
            name: 'tasks-all',
            component: TasksAll,
            beforeEnter: (to, from, next) => {
                //needs login to be accessed
                if (auth.isLoggedIn()) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/tasks/new',
            name: 'tasks-create',
            component: TasksCreate,
            beforeEnter: (to, from, next) => {
                if (auth.isLoggedIn()) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            beforeEnter: (to, from, next) => {
                if (!auth.isLoggedIn()) {
                    next();
                } else {
                    next('/');
                }
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from, next) => {
                if (!auth.isLoggedIn()) {
                    next();
                } else {
                    next('/');
                }
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    linkActiveClass: 'active',
    mode: 'history'
})