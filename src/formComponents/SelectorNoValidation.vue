<template>
  <div class="flex flex-col">
    <label 
      for="{{ id }}" 
    >
      {{ labelText }}
    </label>
    <select 
      id="{{ id }}" 
      class="border rounded border-slate-300 h-15 text-slate-400"
    >
      <option value="">Seleccione {{ labelText }}</option>
      <option value="{{ option1 }}">{{ option1 }}</option>
      <option value="{{ option1 }}">{{ option2 }}</option>
      <option value="{{ option1 }}">{{ option3 }}</option>
    </select>
  </div>
</template>

<script setup>

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  labelText: {
    type: String,
    required: true
  },
  option1: {
    type: String | Number,
    required: false
  },
  option2: {
    type: String | Number,
    required: false
  },
  option3: {
    type: String | Number,
    required: false
  },
  blur: {
    type: Boolean,
    required: true,
    default: false
  },
})
</script>

<style lang="scss" scoped>
</style>