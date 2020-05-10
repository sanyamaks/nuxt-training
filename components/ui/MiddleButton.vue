<template>
  <button class="middle-button" type="submit">
    <slot>text</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.middle-button {
  width: 226px;
  min-height: 52px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #613a93;
}

@media screen and (max-width: 1280px) {
  .middle-button {
    min-height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .middle-button {
    min-height: 46px;
  }
}
</style>
