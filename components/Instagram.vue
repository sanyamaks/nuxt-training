<template>
  <section class="instagram">
    <div class="instagram__container">
      <div class="instagram__side">
        <h2 class="insagram__title">Инстаграм</h2>
        <!-- заменить на компоненту -->

        <p class="instagram__text">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>

      <ul class="instagram__items">
        <!-- сделать v-for для элементов li -->
        <li class="instagram__item">
          <a href="/" class="instagram__link" target="_blank"></a>
        </li>
        <!-- вставить ссылки nuxt -->
        <li class="instagram__item">
          <a href="/" class="instagram__link" target="_blank"></a>
        </li>
        <li class="instagram__item">
          <a href="/" class="instagram__link" target="_blank"></a>
        </li>
        <li class="instagram__item">
          <a href="/" class="instagram__link" target="_blank"></a>
        </li>
        <li class="instagram__item">
          <a href="/" class="instagram__link" target="_blank"></a>
        </li>
        <li class="instagram__item">
          <a href="/" class="instagram__link" target="_blank"></a>
        </li>
        <li class="instagram__item">
          <a href="/" class="instagram__link" target="_blank"></a>
        </li>
        <li class="instagram__item">
          <a href="/" class="instagram__link" target="_blank"></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.instagram {
  padding: 100px 60px;
}

.instagram__container {
  margin: 0 auto;
  margin-top: 70px;
  width: 100%;
  max-width: 1320px;

  display: grid;
  grid-template-columns: 1fr 65%;
}

.instagram__side {
  display: flex;
  flex-direction: column;
}

.insagram__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-decoration-line: underline;

  color: #000000;
}

.instagram__text {
  margin-top: 32px; /* PP */
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;

  color: #666666;
}

.instagram__items {
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
}

.instagram__item {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  padding-top: 100%;
  position: relative;

  background-color: #ededed;
}

.instagram__link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@media screen and (max-width: 1280px) {
  .instagram {
    padding: 90px 50px;
  }

  .insagram__title {
    font-size: 28px;
    line-height: 32px;
  }

  .instagram__text {
    margin-top: 30px; /* PP */
    font-size: 16px;
    line-height: 20px;
    max-width: 305px;
  }

  .instagram__items {
    grid-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  /* поправить в соответсвии с мобильным макетом */
  .instagram__container {
    display: flex;
    flex-direction: column;
  }

  .instagram__text {
    max-width: unset;
    margin-bottom: 27px;
  }
}
</style>
