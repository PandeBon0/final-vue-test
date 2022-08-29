<template>
  <div class="grid grid-cols-2 border border-transparent border-b-slate-400">
    <label for="empaquetado">
      Empaquetado
    </label>
    <select 
      id="empaquetado" 
      v-model="formValues.empaquetado"
    >
      <option value=""> </option>
      <option value="si">SI</option>
      <option value="no">NO</option>
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
  data() {
    return {
      formValues:{
        empaquetado:'',
        color:'',
        sabor:'',
      }
    }
  }
}
</script>

<style scoped>
</style>