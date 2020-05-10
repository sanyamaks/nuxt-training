<template>
  <div>
    <main-video></main-video>
    <main-stories></main-stories>
    <instagram></instagram>
    <about-us></about-us>
  </div>
</template>

<script>
import Instagram from '@/components/Instagram';
import AboutUs from '@/components/AboutUs';
import MainStories from '@/components/MainStories';
import MainVideo from '@/components/MainVideo';

export default {
  components: {
    'about-us': AboutUs,
    'main-stories': MainStories,
    instagram: Instagram,
    'main-video': MainVideo,
  },
};
</script>

<style></style>
