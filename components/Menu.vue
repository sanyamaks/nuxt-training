<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
    <nuxt-link to="#" class="menu__link">Рассказать историю</nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu__link {
  padding-right: 40px;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.menu__link:last-of-type {
  padding-right: 0px;
}

.menu__link:first-of-type {
  text-decoration-line: underline;
}

@media screen and (max-width: 768px) {
  .menu {
    display: flex;
    flex-direction: column;
  }

  .menu__link {
    line-height: 2;
    padding-right: 0;
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
