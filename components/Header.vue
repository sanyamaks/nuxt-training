<template>
  <header class="header">
    <h1 class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </h1>

    <main-menu :isLastButtonShown="true" />
    <!-- Гамбургер при 768px -->
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
  line-height: 23px;
  max-width: 388px;
  padding-top: 18px;
  padding-bottom: 18px;
  color: #000000;
  letter-spacing: 0.85px;
}

@media screen and (max-width: 1280px) {
  .header {
    padding: 0 50px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding: 0 40px;
  }
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
