<template>
  <button class="close-button" @click="$emit('btnClick')">
    <img src="@/assets/icon-close-button.svg" alt="close" />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.close-button {
  padding: 0;
  top: 35px;
  right: 35px;
  border: none;
  background: unset;
  outline: none;
  cursor: pointer;
  z-index: 2;
}
</style>
