<template>
  <section class="about-us">
    <h2 class="about-us__title">{{ blockContent.hashtag }}</h2>

    <div class="about-us__container">
      <section-title class="about-us__section-title">{{
        blockContent.title
      }}</section-title>

      <section-description class="about-us__section-description">
        {{ blockContent.text.replace(/(<\/?p>)/g, '') }}
      </section-description>

      <div class="about-us__toggle-links">
        <toggle-link
          v-for="toggleButton in blockContent.extraTexts"
          :key="toggleButton.id"
          name="options"
          :label="toggleButton.id"
          :id="`radio-${toggleButton.id}`"
          :value="toggleButton.id"
          @change="showContentById"
          class="about-us__toggle-link"
          >{{ toggleButton.title }}</toggle-link
        >
      </div>

      <div class="about-us__text-container">
        <section-text class="about-us__text">
          {{ textToShow.replace(/(<\/?p>)/g, '') }}
        </section-text>
      </div>
    </div>
  </section>
</template>

<script>
import mixinBlockContent from '@/mixins/mixinBlockContent';
import ToggleLink from '@/components/ui/ToggleLink';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionDescription from '@/components/ui/SectionDescription';
import SectionText from '@/components/ui/SectionText';

export default {
  components: {
    'toggle-link': ToggleLink,
    'section-title': SectionTitle,
    'section-description': SectionDescription,
    'section-text': SectionText,
  },

  data() {
    return {
      textToShow: this.blockContent.extraTexts[0].text,
    };
  },

  mixins: [mixinBlockContent],

  computed: {
    contentToShow() {
      return this.$store.getters['aboutUs/getContentToShow'];
    },
    toggleButtons() {
      return this.$store.getters['aboutUs/getToggleButtons'];
    },
  },
  methods: {
    // setChecked() {
    //   this.checked++;
    //   return this.checked;
    // },

    showContentById(id) {
      const extraTexts = this.blockContent.extraTexts.find(
        (text) => text.id === id
      );
      this.textToShow = extraTexts.text;
      //this.$store.commit('aboutUs/showContentById', e);
    },
  },
};
</script>

<style scoped>
.about-us {
  background: #613a93;
  padding: 0 60px;
  min-height: 650px;
  padding-top: 90px;
  padding-bottom: 100px;
}

.about-us__title {
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;

  color: #ffffff;
}

.about-us__container {
  margin: 0 auto;
  margin-top: 70px;
  max-width: 1320px;
  display: grid;
  grid-template-areas:
    'section-title     .             .'
    'section-description  toggle-links  text-container';
  grid-template-columns: 1fr 20% 50%;
  grid-column-gap: 40px;
  grid-row-gap: 32px;
}

.about-us__section-title {
  grid-area: section-title;
  color: #ffffff;
}

.about-us__section-description {
  grid-area: section-description;
  color: #dedede;
}

.about-us__toggle-links {
  grid-area: toggle-links;

  display: flex;
  flex-direction: column;
}

.about-us__toggle-link {
  text-align: right;
  text-decoration: none;
  color: #c9c9c9;
  margin-bottom: 10px;
}

.about-us__toggle-link:last-of-type {
  margin-bottom: 0;
}

.about-us__toggle-link_active {
  color: #ffffff;
}

.about-us__text-container {
  grid-area: text-container;
}

.about-us__text {
  margin-bottom: 20px;

  color: #dedede;
}

.about-us__text:last-of-type {
  margin-bottom: 0;
}

@media screen and (max-width: 1280px) {
  .about-us {
    padding: 0 50px;
    padding-top: 80px;
    padding-bottom: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .about-us {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .about-us__container {
    grid-column-gap: 40px;
  }
}

@media screen and (max-width: 768px) {
  .about-us {
    padding: 80px 40px;
  }

  .about-us__container {
    margin-top: 0;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-us__section-title {
    width: 100%;
    grid-area: unset;
  }

  .about-us__title {
    display: none;
  }

  .about-us__section-description {
    margin-top: 26px;
    align-self: center;
  }

  .about-us__toggle-links {
    align-self: flex-start;
    flex-direction: row;
  }

  .about-us__toggle-link {
    margin-top: 80px;
    margin-bottom: 0;
    margin-right: 30px;
  }

  .about-us__toggle-link:last-of-type {
    margin-right: 0;
  }

  .about-us__text-container {
    margin-top: 30px;
  }

  .about-us__toggle-link {
    text-align: unset;
  }

  .about-us__toggle-link_active {
    border-bottom: 2px solid #fff;
  }
}

@media screen and (max-width: 425px) {
  .about-us__toggle-link {
    margin-top: 40px;
  }
}

@media screen and (max-width: 320px) {
  .about-us {
    padding: 80px 15px;
  }

  .about-us__section-title {
    text-align: left;
  }

  .about-us__section-description {
    letter-spacing: -0.5px;
    margin-top: 16px;
  }

  .about-us__text-container {
    margin-top: 20px;
  }
}
</style>
