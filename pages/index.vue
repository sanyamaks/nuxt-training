<template>
  <main>
    <main-video></main-video>
    <banner>И В ОТЛИЧИЕ ОТ РАКА,</banner>
    <main-stories></main-stories>
    <banner>РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ</banner>
    <instagram></instagram>
    <tell-story class="main__tell-story"></tell-story>
    <about-us></about-us>
    <!--<popup></popup>-->
    <!--<last-popup></last-popup>-->
  </main>
</template>

<script>
import Banner from '@/components/Banner';
import Instagram from '@/components/Instagram';
import MainStories from '@/components/MainStories';
import TellStory from '@/components/TellStory';
import MainVideo from '@/components/MainVideo';
import AboutUs from '@/components/AboutUs';
// import Popup from '@/components/Popup';
// import LastPopup from '@/components/LastPopup';

export default {
  components: {
    'about-us': AboutUs,
    'main-stories': MainStories,
    banner: Banner,
    instagram: Instagram,
    'tell-story': TellStory,
    'main-video': MainVideo,
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
