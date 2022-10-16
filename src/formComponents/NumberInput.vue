<template>
   <div class="flex flex-col">
    <label 
      for="{{ id }}" 
    >
      {{ labelText }}
    </label>
    <input 
      type="number" 
      v-model="propertyName"
      @blur="v$.propertyName.$touch()"
      @input="updateValue($event)"
      id="{{ id }}"
      class="border rounded border-slate-300 h-8 mr-2 my-0.5 w-10/12 gap-4" 
    >
    <div v-if="v$.propertyName.$error" class="text-red-500 italic ">
      <p v-if="v$.propertyName.required">El campo es obligatorio</p>
      <p v-else-if="v$.propertyName.maxLength">El tamaño del campo es excesivo</p>
       <p v-else-if="isNumber(propertyName) === false && (typeof(propertyName) !== 'number')">
        El campo debe ser numerico
      </p> 
    </div>
  </div> 

</template>

 <script setup lang="ts">

import { required, maxLength } from '@vuelidate/validators'
import { computed, ref } from 'vue';
import useVuelidate from '@vuelidate/core'


const propertyName = ref('');

const validations = computed(() => {
  return {
    propertyName: {
      required,
      maxLength: maxLength(parseToInt(props.maxLength)),
    }
   }
});

const v$ = useVuelidate(validations, { propertyName }); 

const emit = defineEmits(['update:modelValue']);

function updateValue (event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value)
}

function parseToInt (str: String) {
  var num: number = +str;
  return num
}

function isNumber (str: string): boolean {
  if (typeof str !== 'string') {
    return false;
  }

  if (str.trim() === '') {
    return false;
  }

  return !Number.isNaN(Number(str));
}

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  labelText: {
    type: String,
    required: true,
  },
  maxLength:{
    type: String,
    required: true,
  },
});

</script> 

<style lang="scss" scoped>
</style>