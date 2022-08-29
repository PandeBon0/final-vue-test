<template>
  <div class="flex flex-row" >
    <div class=" bg-white flex width: 100% ">
      <img 
        class=" bg-white-500 p-4 m-2 gap-1 border-2 rounded border-slate-50 shadow-md object-scale-down"
        src="@/assets/DashboardImages/NoPathcopia(8).png"
      >
      <div class="my-12">
        <div class="flex-col text-left mt-12">
          <h2 class="font-semibold">
            Del campo Express
          </h2>
          <h2 class="text-sm">
            Url de mi tienda en línea
          </h2>
          <div class="flex flex-row" >
            <h2 class="text-sm text-cyan-600">
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
    <div class="grid grid-cols-6 grid-rows-5 items-center ml-5 mt-8 text-sm text'left
      border border-transparent border-l-slate-200">
      <h2 class="ml-12  font-semibold col-span-3 row-span-1">
        Completa tu cuenta {{numericProgress}} 
      </h2>
      <div class="w-full -ml-10 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 col-span-3 row-span-1">
        <div 
          id="progressBar" 
          class="bg-blue-600 h-2.5 rounded-full " 
          style="width: 25%"
        >
        </div>
      </div>
      <img 
        class="bg-white-500 mt-6 ml-12 w-128 h-4  col-span-1" 
        src="@/assets/DashboardImages/Trazado1232.png"
      >
      <div class="container">
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
      </div>
      <img 
        id="checkPicture"
        class="bg-white-500 mt-6 ml-7 w-128 h-4 col-span-1 invisible" 
        src="@/assets/DashboardImages/Trazado1235.png"
      >
      <img 
        class="bg-white-500 mt-5 ml-12 w-128 h-4  col-span-1" 
        src="@/assets/DashboardImages/Trazado1233.png"
      >
      <h2 class=" mt-5 -ml-7 col-span-1 text-slate-400">
        Definir logo y colores
      </h2>
      <img  
        class=" bg-white-500 mt-5 ml-8 w-128 h-4 col-span-1 visible" 
        src="@/assets/DashboardImages/Trazado1235.png"
      >
      <img 
        class="bg-white-500 mt-1 ml-12 w-128 h-4 col-span-1" 
        src="@/assets/DashboardImages/Grupo1826.png"
      >
      <h2 class=" mt-1 -ml-7 col-span-2 text-left ">
        Definir cobertura envíos
      </h2>     
      <img 
        class="bg-white-500 mt-1 ml-12 w-128 h-4  col-span-1" 
        src="@/assets/DashboardImages/Trazado1236.png"
      >
      <h2  
        class=" mt-1 -ml-7 col-span-1 text-slate-400"
      >
        Personalizar plantilla
      </h2>
      <img 
        class="bg-white-500 mt-1 ml-8 w-128 h-4 col-span-1 visible" 
        src="@/assets/DashboardImages/Trazado1235.png"
      >
      <img 
        class="bg-white-500 -mt-4 ml-12 w-128 h-4  col-span-1" 
        src="@/assets/DashboardImages/Trazado1238.png"
      >
      <h2 class=" -mt-4 -ml-7 col-span-2 text-left ">
        Agregar método de pago
      </h2>
      <img 
        class="bg-white-500 -mt-4 ml-12 w-128 h-4  col-span-1" 
        src="@/assets/DashboardImages/megaphone.png"
      >
      <h2 class=" -mt-4 -ml-7 col-span-2 text-left ">
        Activar campañas
      </h2>
      <img 
        class="bg-white-500 -mt-9 ml-12 w-128 h-4  col-span-1" 
        src="@/assets/DashboardImages/Trazado1239.png"
      >
      <h2 class=" -mt-9 -ml-7 col-span-2 text-left ">
        Establecer dominio
      </h2>
      <img 
        class="bg-white-500 -mt-9 ml-12 w-128 h-4  col-span-1" 
        src="@/assets/DashboardImages/Trazado1138.png"
      >
      <h2 class=" -mt-9 -ml-7 col-span-2 text-left ">
        Completar documentos
      </h2>
    </div>
  </div>
</template>

<script>
import PageModal from "@/pages/PageModal.vue";
import {ref} from "vue";

export default {
  components: {PageModal},
    data() {
    return {
      fechas:'',
      numericProgress:'(2/8)',
    };
  },
  setup(){
    const isOpen = ref(false)
    return {isOpen}
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

<style scoped>
</style>