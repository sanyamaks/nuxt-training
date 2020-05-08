<template>
  <div class="container">
    <description></description>
    <stories-card></stories-card>
    <middle-button></middle-button>
  </div>
</template>

<script>
import Description from '@/components/ui/Description';
import StoriesCard from '@/components/ui/StoriesCard';
import MiddleButton from '@/components/ui/MiddleButton';

export default {
  components: {
    description: Description,
    'stories-card': StoriesCard,
    'middle-button': MiddleButton,
  },
};
</script>

<style scoped></style>
