<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  max-width: 260px;
  height: 40px;
  background: #f4f4f4;
  position: relative;
}

.progress-bar__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #613a93;
}
</style>
