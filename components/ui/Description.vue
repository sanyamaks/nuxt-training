<template>
  <div class="description">
    <section-title class="description__section-title">
      Истории людей, победивших рак, но не свои привычки
    </section-title>
    <p class="description__section-subtitle">
      Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
      страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
      их историями.
    </p>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle';

export default {
  components: {
    'section-title': SectionTitle,
  },
};
</script>

<style scoped>
.description {
  display: inline-block;
}

.description__section-subtitle {
  width: 342px;
  height: 110px;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin-top: 32px;
}
</style>
