import axios from 'axios';

export const state = () => ({
  // stories1: [
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 1 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 2 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 3 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 4 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 5 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 6 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 7 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 8 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 9 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 10 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 11 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 12 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 13 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 14 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 15 },
  //   { name: 'Человек Страница 1', quote: 'Цитата Человека', id: 16 },
  //
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 17 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 18 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 19 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 20 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 21 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 22 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 23 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 24 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 25 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 26 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 27 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 28 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 29 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 30 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 31 },
  //   { name: 'Человек Страница 2', quote: 'Цитата Человека', id: 32 },
  //
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 33 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 34 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 35 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 36 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 37 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 38 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 39 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 40 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 41 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 42 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 43 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 44 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 45 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 46 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 47 },
  //   { name: 'Человек Страница 3', quote: 'Цитата Человека', id: 48 },
  // ],
  stories: [],
  CurrentIndex: 0,
  itemsPerPage: 16,
  numberOfPages: 0,
  storiesToShow: [],
});

export const mutations = {
  setStoriesToShow(state, value) {
    state.storiesToShow = value;
  },

  setItemsPerPage(state, value) {
    state.itemsPerPage = value;
  },

  setCurrentIndex(state, value) {
    state.CurrentIndex = value;
  },

  setNumberOfPages(state, value) {
    state.numberOfPages = value;
  },
  setstories(state, stories) {
    state.stories = stories;
  },
};

export const actions = {
  defineStoriesToShow({ state, commit }) {
    const { stories } = state;
    const storiesToShow = stories.filter(
      (item, index) =>
        index >= state.CurrentIndex &&
        index <= state.CurrentIndex + state.itemsPerPage - 1
    );

    commit('setStoriesToShow', storiesToShow);
  },

  calcNumberOfPages({ state, commit }) {
    const numberOfPages = Math.ceil(state.stories.length / state.itemsPerPage);
    commit('setNumberOfPages', numberOfPages);
  },

  changeItemsPerPage({ state, commit, dispatch }) {
    if (process.browser) {
      if (window.innerWidth <= 320) {
        commit('setItemsPerPage', 9);
        dispatch('calcNumberOfPages');
        return state.itemsPerPage;
      }

      if (window.innerWidth <= 768) {
        commit('setItemsPerPage', 12);
        dispatch('calcNumberOfPages');
        return state.itemsPerPage;
      }

      commit('setItemsPerPage', 16);
      dispatch('calcNumberOfPages');
      return state.itemsPerPage;
    }
  },

  changeCurrentIndex({ state, dispatch, commit }, { index }) {
    const { itemsPerPage } = state;
    const newCurrentIndex = (index - 1) * itemsPerPage;

    commit('setCurrentIndex', newCurrentIndex);
    dispatch('defineStoriesToShow');
  },
  fetchStories({ state, commit }) {
    return axios
      .get('https://strapi.kruzhok.io/stories')
      .then((response) => {
        return commit('setstories', response.data);
      })
      .catch((error) => console.log(error));
  },
};

export const getters = {
  getStories(state) {
    return state.storiesToShow;
  },

  getNumberOfPages(state) {
    return state.numberOfPages;
  },

  getItemsPerPage(state) {
    return state.itemsPerPage;
  },

  getTotalItems(state) {
    return state.stories.length;
  },
};
