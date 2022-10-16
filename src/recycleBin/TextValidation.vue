<template>
  <div class="flex flex-col">
    <label 
      for="{{ id }}" 
    >
      {{ labelText }}
    </label>
    <input 
      v-if="inputType === 'text'"
      type="text" 
      id="{{ id }}" 
      class="border rounded border-slate-300 h-15" 
      v-model="propertyName"
      
     
    >
    <!-- :class="{error: shouldAppendErrorClass(v$.propertyName), 
        valid: shouldAppendValidClass(v$.propertyName) }" -->

        
  </div>
</template>

<!-- <script setup lang="ts">

// import { required, maxLength } from '@vuelidate/validators'

// const validations = computed(() => {
//   return {
//     propertyName: {
//       required,
//       maxLength: maxLength(50),
//     }
//   }
// });

// const propertyName = ref('');

// const v$ = useVuelidate(); 
//it wasn't possible to pass as param the validations,
//propertyName type isn't compatible with GlobalConfig type
  
// const props = defineProps({
//   id: {
//     type: String,
//     required: true,
//   },
//   labelText: {
//     type: String,
//     required: true,
//   },
//   // blur: {
//   //   type: Boolean,
//   //   required: true,
//   //   default: false
//   // },
//   inputType: {
//     type: String,
//     required: true,
//   }

// });

// const shouldAppendValidClass = (field) => {
//   return !field.$invalid && field.$model && field.$dirty
// }
// const shouldAppendErrorClass = (field) => {
//   return field.$error
// }    
  
</script> -->

<script lang="ts">
import { required, maxLength } from '@vuelidate/validators'
import { computed, ref } from 'vue';
import useVuelidate from '@vuelidate/core'

export default {
  data () {
    return {
      propertyName: "",
    }
  },
  // validations () {
  //   return {
  //     propertyName: {
  //       required: true,
  //       maxLength: maxLength(50),
  //     },  
  //   }
  // },
  props: {
    id: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
    // blur: {
    //   type: Boolean,
    //   required: true,
    //   default: false
    // },
    inputType: {
      type: String,
      required: true,
    }
  },
  // methods: {
  //   onChange(event: Event){
  //     this.$emit('newPropertyName', this.propertyName);
  //   }
  // },
  // setup () {
  //   return { v$: useVuelidate() }
  // },
}
</script>  

<style lang="scss" scoped>

</style>