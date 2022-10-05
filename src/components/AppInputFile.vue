<script setup lang="ts">
  import { computed, PropType } from 'vue';

  
  
  const props = defineProps({
    multiple: {
      type: Boolean,
      required: false,
    },
  
    images: {
      type: Boolean,
      required: false,
    },
  
    pdf: {
      type: Boolean,
      required: false,
    },
  
    excel: {
      type: Boolean,
      required: false,
    },
  
    files: {
      type: Array as PropType<File[]>,
      required: true,
      default: null,
    },
  });
  
  const emit = defineEmits(['updateFiles', 'deleteFile']);
  
  const filesFormat = computed(() => {
    let result = '';
  
    if (props.excel) {
      result += 'application/vnd.ms-excel ';
    }
  
    if (props.pdf) {
      result += 'application/pdf ';
    }
  
    if (props.images) {
      result += 'image/* ';
    }
  
    return result;
  });
  
  /**
   * Receive input event to emit to parent
   * component user selected files.
   * @param event => Input event
   */
  function setFiles(event: Event) {
    console.log(event);
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
  
    emit('updateFiles', files);
  }
  
  /**
   * Receive file size and return it with pretty format
   * @param size => File size
   */
  function bytesFormat(size: Number): String {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0;
    let n = size.valueOf();
  
    while (n >= 1024) {
      n /= 1024;
      l += 1;
    }
  
    return (`${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`);
  }
  </script>
  
  <template>
    <div v-if="files.length === 0" class="input-file">
      <input
        type="file"
        :multiple="multiple"
        :accept="filesFormat"
        class="absolute w-full h-full top-0 left-0 z-10 cursor-pointer opacity-0"
        @input="setFiles($event)"
      >
      <div class="input-message">
        <span class="icon icon-picture text-5xl text-gray-500 block mb-3"/>
        <p class="description mb-2">Arrastra los archivos aquí <br> ó</p>
        <button class="input-button">Selecciona archivos</button>
      </div>
    </div>
  
    <div v-else class="input-file">
      <div
        class="file-description flex justify-between py-3 text-gray-600"
        v-for="(file, index) in files"
        :key="index"
      >
        <p class="flex justify-between w-full pr-4"><strong>{{ file.name }}</strong> {{ bytesFormat(file.size) }}</p>
  
        <button class="text-red-500" @click="$emit('deleteFile', index)">
          <span class="icon icon-close"/>
        </button>
      </div>
    </div>
  </template>
  
  <style scoped>
    .input-file {
      @apply block relative w-full my-5 border-2 border-dashed border-gray-400 rounded p-8 text-center;
    }
  
    .input-file:hover .input-button {
      @apply bg-blue-700 text-white;
    }
  
    .input-button {
      @apply bg-white text-blue-700 border border-blue-700 rounded-md py-1 px-4 transition duration-200;
    }
  </style>
  