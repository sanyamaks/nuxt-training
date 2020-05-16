<template>
  <section class="statistika">
    <section-title class="statistika__section-title">
      Статистика по онкозаболеваниям
    </section-title>
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
        >
        </progress-bar>
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
.statistika {
  max-width: 1440px;
  padding: 100px 60px;
}

.statistika__card {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.03030303%;
}

.stat-card {
  padding: 20px;
}

.stat-card__title {
  min-height: 48px;
  margin: 0 auto;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 76px;
}

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

@media screen and (max-width: 1280px) {
  .statistika {
    padding: 90px 50px;
  }

  .stat-card {
    padding: 18px;
  }

  .statistika__section-title {
    margin-bottom: 60px;
  }

  .stat-card__title {
    margin-bottom: 56px;
  }
}

@media screen and (max-width: 1185px) {
  .stat-card__number {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (max-width: 1024px) {
  .statistika {
    padding: 80px 50px 90px 50;
  }

  .stat-card {
    padding: 10px;
  }

  .statistika__section-title {
    margin-bottom: 56px;
  }

  .stat-card__title {
    font-size: 10px;
    line-height: 14px;
    margin-bottom: 50px;
  }

  .stat-card__logo {
    font-size: 10px;
    line-height: 14px;
  }

  .stat-card__number {
    margin: 10px 0;
  }
}

@media screen and (max-width: 880px) {
  .statistika__card {
    overflow: scroll;
    grid-template-columns: repeat(4, 216px);
    grid-gap: 20px;
  }

  .section-title.statistika__section-title {
    max-width: 370px;
    margin-bottom: 60px;
  }

  .stat-card__title {
    margin-bottom: 62px;
  }
}

@media screen and (max-width: 768px) {
  .statistika__section-title {
    margin: auto;
  }
}
</style>
