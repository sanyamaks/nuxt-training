<template>
  <footer class="footer">
    <section class="footer__container">
      <div class="footer__half">
        <section-title class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </section-title>

        <main-menu class="footer__nav" :isLastButtonShown="false" />

        <div class="footer__links">
          <p class="footer__text footer__text_type_link">
            Мы в
            <nuxt-link to="/" class="footer__link" target="_blank"
              >Инстаграме</nuxt-link
            >
            и
            <nuxt-link to="/" class="footer__link" target="_blank"
              >Youtube</nuxt-link
            >
          </p>
          <nuxt-link to="/" class="footer__link">Поделитесь &#8599;</nuxt-link>
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

.footer__title {
  max-width: 265px;
}

.footer__nav {
  margin-left: 113px; /* PP */
  margin-right: auto;
}

.footer__links {
  max-width: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
}

.footer__text {
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

.footer__text_type_link {
  line-height: 24px;
  color: #000000;
  margin-bottom: 44px;
}

.footer__link {
  line-height: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.footer__link:hover {
  color: #121212;

  opacity: 0.8;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding: 50px;
  }

  .footer__nav {
    margin-left: 102px; /* PP */
  }
}

@media screen and (max-width: 1024px) {
  .footer__nav {
    margin-left: 0px; /* PP */
  }

  .footer__links {
    max-width: 225px;
  }

  .footer__text {
    font-size: 16px;
    line-height: 18px;
  }

  .footer__text_type_link {
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 768px) {
  .footer__title {
    text-align: left;
  }

  .footer__nav {
    margin-left: 30px; /* PP */
  }

  .footer__text {
    font-size: 16px;
    line-height: 18px;
  }

  .footer__links {
    max-width: 225px;
  }

  .footer__text_type_link {
    line-height: 24px;
    margin-bottom: 14px; /* PP */
  }
}

@media screen and (max-width: 320px) {
  .footer {
    padding: 12px;
  }
}
</style>
