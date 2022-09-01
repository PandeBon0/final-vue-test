<template>
<div class="grid grid-cols-2 border border-transparent border-b-slate-400">
            <label for="talla">
              Talla
            </label>
            <select 
              id="talla" 
              v-model="formValues.talla"
            >
              <option value=""> </option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
            </select>
          </div>
          <br>
          <div class="grid grid-cols-2 border border-transparent border-b-slate-400">
            <label for="color">
              Color
            </label>
            <select 
              id="color" 
              v-model="formValues.color"
            >
              <option value=""></option>
              <option value="rojo">Rojo</option>
              <option value="amarillo">Amarillo</option>
              <option value="verde">Verde</option>
              <option value="azul">Azul</option>
            </select>
          </div>
          <br>
          <div class="grid grid-cols-2 border border-transparent border-b-slate-400">
            <label for="sabor" class="">
              Sabor
            </label>
            <select 
              id="sabor" 
              v-model="formValues.sabor"
            >
              <option value=""></option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
              <option value="acido">Acido</option>
            </select>
          </div>
</template>

<script>
  export default {
    data () {
      return {
        formValues: {
          talla: "",
          color: "",
          sabor: "",
        }
      }
    },
    methods: {
      returnVariants () {
        return this.formValues;
      }
    }
    // methods: {
    //   submitForm() {
    //   event.preventDefault();
    //   console.log("Form values", this.formValues);
    //   this.$refs.productsListForm.reset();
    //   },
    // }
    
    
    
  }
</script>

<style scoped>

</style>