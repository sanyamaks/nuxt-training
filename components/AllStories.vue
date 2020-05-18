<template>
  <section class="all-stories" ref="allStories">
    <section-title class="all-stories__section-title">
      Истории неизлечимых привычек
    </section-title>
    <form class="all-stories__form">
      <input class="all-stories__search" type="text" name="" id="" />
      <middle-button class="all-stories__middle-button" text="Поиск">
      </middle-button>
      <button class="all-stories__small-button"></button>
    </form>
    <div class="all-stories__container">
      <stories-card
        v-bind:person="item"
        v-bind:key="item.id"
        v-for="item in showPersons"
        @cardClick="goToDetail(item.id)"
      >
      </stories-card>
    </div>
    <div class="all-stories__controls">
      <button class="all-stories__control">1</button>
      <button class="all-stories__control">2</button>
      <button class="all-stories__control">3</button>
      <button class="all-stories__control">4</button>
      <button class="all-stories__control all-stories__control_display_none">
        5
      </button>
      <button class="all-stories__control all-stories__control_display_none">
        6
      </button>
      <button class="all-stories__control all-stories__control_display_none">
        7
      </button>
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
  methods: {
    goToDetail(id) {
      console.log(id);
      this.$router.push(`/stories/${id}`);
    },
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
        { name: 'Человек', quote: 'Цитата Человека', id: 1 },
        { name: 'Человек', quote: 'Цитата Человека', id: 2 },
        { name: 'Человек', quote: 'Цитата Человека', id: 3 },
        { name: 'Человек', quote: 'Цитата Человека', id: 4 },
        { name: 'Человек', quote: 'Цитата Человека', id: 5 },
        { name: 'Человек', quote: 'Цитата Человека', id: 6 },
        { name: 'Человек', quote: 'Цитата Человека', id: 7 },
        { name: 'Человек', quote: 'Цитата Человека', id: 8 },
        { name: 'Человек', quote: 'Цитата Человека', id: 9 },
        { name: 'Человек', quote: 'Цитата Человека', id: 10 },
        { name: 'Человек', quote: 'Цитата Человека', id: 11 },
        { name: 'Человек', quote: 'Цитата Человека', id: 12 },
        { name: 'Человек', quote: 'Цитата Человека', id: 13 },
        { name: 'Человек', quote: 'Цитата Человека', id: 14 },
        { name: 'Человек', quote: 'Цитата Человека', id: 15 },
        { name: 'Человек', quote: 'Цитата Человека', id: 16 },
      ],
    };
  },
};
</script>

<style scoped>
.all-stories {
  width: 100%;
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

.all-stories__small-button {
  display: none;
  width: 46px;
  height: 46px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background-size: 16px 16px;
  background-position: center;
  background-color: #613a93;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23fff' offset='0'/%3E%3Cstop stop-color='%23d2d5d8' offset='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='%23fff' d='M37.939 39.086C-5.334 82.358-5.44 153.245 37.833 196.518c36.663 36.663 93.202 42.25 135.921 16.766l76.344 74.235c10.507 10.198 27.085 9.821 37.117-.844 10.033-10.665 9.77-27.446-.738-37.644l-75.183-72.864c26.361-42.847 21.008-100.045-16.028-137.081-43.273-43.273-114.055-43.273-157.327 0zm31.739 31.739c26.102-26.102 67.746-26.102 93.848 0 26.102 26.102 26.102 67.746 0 93.848-26.102 26.102-67.746 26.102-93.848 0-26.102-26.102-26.102-67.746 0-93.848z'/%3E%3C/svg%3E");
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

@media screen and (max-width: 600px) {
  .all-stories__form .all-stories__middle-button {
    display: none;
  }

  .all-stories__small-button {
    display: inline-block;
  }

  .all-stories__search {
    width: calc(100% - 46px - 10px);
  }
}

@media screen and (max-width: 425px) {
  .all-stories__container {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 40px;
    margin-bottom: 146px;
  }
}

@media screen and (max-width: 320px) {
  .all-stories__container {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
    margin-bottom: 50px;
  }

  .all-stories__section-title {
    margin-bottom: 40px;
  }

  .all-stories__form {
    margin-bottom: 30px;
  }

  .all-stories__control_display_none {
    display: none;
  }
}
</style>
