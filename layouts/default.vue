<template>
  <div class="layout">
    <div>{{ blocksList }}</div>
    <container>
      <main-header />
    </container>
    <nuxt />
    <container>
      <popup v-if="isShowPopup"> </popup>
      <main-footer />
    </container>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import Container from '@/components/Container';

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    popup: Popup,
    container: Container,
  },

  computed: {
    isShowPopup() {
      return this.$store.getters['popup/getPopupShown'];
    },

    blocksList() {
      const blocks = this.$store.getters['default/getBlocks'];
      console.dir(blocks);
      //return this.$store.getters['default/getBlocks'];
    },
  },

  async fetch() {
    await this.$store.dispatch('default/fetchBlocks');
    await this.$store.dispatch('allStories/fetchStories');
    this.$store.dispatch('allStories/countNumberOfItems');
  },
};
</script>

<style>
html {
  font-family: 'Inter', monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  position: relative;
}
</style>
