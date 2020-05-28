<template>
  <div class="mobile-menu">
    <nuxt-link to="/" class="mobile-menu_link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="mobile-menu_link">Истории</nuxt-link>
    <a class="mobile-menu_link" @click.prevent="showPopup"
      >Рассказать историю</a
    >
  </div>
</template>

<script>
export default {
  methods: {
    showPopup(event) {
      event.preventDefault();
      this.$store.commit('popup/openPopup');
      this.$store.dispatch('quiz/showQuiz');
    },
  },
};
</script>

<style scoped>
.mobile-menu {
  /* display: none; */
  min-height: 120px;
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  padding-bottom: 18px;
  align-items: flex-start;
  justify-content: space-between;
}

.mobile-menu_link {
  color: #000000;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  cursor: pointer;
}

.mobile-menu_link.nuxt-link-exact-active {
  border-bottom: solid 1px black;
}
</style>
