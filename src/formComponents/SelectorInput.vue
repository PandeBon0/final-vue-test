<template>

<div class="flex flex-col">
  <label 
      for="{{ id }}" 
    >
      {{ labelText }}
    </label>
  <select 
    id="{{ id }}"
    v-model="propertyName"
    @blur="v$.propertyName.$touch()"
    @change="updateValue($event)"
    class="border rounded border-slate-300 h-8  w-10/12 text-slate-400 mr-9 my-0.5 "
  >
    <option value="">Seleccione {{ labelText }}</option>
    <option value="{{ option1 }}">{{ option1 }}</option>
    <option value="{{ option1 }}">{{ option2 }}</option>
    <option value="{{ option1 }}">{{ option3 }}</option>
  </select>
  <p v-if="v$.propertyName.required && v$.propertyName.$error" 
  class="text-red-500 italic">El campo es obligatorio</p>
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
    }
   }
});

const v$ = useVuelidate(validations, { propertyName }); 

const emit = defineEmits(['update:modelValue']);

function updateValue (event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value)
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
  option1: {
    type: String,
    required: false
  },
  option2: {
    type: String,
    required: false
  },
  option3: {
    type: String,
    required: false
  },
  
});

</script> 

<style lang="scss" scoped>
</style>