<template>
  <div class="description">
    <section-title class="description__section-title">
      <slot>Text</slot>
    </section-title>
    <p class="description__section-subtitle">
      <slot>Subtext</slot>
    </p>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle';

export default {
  components: {
    'section-title': SectionTitle,
  },
};
</script>

<style scoped></style>
