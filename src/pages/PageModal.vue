<template>
  <div 
    class="modal-overlay items-center		place-content-end place-self-center" 
    v-show="open"
  >
    <div class="modal-content">
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
            <div v-if="v$.formValues.titulo.$error">
              <p v-if="v$.formValues.titulo.required">El campo es obligatorio</p>
              <p v-else-if="v$.formValues.titulo.between">El campo es demasiado extenso</p>
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
            
            <p v-if="v$.formValues.descripcion.maxLength && v$.formValues.descripcion.$error">El campo es demasiado extenso</p>

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
            <p v-if="v$.formValues.descripcionPro.maxLength && v$.formValues.descripcionPro.$error">El campo es demasiado extenso</p>
          </div>
          <br>
          <h2>Variantes</h2>
          <!--VARIANTS AND SELECTORS-->
          <br>
          <!-- <DefaultVariant/> -->
          <div class="grid grid-cols-2 border border-transparent border-b-slate-400">
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
          <div class="grid grid-cols-2 border border-transparent border-b-slate-400">
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
          <div class="grid grid-cols-2 border border-transparent border-b-slate-400">
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
          
          <div class="flex flex-row items-center ml-20">
            <img 
              class="bg-white-500 p-6  mx-10 h-13" 
              src="@/assets/PopupImages/mas.png"
            >
            <h2 class="text-sky-400	">
              Agregar grupo de Toppings
            </h2>
          </div>
          <h2 class="text-lg	font-semibold">
            Precio y disponibilidad
          </h2>
          <br>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <label for="cantidad">
                Cantidad
              </label>
              <input 
                type="number" 
                v-model="formValues.cantidad"
                @blur="v$.formValues.cantidad.$touch()" 
                id="cantidad"
                class="border rounded border-slate-300 h-15 mr-2 my-0.5  gap-4" 
                :class="{error: shouldAppendErrorClass(v$.formValues.cantidad), valid: shouldAppendValidClass(v$.formValues.cantidad) }"
              >
              <div v-if="v$.formValues.cantidad.$error">
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
                class="border rounded border-slate-300 h-15 mr-2 my-0.5  gap-4" 
                :class="{error: shouldAppendErrorClass(v$.formValues.sku), valid: shouldAppendValidClass(v$.formValues.sku) }"
              >
              <div v-if="v$.formValues.sku.$error">
                <p v-if="v$.formValues.sku.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.sku.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.sku.maxLength">El tamaño del campo es excesivo</p>
                
              </div>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <label for="moneda">
                Moneda
              </label>
              <select 
                id="moneda" 
                v-model="formValues.moneda"
                @blur="v$.formValues.moneda.$touch()"
                class="border rounded border-slate-300 h-19 text-slate-400 mr-9 my-0.5 "
              >
                <option value="">Seleccione moneda</option>
                <option value="peso">Pesos Colombianos</option>
                <option value="dolar">Dolares</option>
                <option value="euro">Euros</option>
              </select>
              <p v-if="v$.formValues.moneda.required && v$.formValues.moneda.$error">El campo es obligatorio</p>
            </div>
            <div class="flex flex-col">
              <label for="precio" >Precio</label>
              <input 
                type="number" 
                v-model="formValues.precio" 
                @blur="v$.formValues.precio.$touch()"
                id="precio"
                class="border rounded border-slate-300 h-15  mr-2 my-0.5  gap-4" 

                :class="{error: shouldAppendErrorClass(v$.formValues.precio), valid: shouldAppendValidClass(v$.formValues.precio) }"
              >
              <div v-if="v$.formValues.precio.$error">
                <p v-if="v$.formValues.precio.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.precio.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.precio.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
          </div>
          <br>
          <h2 class="text-lg	font-semibold">
            Precio y disponibilidad
          </h2>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <h2 class="semibold">
                Peso
              </h2>
              <div class="flex flex-row">
                <input 
                  type="number" 
                  v-model="formValues.peso" 
                  @blur="v$.formValues.peso.$touch()"
                  id="peso"
                  class="border rounded border-slate-300 h-15 my-0.5 mr-2 gap-4" 
                  :class="{error: shouldAppendErrorClass(v$.formValues.peso), valid: shouldAppendValidClass(v$.formValues.peso) }"
                >
                <h2 class="mx-1">
                  Grs
                </h2>
              </div>
              <div v-if="v$.formValues.peso.$error">
                <p v-if="v$.formValues.peso.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.peso.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.peso.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="semibold">Alto</h2>
              <div class="flex flex-row">
                <input 
                  type="number" 
                  v-model="formValues.alto"
                  @blur="v$.formValues.alto.$touch()" 
                  id="alto"
                  class="border rounded border-slate-300 h-15 my-0.5 mr-2 gap-4" 
                  
                  :class="{error: shouldAppendErrorClass(v$.formValues.alto), valid: shouldAppendValidClass(v$.formValues.alto) }"         
                >
                <h2 class="mx-1">
                  cm
                </h2>
              </div>
              <div v-if="v$.formValues.alto.$error">
                <p v-if="v$.formValues.alto.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.alto.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.alto.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="semibold">
                Ancho
              </h2>
              <div class="flex flex-row">
                <input 
                  type="number" 
                  v-model="formValues.ancho" 
                  @blur="v$.formValues.ancho.$touch()"
                  id="ancho"
                  class="border rounded border-slate-300 h-15 my-0.5 mr-2 gap-4" 
                 
                  :class="{error: shouldAppendErrorClass(v$.formValues.ancho), valid: shouldAppendValidClass(v$.formValues.ancho) }"
                >
                <h2 class="mx-1">
                  cm
                </h2>
              </div>
              <div v-if="v$.formValues.ancho.$error">
                <p v-if="v$.formValues.ancho.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.ancho.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.ancho.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="semibold">
                Profundo
              </h2>
              <div class="flex flex-row">
                <input 
                  type="number" 
                  v-model="v$.formValues.profundo.$model" 
                  @blur="v$.formValues.profundo.$touch()"
                  id="profundo"
                  class="border rounded border-slate-300 h-15 my-0.5 mr-2 gap-4" 
           
                  :class="{error: shouldAppendErrorClass(v$.formValues.profundo), valid: shouldAppendValidClass(v$.formValues.profundo) }"
                >
                <h2 class="mx-1">
                  cm
                </h2>
                
              </div>
              <div v-if="v$.formValues.profundo.$error">
                <p v-if="v$.formValues.profundo.required">El campo es obligatorio</p>
                <p v-else-if="v$.formValues.profundo.integer">El campo debe ser numerico</p>
                <p v-else-if="v$.formValues.profundo.between">Ingrese un valor correcto</p>
                
              </div>
            </div>
            <br>
          </div>
          <br>
          <h2 class="text-lg	font-semibold">
            Fotos del producto
          </h2>
          <h2 class="ml-10"> 
            <b>Importante: </b>Las imagenes son el componente mas importante de <br>
            un buen e-commerce. Por favor cargue imagenes de buena calidad 
            <br>y tamaño. Le recomendamos usar estandares
            de proporcion 4:3 y <br>color de fondo unificado
          </h2>
          <br>
          <label for="avatar">
            Escoja una imagen: 
          </label>
          <div class="grid grid-cols-2 items-left">
            <input 
              type="file" 
              id="avatar" 
              name="avatar" 
              accept="image/png, image/jpeg"
            >
            <button 
              class="font-semibold border rounded border-slate-300 p-2 bg-sky-500 w-20 text-white"
              @click="$emit('showProgress')"
              
            >
            <!-- :disabled="v$.formValues.$invalid" esto iba adentro del button tag hay que ver como mostrar 
            el boton de submit dehabilitado con CSS Tailwind-->
              Submit
            </button>
          </div>
        </form>
        <!--END FORM-->
      </div>
      <button @click="$emit('close')">
        Close
      </button>
    </div>
  </div>
</template>

<script>
// import ClothesVariants from '@/components/ClothesVariants.vue';
// import FoodVariants from '@/components/FoodVariants.vue';
// import TechVariants from '@/components/TechVariants.vue';
// import DefaultVariant from '@/components/DefaultVariant.vue';
import useVuelidate from '@vuelidate/core'
import { required, maxLength, integer, between } from '@vuelidate/validators'

export default {
  name: "PageModal",
  visibility: "invisible",
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    return { v$: useVuelidate() }
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
          between: between(0,50),
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
    // getCategory() {
    //   return document.getElementById("categoria");
    //   // var select = document.getElementById('categoria');
    //   // var value = select.options[select.selectedIndex].value;
    //   // return value
    // }
  },
  components: {
    // ClothesVariants,
    // FoodVariants,
    // TechVariants,
    // DefaultVariant
}
}
</script>

<style scoped>
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