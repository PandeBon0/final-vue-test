<template>


      <TheHeader/>
      <TheDashboard/>
      <TheStatistics/>
      <div class="">
        <img 
          class="mx-3 mt-4 w-128 h-10 object-none object-right ml-107" 
          src="@/assets/FooterImages/Grupo1671.png"
        >
      </div>
      <TheFooter/>
 
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheDashboard from '@/components/TheDashboard.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheStatistics from '@/components/TheStatistics.vue';

export default {
  components: {
    TheHeader,
    TheDashboard,
    TheFooter,
    TheStatistics
}
}
</script>

<style scoped>
</style>