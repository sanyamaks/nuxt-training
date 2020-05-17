<template>
  <div class="thanks-slide">
    <h2 class="thanks-slide__title">Спасибо что приняли участие!</h2>
    <form class="thanks-slide__form">
      <middle-button @click="closePopup" text="Закрыть"></middle-button>
    </form>
  </div>
</template>

<script>
import MiddleButton from '@/components/ui/MiddleButton';

export default {
  components: {
    'middle-button': MiddleButton,
  },
  methods: {
    closePopup() {
      this.$store.commit('popup/closePopup');
      this.$store.dispatch('thanksSlide/hideThanksSlide');
    },
  },
};
</script>

<style scoped>
.thanks-slide {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.thanks-slide__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
}
</style>
