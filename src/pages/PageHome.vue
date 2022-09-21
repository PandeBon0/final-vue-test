<template>

  <div class=" bg-bgGrey border min-h-screen">
     <TheHeader/> 
      <TheDashboard/>
      <TheStatistics/>
      <div class=" absolute bottom-14 sm:bottom-7 right-24 mt-10 invisible lg:visible">
        <img 
          class=" object-none object-right " 
          src="@/assets/FooterImages/Grupo1671.png"
        >
      </div> 
      <TheFooter class=""/>
  </div>
      
 
</template>

<script>
  //mx-3 mt-4 w-128 h-10
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