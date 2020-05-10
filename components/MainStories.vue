<template>
  <section class="main-stories">
    <section-title class="main-stories__section-title">
      Истории неизлечимых привычек
    </section-title>
    <div class="main-stories__container">
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
    </div>
    <button class="main-stories__button">Больше статей</button>
  </section>
</template>

<script>
import StoriesCard from './ui/StoriesCard';
import SectionTitle from './ui/SectionTitle';

export default {
  components: {
    'stories-card': StoriesCard,
    'section-title': SectionTitle,
  },
};
</script>

<style scoped>
.main-stories {
  max-width: 1320px;
  margin: auto;
  padding: 100px 0;
}

.main-stories__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 3.0303%;
  grid-row-gap: 70px;
  margin-bottom: 70px;
}

.main-stories__section-title {
  margin-bottom: 70px;
}

.main-stories__button {
  width: 100%;
  min-height: 82px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: #fbfbfb;
}

@media screen and (max-width: 1280px) {
  .main-stories__container {
    grid-row-gap: 60px;
    margin-bottom: 60px;
  }

  .main-stories__section-title {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1024px) {
  .main-stories__container {
    grid-row-gap: 46px;
    margin-bottom: 46px;
  }

  .main-stories__section-title {
    margin-bottom: 46px;
  }
}

@media screen and (max-width: 768px) {
  .main-stories__container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto;
    grid-row-gap: 40px;
    margin-bottom: 60px;
  }

  .main-stories__section-title {
    margin: auto;
    margin-bottom: 60px;
  }
}
</style>
