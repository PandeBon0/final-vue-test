<template>
    <div class=" grid grid-cols-1 grid-rows-2 
      lg:flex justify-evenly items-center 
     bg-white border-2 border-dbGreyBorder  mt-8 mx-12 font-openSans md:h-103 lg:h-72 xl:h-56 h-106" >

      <!--Del Campo Express logo and Url's-->
      <div class=" flex items-center -mt-28 md:-mt-6 lg:mt-0">
        <img 
          class="  p-4 m-2  border-2 rounded border-slate-50 shadow-md  "
          src="@/assets/DashboardImages/NoPathcopia(8).png"
        >
          <div class="flex-col text-left mt-10 ml-3">
            <h2 class="font-semibold text-lg">
              Del campo Express
            </h2>
            <h2 class="text-base">
              Url de mi tienda en línea
            </h2>
            <div class="flex flex-row" >
              <h2 class="text-base text-cyan-600">
                https://delcampoexpress.viveshops.co
              </h2>
              <img 
                class="bg-white-500 -ml-56 lg:mg-0 lg:mx-3  mt-0 w-128 h-5 my-12 object-scale-down invisible md:visible" 
                src="@/assets/DashboardImages/filecopy.png"
              >
            </div>
          </div>
      </div>


      <div class="grid grid-cols-3 grid-rows-10 md:grid-cols-6 sm:grid-rows-5 items-center  -mt-48 md:-mt-36  
          lg:mt-0 text-base text-left 
        lg:border lg:border-transparent lg:border-l-dbGreyBorder lg:ml-28 lg:h-52">

      <!--These are the progress bar and the complete your account text-->
        
           <h2 class="ml-10  mt-0 font-semibold col-span-3 md:col-span-6 xl:col-span-3 row-span-1 text-lg">
          Completa tu cuenta {{numericProgress}} 
        </h2>
        <div class=" ml-10 xl:-ml-28 bg-bgGrey rounded-full  w-5/6 sm:w-29  xl:mt-0 mt-0 sm:-mt-4  col-span-3 md:col-span-6 xl:col-span-3 row-span-1 h-3.5">
          <div 
            id="progressBar" 
            class="bg-progressBarBlue h-3.5 rounded-full " 
            style="width: 25%"
          >
          </div>
        </div>
        
       


        <img 
          class="bg-white-500 mt-5 md:mt-6 -ml-4 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1232.png"
        >
        
          <div class="content">
            <button 
              @click="isOpen = true" 
              class=" mt-6 -ml-11 mr-3 col-span-1 text-left"
              id="textGrey" 
            >
              Crear Producto
            </button>
            <PageModal 
              :open="isOpen" 
              @close="isOpen=!isOpen" 
              @showProgress="showProgress()"
            />
          </div>
        
        <img 
          id="checkPicture"
          class="bg-white-500 mt-5 md:mt-6  ml-0 w-0 h-4 col-span-1 invisible object-scale-down" 
          src="@/assets/DashboardImages/Trazado1235.png"
        >
        <img 
          class="bg-white-500 mt-5 md:mt-5 -ml-4 md:-ml-16 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1233.png"
        >
        <h2 class=" mt-5 md:mt-5 -ml-11 md:-ml-22 col-span-1 text-slate-400">
          Definir logo y colores
        </h2>
        <img  
          class=" bg-white-500 mt-5 md:mt-5 -ml-16 w-128 h-5 col-span-1 visible object-none" 
          src="@/assets/DashboardImages/Trazado1235.png"
        >
        <img 
          class="bg-white-500 mt-5 md:mt-1 -ml-4 w-128 h-4 col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Grupo1826.png"
        >
        <h2 class=" mt-5 md:mt-1 -ml-11 col-span-2 text-left ">
          Definir cobertura envíos
        </h2>     
        <img 
          class="bg-white-500 mt-5 md:mt-1 -ml-4 md:-ml-16 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1236.png"
        >
        <h2  
          class=" mt-5 md:mt-1 -ml-11 md:-ml-22 col-span-1 text-slate-400"
        >
          Personalizar plantilla
        </h2>
        <img 
          class="bg-white-500 mt-5 md:mt-1 -ml-16 w-128 h-5 col-span-1 visible object-none" 
          src="@/assets/DashboardImages/Trazado1235.png"
        >
        <img 
          class="bg-white-500 mt-5 md:-mt-4 -ml-4 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1238.png"
        >
        <h2 class=" mt-5 md:-mt-4 -ml-11 col-span-2 text-left ">
          Agregar método de pago
        </h2>
        <img 
          class="bg-white-500 mt-5 md:-mt-4 -ml-4 md:-ml-16 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/megaphone.png"
        >
        <h2 class=" mt-5 md:-mt-4 -ml-11 md:-ml-22 col-span-2 text-left ">
          Activar campañas
        </h2>
        <img 
          class="bg-white-500 mt-5 md:-mt-2 lg:-mt-3 xl:-mt-9 -ml-4 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1239.png"
        >
        <h2 class=" lg:-mt-3 mt-5 md:-mt-2 xl:-mt-9 -ml-11 col-span-2 text-left ">
          Establecer dominio
        </h2>
        <img 
          class="bg-white-500 mt-5 md:-mt-2  lg:-mt-3 xl:-mt-9 -ml-4 md:-ml-16 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1138.png"
        >
        <h2 class=" mt-5 md:-mt-2 lg:-mt-3 xl:-mt-9 -ml-11 md:-ml-22 col-span-2 text-left ">
          Completar documentos
        </h2>
      </div>
    </div>
 

</template>

<script>
import PageModal from "@/pages/PageModal.vue";

export default {
  components: {PageModal},
    data() {
    return {
      fechas:'',
      isOpen: false,
      numericProgress:'(2/8)',
    };
  },
  methods: {
    showProgress() {
      document.getElementById("textGrey").style.color = "#94a3b8";
      document.getElementById("checkPicture").style.visibility = "visible";
      document.getElementById("progressBar").style.width = '42%';
      this.numericProgress='(3/8)'
    },
  },
  }
</script>

<style scoped lang="css">
.row {
  @apply w-full my-5 bg-black flex justify-between items-center;
}

.item {
  @apply w-40 h-40 bg-red-500;
}
</style>