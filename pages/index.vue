<template>
  <main class="content">
    <cover></cover>
    <main-video></main-video>
    <banner>И В ОТЛИЧИЕ ОТ РАКА,</banner>
    <main-stories></main-stories>
    <banner>РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ</banner>
    <instagram></instagram>
    <tell-story class="content__tell-story" :showPopup="showPopup"></tell-story>
    <statistika></statistika>
    <about-us></about-us>
    <Popup
      v-if="isShowPopup"
      :dataQuiz="dataQuiz"
      :currentQuestion="currentQuestion"
      @closePopup="closePopup"
      :nextQuestion="nextQuestion"
      :prevQuestion="prevQuestion"
    ></Popup>
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
import Popup from '@/components/Popup';

export default {
  props: {},
  components: {
    cover: Cover,
    'about-us': AboutUs,
    'main-stories': MainStories,
    banner: Banner,
    instagram: Instagram,
    statistika: Statistika,
    'tell-story': TellStory,
    'main-video': MainVideo,
    Popup,
  },
  methods: {
    showPopup() {
      this.isShowPopup = true;
    },
    closePopup() {
      this.isShowPopup = false;
      this.currentQuestion = 1;
    },
    nextQuestion() {
      if (this.currentQuestion > this.dataQuiz.length - 1) {
        return null;
      } else {
        this.currentQuestion += 1;
      }
    },
    prevQuestion() {
      if (this.currentQuestion === 1) {
        return null;
      } else {
        this.currentQuestion = this.currentQuestion - 1;
      }
    },
  },
  data() {
    return {
      currentQuestion: 1,
      isShowPopup: false,
      dataQuiz: [
        {
          title: 'Шаг 1 из 12',
          question: 'Как вас зовут?',
          explanationQuestion: '',
        },
        {
          title: 'Шаг 2 из 12',
          question: 'Было ли у вас онкологическое заболевание?',
          explanationQuestion:
            'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
        },
        {
          title: 'Шаг 3 из 12',
          question: 'Какие занятия приносят Вам наибольшее удовольствие?',
          explanationQuestion:
            'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
        },
        {
          title: 'Шаг 4 из 12',
          question:
            'На что, кроме семьи, быта и работы, Вы тратите свое время?',
          explanationQuestion: '',
        },
        {
          title: 'Шаг 5 из 12',
          question: 'Какие сильные увлечения у Вас есть?',
          explanationQuestion:
            'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
        },
        {
          title: 'Шаг 6 из 12',
          question:
            'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
          explanationQuestion: '',
        },
        {
          title: 'Шаг 7 из 12',
          question:
            'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
          explanationQuestion: 'Кроме необходимых, таких, как чистка зубов.',
        },
        {
          title: 'Шаг 8 из 12',
          question:
            'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
          explanationQuestion: '',
        },
        {
          title: 'Шаг 9 из 12',
          question: 'Что Вас успокаивает/умиротворяет лучше всего?',
          explanationQuestion: '',
        },
        {
          title: 'Шаг 10 из 12',
          question:
            'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
          explanationQuestion: '',
        },
        {
          title: 'Шаг 11 из 12',
          question: 'Как вы обычно проводите выходные',
          explanationQuestion: '',
        },
        {
          title: 'Шаг 12 из 12',
          question: 'Почта или телефон для связи.',
          explanationQuestion:
            'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
        },
      ],
    };
  },
};
</script>

<style>
</style>
