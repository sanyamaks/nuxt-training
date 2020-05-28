import axios from 'axios';

export const state = () => ({
  urls: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchUrl(state) {
    return axios.get('/videos').then((response) => {
      return state.commit('setState', {
        name: 'urls',
        value: response.data,
      });
    });
  },
};

export const getters = {
  getUrls(state) {
    return state.urls;
  },
};
