<template>
  <section class="instagram">
    <div class="instagram__container">
      <div class="instagram__side">
        <section-title class="instagram__section-title"
          >Инстаграм</section-title
        >

        <section-description class="instagram__section-description">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </section-description>
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
import SectionTitle from '@/components/ui/SectionTitle';
import SectionDescription from '@/components/ui/SectionDescription';

export default {
  components: {
    'section-title': SectionTitle,
    'section-description': SectionDescription,
  },
};
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

.instagram__section-title {
  text-decoration-line: underline;
}

.instagram__section-description {
  margin-top: 32px; /* PP */
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

  .instagram__section-description {
    margin-top: 30px; /* PP */
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

  .instagram__section-description {
    margin-bottom: 27px;
  }
}
</style>
