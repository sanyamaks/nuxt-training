<template>
  <div class="quiz">
    <SectionTitle>{{ question.title }}</SectionTitle>
    <p class="quiz__question">
      {{ question.question }}
      <span class="quiz__explanation-question">{{
        question.explanationQuestion
      }}</span>
    </p>
    <form class="quiz__form">
      <input class="quiz__answer" placeholder="Напишите тут" />
      <!--Заменить на компонент Input-->
      <div class="quiz__button-container">
        <ReturnButton @click="prevQuestion">Назад</ReturnButton>
        <MiddleButton
          class="quiz__middle-button"
          @click="nextQuestion"
          :text="dataQuestionLength !== numberQuestion ? 'Далее' : 'Отправить'"
          type="submit"
        ></MiddleButton>
        <p
          v-if="dataQuestionLength === numberQuestion"
          class="quiz__personal-data-processing"
        >
          Нажимая на кнопку «отправить», вы даете согласие на
          <a class="quiz__personal-data-processing-url" href="#">
            обработку персональных данных</a
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import MiddleButton from '@/components/ui/MiddleButton';
import ReturnButton from '@/components/ui/ReturnButton';

export default {
  components: {
    SectionTitle,
    MiddleButton,
    ReturnButton,
  },
  props: {},
  methods: {
    nextQuestion() {
      this.$store.dispatch('quiz/incrementNumberCurrentQuestion');
    },
    prevQuestion() {
      this.$store.dispatch('quiz/decrementNumberCurrentQuestion');
    },
  },
  computed: {
    question() {
      return this.$store.getters['quiz/getQuestion'];
    },
    dataQuestionLength() {
      return this.$store.getters['quiz/getLengthDataQuestion'];
    },
    numberQuestion() {
      return this.$store.getters['quiz/getNumberCurrentQuestion'];
    },
  },
};
</script>

<style scoped>
.quiz {
  position: relative;
  height: 100%;
  width: 100%;
}
.quiz__question {
  position: absolute;
  top: 76px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.quiz__explanation-question {
  color: #666666;
}
.quiz__form {
  position: absolute;
  top: 234px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.quiz__answer {
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  border: none;
  padding-bottom: 5px;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
}
.quiz__answer::placeholder {
  color: #666666;
}
.quiz__button-container {
  margin-top: 200px;
  display: flex;
}
.quiz__middle-button {
  margin-left: 30px;
}

.quiz__personal-data-processing {
  margin-left: 30px;
  width: 380px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}

.quiz__personal-data-processing-url {
  text-decoration: underline;
  color: inherit;
}
</style>
