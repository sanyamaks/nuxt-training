<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
    <nuxt-link to="#" class="menu__link" v-if="isLastButtonShown" @click.native="showPopup"
      >Рассказать историю</nuxt-link
    >
  </nav>
</template>

<script>
export default {
  props: {
    isLastButtonShown: Boolean,
  },
  methods: {
    showPopup(event) {
      event.preventDefault();
      this.$store.commit("popupShow/openPopup");
    },
  }
};
</script>

<style scoped>
.menu__link {
  padding-right: 40px;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
  font-weight: normal;
}
.menu__link.nuxt-link-exact-active {
  text-decoration-line: underline;
}
.menu__link_disabled {
  display: none;
}

.menu__link:hover {
  color: #121212;
  opacity: 0.8;
}

.menu__link:last-of-type {
  padding-right: 0;
}

@media screen and (max-width: 1024px) {
  .menu__link {
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    display: flex;
    flex-direction: column;
  }

  .menu__link {
    padding-right: 0;

    font-size: 16px;
    line-height: 24px;
    margin-bottom: 14px;
  }

  .menu__link:last-of-type {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 390px) {
  .menu {
    flex-direction: row;
    padding-top: 20px;
  }

  .menu__link {
    line-height: 2;
    padding-right: 20px;
  }
}
</style>
