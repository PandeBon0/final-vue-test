<template>
  <div 
    class="flex flex-col" 
  >
    <label 
      for="password" 
    >
      Password
    </label>
    <input 
      type="text" 
      id="password" 
      class="border rounded border-slate-300 h-15" 
      v-model="password"
      @blur="v$.password.$touch()"
    >
    <div v-if="v$.password.$error" class="text-red-500 italic">
      <p v-if="v$.password.required">El campo es obligatorio</p>
      <p v-else-if="v$.password.minLength">Mínimo 8 caracteres</p> 
      <p v-else-if="v$.password.containsUppercase">Debe tener al menos una mayúscula</p> 
      <p v-else-if="v$.password.containsLowercase">Debe tener al menos una minúscula</p> 
      <p v-else-if="v$.password.containsNumber">Debe tener al menos un número</p> 
      <p v-else-if="v$.password.containsSpecial">Debe tener al menos un carácter especial</p> 
      
    </div>
  </div>
</template>

<script setup lang="ts">

import { required, minLength } from '@vuelidate/validators'
import { computed, ref } from 'vue';
import useVuelidate from '@vuelidate/core'

const password = ref('');


const validations =  computed(() => {
  return {
    password: {
      required,
      minLength: minLength(8),  
      containsUppercase: function(value: string) {
        return !/[A-Z]/.test(value)
      },
      containsLowercase: function(value: string) {
        return !/[a-z]/.test(value)
      },
      containsNumber: function(value: string) {
        return !/[0-9]/.test(value)
      },
      containsSpecial: function(value: string) {
        return !/[#?!@$%^&*-]/.test(value)
      }
  }
  }
}) 

const v$ = useVuelidate(validations, { password }) 

</script>

<style lang="scss" scoped>
</style>