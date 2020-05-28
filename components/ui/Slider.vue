<template>
  <div class="slider" v-swiper:mySwiper="swiperOptions">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(video, index) in videoArr" :key="index">
        <iframe class="swiper-slide__video" :src="video.url" allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['videoArr'],
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
      },
    };
  },
};
</script>

<style scoped>
.slider {
  width: 867px;
  height: 450px;
}
.swiper-slide__video {
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ededed;
}
@media screen and (max-width: 1320px) {
  .slider {
    max-width: 773px;
    height: 400px;
  }
}
@media screen and (max-width: 1180px) {
  .slider {
    max-width: 606px;
    height: 314px;
  }
}
@media screen and (max-width: 720px) {
  .slider {
    width: 450px;
    height: 200px;
  }
}
@media screen and (max-width: 500px) {
  .slider {
    width: 290px;
    height: 150px;
  }
}
</style>
