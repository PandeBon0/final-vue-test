import { createRouter, createWebHashHistory } from 'vue-router';
import PageHome from '@/pages/PageHome';
import PageLogin from '@/pages/PageLogin';

var routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome,
        // meta: { toTop: true, smoothScroll: true },
    },
    {
        path: '/login',
        name: 'Login',
        component: PageLogin,
        // meta: { toTop: true, smoothScroll: true },
    },
    {
        path: '/:pathMatch(.*)*', 
        // name: 'NotFound',
        // component: PageNotFound,
        redirect: '/'
    },   
];
export default createRouter({
    history: createWebHashHistory(),
    routes,
    // scrollBehavior: function (to) {
    //     var scroll = {};
    //     if (to.meta.toTop) scroll.top = 0
    //     if (to.meta.smoothScroll) scroll.behavior = 'smooth' 
    //     return scroll;
    // },
});
