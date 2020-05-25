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
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <!-- вставить ссылки nuxt -->
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
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
  width: 100%;
}

.instagram__container {
  width: 100%;
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
  position: relative;

  background-color: #ededed;
}

.instagram__item:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.instagram__link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000070;
}

@media screen and (max-width: 1280px) {
  .instagram__section-description {
    margin-top: 30px; /* PP */
    margin-right: 27px;
  }

  .instagram__items {
    grid-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__section-description {
    margin-right: 20px;
  }

  .instagram__items {
    grid-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .instagram__container {
    display: flex;
    flex-direction: column;
  }

  .instagram__side {
    margin: 0 auto;
  }

  .instagram__section-title {
    max-width: unset;
  }

  .instagram__section-description {
    margin-right: 0;
    margin-bottom: 60px;
  }

  .instagram__items {
    grid-gap: 20px;
  }
}

@media screen and (max-width: 425px) {
  .instagram__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

@media screen and (max-width: 320px) {
  .instagram__section-description {
    margin-bottom: 15px;
    margin-bottom: 40px;
  }
}
</style>
