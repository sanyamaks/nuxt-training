<template>
  <section class="all-stories" ref="allStories">
    <section-title class="all-stories__section-title">
      Истории неизлечимых привычек
    </section-title>
    <form class="all-stories__form">
      <input class="all-stories__search" type="text" name="" id="" />
      <middle-button>Поиск</middle-button>
    </form>
    <div class="all-stories__container">
      <stories-card
        v-bind:person="item"
        v-bind:key="item.id"
        v-for="item in showPersons"
      >
      </stories-card>
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

  computed: {
    showPersons() {
      if (process.browser) {
        if (window.innerWidth <= 768) {
          return this.persons.filter((item, index) => index < 12);
        } else {
          return this.persons.filter((item, index) => index < 16);
        }
      }
    },
  },

  data() {
    return {
      persons: [
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
      ],
    };
  },
};
</script>

<style scoped>
.all-stories {
  width: 100%;
  margin: auto;
}

.all-stories__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 3.0303%;
  grid-row-gap: 70px;
  margin-bottom: 140px;
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
  width: 58px;
  height: 58px;
  padding: 0;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #181818;
  cursor: pointer;
  background-color: #fbfbfb;
}

@media screen and (max-width: 1280px) {
  .all-stories__container {
    grid-row-gap: 60px;
    margin-bottom: 130px;
  }

  .all-stories__section-title {
    margin-bottom: 50px;
  }

  .all-stories__form {
    margin-bottom: 60px;
  }

  .all-stories__search {
    min-height: 48px;
  }

  .all-stories__control {
    width: 56px;
    height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .all-stories__container {
    grid-row-gap: 46px;
    margin-bottom: 110px;
  }

  .all-stories__section-title {
    margin-bottom: 40px;
  }

  .all-stories__form {
    margin-bottom: 40px;
  }

  .all-stories__search {
    min-height: 46px;
  }

  .all-stories__control {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 768px) {
  .all-stories__container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 40px;
    margin-bottom: 146px;
  }

  .all-stories__section-title {
    margin: auto;
    margin-bottom: 50px;
  }

  .all-stories__form {
    margin-bottom: 60px;
  }
}
</style>
