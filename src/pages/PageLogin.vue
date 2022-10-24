<template>
  <div class="grid justify-center bg-progressBarBlue  max-h-[100vh] bottom-0 font-openSans ">
    <div class=" bg-white max-w-4xl md:w-100 sm:w-88 border rounded-md mt-44 max-h-xs mb-[100vh]">
      <div>
      <h2 class="text-lg font-semibold mt-5 md:ml-32 sm:ml-20 ml-6" >
        Iniciar Sesión
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
        <button 
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
     <!-- <p>Emailvalidated: {{emailValidated}} - PasswordValidated {{passwordValidated}}</p> -->
     <!-- <p>Are both validated {{  }}</p> -->
    </div>
  </div>
  
    
   

</template>

 <script lang="ts">

import EmailInput from '@/loginComponents/EmailInput.vue'
import PasswordInput from '@/loginComponents/PasswordInput.vue'
import PageHome from '@/pages/PageHome.vue'


export default {
  components: {
    EmailInput,
    PasswordInput,
    PageHome
  }
}
</script> 

<script setup lang="ts">

import useVuelidate from '@vuelidate/core'
import { computed, ref } from 'vue';
import { required, maxLength, integer, between, minLength, email } from '@vuelidate/validators'


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
      // minLength: minLength(8),  
      // containsUppercase: function(value: string) {
      //   return !/[A-Z]/.test(value)
      // },
      // containsLowercase: function(value: string) {
      //   return !/[a-z]/.test(value)
      // },
      // containsNumber: function(value: string) {
      //   return !/[0-9]/.test(value)
      // },
      // containsSpecial: function(value: string) {
      //   return !/[#?!@$%^&*-]/.test(value)
      // }
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



</script> 


<style >
</style>