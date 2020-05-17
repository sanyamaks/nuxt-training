<template>
  <footer class="footer">
    <section class="footer__container">
      <div class="footer__half">
        <div class="footer__box">
          <h2 class="footer__title">
            Спасибо всем, кто помог состояться этому проекту
          </h2>
          <div class="footer__navigation">
            <nuxt-link to="/" class="footer__link menu__link_active">
              Главная
            </nuxt-link>
            <nuxt-link to="/stories" class="footer__link">
              Истории
            </nuxt-link>
          </div>
        </div>
        <div class="footer__links">
          <p class="footer__text footer__text_type_link">
            Мы в
            <nuxt-link to="/" class="footer__link" target="_blank">
              Инстаграме
            </nuxt-link>
            и
            <nuxt-link to="/" class="footer__link" target="_blank">
              Youtube
            </nuxt-link>
          </p>
          <nuxt-link to="/" class="footer__link" @click.native="showSocialMedia"
            >Поделитесь &#8599;</nuxt-link
          >
        </div>
      </div>

      <div class="footer__half">
        <small class="footer__text">Рак Лечится 2020</small>

        <p class="footer__text">Сделано студентами Яндекс Практикум</p>
      </div>
    </section>
  </footer>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Menu from '@/components/Menu';

export default {
  components: {
    'section-title': SectionTitle,
    'main-menu': Menu,
  },
  methods: {
    showSocialMedia() {
      this.$store.commit('SocialMedia/toggleSocialMedia');
    },
  },
};
</script>

<style scoped>
.footer {
  max-width: 1440px;
  min-height: 356px;
  margin: auto;
  padding: 60px;
  display: flex;
  align-items: stretch;
  background: #fbfbfb;
}

.footer__container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__half {
  display: flex;
  justify-content: space-between;
}

.footer__box {
  display: flex;
}

.footer__navigation {
  display: flex;
}

.footer__navigation .footer__link:first-child {
  margin-right: 40px;
}

.footer__title {
  max-width: 310px;
  min-width: 228px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-right: 143px;
}

.footer__link {
  color: #000000;
  cursor: pointer;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
}

.footer__link:hover {
  opacity: 0.8;
}

.footer__links {
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

.footer__text {
  font-size: 18px;
  color: #898989;
}

.footer__text_type_link {
  color: #000000;
  margin-bottom: 44px;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding: 50px;
    min-height: 316px;
  }

  .footer__title {
    max-width: 280px;
    font-size: 28px;
    line-height: 32px;
    margin-right: 137px;
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    min-height: 292px;
  }

  .footer__title {
    max-width: 230px;
    font-size: 24px;
    line-height: 28px;
    margin-right: 90px;
  }

  .footer__links {
    max-width: 225px;
  }

  .footer__link {
    font-size: 16px;
  }

  .footer__navigation .footer__link:first-child {
    margin-right: 30px;
  }

  .footer__text {
    font-size: 16px;
  }

  .footer__text_type_link {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 900px) {
  .footer__title {
    margin-right: 30px;
  }
}

@media screen and (max-width: 768px) {
  .footer__title {
    margin-right: 62px;
  }

  .footer__text_type_link {
    margin-bottom: 14px;
  }

  .footer__navigation {
    flex-direction: column;
  }

  .footer__navigation .footer__link:first-child {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 640px) {
  .footer__title {
    max-width: 290px;
    margin: 0;
    margin-bottom: 50px;
  }

  .footer__link {
    margin-bottom: 14px;
  }

  .footer__text {
    margin-bottom: 14px;
  }

  .footer__half {
    flex-direction: column;
    margin-bottom: 50px;
  }

  .footer__half:last-of-type {
    margin-bottom: 0;
  }

  .footer__box {
    flex-direction: column;
  }
}

@media screen and (max-width: 320px) {
  .footer {
    padding: 12px;
  }

  .footer__half {
    flex-direction: column;
  }
}
</style>
