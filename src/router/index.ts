import {createRouter, createWebHistory} from 'vue-router';
import  PageHome from '@/pages/PageHome.vue'
import PageLogin from '@/pages/PageLogin.vue';
import PageNotFound from '@/pages/PageNotFound.vue';



const routes = [
  {
    path: '/', 
    name: 'Home',
    component: PageHome, 
    // meta: {toTop: true, smoothScroll: true},
  },
  
{
    path: '/login',
    name: 'Login',
    component: PageLogin,
    // meta: { toTop: true, smoothScroll: true },
},
{
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: PageNotFound,
    // redirect: '/'
},   
   
]

export default createRouter({
  history: createWebHistory(),
  routes, 
  scrollBehavior(to) {
    const scroll = {}
    // if (to.meta.toTop) scroll.top = 0
    // if (to.meta.smoothScroll) scroll.behavior = 'smooth' 
    return scroll
  },
})


 
  //debemos crear una nueva ruta para cada uno de los componentes principales
  //en este caso creamos una ruta para forum


  // {
  //   path: '/forum/:id',
  //   name: 'Forum',
  //   component: PageForum,
  //   props:true
  // },
  
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
  
  
