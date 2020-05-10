<template>
  <main>
    <main-stories></main-stories>
    <instagram></instagram>
    <about-us></about-us>
  </main>
</template>

<script>

import Instagram from '@/components/Instagram';
import AboutUs from '@/components/AboutUs';
import MainStories from '@/components/MainStories';

export default {
  components: {
    'about-us': AboutUs,
    'main-stories': MainStories,
    instagram: Instagram,
  },
};
</script>

<style></style>
