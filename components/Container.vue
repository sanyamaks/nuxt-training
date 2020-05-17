<template>
  <div class="container">
    <slot>for components</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;
}

@media screen and (max-width: 1280px) {
  .container {
    padding: 0 50px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 40px;
  }
}
</style>
