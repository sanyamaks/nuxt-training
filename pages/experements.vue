<template>
  <div class="container">
    <description></description>
    <stories-card></stories-card>
    <middle-button></middle-button>
    <!-- <main-stories></main-stories> -->
  </div>
</template>

<script>
import Description from '@/components/ui/Description';
import StoriesCard from '@/components/ui/StoriesCard';
import MiddleButton from '@/components/ui/MiddleButton';
import MainStories from '@/components/MainStories';

export default {
  components: {
    description: Description,
    'stories-card': StoriesCard,
    'middle-button': MiddleButton,
    'main-stories': MainStories,
  },
};
</script>

<style scoped></style>
