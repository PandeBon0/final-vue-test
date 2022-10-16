<template>
  
  <div class="flex flex-col" >
    <label 
      for="{{ id }}" 
    >
      {{ labelText }}
    </label>
    <textarea 
      type="text" 
      id="{{ id }}" 
      class="border rounded border-slate-300 h-15"
      v-model="propertyName"
      @blur="v$.propertyName.$touch()"
      @input="updateValue($event)"
    >
    </textarea>
    <p v-if="v$.propertyName.maxLength 
      && v$.propertyName.$error" 
      class="text-red-500 italic"
    >
      El campo no tiene el tamaño requerido
    </p>
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
      between: maxLength(parseToInt(props.maxLength)),
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

// function isRequired (inputType: String){
//   var required: Boolean = false
//   if (inputType === ('number' || 'text')){
//     required: true
//   }
//   else if (inputType === 'textarea') {
//     required: false
//   }
//   return required  
// }

// function maxLengthInputType (inputType: String): number {
//   var maxLength: number = 0
//   if(inputType === ('text')){
//     maxLength = 50
//   }
//   else if (inputType === 'number'){
//     maxLength = 10000
//   }
//   else {
//     maxLength = 500
//   }
//   return maxLength
// }

// function isNumber (str: string): boolean {
//   if (typeof str !== 'string') {
//     return false;
//   }

//   if (str.trim() === '') {
//     return false;
//   }

//   return !Number.isNaN(Number(str));
// }

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