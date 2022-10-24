<template>
  <div 
    class="flex flex-col" 
  >
    <label class="ml-4 md:ml-8"
      for="password" 
    >
      Password
    </label>
    <input 
      type="text" 
      id="password" 
      class="border rounded border-slate-300 h-15 w-3/4 ml-4 md:ml-8" 
      v-model="password"
      @blur="v$.password.$touch()"
      @input="updateValue($event)"
    >
    <div v-if="v$.password.$error" class="text-red-500 italic font-thin text-xs w-3/4 ml-4 md:ml-8">
       <p v-if="v$.password.required">6 carácteres, una mayúscula, una minúscula, un número y un carácter especial</p>
       <p v-else-if="v$.password.minLength">Mínimo 6 caracteres</p> 
       <p v-else-if="v$.password.containsPasswordRequirement"></p> 

      <!-- <p v-else-if="v$.password.containsUppercase">Debe tener al menos una mayúscula</p> 
      <p v-else-if="v$.password.containsLowercase">Debe tener al menos una minúscula</p> 
      <p v-else-if="v$.password.containsNumber">Debe tener al menos un número</p> 
      <p v-else-if="v$.password.containsSpecial">Debe tener al menos un carácter especial</p>   -->
      
    </div>
  </div>
</template>

<script setup lang="ts">

import { required, minLength, helpers } from '@vuelidate/validators'
import { computed, ref } from 'vue';
import useVuelidate from '@vuelidate/core'

const password = ref('');


const validations =  computed(() => {
  return {
  //   password: {
  //     required,
  //     minLength: minLength(8),  
  //     containsUppercase: function(value: string) {
  //       return !/[A-Z]/.test(value)
  //     },
  //     containsLowercase: function(value: string) {
  //       return !/[a-z]/.test(value)
  //     },
  //     containsNumber: function(value: string) {
  //       return !/[0-9]/.test(value)
  //     },
  //     containsSpecial: function(value: string) {
  //       return !/[#?!@$%^&*-]/.test(value)
  //     }
  // },
  password: {
        required,
        minLength: minLength(6),
        containsPasswordRequirement: helpers.withMessage(
          () => `The password requires an uppercase, lowercase, number and special character`, 
          (value: string) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*'\-])/.test(value)
        ),
      },
  }
}) 

const v$ = useVuelidate(validations, { password })  

const emit = defineEmits(['update:modelValue']);

function updateValue (event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value)
}

</script>

<style lang="scss" scoped>
</style>