<template>
  <div 
    class="modal-overlay  " 
    v-show="open"
  >
    <div class="modal-content max-w-2xl 
    top-[500px] bottom-[500px]
         ">
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
             
            >
           
            <div v-if="v$.formValues.titulo.$error" class="text-red-500 italic">
              <p v-if="v$.formValues.titulo.required">El campo es obligatorio</p>
              <p v-else-if="v$.formValues.titulo.maxLength">El campo es demasiado extenso</p>
            </div>
            
          </div>  
 

              <TextComponent
                id="textComponent"
                label-text="Text Component"
                max-length="500"
                v-model="formValues.textComponent"
              />

              <TextAreaComponent
                id="textAreaComponent"
                label-text="Text Area Component"
                max-length="50"
                v-model="formValues.textAreaComponent"
              
              />
              <NumberComponent
                id="numberComponent"
                label-text="Number Component"
                max-length="20"
                v-model="formValues.numberComponent"
              />
              <SelectorComponent
                id="SelectorComponent"
                label-text="Selector Component"
                option1="yaju"
                option2="comida"
                option3="cachichurris"
                v-model="formValues.SelectorComponent"
              />


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
            >
            </textarea>
            <p v-if="v$.formValues.descripcionPro.maxLength 
              && v$.formValues.descripcionPro.$error" 
              class="text-red-500 italic"
            >
              El campo es demasiado extenso
            </p>
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
            <button @click="$emit('close')" class="md:ml-20">
              CANCELAR
            </button>
            <button 
                class="font-medium border rounded-md md:ml-16
                 border-slate-300 p-2  bg-[#005CAB] w-40 text-white h-12 " 
                @click="$emit('showProgress')"
                
              >
              <!-- :disabled="v$.formValues.$invalid" esto iba adentro del button tag hay que ver como mostrar 
              el boton de submit dehabilitado con CSS Tailwind-->
                GUARDAR
            </button>

          </div>     
          
          </div>               
          <br>
          <br>
          <br class="visible sm:invisible">
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
import TextValidation from '@/recycleBin/TextValidation.vue';
import TituloComponent from '@/recycleBin/TituloComponent.vue';
import TextComponent from '@/formComponents/TextComponent.vue';
import TextAreaComponent from '@/formComponents/TextAreaComponent.vue';
import NumberComponent from '@/formComponents/NumberComponent.vue';
import SelectorComponent from '../formComponents/SelectorComponent.vue';
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
    TextValidation,
    TituloComponent,
    TextComponent,
    TextAreaComponent,
    NumberComponent,
    SelectorComponent
},
  data() {
    return {
    
      fechas: "",
      numericProgress: "(2/8)",
      formValues: {
        textComponent: String | Number,
        textAreaComponent: String | Number,
        numberComponent: Number,
        SelectorComponent: String,
        comida: "",
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
        // }
      }
    }
  },
  methods: {
    updateTitulo (value) {
       this.formValues.comida = value;
      
    },
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
  position: fixed;
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