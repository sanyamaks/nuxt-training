<template>
  <main>
    <main-video></main-video>
    <banner>И В ОТЛИЧИЕ ОТ РАКА,</banner>
    <main-stories></main-stories>
    <banner>РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ</banner>
    <instagram></instagram>
    <about-us></about-us>
  </main>
</template>

<script>
import Banner from '@/components/Banner';
import Instagram from '@/components/Instagram';
import MainStories from '@/components/MainStories';
import MainVideo from '@/components/MainVideo';
import AboutUs from '@/components/AboutUs';

export default {
  components: {
    'about-us': AboutUs,
    'main-stories': MainStories,
    banner: Banner,
    instagram: Instagram,
    'main-video': MainVideo,
  },
};
</script>

<style></style>
