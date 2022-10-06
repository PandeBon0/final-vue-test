<template>
  <div 
    class="modal-overlay  " 
    v-show="open"
  >
    <div class="modal-content ">
      <span 
        @click="$emit('close')" 
        class="close-button topright"
      >
        &times;
      </span>
      <div class="text-left">
        <h2 class="text-xl font-bold text-center">
          Crear producto
        </h2>
        <br>
        <h2 class="text-lg font-semibold">
          Informacion del producto
        </h2>
        <br>
        <form 
          @submit="submitForm" 
          ref="productsListForm"
        >
        <!--BEGIN FORM-->
          <div class="flex flex-col">
            <label 
              for="categoria" 
              class=""
            >
              Categoría
            </label>
            <select 
              id="categoria" 
              v-model="formValues.categoria"
              class="border rounded border-slate-300 h-15 text-slate-400"
            >
              <option value="">Seleccione una categoria</option>
              <option value="alimentos">Alimentos</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="vestimenta">Vestimenta</option>
            </select>
          </div>
          <br>
          <div class="flex flex-col">
            <label for="titulo">
              Titulo
            </label>
            <input 
              type="text" 
              id="titulo" 
              class="border rounded border-slate-300 h-15" 
              v-model="formValues.titulo"
              @blur="v$.formValues.titulo.$touch()"
              :class="{error: shouldAppendErrorClass(v$.formValues.titulo), valid: shouldAppendValidClass(v$.formValues.titulo) }"
            >
            <div v-if="v$.formValues.titulo.$error" class="text-red-500 italic">
              <p v-if="v$.formValues.titulo.required">El campo es obligatorio</p>
              <p v-else-if="v$.formValues.titulo.maxLength">El campo es demasiado extenso</p>
            </div>
            
          </div>
          <br>
          <div class="flex flex-col">
            <label 
              for="descripcion" 
              class=""
            >
              Descripcion
            </label>
            <input 
              type="text" 
              id="descripcion" 
              class="border rounded border-slate-300 h-15"
              v-model="formValues.descripcion" 
              @blur="v$.formValues.descripcion.$touch()"
              :class="{error: shouldAppendErrorClass(v$.formValues.descripcion), valid: shouldAppendValidClass(v$.formValues.descripcion) }"
            >
            
            <p v-if="v$.formValues.descripcion.maxLength && v$.formValues.descripcion.$error" 
            class="text-red-500 italic">El campo es demasiado extenso</p>

          </div>
          <br>
          <div class="flex flex-col">
            <label 
              for="descripcionPro" 
              class=""
            >
              Descripcion pro
            </label>
            <textarea 
              type="text" 
              id="descripcionPro" 
              class="border rounded border-slate-300 h-15"
              v-model="formValues.descripcionPro"
              @blur="v$.formValues.descripcionPro.$touch()" 
              :class="{error: shouldAppendErrorClass(v$.formValues.descripcionPro), valid: shouldAppendValidClass(v$.formValues.descripcionPro) }"
            >
            </textarea>
            <p v-if="v$.formValues.descripcionPro.maxLength && v$.formValues.descripcionPro.$error" 
            class="text-red-500 italic">El campo es demasiado extenso</p>
          </div>
          <br>
          <h2 class="text-xl font-bold">Variantes</h2>
          <!--VARIANTS AND SELECTORS-->
          <br>
          <!-- <DefaultVariant/> -->
          <div class="grid grid-cols-2 border border-transparent border-b-slate-400 w-11/12 ml-5">
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
          <div class="grid grid-cols-2 border border-transparent border-b-slate-400 w-11/12 ml-5">
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
          <div class="grid grid-cols-2 border border-transparent border-b-slate-400 w-11/12 ml-5">
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

          <!-- <div>
          <ClothesVariants v-if="getCategory()==='vestimenta'"/>
          <FoodVariants v-if="getCategory()==='alimentos'"/>
          <TechVariants v-if="getCategory()==='tecnologia'"/>
          <DefaultVariant v-else/>
          </div> -->

          <!-- <div class="text-center">
            <hr>
            <router-link 
              :to="{name: 'VariantSelector'}" 
              class="btn-green btn-small"
            >
              Edit Profile
            </router-link>
          </div> -->
          
          <div class="flex flex-row items-center -ml-16 justify-center">
            <img 
              class="bg-white-500 p-6   ml-10 mr-3 h-13 object-none" 
              src="@/assets/PopupImages/mas.png"
            >
            <h2 class="text-[#005CAB] font-medium	-ml-6">
              Agregar grupo de Toppings
            </h2>
          </div>
          <h2 class="text-lg	font-semibold">
            Precio y disponibilidad
          </h2>
          <br>
          <div class="grid grid-cols-2">
            <div class="flex flex-col">
              <label for="cantidad">
                Cantidad
              </label>
              <input 
                type="number" 
                v-model="formValues.cantidad"
                @blur="v$.formValues.cantidad.$touch()" 
                id="cantidad"
                class="border rounded border-slate-300 h-8  w-10/12 mr-2 my-0.5 gap-4" 
                :class="{error: shouldAppendErrorClass(v$.formValues.cantidad), valid: shouldAppendValidClass(v$.formValues.cantidad) }"
              >
              <div v-if="v$.formValues.cantidad.$error" class="text-red-500 italic">
                <p v-if="v$.formValues.cantidad.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.cantidad.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.cantidad.between">Ingrese un valor correcto</p>
                
              </div>
              
            </div>
            <div class="flex flex-col">
              <label for="sku">
                SKU
              </label>
              <input 
                type="number" 
                v-model="formValues.sku" 
                @blur="v$.formValues.sku.$touch()"
                id="sku"
                class="border rounded border-slate-300 h-8 mr-2 my-0.5 w-10/12 gap-4" 
                :class="{error: shouldAppendErrorClass(v$.formValues.sku), valid: shouldAppendValidClass(v$.formValues.sku) }"
              >
              <div v-if="v$.formValues.sku.$error" class="text-red-500 italic">
                <p v-if="v$.formValues.sku.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.sku.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.sku.maxLength">El tamaño del campo es excesivo</p>
                
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="flex flex-col">
              <label for="moneda">
                Moneda
              </label>
              <select 
                id="moneda" 
                v-model="formValues.moneda"
                @blur="v$.formValues.moneda.$touch()"
                class="border rounded border-slate-300 h-8  w-10/12 text-slate-400 mr-9 my-0.5 "
              >
                <option value="">Seleccione moneda</option>
                <option value="peso">Pesos Colombianos</option>
                <option value="dolar">Dolares</option>
                <option value="euro">Euros</option>
              </select>
              <p v-if="v$.formValues.moneda.required && v$.formValues.moneda.$error" 
              class="text-red-500 italic">El campo es obligatorio</p>
            </div>
            <div class="flex flex-col">
              <label for="precio" >Precio</label>
              <input 
                type="number" 
                v-model="formValues.precio" 
                @blur="v$.formValues.precio.$touch()"
                id="precio"
                class="border rounded border-slate-300 h-8  w-10/12  mr-2 my-0.5  gap-4" 

                :class="{error: shouldAppendErrorClass(v$.formValues.precio), valid: shouldAppendValidClass(v$.formValues.precio) }"
              >
              <div v-if="v$.formValues.precio.$error" class="text-red-500 italic">
                <p v-if="v$.formValues.precio.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.precio.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.precio.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
          </div>
          <br>
          <h2 class="text-lg	font-semibold">
            Dimensiones
          </h2>
          <br>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <h2 class="semibold">
                Peso
              </h2>
              <div class="flex flex-row items-center">
                <input 
                  type="number" 
                  v-model="formValues.peso" 
                  @blur="v$.formValues.peso.$touch()"
                  id="peso"
                  class="border rounded border-slate-300 h-8 w-6/12 my-0.5 mr-2 gap-4" 
                  :class="{error: shouldAppendErrorClass(v$.formValues.peso), valid: shouldAppendValidClass(v$.formValues.peso) }"
                >
                <h2 class="mx-1">
                  Grs
                </h2>
              </div>
              <div v-if="v$.formValues.peso.$error"  class="text-red-500 italic">
                <p v-if="v$.formValues.peso.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.peso.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.peso.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="semibold">Alto</h2>
              <div class="flex flex-row items-center">
                <input 
                  type="number" 
                  v-model="formValues.alto"
                  @blur="v$.formValues.alto.$touch()" 
                  id="alto"
                  class="border rounded border-slate-300 h-8 w-6/12 my-0.5 mr-2 gap-4" 
                  
                  :class="{error: shouldAppendErrorClass(v$.formValues.alto), valid: shouldAppendValidClass(v$.formValues.alto) }"         
                >
                <h2 class="mx-1">
                  cm
                </h2>
              </div>
              <div v-if="v$.formValues.alto.$error" class="text-red-500 italic">
                <p v-if="v$.formValues.alto.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.alto.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.alto.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="semibold">
                Ancho
              </h2>
              <div class="flex flex-row items-center">
                <input 
                  type="number" 
                  v-model="formValues.ancho" 
                  @blur="v$.formValues.ancho.$touch()"
                  id="ancho"
                  class="border rounded border-slate-300 h-8 w-6/12 my-0.5 mr-2 gap-4" 
                 
                  :class="{error: shouldAppendErrorClass(v$.formValues.ancho), valid: shouldAppendValidClass(v$.formValues.ancho) }"
                >
                <h2 class="mx-1">
                  cm
                </h2>
              </div>
              <div v-if="v$.formValues.ancho.$error" class="text-red-500 italic">
                <p v-if="v$.formValues.ancho.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.ancho.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.ancho.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="semibold">
                Profundo
              </h2>
              <div class="flex flex-row items-center">
                <input 
                  type="number" 
                  v-model="v$.formValues.profundo.$model" 
                  @blur="v$.formValues.profundo.$touch()"
                  id="profundo"
                  class="border rounded border-slate-300 h-8 w-6/12 my-0.5 mr-2 gap-4" 
           
                  :class="{error: shouldAppendErrorClass(v$.formValues.profundo), valid: shouldAppendValidClass(v$.formValues.profundo) }"
                >
                <h2 class="mx-1">
                  cm
                </h2>
                
              </div>
              <div v-if="v$.formValues.profundo.$error" class="text-red-500 italic">
                <p v-if="v$.formValues.profundo.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.profundo.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.profundo.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
            <br>
          </div>
          <br>
          <br>

          <!--Aqui empiezan los primeros intentos de file input-->
          <!-- <h2 class="text-lg	font-semibold">
            Fotos del producto
          </h2>
          <br>
          <h2 class="ml-10"> 
            <b>Importante: </b>Las imagenes son el componente mas importante de <br>
            un buen e-commerce. Por favor cargue imagenes de buena calidad 
            <br>y tamaño. Le recomendamos usar estandares
            de proporcion 4:3 y <br>color de fondo unificado
          </h2>
          <br>
          <br>

          <form>
            <input type="file" multiple>
            <p>Drag your files here or click in this area.</p>
            <button type="submit">Upload</button>
          </form>


          <form class="">
            <input 
              class="border border-black"
                type="file" 
                id="avatar" 
                name="avatar" 
                accept="image/png, image/jpeg"
              >
            <img class="   bg-white-500    object-scale-down" src="@/assets/PopupImages/Trazado1127.png">
            <p>
              Arrastra los archivos aquí 
            </p>
            
            <p>o</p>

            <button type="submit">selecciona archivos</button>
            
              
            
          </form> -->
          <!--Aqui terminan los primeros intentos de file input-->
          
          <!-- <div class="form-section">
            <h4 class="form-subtitle">Fotos del producto</h4>

            <p class="section-description text-left">
              <strong>Importante: </strong>Las imágenes son el componente más importante de un buen ecommerce. Por favor cargue imágenes de buena calidad y tamaño. Le recomendamos usar estándares de proporción 4:3 y color de fondo unificado.
            </p>

            <AppInputFile
              :multiple="true"
              :images="true"
              :files="pictures"
              @update-files="setPictures($event)"
              @delete-file="deleteFile($event)"
            />
          </div>  -->


          <h2 class="text-lg	font-semibold">
            Fotos del producto
          </h2>
          <br>
          <h2 class="ml-10 mb-20"> 
            <b>Importante: </b>Las imagenes son el componente mas importante de 
            un buen e-commerce. Por favor cargue imagenes de buena calidad 
            y tamaño. Le recomendamos usar estandares
            de proporcion 4:3 y color de fondo unificado
          </h2>
          <br>
          <br>

          <div>
    

