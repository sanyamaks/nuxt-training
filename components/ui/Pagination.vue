<template>
  <div class="pagination">
    <button
      :class="[
        'pagination__link',
        {
          pagination__link_inactive: activePage === 1,
        },
      ]"
      @click="jumpToPage(true)"
    >
      Первая
    </button>
    <div class="pagination__container">
      <button
        class="pagination__control pagination__control_direction_left"
        @click="changeActivePage(false)"
      ></button>

      <ul class="pagination__items">
        <li v-for="page in pagesToRender" :key="page" class="pagination__item">
          <button
            @click="setActive(page)"
            :class="[
              'pagination__control pagination__control_type_button',
              {
                pagination__control_active: page === activePage,
              },
            ]"
          >
            {{ page }}
          </button>
        </li>
      </ul>

      <button
        class="pagination__control pagination__control_direction_right"
        @click="changeActivePage(true)"
      ></button>
    </div>

    <button
      :class="[
        'pagination__link',
        {
          pagination__link_inactive: activePage === numberOfPages,
        },
      ]"
      @click="jumpToPage(false)"
    >
      Последняя
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstPage: 1,
      activePage: 1,
      pageLimit: 5,
      pagesToRender: [],
    };
  },

  props: {
    // activePage: {
    //   type: Number,
    //   default: 1,
    // },
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
    numberOfPages: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    setActive(item) {
      this.activePage = item;
      this.$emit('onPageChanged', item);
    },

    changeActivePage(increasing) {
      if (increasing) {
        if (this.activePage != this.numberOfPages) {
          this.activePage++;
          this.firstPage++;
          this.pagesToRender = this.definePagesToRender();
        }
      } else {
        if (this.activePage != 1) {
          this.activePage--;
          this.firstPage--;
          this.pagesToRender = this.definePagesToRender();
        }
      }

      this.$emit('onPageChanged', this.activePage);
    },

    jumpToPage(first) {
      if (first) {
        this.activePage = 1;
        this.firstPage = 1;
        this.pagesToRender = this.definePagesToRender();
      } else {
        this.activePage = this.numberOfPages;
        this.firstPage = this.numberOfPages - this.pageLimit + 1;
        this.pagesToRender = this.definePagesToRender();
      }

      this.$emit('onPageChanged', this.activePage);
    },

    definePageLimit() {
      if (process.browser) {
        if (window.innerWidth <= 570) return 3;
        if (window.innerWidth <= 768) return 4;
      }

      return 5;
    },

    definePagesToRender() {
      const result = [];
      let from = this.firstPage;
      let to = this.firstPage + this.pageLimit;

      if (this.firstPage > this.numberOfPages - this.pageLimit) {
        from = this.numberOfPages - this.pageLimit + 1;
      }

      if (from <= 1) {
        from = 1;
      }

      if (this.pageLimit + this.firstPage > this.numberOfPages) {
        to = this.numberOfPages + 1;
      }

      if (to <= this.pageLimit) {
        to = this.pageLimit + 1;
      }

      for (let i = from; i < to; i++) {
        result.push(i);
      }

      return result;
    },
  },

  beforeMount() {
    this.pageLimit = this.definePageLimit();
    this.pagesToRender = this.definePagesToRender();
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination__container {
  display: flex;
  justify-content: center;
}

.pagination__link {
  padding: 0;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
}

.pagination__link:first-of-type {
  margin-left: 0;
}

.pagination__link:last-of-type {
  margin-right: 0;
}

.pagination__link_inactive {
  color: #a2a2a2;
}

.pagination__control {
  width: 58px;
  height: 58px;
  padding: 0;
  border: none;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
}

.pagination__control_direction_left {
  background-image: url('../../static/images/icon_arrow_left.svg');
}

.pagination__control_direction_right {
  background-image: url('../../static/images/icon_arrow_right.svg');
}

.pagination__control_type_button {
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
}

.pagination__control_active {
  background: #f4f4f4;
}

.pagination__items {
  margin: 0 10px;
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

@media screen and (max-width: 640px) {
  .pagination {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .pagination__container {
    grid-row-start: 1;
    grid-column: span 2;
  }

  .pagination__link {
    margin: 0;
    margin-top: 34px;
    font-size: 15px;
    line-height: 18px;
    justify-self: start; /* PP */
  }

  .pagination__link:last-of-type {
    justify-self: end; /* PP */
  }

  .pagination__control {
    width: 50px;
    height: 50px;
  }

  .pagination__control_type_button {
    font-size: 15px;
    line-height: 18px;
  }
}
</style>
