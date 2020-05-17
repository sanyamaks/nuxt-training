<template>
  <div class="layout">
    <main-header></main-header>
    <nuxt />
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
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
