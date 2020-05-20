<template>
  <div class="pagination">
    <ul class="pagination__items">
      <li v-for="item in pagesCount" :key="item" class="pagination__item">
        <p
          @click="setActive(item)"
          :class="[
            'pagination__button',
            {
              pagination__button_active: item === active,
            },
          ]"
        >
          {{ item }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    };
  },

  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    setActive(item) {
      this.active = item;
      this.$emit('onPageChanged', item);
    },
  },

  computed: {
    pagesCount() {
      return Math.max(this.totalItems / this.itemsPerPage);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination__items {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.pagination__item {
  margin: 0;
  padding: 0;
  margin-right: 10px;
}

.pagination__item:last-of-type {
  margin-right: 0;
}

.pagination__button {
  width: 58px;
  height: 58px;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pagination__button_active {
  background: #f4f4f4;
}
</style>
