<template>
  <div>
    <instagram></instagram>
    <about-us></about-us>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import VideoIframe from '@/components/VideoIframe';
import Instagram from '@/components/Instagram';
import AboutUs from '@/components/AboutUs';
export default {
  components: {
    'about-us': AboutUs,
    instagram: Instagram,
  },
};
</script>

<style>
.container__panel {
  width: 80%;
  margin: 40px auto;
}

.container__title {
  margin-bottom: 20px;
}

.container__text {
  margin: 20px 0;
}

.container__text ul {
  margin: 20px 0;
}

.container__subheader {
  margin: 20px 0;
}

@media screen and (max-width: 450px) {
  .container__panel {
    width: 90%;
  }
}
</style>