<!-- Upload  -->
<form id="file-upload-form" class="uploader " @click="ekUpload">
  <input id="file-upload" type="file" name="fileUpload" accept="image/*" />

  <label for="file-upload" id="file-drag">
     <img id="file-image" src="#" alt="Preview" class="hidden">
    <div id="start">
       <i class="fa fa-download" aria-hidden="true"></i> 
      <div>Select a file or drag here</div>
      <div id="notimage" class="hidden">Please select an image</div>
      <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
    </div>
    <div id="response" class="hidden">
      <div id="messages"></div>
      <progress class="progress" id="file-progress" value="0">
        <span>0</span>%
      </progress>
    </div>
  </label>
</form>

  </div>


          <!-- <form id="fileInputArea" action="upload.php" method="POST" 
            class="relative -mt-24 -ml-40 sm:-ml-64 
            w-88 md:w-125 border-2 rounded-md" >
            <input type="file" multiple class="-mt-40">
            <p>Arrastra los archivos aqui.</p>
            
            
            <button class="bg-white border text-progressBarBlue
            border-[#005CAB] rounded-md  w-48 h-11 md:w-125 text-sm"
              type="submit">Selecciona archivos</button>
          </form> -->

          <br>
          <br>
          <div class="grid">
          <div class="grid grid-cols-2 items-center text-[#005CAB] font-medium">
            <button @click="$emit('close')">
              CANCELAR
            </button>
            <button 
                class="font-medium border rounded-md border-slate-300 p-2  bg-[#005CAB] w-40 text-white h-12 " 
                @click="$emit('showProgress')"
                
              >
              <!-- :disabled="v$.formValues.$invalid" esto iba adentro del button tag hay que ver como mostrar 
              el boton de submit dehabilitado con CSS Tailwind-->
                GUARDAR
            </button>

          </div>
          </div>

          
          


        </form>
        <!--END FORM-->
      </div>
      
    </div>
  </div>
</template>

<script >
// import ClothesVariants from '@/components/ClothesVariants.vue';
// import FoodVariants from '@/components/FoodVariants.vue';
// import TechVariants from '@/components/TechVariants.vue';
// import DefaultVariant from '@/components/DefaultVariant.vue';
import useVuelidate from '@vuelidate/core'
import { required, maxLength, integer, between, minLength } from '@vuelidate/validators'
import AppInputFile from '@/components/AppInputFile.vue';
import { computed, PropType } from 'vue';
import { onMounted } from 'vue'
// import FileInputLogic from '@/components/FileInputLogic.vue';

// const rules = computed(() => {
//   return {
    
//   }
// });




// onMounted(() => {
//   document.getElementById(fileInputArea).ready(function(){
//   document.getElementById('fileInputArea input').change(function () {
//     document.getElementById('fileInputArea p').text(this.files.length + " file(s) selected");
//   });
// });
// })





function ekUpload(){
  function Init() {

    console.log("Upload Initialised");

    var fileSelect    = document.getElementById('file-upload'),
        fileDrag      = document.getElementById('file-drag'),
        submitButton  = document.getElementById('submit-button');

    fileSelect.addEventListener('change', fileSelectHandler, false);

    // Is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // File Drop
      fileDrag.addEventListener('dragover', fileDragHover, false);
      fileDrag.addEventListener('dragleave', fileDragHover, false);
      fileDrag.addEventListener('drop', fileSelectHandler, false);
    }
  }

  function fileDragHover(e) {
    var fileDrag = document.getElementById('file-drag');

    e.stopPropagation();
    e.preventDefault();

    fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
  }

  function fileSelectHandler(e) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      parseFile(f);
      uploadFile(f);
    }
  }

  // Output
  function output(msg) {
    // Response
    var m = document.getElementById('messages');
    m.innerHTML = msg;
  }

  function parseFile(file) {

    console.log(file.name);
    output(
      '<strong>' + encodeURI(file.name) + '</strong>'
    );
    
    // var fileType = file.type;
    // console.log(fileType);
    var imageName = file.name;

    var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
    if (isGood) {
      document.getElementById('start').classList.add("hidden");
      document.getElementById('response').classList.remove("hidden");
      document.getElementById('notimage').classList.add("hidden");
      // Thumbnail Preview
      document.getElementById('file-image').classList.remove("hidden");
      document.getElementById('file-image').src = URL.createObjectURL(file);
    }
    else {
      document.getElementById('file-image').classList.add("hidden");
      document.getElementById('notimage').classList.remove("hidden");
      document.getElementById('start').classList.remove("hidden");
      document.getElementById('response').classList.add("hidden");
      document.getElementById("file-upload-form").reset();
    }
  }

  function setProgressMaxValue(e) {
    var pBar = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.max = e.total;
    }
  }

  function updateFileProgress(e) {
    var pBar = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.value = e.loaded;
    }
  }

  function uploadFile(file) {

    var xhr = new XMLHttpRequest(),
      fileInput = document.getElementById('class-roster-file'),
      pBar = document.getElementById('file-progress'),
      fileSizeLimit = 1024; // In MB
    if (xhr.upload) {
      // Check if file is less than x MB
      if (file.size <= fileSizeLimit * 1024 * 1024) {
        // Progress bar
        pBar.style.display = 'inline';
        xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
        xhr.upload.addEventListener('progress', updateFileProgress, false);

        // File received / failed
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState == 4) {
            // Everything is good!

            // progress.className = (xhr.status == 200 ? "success" : "failure");
            // document.location.reload(true);
          }
        };

        // Start upload
        xhr.open('POST', document.getElementById('file-upload-form').action, true);
        xhr.setRequestHeader('X-File-Name', file.name);
        xhr.setRequestHeader('X-File-Size', file.size);
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send(file);
      } else {
        output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
      }
    }
  }

  // Check for the various File API support.
  if (window.File && window.FileList && window.FileReader) {
    Init();
  } else {
    document.getElementById('file-drag').style.display = 'none';
  }
}


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


