<template>
  <all-stories class="stories__all-stories"></all-stories>
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
.stories__all-stories {
  margin-top: 100px;
  margin-bottom: 160px;
}
</style>
