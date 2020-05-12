<template>
  <main class="content">
    <all-stories class="content__all-stories"></all-stories>
  </main>
</template>

<script>
import AllStories from '@/components/AllStories';

export default {
  components: {
    'all-stories': AllStories,
  },
};
</script>

<style scoped>
.content {
  max-width: 1440px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 160px;
  padding: 0 60px;
}

@media screen and (max-width: 1280px) {
  .content {
    padding: 0 50px;
  }
}

@media screen and (max-width: 1024px) {
  .content {
    padding: 0 51px;
  }
}

@media screen and (max-width: 768px) {
  .content {
    padding: 0 40px;
  }
}
</style>
