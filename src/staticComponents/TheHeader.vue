<template>
  <nav class="bg-white md:flex md:justify-evenly 
  md:items-center border-b-2 border-thGreyBorder
  font-openSans h-20   grid

  
  ">
  <img class=" bg-white-500 p-4 m-2 gap-1 invisible md:visible " src="@/assets/HeaderImages/Trazado1820.png">
    <img class="bg-white-500 p-4 mr-2 w-48 md:w-52 gap-1 -mt-14 ml-10 md:mt-1 md:ml-0" src="@/assets/HeaderImages/Grupo1528.png">
    <div class="flex items-center border rounded border-r-slate-300 -mt-[3.25rem] ml-60 md:mt-11 md:ml-0
     hover:border-indigo-300 w-1/3 md:w-96 h-9 md:mx-20 md:my-10">
      <img class="   bg-white-500 p-0 ml-2 w-6 h-8 object-scale-down" src="@/assets/HeaderImages/lupa.png">
      <input class="  w-28 h-8 p-4 m-0 object-scale-down" placeholder="Búsqueda">

    </div>
    <div class="flex items-center justify-between">
      <!-- Mobile menu button -->
      <div @click="showMenu = !showMenu" class="flex md:hidden -mt-[5.5rem]">
        <button type="button" class="
        text-gray-800
        hover:text-gray-400
          focus:outline-none focus:text-gray-400
        ">
          <svg viewBox="0 0 24 24" class="w-6 h-6 mt-5 ml-5 fill-current">
            <path fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
            </path>
          </svg>
        </button>
      </div>
    </div>

    
    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          ">
      <li>
        <img class="bg-white-500 p-0 m-0   " src="@/assets/HeaderImages/Trazado1292.png">
        <h2 class="text-sm my-12 ">
          Ver Sitio
        </h2>
      </li>
      <li>

      <img class="bg-white-500 p-4 ml-6 gap-1  " src="@/assets/HeaderImages/Trazado911.png">
      </li>
      <li class="flex">
        <img class="bg-white-500 pl-7 gap-1 ml-2 mr-4 h-10 mt-10 
        border border-transparent border-l-thGreyBorder visible object-contain"
          src="@/assets/HeaderImages/christopher-campbell-28567-unsplash.png">
        <div class="flex-col my-10">
          <h2 class="font-semibold text-base">
            Andrés Suarez
          </h2>
          <h2 class="text-sm">Administrador</h2>
        </div>
        <img class="bg-white-500 p-1 mr-5 gap-1 ml-3 mt-0 object-scale-down " 
        src="@/assets/HeaderImages/Trazado914.png">
      </li>

    </ul>


  </nav>



</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
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