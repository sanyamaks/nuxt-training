<template>
  <section class="story">
    <div class="story__person">
      <img
        class="story__photo"
        src="https://nibler.ru/uploads/users/8039/2013-06-10/kvadrat-seryy-eto-interesno-poznavatelno-kartinki_608533329.png"
        alt="Фото человека оставившего историю"
      />
      <div class="story__box">
        <h1 class="story__title">
          Александр Тарханов: «Я не могу победить свою пунктуальность в отличии
          от рака»
        </h1>
        <div class="story__copyright">
          <button type="button" class="story__share">Поделитесь ↗</button>
          <span class="story__date">20 апреля 2018</span>
        </div>
      </div>
    </div>
    <article class="story__article">
      <p class="story__text">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
      </p>
      <p class="story__text">
        У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд.
      </p>
      <p class="story__text story__text_style_bold">
        «В футболе если команда опоздала на 15 минут, ей засчитывается
        поражение».
      </p>
      <p class="story__text">
        Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
        что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
        приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
        опоздаю!
      </p>
      <p class="story__text">
        Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
        билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница
        — нет. Ну, я какое-то время подождал ее и ушел. Потом она спрашивала:
        «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15
        минут, ей засчитывается поражение». Экзамен мне все-таки поставили!
        Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится. В отличие от рака.
      </p>
      <p class="story__text story__text_style_bold">
        «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится».
      </p>
      <button type="button" class="story__share story__share_long">
        Поделитесь этой статьей в своих социальных сетях ↗
      </button>
    </article>
    <div class="story__container">
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
      <stories-card></stories-card>
    </div>
    <stories-button class="story__stories-button">
      Больше статей
    </stories-button>
  </section>
</template>

<script>
import StoriesCard from '../components/ui/StoriesCard';
import StoriesButton from '../components/ui/StoriesButton.vue';

export default {
  components: {
    'stories-card': StoriesCard,
    'stories-button': StoriesButton,
  },
};
</script>

<style scoped>
.story {
  max-width: 1440px;
  margin: auto;
  padding: 130px 60px 100px 60px;
}

.story__person {
  width: 100%;
  display: flex;
  margin-bottom: 130px;
  justify-content: space-between;
}

.story__photo {
  width: 43.939393939%;
}

.story__box {
  width: 51.51515168%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.story__title {
  width: 100%;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
}

.story__copyright {
  width: 100%;
  display: flex;
  color: #121212;
  margin-bottom: 30px;
  justify-content: space-between;
}

.story__share {
  padding: 0;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.story__share_long {
  width: 100%;
  text-align: center;
}

.story__date {
  font-size: 18px;
}

.story__article {
  max-width: 780px;
  margin: auto;
  margin-bottom: 190px;
}

.story__text {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 40px;
}

.story__text:last-of-type {
  margin-bottom: 70px;
}

.story__text_style_bold {
  font-weight: 600;
}

.story__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 3.0303%;
  margin-bottom: 70px;
}

@media screen and (max-width: 1280px) {
  .story {
    padding: 130px 50px 90px 50px;
  }

  .story__container {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1024px) {
  .story {
    padding: 120px 50px 80px 50px;
  }

  .story__container {
    margin-bottom: 46px;
  }
}

@media screen and (max-width: 768px) {
  .story {
    padding: 100px 40px 80px 40px;
  }

  .story__container {
    margin-bottom: 60px;
  }
}
</style>
