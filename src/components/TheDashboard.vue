<template>
    <div class="flex justify-evenly items-center
     bg-white border-2 border-dbGreyBorder mt-8 mx-12 font-openSans h-56" >
      <div class=" flex items-center">
        <img 
          class="  p-4 m-2  border-2 rounded border-slate-50 shadow-md  "
          src="@/assets/DashboardImages/NoPathcopia(8).png"
        >
        <div class="my-12 ml-3" >
          <div class="flex-col text-left mt-12">
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
                class="bg-white-500 mx-2 mt-0 w-128 h-5 my-12" 
                src="@/assets/DashboardImages/filecopy.png"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 grid-rows-5 items-center ml-6 mt-8 text-base text-left
        border border-transparent border-l-dbGreyBorder">
        <h2 class="ml-24  font-semibold col-span-3 row-span-1 text-lg">
          Completa tu cuenta {{numericProgress}} 
        </h2>
        <div class=" -ml-10 bg-bgGrey rounded-full w-96  col-span-3 row-span-1 h-3.5">
          <div 
            id="progressBar" 
            class="bg-progressBarBlue h-3.5 rounded-full " 
            style="width: 25%"
          >
          </div>
        </div>
        <img 
          class="bg-white-500 mt-6 ml-8 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1232.png"
        >
        
          <div class="content">
            <button 
              @click="isOpen = true" 
              class=" mt-6 -ml-7 mr-3 col-span-1 text-left"
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
          class="bg-white-500 mt-6 ml-0 w-0 h-4 col-span-1 invisible object-scale-down" 
          src="@/assets/DashboardImages/Trazado1235.png"
        >
        <img 
          class="bg-white-500 mt-5 ml-0 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1233.png"
        >
        <h2 class=" mt-5 -ml-16 col-span-1 text-slate-400">
          Definir logo y colores
        </h2>
        <img  
          class=" bg-white-500 mt-5 ml-8 w-128 h-4 col-span-1 visible object-scale-down" 
          src="@/assets/DashboardImages/Trazado1235.png"
        >
        <img 
          class="bg-white-500 mt-1 ml-8 w-128 h-4 col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Grupo1826.png"
        >
        <h2 class=" mt-1 -ml-7 col-span-2 text-left ">
          Definir cobertura envíos
        </h2>     
        <img 
          class="bg-white-500 mt-1 ml-0 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1236.png"
        >
        <h2  
          class=" mt-1 -ml-16 col-span-1 text-slate-400"
        >
          Personalizar plantilla
        </h2>
        <img 
          class="bg-white-500 mt-1 ml-8 w-128 h-4 col-span-1 visible object-scale-down" 
          src="@/assets/DashboardImages/Trazado1235.png"
        >
        <img 
          class="bg-white-500 -mt-4 ml-8 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1238.png"
        >
        <h2 class=" -mt-4 -ml-7 col-span-2 text-left ">
          Agregar método de pago
        </h2>
        <img 
          class="bg-white-500 -mt-4 ml-0 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/megaphone.png"
        >
        <h2 class=" -mt-4 -ml-16 col-span-2 text-left ">
          Activar campañas
        </h2>
        <img 
          class="bg-white-500 -mt-9 ml-8 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1239.png"
        >
        <h2 class=" -mt-9 -ml-7 col-span-2 text-left ">
          Establecer dominio
        </h2>
        <img 
          class="bg-white-500 -mt-9 ml-0 w-128 h-4  col-span-1 object-scale-down" 
          src="@/assets/DashboardImages/Trazado1138.png"
        >
        <h2 class=" -mt-9 -ml-16 col-span-2 text-left ">
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