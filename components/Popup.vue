<template>
  <div class="popup">
    <div
      :class="['popup-content', isShowSocialMedia ? 'popup-content_share' : '']"
    >
      <close-button
        class="popup__close-button"
        v-if="!isShowThanksSlide"
        @click="closePopup"
      ></close-button>
      <quiz v-if="isShowQuiz"></quiz>
      <social-media v-if="isShowSocialMedia"></social-media>
      <thanks-slide v-if="isShowThanksSlide"></thanks-slide>
      <contact-me v-if="isShowContactMe"></contact-me>
    </div>
  </div>
</template>

<script>
import Quiz from '@/components/Quiz';
import CloseButton from '@/components/ui/CloseButton';
import SocialMedia from '@/components/SocialMedia';
import ThanksSlide from '@/components/ThanksSlide';
import ContactMe from '@/components/ContactMe';

export default {
  components: {
    'close-button': CloseButton,
    quiz: Quiz,
    'social-media': SocialMedia,
    'thanks-slide': ThanksSlide,
    'contact-me': ContactMe,
  },
  props: {},
  methods: {
    closePopup() {
      this.$store.commit('popup/closePopup');
      this.$store.dispatch('SocialMedia/hideSocialMedia');
      this.$store.dispatch('quiz/hideQuiz');
      this.$store.dispatch('quiz/resetNumberCurrentQuestion');
      this.$store.dispatch('contactMe/hideContactMe');
    },
  },
  computed: {
    isShowQuiz() {
      return this.$store.getters['quiz/getStateShown'];
    },
    isShowSocialMedia() {
      return this.$store.getters['SocialMedia/getStateShown'];
    },
    isShowThanksSlide() {
      return this.$store.getters['thanksSlide/getStateShown'];
    },
    isShowContactMe() {
      return this.$store.getters['contactMe/getStateShown'];
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 920px;
  height: 600px;
  background-color: #ffffff;
  position: relative;
  padding: 40px;
}

.popup-content_share {
  height: 324px;
}

.popup__close-button {
  /*padding: 0;*/
  position: absolute;
  top: 35px;
  right: 35px;
  /*border: none;*/
  /*background: unset;*/
  /*outline: none;*/
  /*cursor: pointer;*/
  z-index: 2;
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
}
</style>
