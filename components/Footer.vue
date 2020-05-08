<template>
  <footer class="footer">
    <section class="footer__container">
      <p class="footer__gratitude">
        Спасибо всем, кто помог состояться этому проекту
      </p>
      <!-- заменить на компоненту -->

      <nav class="nav footer__nav">
        <!-- заменить на компоненту -->
        <a href="/" class="footer__link">Главная</a>
        <a href="/" class="footer__link">Истории</a>
      </nav>

      <div class="footer__links">
        <p class="footer__text">
          Мы в <a href="/" class="footer__link" target="_blank">Фейсбуке</a>,
          <a href="/" class="footer__link" target="_blank">Инстаграме</a> и
          <a href="/" class="footer__link" target="_blank">Youtube</a>
        </p>
        <a href="/" class="footer__link">Поделитесь ↗</a>
      </div>

      <small class="footer__copyright">Рак Лечится 2020</small>

      <p class="footer__made-by">Сделано студентами Яндекс Практикум</p>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: #fbfbfb;
  min-height: 356px;
  padding: 60px;
  display: flex;
  align-items: stretch;
}

.footer__container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'gratitude  nav  links'
    'copyright  .    made-by';
  grid-template-rows: 1fr 18px;
  grid-template-columns: 340px 1fr 365px;
}

.footer__gratitude {
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;

  grid-area: gratitude;
}

.footer__nav {
  grid-area: nav;
}

.footer__links {
  max-width: 300px;
  width: 100%;

  grid-area: links;
  justify-self: end;

  display: flex;
  flex-direction: column;
}

.footer__copyright {
  font-size: 18px;
  line-height: 18px;
  color: #898989;

  grid-area: copyright;
}

.footer__made-by {
  font-size: 18px;
  line-height: 18px;
  color: #898989;

  grid-area: made-by;
}

.footer__text {
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 44px;
}

.footer__link {
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
  cursor: pointer;
}

.footer__link:hover {
  color: #121212;

  opacity: 0.8;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding: 50px;
  }
}

@media screen and (max-width: 1024px) {
  /* поправить в соответсвии с мобильным макетом */
  .footer__container {
    display: flex;
    flex-direction: column;
  }
}
</style>
