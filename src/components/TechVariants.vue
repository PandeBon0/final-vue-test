<template>
<div class="grid grid-cols-2 border border-transparent border-b-slate-400">
    <label for="marca">
      Marca
    </label>
    <select 
      id="marca" 
      v-model="formValues.marca"
    >
      <option value=""></option>
      <option value="samsung">Samsung</option>
      <option value="apple">Apple</option>
      <option value="xiaomi">Xiaomi</option>
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
    <label for="seccion">
      Sección
    </label>
    <select 
      id="seccion" 
      v-model="formValues.seccion"
    >
      <option value=""></option>
      <option value="juegos">Juegos</option>
      <option value="hogar">Hogar</option>
      <option value="industria">Industria</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formValues:{    
        marca:'',
        color:'',
        seccion:'',
      }
    }
  }    
}
</script>

<style scoped>
</style>