<template>
  <main class="content">
    <cover></cover>
    <container>
      <main-video class="content__main-video"></main-video>
      <banner>И в отличие от рака,</banner>
      <main-stories class="content__main-stories"></main-stories>
      <banner>Рассказывайте ваши истории в Инстаграм</banner>
      <instagram class="content__instagram"></instagram>
      <tell-story class="content__tell-story" :showPopup="showPopup">
      </tell-story>
      <statistika class="content__statistika"></statistika>
    </container>
    <about-us></about-us>
    <Popup
      v-if="isShowPopup"
      :dataQuiz="dataQuiz"
      :currentQuestion="currentQuestion"
      @closePopup="closePopup"
      :nextQuestion="nextQuestion"
      :prevQuestion="prevQuestion"
    >
    </Popup>
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
import Container from '../components/Container';

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
    Popup,
  },
  methods: {
    showPopup() {
      this.$store.commit('popupShow/openPopup');
    },
    closePopup() {
      this.$store.commit('popupShow/closePopup');
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
  computed: {
    isShowPopup() {
      return this.$store.getters['popupShow/getPopupShown'];
    },
  },
  data() {
    return {
      currentQuestion: 1,
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
