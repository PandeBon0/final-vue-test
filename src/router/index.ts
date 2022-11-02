import {createRouter, createWebHistory, Router} from 'vue-router';
import PageHome from '@/pages/PageHome.vue'
import PageLogin from '@/pages/PageLogin.vue';
import PageNotFound from '@/pages/PageNotFound.vue';
import Vue from 'vue';
import store from '@/store';
// Vue.use(Router);



const routes = [
  {
    path: '/',
    name: 'Login',
    component: PageLogin,
    // meta: { toTop: true, smoothScroll: true },
  },
  {
    path: '/home', 
    name: 'Home',
    component: PageHome, 
    // meta: {toTop: true, smoothScroll: true},
    meta: {requiresAuth: true}
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: PageNotFound,
    // redirect: '/'
  },    
]



const router =  createRouter({
  history: createWebHistory(),
  routes, 
  scrollBehavior(to) {
    const scroll = {}
    // if (to.meta.toTop) scroll.top = 0
    // if (to.meta.smoothScroll) scroll.behavior = 'smooth' 
    return scroll
  },
})

// router.beforeEach((to, from, next) => {
//   // if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if(to.meta.requiresAuth){
//       if(store.state.auth === false){
//         next('/')
//       } else {
//         console.log(store.state.auth + ' desde store en beforeEach, SI entra al if')
//         next('/home')
//         // next({name: 'Home'})
//         // router.push('/home').catch(() => {});
//         // router.push({ name: 'Home', path: '/home'})
//       }
//       console.log('auth false, NO esta entrando al if')
//       //  next('/')
//       // router.push({ path: '/home'})
//     } else {
//       next()
//         // {path:'home', name:'home'}
//     }
//   // } else {
//   //   next()
//   // }
// }) 


// router.beforeEach((to, from, next) => {
  
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if(!store.state.email) {
//       console.log( store.state.email + ' se queda en login')
//       next({name:"Login"});
//     } else {
//       console.log('se va a su ruta normal')
//       next();
//     }
//   } else {
//     next();
//   }
    
    
//     // router.push({ path: '/home'})
  

// }) 


// router.beforeEach((to, from, next) => {
  
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if(!store.state.email) {
//       console.log( store.state.email + ' se queda en login')
//       next({name:"Login"});
//     } else {
//       console.log('se va a su ruta normal')
//       next();
//     }
//   } else {
//     next();
//   }
    
    
//     // router.push({ path: '/home'})
  

// }) 


// router.beforeEach((to, from, next) => {
  
//     if(to.meta.requiresAuth && store.state.auth === false){
//       console.log( ' se queda en login')
//         next('/')
//       } else if (to.meta.requiresAuth && store.state.auth === true) {
//         console.log(store.state.auth + ' tratando de que vaya a Home')
//         next('/home')
//         // next({name: 'Home'})
//         // router.push('/home').catch(() => {});
//         // router.push({ name: 'Home', path: '/home'})
//       } else {
//         console.log('ninguna de las dos primeras condiciones, sigue su curso normal')
//         next()
//       }
      
//       // router.push({ path: '/home'})
    

// }) 

router.beforeEach((to, from, next) => {
  
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.state.auth === false) {
      console.log( store.state.auth  + ' se queda en login con auth')
      next({name:"Login"});
    } else {
      console.log('se va a su ruta normal con auth')
      next();
    }
  } else {
    next();
  }
    
    
    // router.push({ path: '/home'})
  

}) 


export default router;


 
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
  
  
