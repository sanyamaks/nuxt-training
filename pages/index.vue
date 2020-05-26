<template>
  <main class="content">
    <cover @scrollToNextBlock="scrollToNextBlock"></cover>
    <container>
      <main-video ref="scroll-to-here" class="content__main-video"></main-video>
      <!-- текст скроллится впритык к верхней границе экрана потому что заданы марджины -->
      <banner>И в отличие от рака,</banner>
      <main-stories class="content__main-stories"></main-stories>
      <banner>Рассказывайте ваши истории в Инстаграм</banner>
      <instagram class="content__instagram"></instagram>
      <tell-story class="content__tell-story"> </tell-story>
      <statistika class="content__statistika"></statistika>
    </container>
    <about-us></about-us>

    <!--<last-popup></last-popup НУЖНО ПЕРЕРАБОТАТЬ ДАННЫЙ ПОПАП>-->
  </main>
</template>

<script>
import Cover from '@/components/Cover';
import Banner from '@/components/Banner';
import Instagram from '@/components/Instagram';
import MainStories from '@/components/MainStories';
import Statistika from '@/components/Statistika';
import TellStory from '@/components/TellStory';
import MainVideo from '@/components/MainVideo';
import AboutUs from '@/components/AboutUs';
import Container from '@/components/Container';

export default {
  props: {},
  components: {
    container: Container,
    cover: Cover,
    'about-us': AboutUs,
    'main-stories': MainStories,
    banner: Banner,
    instagram: Instagram,
    statistika: Statistika,
    'tell-story': TellStory,
    'main-video': MainVideo,
  },
  methods: {
    scrollToNextBlock() {
      this.$refs['scroll-to-here'].$el.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.content__main-video {
  margin: 100px 0 75px 0;
}

.content__main-stories {
  margin: 100px 0;
}

.content__instagram {
  margin: 100px 0;
}

.content__statistika {
  margin: 100px 0;
}

@media screen and (max-width: 1280px) {
  .content__main-video {
    margin: 90px 0 65px 0;
  }

  .content__main-stories {
    margin: 90px 0;
  }

  .content__instagram {
    margin: 90px 0;
  }

  .content__statistika {
    margin: 90px 0;
  }
}

@media screen and (max-width: 1024px) {
  .content__main-video {
    margin: 80px 0 55px 0;
  }

  .content__main-stories {
    margin: 80px 0;
  }

  .content__instagram {
    margin: 80px 0;
  }

  .content__statistika {
    margin: 80px 0;
  }
}

@media screen and (max-width: 768px) {
  .content__main-video {
    margin: 80px 0 45px 0;
  }
}
</style>
