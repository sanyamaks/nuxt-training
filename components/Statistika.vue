<template>
  <section class="statistika content__statistika">
    <section-title class="statistika__section-title"
      >Статистика по онкозаболеваниям</section-title
    >
    <div class="statistika__card">
      <div class="stat-card">
        <h3 class="stat-card__title">
          Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
          000 человек.
        </h3>
        <progress-bar
          :value="3"
          :max-value="10"
          class="stat-card__progress-bar"
        ></progress-bar>
        <p class="stat-card__number">
          1 из 3
        </p>
        <p class="stat-card__logo">Левада-Центр 2018</p>
      </div>

      <div class="stat-card">
        <h3 class="stat-card__title">2,6% Россиян имеют онкозаболевания.</h3>
        <progress-bar
          :value="0.5"
          :max-value="10"
          class="stat-card__progress-bar"
        ></progress-bar>
        <p class="stat-card__number">
          3 700 000
        </p>
        <p class="stat-card__logo">Росстат 2018</p>
      </div>

      <div class="stat-card">
        <h3 class="stat-card__title">
          На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.
        </h3>

        <progress-bar-double
          :max-value="5"
          :new-value="3"
          :old-value="2"
          class="stat-card__progress-bar"
        ></progress-bar-double>
        <p class="stat-card__number">
          &uarr; 28%
        </p>
        <p class="stat-card__logo">МНИОИ Герцена 2018</p>
      </div>

      <div class="stat-card">
        <h3 class="stat-card__title">
          На 25% снизилась смертность в течение первого года после постановки
          диагноза
        </h3>
        <progress-bar-double
          :max-value="5"
          :new-value="2"
          :old-value="3"
          class="stat-card__progress-bar"
        ></progress-bar-double>
        <p class="stat-card__number">
          &darr; 25%
        </p>
        <p class="stat-card__logo">МНИОИ Герцена 2018</p>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './ui/SectionTitle';
import ProgressBar from './ui/ProgressBar';
import ProgressBarDouble from './ui/ProgressBarDouble';

export default {
  components: {
    'section-title': SectionTitle,
    'progress-bar': ProgressBar,
    'progress-bar-double': ProgressBarDouble,
  },
};
</script>
<style scoped>
.statistika__card {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 40px;
}

.stat-card {
  padding: 20px;
  border: 1px solid #efefef;
}

.stat-card__title {
  max-width: 260px;
  min-height: 48px;
  margin: 0 auto;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 76px;
}

/* .stat-card__progress-bar {
  margin: 0 auto 20px;
} */

.stat-card__number {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin: 20px 0;
}

.stat-card__logo {
  font-size: 12px;
  line-height: 16px;
  text-align: right;
}

.statistika__section-title {
  max-width: 370px;
  margin-bottom: 90px;
}

.statistika {
  max-width: 1440px;
  padding: 100px 60px;
}
</style>
