<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Nuxt streams</nuxt-link
    >
    <h1 class="header__logo" v-else>
      Проект Благотворительного Фонда Константина Хабенского
    </h1>

    <main-menu />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
export default {
  components: {
    'main-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background: #ffffff;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
}

.header__logo {
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  max-width: 388px;
  padding-top: 18px;
  padding-left: 60px;
  color: #000000;
  letter-spacing: 0.85px;
}

@media screen and (max-width: 450px) {
  .header__logo {
    font-size: 14px;
  }
}

@media screen and (max-width: 390px) {
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header__logo {
    text-align: center;
  }
}
</style>