waitForElm('#file-upload').then((elm) => {
  ekUpload();
});







export default {
  name: "PageModal",
  visibility: "invisible",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    
  },
  setup () {
    return { v$: useVuelidate() }
  },
  components: {
    AppInputFile,
    // FileInputLogic,
  },
  data() {
    return {
      fechas: "",
      numericProgress: "(2/8)",
      formValues: {
        titulo: "",
        descripcion: "",
        descripcionPro: "",
        talla: "",
        color: "",
        sabor: "",
        categoria: "",
        precio: "",
        moneda: "",
        cantidad: "",
        sku: "",
        peso: "",
        alto: "",
        ancho: "",
        profundo: "",
        pictures: "",
      }
    };
  },
  validations () {
    return {
      formValues: {
        categoria: {
          required,
        },
        titulo: {
          required,
          maxLength: maxLength(50),
        },
        descripcion: {
          maxLength: maxLength(100),
        },
        descripcionPro: {
          maxLength: maxLength(1000),
        },
        precio: {
          required,
          integer,
          between: between(0,10000000),
        },
        moneda: {
          required,
        },
        cantidad: {
          required,
          integer,
          between: between(0,100000),
        },
        sku: {
          required,
          integer,
          maxLength: maxLength(40),
        },
        peso: {
          required,
          integer,
          between: between(0,1000),
        },
        alto: {
          required,
          integer,
          between: between(0,1000),
        },
        ancho: {
          required,
          integer: integer,
          between: between(0,1000),
        },
        profundo: {
          required,
          integer,
          between: between(0,1000),
        },
        // pictures: { 
        //   required, 
        //   minLength: minLength(1), 
        //   }
      }
    }
  },
  methods: {

    shouldAppendValidClass (field) {
      return !field.$invalid && field.$model && field.$dirty
    },
    shouldAppendErrorClass (field) {
      return field.$error
    },
    submitForm() {
      event.preventDefault();
      this.v$.formValues.$touch()
      if(!this.v$.formValues.$invalid){
        console.log("Form values", this.formValues);
         this.$refs.productsListForm.reset();
      } else {
        console.log('Invalid form');
      }
      
    },
  }
}





    
    


    
    // getCategory() {
    //   return document.getElementById("categoria");
    //   // var select = document.getElementById('categoria');
    //   // var value = select.options[select.selectedIndex].value;
    //   // return value
    // }
  
 
    // ClothesVariants,
    // FoodVariants,
    // TechVariants,
    // DefaultVariant


