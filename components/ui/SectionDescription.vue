<template>
  <p class="section-description">
    <slot>Text</slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.section-description {
  max-width: 343px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .section-description {
    max-width: 305px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__section-description {
    max-width: unset;
  }
}
</style>
