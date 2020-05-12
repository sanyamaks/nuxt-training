<template>
  <div class="popup">
    <div class="popup-content">
      <button class="popup__close-button" @click="handleClose">
        <img src="./../assets/icon-close-button.svg" alt="close" />
      </button>
      <Quiz
        :dataQuiz="dataQuiz"
        :currentQuestion="currentQuestion"
        :nextQuestion="nextQuestion"
        :prevQuestion="prevQuestion"
      ></Quiz>
    </div>
  </div>
</template>

<script>
import Quiz from '@/components/Quiz';

export default {
  components: {
    Quiz,
  },
  props: {
    dataQuiz: Array,
    currentQuestion: Number,
    nextQuestion: Function,
    prevQuestion: Function
  },
  methods: {
    handleClose(e) {
      e.preventDefault();
      this.$emit('closePopup');
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
</style>
