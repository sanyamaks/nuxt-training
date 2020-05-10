<template>
  <main>
    <main-stories></main-stories>
    <instagram></instagram>
    <tell-story class="main__tell-story"></tell-story>
    <about-us></about-us>
    <!--<popup></popup>-->
    <!--<last-popup></last-popup>-->
  </main>
</template>

<script>
import Instagram from '@/components/Instagram';
import AboutUs from '@/components/AboutUs';
import MainStories from '@/components/MainStories';
import TellStory from '@/components/TellStory';
// import Popup from '@/components/Popup';
// import LastPopup from '@/components/LastPopup';

export default {
  components: {
    'about-us': AboutUs,
    'main-stories': MainStories,
    instagram: Instagram,
    'tell-story': TellStory,
    // 'popup': Popup,
    // 'last-popup': LastPopup,
  },
};
</script>

<style>
.content__tell-story {
  margin: 0 auto;
}
</style>
