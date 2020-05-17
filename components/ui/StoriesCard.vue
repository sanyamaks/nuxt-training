<template>
  <div class="stories-card" @click="$emit('cardClick')">
    <img
      class="stories-card__photoes"
      src="https://nibler.ru/uploads/users/8039/2013-06-10/kvadrat-seryy-eto-interesno-poznavatelno-kartinki_608533329.png"
      alt=""
    />
    <h3 class="stories-card__title">
      {{ person.name }}
    </h3>
    <p class="stories-card__subtitle">
      {{ person.quote }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['person'],

  data() {
    return {};
  },
};
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

@media screen and (max-width: 320px) {
  .stories-card__title {
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
