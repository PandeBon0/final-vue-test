<template>

<div class="flex flex-col
  justify-evenly items-center text-center
bg-white border-2 border-dbGreyBorder  mt-4 mx-12 font-openSans h-120 sm:h-107 md:h-105  lg:h-88">

  <div class="grid grid-cols-1 text-center grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 sm:justify-between 
    sm:space-x-0 md:space-x-48 lg:space-x-64 xl:space-x-100 lg:-mt-32
   md:-mt-36  
   -mt-12
   sm:-mt-32
   ">
    <h2 class="font-bold text-lg sm:text-left ">Estadísticas</h2>
    <div class="border-2 rounded border-slate-60 shadow-md text-sm p-0.5 mx-8 justify-end items-end">
      <label 
        for="tiempo" 
      >
      </label>
      <select id="tiempo" >
        <option value="">Seleccionar una fecha</option>
        <option value="ultimos 7 dias">Últimos 7 días</option>
        <option value="ultimo mes">Último mes</option>
        <option value="ultimo year">Último año</option>
      </select>
    </div>

  </div>

         
  <div class=" 
    grid grid-cols-1
    sm:grid-cols-2  
    lg:flex text-left ml-20 
    -mt-48
    md:-mt-28
    lg:h-20 lg:-mt-32   ">

  <div class="grid grid-rows-2 md:mt-0 mt-32  ">
    <div class="grid grid-cols-2">
      <p>Visitas</p>
      <img 
        class="mx-3 mt-0 w-128 h-5 my-12 object-scale-down -ml-28 invisible lg:visible  " 
        src="@/assets/StatisticsImages/Trazado1015.png"
      >
    </div>
    <BarChart />
  </div> 
  <div class="grid grid-rows-2 md:mt-0 mt-32 ">
    <div class="grid grid-cols-2">
      <p>Conversiones</p>
      <img 
        class="mx-3 mt-0 w-128 h-5 my-12 object-scale-down  lg:-ml-20 invisible lg:visible " 
        src="@/assets/StatisticsImages/Trazado1015.png"
      >
    </div>
    <BarChart />
  </div> 
  <div class="grid grid-rows-2 mt-32 lg:mt-0  ">
    <div class="grid grid-cols-2">
      <p>Taza de conversión</p>
      <img 
        class="mx-3  mt-0 w-128 h-5 my-12 object-scale-down -ml-14 invisible lg:visible" 
        src="@/assets/StatisticsImages/Trazado1015.png"
      >
    </div>
    <BarChart />
  </div> 
  <div class="grid grid-rows-2 mt-32 lg:mt-0  ">
    <div class="grid grid-cols-2">
      <p>Ventas</p>
      <img 
        class="mx-3  mt-0 w-128 h-5 my-12 object-scale-down -ml-28 invisible lg:visible" 
        src="@/assets/StatisticsImages/Trazado1015.png"
      >
    </div>
    <BarChart />
  </div> 
     
        
</div>
</div>





   
<!--
      <div class="grid grid-rows-2 ">
        <div class="grid grid-cols-2">
          <p>Visitas</p>
          <img 
            class="mx-3 mt-0 w-128 h-5 my-12 object-scale-down" 
            src="@/assets/StatisticsImages/Trazado1015.png"
          >
        </div>
        <BarChart />
      </div>
      <div class="grid grid-rows-2 ">
        <div class="grid grid-cols-2">
          <p>Conversiones</p>
          <img 
            class="mx-3 mt-0 w-128 h-5 my-12 object-scale-down" 
            src="@/assets/StatisticsImages/Trazado1015.png"
          >
        </div>
        <BarChart />
      </div>
      <div class="grid grid-rows-2 ">
        <div class="grid grid-cols-2">
          <p>Taza de conversión</p>
          <img 
            class="mx-3 mt-0 w-128 h-5 my-12 object-scale-down" 
            src="@/assets/StatisticsImages/Trazado1015.png"
          >
        </div>
        <BarChart />
      </div>
      <div class="grid grid-rows-2 ">
        <div class="grid grid-cols-2">
          <p>Ventas</p>
          <img 
            class="mx-3 mt-0 w-128 h-5 my-12 object-scale-down" 
            src="@/assets/StatisticsImages/Trazado1015.png"
          >
        </div>
        <BarChart />
      </div> 
    </div>
    

  </div> -->
</template>

<script>
import BarChart from '@/components/BarChart.vue';
  export default {
    components: { BarChart }
}
</script>

<style scoped>

</style>