</script>

<style scoped lang="scss">
 // Imports
// 
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);
@import url('https://fonts.googleapis.com/css?family=Roboto');

// Vars and Reset
// 
$theme:       #454cad;
$dark-text:   #5f6982;

// html,body,* { box-sizing: border-box; font-size: 16px;}
// html,body   { height: 100%; text-align: center;}
// body        { padding: 2rem; background: #f8f8f8;}

// h2 {
//   font-family: "Roboto", sans-serif;
//   font-size: 26px;
//   line-height: 1;
//   color: $theme;
//   margin-bottom: 0;
// }
// p {
//   font-family: "Roboto", sans-serif;
//   font-size: 18px;
//   color: $dark-text;
// }
// Upload Demo
// 
.uploader {
  display: block;
  clear: both;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;

  label {
    float: left;
    clear: both;
    width: 100%;
    padding: 2rem 1.5rem;
    text-align: center;
    background: #fff;
    border-radius: 7px;
    border: 3px solid #eee;
    transition: all .2s ease;
    user-select: none;

    &:hover {
      border-color: $theme;
    }
    &.hover {
      border: 3px solid $theme;
      box-shadow: inset 0 0 0 6px #eee;
      
      #start {
        i.fa {
          transform: scale(0.8);
          opacity: 0.3;
        }
      }
    }
  }

  #start {
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
    i.fa {
      font-size: 50px;
      margin-bottom: 1rem;
      transition: all .2s ease-in-out;
    }
  }
  #response {
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
    #messages {
      margin-bottom: .5rem;
    }
  }

  #file-image {
    display: inline;
    margin: 0 auto .5rem auto;
    width: auto;
    height: auto;
    max-width: 180px;
    &.hidden {
      display: none;
    }
  }
  
  #notimage {
    display: block;
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
  }

  progress,
  .progress {
    // appearance: none;
    display: inline;
    clear: both;
    margin: 0 auto;
    width: 100%;
    max-width: 180px;
    height: 8px;
    border: 0;
    border-radius: 4px;
    background-color: #eee;
    overflow: hidden;
  }

  .progress[value]::-webkit-progress-bar {
    border-radius: 4px;
    background-color: #eee;
  }

  .progress[value]::-webkit-progress-value {
    background: linear-gradient(to right, darken($theme,8%) 0%, $theme 50%);
    border-radius: 4px; 
  }
  .progress[value]::-moz-progress-bar {
    background: linear-gradient(to right, darken($theme,8%) 0%, $theme 50%);
    border-radius: 4px; 
  }

  input[type="file"] {
    display: none;
  }

  // div {
  //   margin: 0 0 .5rem 0;
  //   color: $dark-text;
  // }
  .btn {
    display: inline-block;
    margin: .5rem .5rem 1rem .5rem;
    clear: both;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    text-transform: initial;
    border: none;
    border-radius: .2rem;
    outline: none;
    padding: 0 1rem;
    height: 36px;
    line-height: 36px;
    color: #fff;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    background: $theme;
    border-color: $theme;
    cursor: pointer;
  }
}















