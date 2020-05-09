<template>
  <section class="all-stories">
    <section-title class="all-stories__section-title">
      Истории неизлечимых привычек
    </section-title>
    <form class="all-stories__form">
      <input class="all-stories__search" type="text" name="" id="" />
      <middle-button>Поиск</middle-button>
    </form>
    <div class="all-stories__container">
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
    </div>
    <div class="all-stories__controls">
      <button class="all-stories__control">1</button>
      <button class="all-stories__control">2</button>
      <button class="all-stories__control">3</button>
      <button class="all-stories__control">4</button>
      <button class="all-stories__control">5</button>
      <button class="all-stories__control">6</button>
      <button class="all-stories__control">7</button>
    </div>
  </section>
</template>

<script>
import StoriesCard from './ui/StoriesCard';
import SectionTitle from './ui/SectionTitle';
import MiddleButton from './ui/MiddleButton';

export default {
  components: {
    'stories-card': StoriesCard,
    'section-title': SectionTitle,
    'middle-button': MiddleButton,
  },
};
</script>

<style scoped>
.all-stories {
  max-width: 1320px;
  margin: auto;
}

.all-stories__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  margin-bottom: 70px;
}

.all-stories__section-title {
  margin-bottom: 60px;
}

.all-stories__form {
  width: 100%;
  display: flex;
  margin-bottom: 70px;
  justify-content: space-between;
}

.all-stories__search {
  width: calc(100% - 226px - 20px);
  min-height: 52px;
}

.all-stories__controls {
  display: flex;
  justify-content: center;
}

.all-stories__control {
  width: 50px;
  height: 50px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #181818;
  cursor: pointer;
  background-color: #fbfbfb;
}
</style>
