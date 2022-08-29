<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <FoodVariants v-if="categoria=== 'FoodVariants'"/>
        <TechVariants v-if="categoria=== 'TechVariants'" />
        <ClothesVariants v-if="categoria=== 'TechVariants'" />
      </div>
    </div>
  </div>
</template>

<script>
import TechVariants from './TechVariants.vue';
import FoodVariants from './FoodVariants.vue';
import ClothesVariants from './ClothesVariants.vue';

export default {
  props: {
      categoria: { type: String, default: "foodVariants" }
  },
  components: { TechVariants, FoodVariants, ClothesVariants }
}
</script>

<style scoped>
</style>