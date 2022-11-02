<template>
  <div class="grid justify-center bg-progressBarBlue  max-h-[100vh] bottom-0 font-openSans ">
    <div class=" bg-white max-w-4xl md:w-100 sm:w-88 border rounded-md mt-44 max-h-xs mb-[100vh]">
      <div>
      <h2 class="text-lg font-semibold mt-5 md:ml-32 sm:ml-20 ml-6" >
        Iniciar Sesión

        <!-- <div><p class="text-sm">Este es el valor de auth sin hacer click: {{ store.state.auth}}</p></div> -->
      </h2>
      </div>
      <br>
      <EmailInput
      v-model="emailValidated"
      @update:model-value="checkIfBothValidated"
      /> 
      <!-- @update:model-value="emailValidated = true" -->
      <br>
    <PasswordInput
    v-model="passwordValidated"
    @update:model-value="checkIfBothValidated"
    />
      <br><br>
       <div v-if="checkIfBothValidated() === true">
        <router-link 
          :to="{ 
            name: 'Home', 
          }" 
        >
        <button  @click="login()"
          class=" border rounded-md md:ml-32 sm:ml-20 ml-6
           border-slate-300 p-2  bg-[#005CAB] w-40 text-white h-12 font-semibold" 
        >
          Iniciar sesion
        </button>
      </router-link>
     </div>
     <div v-else>
      <button
          class="font-semibold border rounded-md md:ml-32 sm:ml-20 ml-6
           border-slate-300 p-2  bg-[#92999f] w-40 text-white h-12 " 
        >
          Iniciar sesion
        </button>
     </div>
     <br>
    </div>
  </div>
  
    
   

</template>

<script setup lang="ts">

import EmailInput from '@/loginComponents/EmailInput.vue'
import PasswordInput from '@/loginComponents/PasswordInput.vue'
import useVuelidate from '@vuelidate/core'
import { computed, ref } from 'vue';
import { required, email } from '@vuelidate/validators'
import router from '@/router';
import store from '@/store'


const emailValidated = ref('');
const passwordValidated = ref('');

const validations = computed(() => {
  return {
    emailValidated: {
      required,
      email,
    },
    passwordValidated: {
      required,
  }
   }
});

const v$ = useVuelidate(validations, { emailValidated, passwordValidated }); 

function checkIfBothValidated (): boolean {
  var areBothValidated: boolean = false
  if(!v$.value.$invalid){
    areBothValidated = true
  }
  return areBothValidated
}

function login () {
  //if(!v$.value.$invalid){
    store.dispatch('isAuth')
    // store.dispatch('isAuth')
    console.log('Metodo despachado, auth se cambia de valor')
    // console.log(store.state.auth + 'desde PageLogin al dar clic')

    router.push("/home")
    // router.push({name: 'Home', path: '/home'})
  //}
}

</script> 

<style >
</style>