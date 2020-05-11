<template>
  <button class="stories-button">
    <slot>Button name</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.stories-button {
  width: 100%;
  min-height: 78px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: #fbfbfb;
}

@media screen and (max-width: 1024px) {
  .stories-button {
    min-height: 50px;
  }
}
</style>
