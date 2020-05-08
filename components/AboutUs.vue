<template>
  <section class="about-us">
    <h2 class="about-us__title">#РАКЛЕЧИТСЯ</h2>

    <div class="about-us__container">
      <h3 class="about-us__subtitle">О проекте</h3>

      <p class="about-us__foundaition">
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </p>

      <div class="about-us__toggle-links">
        <!-- заменить на компоненту -->
        <a href="/" class="about-us__toggle-link about-us__toggle-link_active"
          >Рак Лечится</a
        >
        <a href="/" class="about-us__toggle-link">Фонд Хабенского</a>
      </div>

      <div class="about-us__text-container">
        <p class="about-us__text">
          Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но одна
          болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и
          лучшее доказательство — люди с их неизлечимыми особенностями, которые
          сумели победить рак.
        </p>
        <p class="about-us__text">
          Рак лечится — проект Благотворительного Фонда Константина Хабенского и
          Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей
          к раку и заставить каждого поверить: онкологическое заболевание — это
          не приговор.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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

  font-weight: 600;
  font-size: 32px;
  line-height: 36px;

  color: #ffffff;
}

.about-us__foundaition {
  grid-area: foundation;

  font-size: 18px;
  line-height: 22px;

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

  font-size: 18px;
  line-height: 22px;

  color: #dedede;
}
</style>
