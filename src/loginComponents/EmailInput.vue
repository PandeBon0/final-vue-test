<template>
  <div 
    class="flex flex-col" 
  >
    <label class="ml-4 md:ml-8"
      for="usuario" 
    >
      Correo electrónico
    </label>
    <input 
      type="text" 
      id="usuario" 
      class="border rounded border-slate-300 h-15 w-3/4 ml-4 md:ml-8" 
      v-model="usuario"
      @blur="v$.usuario.$touch()"
      @input="updateValue($event)"
    >
    <div v-if="v$.usuario.$error" class="text-red-500 italic font-thin text-xs w-3/4 ml-4 md:ml-8">
      <p v-if="v$.usuario.required">El campo es obligatorio</p>
      <p v-else-if="v$.usuario.email">Ingrese un correo válido</p>
    </div>
  </div>
  <!-- <div><p>Este es el valor en el componente {{ value }}</p></div> -->
</template>

<script setup lang="ts">

import { required, email } from '@vuelidate/validators'
import { computed, ref } from 'vue';
import useVuelidate from '@vuelidate/core'
import { is } from '@babel/types';

const usuario = ref('');

const validations = computed(() => {
  return {
    usuario: {
      required,
      email,
    }
   }
});

// var value: boolean =  false;

const v$ = useVuelidate(validations, { usuario }); 

const emit = defineEmits(['update:modelValue']);

function updateValue (event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value)
}



// function isValidated (): void {
  
//   if (v$.value.$invalid){
//     value = true
//     emit('comida')
//   }
// };

</script>

<style lang="scss" scoped>
</style>