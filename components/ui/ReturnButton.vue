<template>
  <button class="return-button" type="submit">
    <slot>text</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.return-button {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  border: none;
  background-color: unset;
  outline: none;
  cursor: pointer;
}
</style>
