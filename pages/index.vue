<template>
  <div>
    <main-stories></main-stories>
    <about-us></about-us>
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs';
import MainStories from '@/components/MainStories';

export default {
  components: {
    'about-us': AboutUs,
    'main-stories': MainStories,
  },
};
</script>

<style></style>
