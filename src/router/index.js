import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/pages/PageHome.vue';

var routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome,
        meta: { toTop: true, smoothScroll: true },
    }, 
];
export default createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior: function (to) {
        var scroll = {};
        // if (to.meta.toTop) scroll.top = 0
        // if (to.meta.smoothScroll) scroll.behavior = 'smooth' 
        return scroll;
    },
});

//   path: '/thread/:id', 
//   name: 'ThreadShow',
//   component: PageThreadShow,
//   props: true,
//   beforeEnter (to, from, next)  {
//     const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
//     if(threadExists){
//       return next();
//     }else{
//       next({
//         name: 'NotFound',
//         params: {
//           pathMatch: to.path.substring(1).split('/'), 
//         },
//         query: to.query,
//         hash: to.hash,
//       });
//     }
//   }, 
// },
//# sourceMappingURL=index.js.map