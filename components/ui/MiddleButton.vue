<template>
  <button class="middle-button" @click="handleClick" :type="type">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'middle-button',
  props: {
    text: String,
    type: {
      default: 'button',
      type: String,
    },
  },
  methods: {
    handleClick(event) {
      event.preventDefault();
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.middle-button {
  width: 226px;
  min-height: 52px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #613a93;
}

@media screen and (max-width: 1280px) {
  .middle-button {
    min-height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .middle-button {
    min-height: 46px;
    font-size: 15px;
  }
}
</style>
