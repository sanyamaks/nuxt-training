<template>
  <section class="about-us">
    <h2 class="about-us__title">#РАКЛЕЧИТСЯ</h2>

    <div class="about-us__container">
      <section-title class="about-us__subtitle">О проекте</section-title>

      <section-description class="about-us__foundaition">
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </section-description>

      <div class="about-us__toggle-links">
        <!-- заменить на компоненту -->
        <a href="/" class="about-us__toggle-link about-us__toggle-link_active"
          >Рак Лечится</a
        >
        <a href="/" class="about-us__toggle-link">Фонд Хабенского</a>
      </div>

      <div class="about-us__text-container">
        <section-text class="about-us__text">
          Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но одна
          болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и
          лучшее доказательство — люди с их неизлечимыми особенностями, которые
          сумели победить рак.
        </section-text>
        <section-text class="about-us__text">
          Рак лечится — проект Благотворительного Фонда Константина Хабенского и
          Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей
          к раку и заставить каждого поверить: онкологическое заболевание — это
          не приговор.
        </section-text>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionDescription from '@/components/ui/SectionDescription';
import SectionText from '@/components/ui/SectionText';

export default {
  components: {
    'section-title': SectionTitle,
    'section-description': SectionDescription,
    'section-text': SectionText,
  },
};
</script>

<style scoped>
.about-us {
  background: #613a93;
  padding: 0 60px;
  min-height: 650px;
  padding-top: 90px;
  padding-bottom: 100px;
}

.about-us__title {
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;

  color: #ffffff;
}

.about-us__container {
  margin: 0 auto;
  margin-top: 70px;
  width: 100%;
  max-width: 1320px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  display: grid;
  grid-template-areas:
    'subtitle     .             .'
    'foundation  toggle-links  text-container';
  grid-template-columns: 1fr 20% 50%;
  grid-column-gap: 40px;
  grid-row-gap: 32px;
}

.about-us__subtitle {
  grid-area: subtitle;

  color: #ffffff;
}

.about-us__foundaition {
  grid-area: foundation;

  color: #dedede;
}

.about-us__toggle-links {
  grid-area: toggle-links;

  display: flex;
  flex-direction: column;
}

.about-us__toggle-link {
  text-align: right;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  color: #c9c9c9;

  margin-bottom: 10px;
}

.about-us__toggle-link:last-of-type {
  margin-bottom: 0;
}

.about-us__toggle-link_active {
  color: #ffffff;
}

.about-us__text-container {
  grid-area: text-container;
}

.about-us__text {
  margin-bottom: 20px;

  color: #dedede;
}

.about-us__text:last-of-type {
  margin-bottom: 0;
}

@media screen and (max-width: 1280px) {
  .about-us {
    padding: 0 50px;
    padding-top: 80px;
    padding-bottom: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .about-us {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .about-us__container {
    grid-column-gap: 40px;
  }
}

@media screen and (max-width: 768px) {
  .about-us {
    padding-top: 80px;
  }

  .about-us__container {
    margin-top: 0;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-us__title {
    display: none;
  }

  .about-us__foundaition {
    margin-top: 26px;
    align-self: center;
  }

  .about-us__toggle-links {
    align-self: flex-start;
    flex-direction: row;
  }

  .about-us__toggle-link {
    margin-top: 80px;
    margin-bottom: 0;
    margin-right: 30px;
  }

  .about-us__toggle-link:last-of-type {
    margin-right: 0;
  }

  .about-us__text-container {
    margin-top: 30px;
  }

  .about-us__toggle-link {
    text-align: unset;
  }

  .about-us__toggle-link_active {
    border-bottom: 2px solid #fff;
  }
}
</style>
