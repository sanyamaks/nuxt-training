<template>
  <section class="tell-story">
    <div class="tell-story__heading">
      <SectionTitle class="tell-story__section-title"
        >Расскажите свою историю</SectionTitle
      >
      <SectionDescription class="tell-story__section-description"
        >Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.</SectionDescription
      >
    </div>
    <div class="tell-story__container">
      <ul class="tell-story__variants">
        <li class="tell-story__variant tell-story__variant_active">
          1-й вариант
        </li>
        <li class="tell-story__variant">2-й вариант</li>
      </ul>
      <div class="tell-story__form-info">
        <p class="tell-story__description">
          Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
          после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
          испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
        </p>
        <MiddleButton
          class="tell-story__middle-button"
          @click="showPopup"
          text="Заполнить форму"
        ></MiddleButton>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionDescription from '@/components/ui/SectionDescription';
import MiddleButton from '@/components/ui/MiddleButton';
export default {
  name: 'tell-story',
  components: {
    SectionTitle,
    SectionDescription,
    MiddleButton,
  },
  props: {
    showPopup: Function,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.tell-story {
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  padding: 100px 60px;
  background-color: #f7f7f7;
}

.tell-story__heading {
}

.tell-story__section-title {
  width: 413px;
}

.tell-story__section-description {
  margin-top: 32px;
  width: 340px;
}

.tell-story__container {
  display: flex;
  margin-top: 104px;
}

.tell-story__variants {
  min-width: 110px;
  margin-right: 40px;
  list-style-type: none;
}

.tell-story__variant {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
}
.tell-story__variant_active {
  color: #000000;
}

.tell-story__form-info {
}

.tell-story__description {
  width: 640px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.tell-story__middle-button {
  margin-top: 78px;
  width: 280px;
}
</style>
