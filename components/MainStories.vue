<template>
  <section class="main-stories">
    <section-title class="main-stories__section-title">
      Истории неизлечимых привычек
    </section-title>
    <div class="main-stories__container">
      <stories-card
        v-bind:person="item"
        v-bind:key="item.id"
        v-for="item in showPersons"
      >
      </stories-card>
    </div>
    <stories-button class="main-stories__stories-button">
      Больше статей
    </stories-button>
  </section>
</template>

<script>
import StoriesCard from './ui/StoriesCard';
import SectionTitle from './ui/SectionTitle';
import StoriesButton from './ui/StoriesButton.vue';

export default {
  components: {
    'stories-card': StoriesCard,
    'section-title': SectionTitle,
    'stories-button': StoriesButton,
  },

  computed: {
    showPersons() {
      if (process.browser) {
        if (window.innerWidth > 425 && window.innerWidth <= 768) {
          return this.persons.filter((item, index) => index < 9);
        } else {
          return this.persons.filter((item, index) => index < 8);
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
      ],
    };
  },
};
</script>

<style scoped>
.main-stories {
  width: 100%;
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

@media screen and (max-width: 425px) {
  .main-stories__container {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 320px) {
  .main-stories__container {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
    margin-bottom: 60px;
  }

  .main-stories__section-title {
    margin-bottom: 40px;
  }

  .main-stories__stories-button {
    font-size: 13px;
  }
}
</style>
