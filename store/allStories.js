import axios from 'axios';

export const state = () => ({
  stories: [],
  CurrentIndex: 0,
  itemsPerPage: 16,
  numberOfItems: 0,
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

  setStories(state, stories) {
    state.stories = stories;
  },

  setNumberOfItems(state, value) {
    state.numberOfItems = value;
  },
};

export const actions = {
  countNumberOfItems({ state, commit }) {
    const numberOfItems = state.stories.length + 1;
    commit('setNumberOfItems', numberOfItems);
  },

  defineStoriesToShow({ state, commit, dispatch }) {
    console.dir(state);
    dispatch('changeItemsPerPage');

    const { stories } = state;
    const storiesToShow = stories.filter(
      (item, index) =>
        index >= state.CurrentIndex &&
        index <= state.CurrentIndex + state.itemsPerPage - 1
    );

    commit('setStoriesToShow', storiesToShow);
  },

  calcNumberOfPages({ state, commit }) {
    const numberOfPages = Math.ceil(state.numberOfItems / state.itemsPerPage);
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

  fetchStories({ state, commit, dispatch }) {
    return axios
      .get('https://strapi.kruzhok.io/stories') // надо будет убрать хардкод
      .then((response) => {
        return commit('setStories', response.data);
      })
      .catch((error) => console.log(error));
  },
};

export const getters = {
  getStoriesToShow(state) {
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
