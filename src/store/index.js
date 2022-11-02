
import { createStore, Store } from 'vuex'

// Create a new store instance.
// const store = createStore({
//   state () {
//     return {
//       auth: false
//     }
//   },
//   mutations: {
//     isAuth (state) {
//       state.auth = true
//     }
//   },
//   actions: {
//     isAuth (context) {
//       context.commit('isAuth')
//     }
//   }
// })

// export default store;

 export default createStore({
  // email : null,
  state: {
      //email: null,
       auth: false
     
  },
  getters: {
    
   },
   actions: {
     isAuth (context) {
       context.commit('isAuth')
     },
    //setEmail (context) {
    //  context.commit('setEmail')
    //}
   
   },
  mutations: {
     isAuth (state) {
       state.auth = true
     },
    // setEmail (state, payload) {
    //   state.email = payload;
    // }
    
 },
 })
