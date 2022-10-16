<template>
  <div class="flex flex-col">
            <label for="comida">
              COMIDA
            </label>
            <input 
              type="text" 
              id="comida" 
              class="border rounded border-slate-300 h-15" 
              v-model="formValues.comida"
              @blur="v$.formValues.comida.$touch()"
             
            >
           
            <div v-if="v$.formValues.comida.$error" class="text-red-500 italic">
              <p v-if="v$.formValues.comida.required">El campo es obligatorio</p>
              <p v-else-if="v$.formValues.comida.maxLength">El campo es demasiado extenso</p>
            </div>
            
          </div>  
</template>

<script >
import useVuelidate from '@vuelidate/core'
import { required, maxLength, integer, between, minLength } from '@vuelidate/validators'
  export default {
    data() {
    return {
      fechas: "",
      numericProgress: "(2/8)",
      formValues: {
        comida: "",
       
      }
    };
  },
  validations () {
    return {
      formValues: {
        
        comida: {
          required,
          maxLength: maxLength(50),
        },
        
      }
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  methods: {
    onchange(event){
       this.$emit('newPropertyName', this.formValues.comida);
  }
  },
  }
</script>

<style lang="scss" scoped>

</style>