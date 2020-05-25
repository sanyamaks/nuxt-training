<template>
  <input class="search" type="text" name="" id="" />
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  width: calc(100% - 226px - 20px);
  min-height: 52px;
}

@media screen and (max-width: 1280px) {
  .search {
    width: calc(100% - 200px - 20px);
    min-height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .search {
    min-height: 46px;
  }
}

@media screen and (max-width: 768px) {
  .search {
    width: calc(100% - 226px);
  }
}

@media screen and (max-width: 600px) {
  .search {
    width: calc(100% - 46px - 10px);
  }
}
</style>
