<template>
  <div class="flex flex-col">
    <label 
      for="{{ id }}" 
    >
      {{ labelText }}
    </label>
    <div v-if="type==='number'">
      <input 
        id="{{ id }}"
        v-model="propertyName"
        @blur="v$.propertyName.$touch()" 
        type="number"
        class="border rounded border-slate-300 h-8  w-10/12 mr-2 my-0.5 gap-4" 
        :class="{error: shouldAppendErrorClass(v$.propertyName), 
        valid: shouldAppendValidClass(v$.propertyName) }"
      >
      <!--@change="emit(modifyPropertyName)" can't be click, need to create two way binding-->
      <div v-if="v$.propertyName.$error" class="text-red-500 italic">
        <p v-if="v$.propertyName.required">El campo es obligatorio</p>
        <p v-else-if="v$.propertyName.integer">El campo debe ser numerico</p>
        <p v-else-if="v$.propertyName.between">Ingrese un valor correcto</p>               
      </div>        
    </div>
    <div v-else-if="type === 'selectorValidation'" class="flex flex-col">  
      <select 
        id="{{ id }}" 
        v-model="propertyName"
        @blur="v$.propertyName.$touch()"
        class="border rounded border-slate-300 h-8  w-10/12 text-slate-400 mr-9 my-0.5 "
      >
        <option value="">Seleccione {{ labelText }}</option>
        <option value="{{ option1 }}">{{ option1 }}</option>
        <option value="{{ option1 }}">{{ option2 }}</option>
        <option value="{{ option1 }}">{{ option3 }}</option>
      </select>
      <p v-if="v$.propertyName.required && v$.propertyName.$error" 
        class="text-red-500 italic"
      >
        El campo es obligatorio
      </p>     
    </div>
    <div v-else-if="type === 'text'" class="flex flex-col">
      <input 
        id="{{ id }}"
        v-model="propertyName"
        @blur="v$.propertyName.$touch()" 
        type="text" 
        class="border rounded border-slate-300 h-15" 
        :class="{error: shouldAppendErrorClass(v$.propertyName), 
          valid: shouldAppendValidClass(v$.propertyName) }"
      >
      <div v-if="v$.propertyName.$error" class="text-red-500 italic">
        <p v-if="v$.propertyName.required">El campo es obligatorio</p>
        <p v-else-if="v$.propertyName.maxLength">El campo es demasiado extenso</p>
      </div>  
    </div>
    <div v-else class="flex flex-col">
      <!-- doesnt validate nothing else, but should render a text field -->
    </div>
  </div>

</template>

<script setup >
import { required } from '@vuelidate/validators';

const propertyName = "";

const props = defineProps({
  type: {
    type: 'text' | 'number' | 'selector', 
    required: true
  },
  id: {
    type: String,
    required: true
  },
  blur: {
    type: Boolean,
    required: true,
    default: false
  },
  labelText: {
    type: String,
    required: true
  },
  option1: {
    type: Number | string,
    required: false
  },
  option2: {
    type: String | Number,
    required: false
  },
  option3: {
    type: String | Number,
    required: false
  },
  validation: {
    type: 'between' | 'maxSize' | 'justText',
    required: false
  }

})

const validations = (validation, maxSize, minSize) => { 
  //how do we bind the prop to the parameter?
  //this.$props.validation doesn't work
    if(validation === 'between'){
      return{
        between: {
          required: true,
          type: Number,
          between: between(minSize,maxSize),
        },
      }
    }
    else if (validation === 'maxSize') {
      return {
        maxSize: {
          required: false,
          type: Number,
          maxLength: maxLength(maxSize),
        },
      }
    }
    else {
      return {
        emptyField: {
          required: false,
        },
      }
    } 
  }

  const shouldAppendValidClass = (field) => {
      return !field.$invalid && field.$model && field.$dirty
  }
  const shouldAppendErrorClass = (field) => {
      return field.$error
  }


</script>

<style lang="scss" scoped>

</style>




