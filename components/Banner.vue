<template>
  <section class="banner">
    <div class="banner__container">
      <h2 class="banner__title">
        <slot>Текст баннера</slot>
        <b class="banner__hashtag">#ЭТОНЕЛЕЧИТСЯ</b>
        <!-- Реализовать перенос на новую строку -->
      </h2>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  max-width: 1440px;
  min-height: 86px;
  margin: auto;
  padding: 0 60px;
  display: flex;
}

.banner__container {
  background: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px; /*  PP padding top/bottom  */
}

.banner__title {
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
}

.banner__hashtag {
  font-weight: bold;
}

.banner__hashtag_type_new-line {
  display: block;
}

@media screen and (max-width: 1280px) {
  .banner {
    padding: 0 50px;
  }

  .banner__title {
    font-size: 28px;
    line-height: 46px;
  }
}

@media screen and (max-width: 1024px) {
  .banner {
    min-height: 80px;
  }

  .banner__title {
    font-size: 24px;
    line-height: 40px;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    padding: 0 40px;
  }

  .banner__title {
    font-size: 22px;
    line-height: 36px;
  }
}

@media screen and (max-width: 320px) {
  /*  Дополнить в соответсвии с мобильным макетом  */
}
</style>