#fileInputArea{

  top: 50%;
  left: 50%;
  /* margin-top: -100px; */
  /* margin-left: -250px; */
  /* width: 500px; */
  height: 200px;
  border:  dashed #DDDFDF;;
}
#fileInputArea p{
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 170px;
  color: rgba(0,0,0,0.9);
  font-family: Arial;
}
#fileInputArea input{
  position: absolute;

  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
}
#fileInputArea button{
  margin: 0;




  margin-top: -20px;
  margin-left: -4px;


  transition: all .2s ease;
  outline: none;
}
#fileInputArea button:hover{
  background: #149174;
	color: #0C5645;
}
#fileInputArea button:active{
  border:0;
}


.modal-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  overflow:auto;
  /* overflow: hidden; Hide scrollbars */

}

.modal-content {
  /* font-family: "Fondamento", cursive; */
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  min-height: 300px;
  margin: 1rem;
  position: relative;
  min-width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
}
 
::-webkit-scrollbar {
  width: 10px;
  /*display: none;
  visibility: hidden; */
} 

/* Track */
 ::-webkit-scrollbar-track {
  background: #f1f1f1; 
} 
 
/* Handle */
 ::-webkit-scrollbar-thumb {
  background: #888; 
} 

/* Handle on hover */
 ::-webkit-scrollbar-thumb:hover {
  background: #555; 
} 

.close-button {
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap
}

.topright {
  position: absolute;
  right: 0;
  top: 0
}

.btn-green {
    padding: 15px 30px;
    border-radius: 5px;
    border: none;
    display: inline-block;
    outline: 0;
}

 .btn-green:hover {
    transition: all 0.4s ease;
}

@media (min-width: 240px) and (max-width: 720px) {
    .btn-green {
        padding: 10px 20px;
    }
}

 .btn-green:disabled {
    cursor: default;
}

.btn-green:disabled:hover {
    cursor: default;
    color: white;
}

.btn-green {
    color: white;
    background: #57AD8D;
}

.btn-green:hover:not(:disabled):not(.btn-disabled) {
    color: white;
    background: #4e9c7f;
}

.btn-green-outlined {
    color: #57AD8D;
    box-shadow: inset 0px 0px 0px 1.6px #57AD8D;
}

.btn-green-outlined:hover {
    color: white;
    background: #57AD8D;
}

.btn-green {
    color: white;
    background: #57AD8D;
}

.btn-green:hover:not(:disabled):not(.btn-disabled) {
    color: white;
    background: #4e9c7f;
}

.btn-green-outlined {
    opacity: 0.8;
}

</style>