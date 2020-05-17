<template>
  <section class="social-media">
    <div class="social-media__content">
      <h2 class="social-media__title">Поделитесь</h2>

      <close-button
        @btnClick="showSocialMedia"
        class="social-media__close-button"
      />

      <ul class="social-media__items">
        <li
          v-for="link in getSocialMediaLinks"
          :key="link.id"
          class="social-media__item"
        >
          <a :href="link.url" target="_blank" class="social-media__link">
            <img
              :src="
                require(`@/static/images/icon_${link.name.toLowerCase()}.svg`)
              "
              :alt="`${link.name} logo`"
              class="social-media__image"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import CloseButton from '@/components/ui/CloseButton';

export default {
  components: {
    'close-button': CloseButton,
  },
  computed: {
    getSocialMediaLinks() {
      return this.$store.getters['SocialMedia/getSocialMediaLinks'];
    },
  },
  methods: {
    showSocialMedia() {
      this.$store.commit('SocialMedia/toggleSocialMedia');
    },
  },
};
</script>

<style scoped>
.social-media {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-media__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 920px;
  min-height: 324px;
  background-color: #ffffff;
  position: relative;
  padding: 40px;
}

.social-media__title {
  margin: 0 auto;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;

  color: #000000;
}

.social-media__close-button {
  position: absolute;
  top: 42px; /* PP */
  right: 42px; /* PP */
}

.social-media__items {
  padding: 0;
  margin: 100px auto 0;
  display: flex;
  max-width: 388px;
  width: 100%;
  justify-content: space-between;
}

.social-media__item {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 48px;
  height: 48px;
}

.social-media__link {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.social-media__image {
  width: 100%;
  height: 100%;
}
</style>
