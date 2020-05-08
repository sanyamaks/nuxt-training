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
  display: inline-block;
  cursor: pointer;
}

.stories-card__photoes {
  max-width: 300px;
  min-height: 300px;
  margin-bottom: 12px;
  background-color: gray;
}

.stories-card__title {
  max-width: 300px;
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
</style>
