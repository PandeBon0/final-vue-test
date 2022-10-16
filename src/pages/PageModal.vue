<template>
  <div 
    class="modal-overlay  " 
    v-show="open"
  >
    <div class="modal-content max-w-2xl 
      top-[570px] bottom-[500px]
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

        <!-- Helpers
        <TextInput
          id="textInput"
          label-text="Text Input"
          max-length="500"
          v-model="formValues.textInput"
        />
        <TextAreaInput
          id="TextAreaInput"
          label-text="Text Area Input"
          max-length="50"
          v-model="formValues.TextAreaInput"
        />
        <NumberInput
          id="NumberInput"
          label-text="Number Input"
          max-length="20"
          v-model="formValues.NumberInput"
        />
        <SelectorInput
          id="SelectorInput"
          label-text="Selector Input"
          option1="option1"
          option2="option2"
          option3="option3"
          v-model="formValues.SelectorInput"
        />
        <NumberUnits
          id="NumberUnits"
          label-text="Number Units"
          max-length="20"
          units="Grs"
          v-model="formValues.NumberUnits"
        /> -->

        <!--BEGIN FORM-->
        <SelectorInput
          id="categoria"
          label-text="Categoría"
          option1="Alimentos"
          option2="Tecnologia"
          option3="Vestimenta"
          v-model="formValues.categoria"
        />
        <br>
        <TextInput
          id="titulo"
          label-text="Titulo"
          max-length="50"
          v-model="formValues.titulo"
        />
        <br>
        <TextInput
          id="descripcion"
          label-text="Descripcion"
          max-length="50"
          v-model="formValues.descripcion"
        />
        <br>
        <TextAreaInput
          id="descripcionPro"
          label-text="Descripcion pro"
          max-length="100"
          v-model="formValues.descripcionPro"
        />
        <br>
        <h2 class="text-xl font-bold">Variantes</h2>
        <!--VARIANTS AND SELECTORS-->
        <br>
        <SelectorInput
          id="talla"
          label-text="Talla"
          option1="S"
          option2="M"
          option3="L"
          v-model="formValues.talla"
        />
        <br>
        <SelectorInput
          id="color"
          label-text="Color"
          option1="Rojo"
          option2="Amarillo"
          option3="Verde"
          v-model="formValues.color"
        />
        <br>
        <SelectorInput
          id="sabor"
          label-text="Sabor"
          option1="Dulce"
          option2="Salado"
          option3="Acido"
          v-model="formValues.sabor"
        />
        <br>        
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
          <NumberInput
            id="cantidad"
            label-text="Cantidad"
            max-length="12"
            v-model="formValues.cantidad"
          />
          <NumberInput
            id="sku"
            label-text="SKU"
            max-length="12"
            v-model="formValues.sku"
          />   
        </div>
        <div class="grid grid-cols-2">
          <SelectorInput
            id="moneda"
            label-text="Moneda"
            option1="Pesos"
            option2="Dolares"
            option3="Euros"
            v-model="formValues.moneda"
          />
          <NumberInput
            id="precio"
            label-text="Precio"
            max-length="12"
            v-model="formValues.precio"
          /> 
        </div>
        <br>
        <h2 class="text-lg	font-semibold">
          Dimensiones
        </h2>
        <br>
        <div class="flex flex-row">
          <NumberUnits
            id="peso"
            label-text="Peso"
            max-length="10"
            units="Grs"
            v-model="formValues.peso"
          />
          <NumberUnits
            id="alto"
            label-text="Alto"
            max-length="10"
            units="cm"
            v-model="formValues.alto"
          />
          <NumberUnits
            id="ancho"
            label-text="Ancho"
            max-length="10"
            units="cm"
            v-model="formValues.ancho"
          /> 
          <NumberUnits
            id="profundo"
            label-text="Profundo"
            max-length="10"
            units="cm"
            v-model="formValues.profundo"
          />
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

<script>
import useVuelidate from '@vuelidate/core'
import { required, maxLength, integer, between, minLength } from '@vuelidate/validators'
import FileInputLogic from '@/components/FileInputLogic.vue';
import TextInput from '@/formComponents/TextInput.vue';
import TextAreaInput from '@/formComponents/TextAreaInput.vue';
import NumberInput from '@/formComponents/NumberInput.vue';
import SelectorInput from '@/formComponents/SelectorInput.vue';
import NumberUnits from '@/formComponents/NumberUnits.vue';
export default {


  
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
    FileInputLogic,
    TextInput,
    TextAreaInput,
    NumberInput,
    SelectorInput,
    NumberUnits
},
  data() {
    return {
  

      formValues: {
        // TextAreaInput: String | Number,
        // NumberInput: Number,
        // SelectorInput: String,
        // NumberUnits: String,

        categoria: String,
        titulo: String,
        descripcion: String,
        descripcionPro: String,
        talla: String,
        color: String,
        sabor: String,
        precio: Number,
        moneda: String,
        cantidad: Number,
        sku: Number,
        peso: Number,
        alto: Number,
        ancho: Number,
        profundo: Number,
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
      }
    }
  },
  methods: {
    
    saveImage(){
      const childPicture = document.getElementById('file-upload').value
    },
    // shouldAppendValidClass (field) {
    //   return !field.$invalid && field.$model && field.$dirty
    // },
    // shouldAppendErrorClass (field) {
    //   return field.$error
    // },
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

<!--Setup script casi logrado con errores en la ultima parte-->

<!-- <script setup lang="ts">

import useVuelidate from '@vuelidate/core'
import { computed } from 'vue';
import { required, maxLength, integer, between, minLength } from '@vuelidate/validators'
import FileInputLogic from '@/components/FileInputLogic.vue';
import TextInput from '@/formComponents/TextInput.vue';
import TextAreaInput from '@/formComponents/TextAreaInput.vue';
import NumberInput from '@/formComponents/NumberInput.vue';
import SelectorInput from '@/formComponents/SelectorInput.vue';
import NumberUnits from '@/formComponents/NumberUnits.vue';


const props = defineProps({
  open: {
      type: Boolean,
      required: true
  }
})
  
const formValues: {
  // TextAreaInput: String | Number,
  // NumberInput: Number,
  // SelectorInput: String,
  // NumberUnits: String,
  categoria: String,
  titulo: String,
  descripcion: String,
  descripcionPro: String,
  talla: String,
  color: String,
  sabor: String,
  precio: Number,
  moneda: String,
  cantidad: Number,
  sku: Number,
  peso: Number,
  alto: Number,
  ancho: Number,
  profundo: Number,
  pictures: this.childPicture,
}

const validations = computed(() => {
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
    }
  }
},

    
function saveImage(){
  const childPicture = document.getElementById('file-upload').value
}
    // shouldAppendValidClass (field) {
    //   return !field.$invalid && field.$model && field.$dirty
    // },
    // shouldAppendErrorClass (field) {
    //   return field.$error
    // },

function submitForm() {
  event.preventDefault();
  this.v$.formValues.$touch()
  if(!this.v$.formValues.$invalid){
    console.log("Form values", this.formValues);
     this.$refs.productsListForm.reset();
  } else {
    console.log('Invalid form');
  }
}
  

</script> -->

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