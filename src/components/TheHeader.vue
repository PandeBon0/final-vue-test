<template>
  <div class="bg-white flex justify-evenly 
  items-center border-b-2 border-thGreyBorder
  font-openSans h-20 lg:w-85 ">
    <img 
      class=" bg-white-500 p-4 m-2 gap-1  " 
      src="@/assets/HeaderImages/Trazado1820.png"
    >
    <img 
      class="bg-white-500 p-4 mr-2 gap-1  " 
      src="@/assets/HeaderImages/Grupo1528.png"
    >
    <div class="flex items-center border rounded border-r-slate-300
     hover:border-indigo-300 w-96 h-9 mx-20 my-10">
      <img 
        class="   bg-white-500 p-0 ml-2 w-6 h-8 object-scale-down" 
        src="@/assets/HeaderImages/lupa.png"
      >
      <input 
        class="   w-96 h-8 p-4 m-0 " 
        placeholder="Búsqueda"
      >
    </div>
    <img 
      class="bg-white-500 p-0 m-0   " 
      src="@/assets/HeaderImages/Trazado1292.png"
    >
    <h2 class="text-sm my-12 ">
      Ver Sitio
    </h2>
    <img 
      class="bg-white-500 p-4 ml-6 gap-1  " 
      src="@/assets/HeaderImages/Trazado911.png"
    >
    
    <img 
      class="bg-white-500 pl-7 gap-1 ml-2 border border-transparent border-l-thGreyBorder "
      src="@/assets/HeaderImages/christopher-campbell-28567-unsplash.png"
    >
    <div class="flex-col my-10">
      <h2 class="font-semibold text-base">
        Andrés Suarez
      </h2>
      <h2 class="text-sm">Administrador</h2>
    </div>
    <img 
      class="bg-white-500 p-1 mr-5 gap-1 mx-0  " 
      src="@/assets/HeaderImages/Trazado914.png"
    >
  </div>
</template>

<script>
  export default {
  }
</script>



<!--
Primero fue ver si el problema estaba relacionado con la instalacion de tailwind
segundo fue ver dado que yo lo habia hecho con vue cli si el procedimiento fue mal hecho
asi que se reintalo el vue/cli pero corrigiendo la configuracion que podria hacer falta
pero que configuracion hacia falta? la del plugin de vue cli tailwind
o sea al corregir la intalacionde vue cli por una mejor (con plugin)
aparecieron los errores respectivos de que hacia falta el postcss config
lo siguiente fue hacer esa instalacion como lo venia diciendo 
y la hacerla aparecio el problema de que vue cli necesitaba incluir una version especifica
de postconfig css, y luego al buscar el error aparecieron las soluciones
que era instalar esa version en especifico y asi se corrigio todo,
ah y lo ultimo de que aparecian errores en el styles.css simplemente habia que ignorarlos
en la configuracion del visual studio code para que no molestaran en la compilacion
y ya 

-->