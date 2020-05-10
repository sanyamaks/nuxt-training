<template>
  <div class="stories-card">
    <img
      class="stories-card__photoes"
      src="https://pbs.twimg.com/profile_images/837175195769135104/tQcPpy_m_400x400.jpg"
      alt=""
    />
    <h3 class="stories-card__title">Владимир Тен</h3>
    <p class="stories-card__subtitle">
      Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stories-card {
  width: 100%;
  display: inline-block;
  cursor: pointer;
}

.stories-card__photoes {
  width: 100%;
  margin-bottom: 12px;
  background-color: gray;
}

.stories-card__title {
  width: 100%;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 22px;
}

.stories-card__subtitle {
  max-width: 250px;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}

@media screen and (max-width: 1024px) {
  .stories-card__title {
    font-size: 18px;
  }

  .stories-card__subtitle {
    max-width: 190px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 768px) {
  .stories-card__subtitle {
    max-width: 200px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
