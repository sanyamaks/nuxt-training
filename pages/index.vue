<template>
  <main>
    <banner>И В ОТЛИЧИЕ ОТ РАКА,</banner>
    <main-stories></main-stories>
    <banner>РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ</banner>
    <instagram></instagram>
    <statistika></statistika>
    <about-us></about-us>
  </main>
</template>

<script>
import Banner from '@/components/Banner';
import Instagram from '@/components/Instagram';
import AboutUs from '@/components/AboutUs';
import MainStories from '@/components/MainStories';
import Statistika from '@/components/Statistika';
export default {
  components: {
    'about-us': AboutUs,
    'main-stories': MainStories,
    banner: Banner,
    instagram: Instagram,
    statistika: Statistika,
  },
};
</script>

<style></style>
