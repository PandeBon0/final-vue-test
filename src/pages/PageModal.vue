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
          <SelectorValidation  
            :type="text"  
            :id="categoria"
            :blur="false"
            :labelText="Categoría"
          />
          <br>
          <SelectorValidation  
            :type="text"  
            :id="titulo"
            :blur="true"
            :labelText="Título"
            :validation="justText"
          />
          <br>
          <SelectorValidation  
            :type="text"  
            :id="descripcion"
            :blur="false"
            :labelText="Descripción"   
          />
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
              id="" 
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
          <br>
          <SelectorValidation  
            :type="selector"  
            :id="talla"
            :blur="false"
            :labelText="Talla" 
            :option1="S"
            :option2="M"
            :option3="L"
          />
          <br>
          <SelectorValidation  
            :type="selector"  
            :id="color"
            :blur="false"
            :labelText="Color"
            :option1="Verde"
            :option2="Amarillo"
            :option3="Rojo"   
          />
          <br>
          <SelectorValidation  
            :type="selector"  
            :id="sabor"
            :blur="false"
            :labelText="Sabor"
            :option1="Salado"
            :option2="Dulce"
            :option3="Amargo"   
          />     
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
            <SelectorValidation  
              :type="number"  
              :id="cantidad"
              :blur="true"
              :labelText="Cantidad"
              :validation="between"   
            />
            <SelectorValidation  
              :type="number"  
              :id="sku"
              :blur="true"
              :labelText="SKU"
              :validation="between"   
            />
          </div>
          <div class="grid grid-cols-2">
            <SelectorValidation  
              :type="selector"  
              :id="moneda"
              :blur="true"
              :labelText="Moneda"
              :validation="justText"
              :option1="Dólar"
              :option2="Peso"
              :option3="Euro"   
            />
            <SelectorValidation  
              :type="number"  
              :id="precio"
              :blur="true"
              :labelText="Precio"
              :validation="between"   
            />
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

          <div class="grid">
            <FileInputLogic @emmit-image="saveImage"/>
            <br>
          <br>
          
          <div class="grid grid-cols-2 items-center text-[#005CAB] font-medium">
            <button @click="$emit('close')" class="md:ml-44">
              CANCELAR
            </button>
            <button 
                class="font-medium border rounded-md md:ml-44
                 border-slate-300 p-2  bg-[#005CAB] w-40 text-white h-12 " 
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

import useVuelidate from '@vuelidate/core'
import { required, maxLength, integer, between, minLength } from '@vuelidate/validators'
import AppInputFile from '@/components/AppInputFile.vue';
import { computed, PropType } from 'vue';
import { onMounted } from 'vue'
import FileInputLogic from '@/components/FileInputLogic.vue';
import SelectorValidation from '@/formComponents/SelectorValidation.vue';





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
    FileInputLogic,
    SelectorValidation
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
        pictures: this.childPicture,
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
    saveImage(){
      const childPicture = document.getElementById('file-upload').value
    },
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

</script>

<style scoped lang="scss">

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