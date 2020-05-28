<template>
  <div class="toggle">
    <input
      type="radio"
      class="toggle__radio"
      :id="id"
      :value="value"
      :name="name"
      v-model="radioButtonValue"
    />

    <label :for="id" class="toggle__label" :value="label">
      <slot>Text</slot>
    </label>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'name', 'value', 'firstChecked'],
  computed: {
    radioButtonValue: {
      get: function () {
        return this.label;
      },
      set: function () {
        this.$emit('change', this.value);
      },
    },
  },
};
</script>

<style scoped>
.toggle__radio {
  display: none;
}

.toggle__label {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  cursor: pointer;
  color: #a2a2a2;
}

.toggle__radio:checked + .toggle__label {
  font-weight: 500;
  color: #ffffff;
}

@media screen and (max-width: 320px) {
  .toggle__label {
    font-size: 13px;
    line-height: 19px;
  }
}
</style>
