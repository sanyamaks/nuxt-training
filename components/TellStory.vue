<template>
  <section class="tell-story">
    <SectionTitle class="tell-story__section-title">
      Расскажите свою историю
    </SectionTitle>

    <div class="tell-story__container">
      <SectionDescription class="tell-story__section-description">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </SectionDescription>

      <div class="tell-story__container-variants">
        <ul class="tell-story__variants">
          <li class="tell-story__variant tell-story__variant_active">
            1-й вариант
          </li>
          <li class="tell-story__variant">
            2-й вариант
          </li>
        </ul>
        <div class="tell-story__container-info">
          <p class="tell-story__description">
            Заполнить подробную форму прямо на сайте и мы опубликуем вашу
            историю после проверки. Пожалуйста, заполняйте все пункты корректно,
            если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
          </p>
          <MiddleButton
            class="tell-story__middle-button"
            @click="showPopup"
            text="Заполнить форму"
          >
          </MiddleButton>
        </div>
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
  width: 100%;
  padding: 100px 0;
}

.tell-story__section-title {
  margin-bottom: 30px;
}

.tell-story__container {
  display: flex;
  justify-content: space-between;
}

.tell-story__container-variants {
  max-width: 59.46969716%;
  display: flex;
  justify-content: space-between;
}

.tell-story__variants {
  padding: 0;
  margin-right: 35px;
  list-style-type: none;
}

.tell-story__variant {
  min-width: 110px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
}

.tell-story__variant_active {
  color: #000000;
}

.tell-story__description {
  max-width: 640px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin-bottom: 78px;
}

.tell-story__middle-button {
  width: 280px;
}

@media screen and (max-width: 1280px) {
  .tell-story {
    padding: 90px 0;
  }

  .tell-story__container-variants {
    max-width: 60.593220339%;
  }
}

@media screen and (max-width: 1024px) {
  .tell-story {
    padding: 80px 0;
  }

  .tell-story__container-variants {
    max-width: 61.255411255%;
  }

  .tell-story__variants {
    font-size: 15px;
    margin-right: 30px;
  }

  .tell-story__variant {
    min-width: 90px;
    font-size: 15px;
    line-height: 19px;
  }

  .tell-story__description {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 768px) {
  .tell-story__section-title {
    margin: auto;
    margin-bottom: 26px;
  }

  .tell-story__container {
    margin: auto;
    flex-direction: column;
  }

  .tell-story__container-variants {
    max-width: 382px;
    margin: auto;
    flex-direction: column;
  }

  .tell-story__section-description {
    margin: auto;
    margin-bottom: 80px;
  }

  .tell-story__variants {
    max-width: 210px;
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;
  }

  .tell-story__description {
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 320px) {
  .tell-story__section-title {
    margin-bottom: 16px;
  }

  .tell-story__section-description {
    margin-bottom: 40px;
  }

  .tell-story__variant {
    font-size: 13px;
  }

  .tell-story__description {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
