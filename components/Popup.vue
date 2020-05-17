<template>
  <div class="popup">
    <div class="popup-content">
      <button class="popup__close-button" @click="closePopup">
        <img src="./../assets/icon-close-button.svg" alt="close" />
      </button>
      <Quiz></Quiz>
    </div>
  </div>
</template>

<script>
import Quiz from '@/components/Quiz';

export default {
  components: {
    Quiz,
  },
  props: {},
  methods: {
    closePopup(e) {
      e.preventDefault();
      this.$store.commit('popup/closePopup');
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

.popup__close-button {
  padding: 0;
  position: absolute;
  top: 35px;
  right: 35px;
  border: none;
  background: unset;
  outline: none;
  cursor: pointer;
  z-index: 2;
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
}
</style>
