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
    <label for="genero">
      Género
    </label>
    <select 
      id="genero" 
      v-model="formValues.genero"
    >
      <option value=""></option>
      <option value="masculino">Masculino</option>
      <option value="feminino">Femenino</option>
    </select>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formValues:{
        talla:'',
        color:'',
        genero:'',
      }
    }
  }  
}
</script>

<style scoped>
</style>