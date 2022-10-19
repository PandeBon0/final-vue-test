<template>
  <div>
    <h2></h2>
      Iniciar Sesión
  </div>
  <EmailInput/> 
  <PasswordInput/>
   
    <router-link 
      :to="{ 
        name: 'Home', 
      }" 
      class="font-medium border rounded-md md:ml-16
      border-slate-300 p-2  bg-[#005CAB] w-40 text-white h-12"
    >
    <button>
      Iniciar sesion
    </button>
    </router-link>
   

</template>

 <script setup lang="ts">

import EmailInput from '@/formComponents/EmailInput.vue'
import PasswordInput from '@/formComponents/PasswordInput.vue'
</script> 



<style >
</style>