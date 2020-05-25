<template>
  <header class="header">
    <nuxt-link to="/" class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </nuxt-link>
    <main-menu :isLastButtonShown="true" />
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
  max-width: 1440px;
  min-height: 76px;
  margin: auto;
  display: flex;
  align-items: center;
  background: #ffffff;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  padding: 0 60px;
}

.header__logo {
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 388px;
  color: #000000;
  letter-spacing: 0.85px;
}

@media screen and (max-width: 1280px) {
  .header {
    padding: 0 50px;
  }

  .header__logo {
    line-height: 18px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    min-height: 72px;
    padding: 0 40px;
  }
}

@media screen and (max-width: 425px) {
  .header {
    min-height: 64px;
    padding: 0 15px;
  }

  .header__logo {
    max-width: 220px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0;
  }
}
</style>
