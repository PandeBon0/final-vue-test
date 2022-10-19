<template>
  <div 
    class="flex flex-col" 
  >
    <label 
      for="usuario" 
    >
      Correo electrónico
    </label>
    <input 
      type="text" 
      id="usuario" 
      class="border rounded border-slate-300 h-15" 
      v-model="usuario"
      @blur="v$.usuario.$touch()"
    >
    <div v-if="v$.usuario.$error" class="text-red-500 italic">
      <p v-if="v$.usuario.required">El campo es obligatorio</p>
      <p v-else-if="v$.usuario.email">Ingrese un correo válido</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import { required, email } from '@vuelidate/validators'
import { computed, ref } from 'vue';
import useVuelidate from '@vuelidate/core'

const usuario = ref('');

const validations = computed(() => {
  return {
    usuario: {
      required,
      email,
    }
   }
});

const v$ = useVuelidate(validations, { usuario }); 

</script>

<style lang="scss" scoped>
</style>