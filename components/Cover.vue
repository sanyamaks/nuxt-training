<template>
  <section class="cover">
    <h1 class="cover__header">#РАКЛЕЧИТСЯ</h1>
    <a href="/" class="cover__arrow"></a>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  min-height: 689px;
  background: #613a93;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cover__header {
  padding: 0;
  margin: 0;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;

  color: #ffffff;
}

.cover__arrow {
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 36px;
  height: 14px;
  background-repeat: no-repeat;
  background: url('./../assets/icon-arrow-down.svg');
}

.cover__arrow:hover {
  /*  Стили при наведении на стрелку  */

  opacity: 0.6;
}

@media screen and (max-width: 1280px) {
  .cover {
    min-height: 620px;
  }

  .cover__header {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 1024px) {
  .cover {
    min-height: 540px;
  }
}

@media screen and (max-width: 768px) {
  .cover {
    min-height: 780px;
  }

  .cover__header {
    font-size: 64px;
    line-height: 77px;
  }
}

@media screen and (max-width: 568px) {
  .cover {
    min-height: 480px;
  }

  .cover__header {
    font-size: 36px;
    line-height: 44px;
  }
}
</style>
