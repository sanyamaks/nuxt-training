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
}

.main-stories__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 40px;
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
</style>
