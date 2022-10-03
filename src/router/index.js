import { createRouter, createWebHistory } from 'vue-router';
import PageHome from './pages/PageHome.vue';
// import FoodVariants from '@/components/FoodVariants.vue'
// import TechVariants from '@/components/TechVariants.vue'
// import ClothesVariants from '@/components/ClothesVariants.vue'
// import VariantSelector from '@/components/VariantSelector.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome,
        meta: { toTop: true, smoothScroll: true },
    },
    // {
    //   path: '/createProduct', 
    //   name: 'PageModal',
    //   component: PageModal, 
    //   props: 'true'
    // },
    // {
    //   path: '/foodVariants', 
    //   name: 'FoodVariants',
    //   component: FoodVariants, 
    // },
    // {
    //   path: '/techVariants', 
    //   name: 'TechVariants',
    //   component: TechVariants, 
    // },
    // {
    //   path: '/clothesVariants', 
    //   name: 'ClothesVariants',
    //   component: ClothesVariants, 
    // },
    // {
    //   path: '/variantSelector', 
    //   name: 'VariantSelector',
    //   component: VariantSelector, 
    // },
    // {
    //   path: '/:pathMatch(.*)*', 
    //   name: 'NotFound',
    //   component: PageNotFound,
    // },  
];
export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        const scroll = {};
        // if (to.meta.toTop) scroll.top = 0
        // if (to.meta.smoothScroll) scroll.behavior = 'smooth' 
        return scroll;
    },
});
// {
//   path: '/me', 
//   name: 'Profile',
//   component: PageProfile, 
//   props: {edit: true},
//   meta: {toTop: true, smoothScroll: true},
// },
// {
//   path: '/me/edit', 
//   name: 'ProfileEdit',
//   component: PageProfile, 
// },
//debemos crear una nueva ruta para cada uno de los componentes principales
//en este caso creamos una ruta para forum
// {
//   path: '/forum/:id',
//   name: 'Forum',
//   component: PageForum,
//   props:true
// },
// {
//   path: '/category/:id',
//   name: 'Category',
//   component: PageCategory,
//   props:true
// },
// {
//   path: '/forum/:forumId/thread/create',
//   name: 'ThreadCreate',
//   component: PageThreadCreate,
//   props:true,
// },
// {
//   path: '/thread/:threadId/edit',
//   name: 'ThreadEdit',
//   component: PageThreadEdit,
//   props:true,
// },
// {
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