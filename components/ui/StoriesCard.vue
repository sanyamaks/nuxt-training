<template>
  <div class="stories-card" @click="handleClick">
    <img
      class="stories-card__photos"
      src="https://nibler.ru/uploads/users/8039/2013-06-10/kvadrat-seryy-eto-interesno-poznavatelno-kartinki_608533329.png"
      alt=""
    />
    <h3 class="stories-card__title">
      {{ story.author }}
    </h3>
    <blockquote class="stories-card__subtitle">
      {{ story.title }}
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    story: Object
  },
  methods:{
    handleClick(event){
      event.preventDefault();
      this.$emit("click");
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.stories-card {
  width: 100%;
  display: inline-block;
  cursor: pointer;
}

.stories-card__photos {
  width: 100%;
  margin-bottom: 15px;
  background-color: gray;
}

.stories-card__title {
  width: 100%;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 22px;
}

.stories-card__subtitle {
  max-width: 250px;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}

@media screen and (max-width: 1024px) {
  .stories-card__title {
    font-size: 18px;
  }

  .stories-card__subtitle {
    max-width: 190px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 768px) {
  .stories-card__subtitle {
    max-width: 200px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 320px) {
  .stories-card__title {
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
