<template>
  <main class="content">
    <container>
      <section class="story">
        <div class="story__person">
          <div class="story__copyright story__copyright_mobile">
            <button type="button" class="story__share">Поделитесь ↗</button>
            <time class="story__date">20 апреля 2018</time>
          </div>
          <img
            class="story__photo"
            src="https://nibler.ru/uploads/users/8039/2013-06-10/kvadrat-seryy-eto-interesno-poznavatelno-kartinki_608533329.png"
            alt="Фото человека оставившего историю"
          />
          <div class="story__box">
            <h1 class="story__title">
              <span class="story__person-name">Александр Тарханов:</span>
              «Я не могу победить свою пунктуальность в отличии от рака»
            </h1>
            <div class="story__copyright story__copyright_desctop">
              <button type="button" class="story__share">Поделитесь ↗</button>
              <time class="story__date">20 апреля 2018</time>
            </div>
          </div>
        </div>
        <article class="story__article">
          <p class="story__text">
            Я из военной семьи. Отец хоть и не был военным сам, но нас всех
            держал в ежовых рукавицах. Думаю, поэтому мы и выросли такими
            ответственными.
          </p>
          <p class="story__text">
            У меня дома до сих пор стоят часы в каждой комнате, хотя они и не
            нужны особо — я сам чувствую, опаздываю куда-то или нет, отстаю от
            нужного графика или опережаю. Вот такие встроенные внутренние часы!
            Будильник мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже
            быстро, как в армии, за 45 секунд.
          </p>
          <p class="story__text story__text_style_bold">
            «В футболе если команда опоздала на 15 минут, ей засчитывается
            поражение».
          </p>
          <p class="story__text">
            Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если
            знаю, что могу попасть по дороге в пробку, то не еду на машине. В
            аэропорт приезжаю задолго до начала регистрации. Лучше подожду и
            кофе попью, чем опоздаю!
          </p>
          <p class="story__text">
            Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать.
            Я билеты выучил, знал абсолютно все. Пришел в нужное время, а
            учительница — нет. Ну, я какое-то время подождал ее и ушел. Потом
            она спрашивала: «Почему не дождался?». Я ответил: «В футболе если
            команда опоздала на 15 минут, ей засчитывается поражение». Экзамен
            мне все-таки поставили! Сейчас если кто-то из футболистов моей
            команды опаздывает — начинаю злиться, могу и прикрикнуть потом. А
            если кто-то опоздал на тренировку перед игрой — все, подготовка
            насмарку. Я сразу начинаю думать тогда: «Значит, точно проиграем».
            Такая болезненная пунктуальность уже не лечится. В отличие от рака.
          </p>
          <p class="story__text story__text_style_bold">
            «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
            злиться, могу и прикрикнуть потом. А если кто-то опоздал на
            тренировку перед игрой — все, подготовка насмарку. Я сразу начинаю
            думать тогда: «Значит, точно проиграем». Такая болезненная
            пунктуальность уже не лечится».
          </p>
          <button type="button" class="story__share story__share_long">
            Поделитесь этой статьей в своих социальных&nbsp;сетях ↗
          </button>
        </article>
        <div class="story__container">
          <stories-card
            v-bind:person="item"
            v-bind:key="item.id"
            v-for="item in showPersons"
          >
          </stories-card>
        </div>
        <stories-button class="story__stories-button">
          Больше статей
        </stories-button>
      </section>
    </container>
  </main>
</template>

<script>
import Container from '../components/Container';
import StoriesCard from '../components/ui/StoriesCard';
import StoriesButton from '../components/ui/StoriesButton.vue';

export default {
  components: {
    container: Container,
    'stories-card': StoriesCard,
    'stories-button': StoriesButton,
  },

  computed: {
    showPersons() {
      if (process.browser) {
        if (window.innerWidth <= 570) {
          return this.persons.filter((item, index) => index < 2);
        } else if (window.innerWidth <= 768) {
          return this.persons.filter((item, index) => index < 3);
        } else {
          return this.persons.filter((item, index) => index < 4);
        }
      }
    },
  },

  data() {
    return {
      persons: [
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
        { name: 'Человек', quote: 'Цитата Человека' },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  padding: 100px 0;
}

.story {
  width: 100%;
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
  letter-spacing: -0.5px;
}

.story__person-name {
  font-weight: bold;
}

.story__copyright {
  width: 100%;
  display: flex;
  color: #121212;
  margin-bottom: 30px;
  justify-content: space-between;
}

.story__copyright_mobile {
  display: none;
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
  margin-bottom: 100px;
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
  .content {
    padding: 100px 0 90px 0;
  }

  .story__container {
    margin-bottom: 60px;
  }

  .story__person {
    margin-bottom: 120px;
  }

  .story__article {
    max-width: 720px;
    margin-bottom: 180px;
  }

  .story__title {
    font-size: 34px;
    line-height: 44px;
  }

  .story__text {
    font-size: 20px;
    line-height: 28px;
  }

  .story__text:last-of-type {
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .content {
    padding: 100px 0 80px 0;
  }

  .story__container {
    margin-bottom: 46px;
  }

  .story__article {
    max-width: 640px;
    margin-bottom: 144px;
  }

  .story__title {
    font-size: 30px;
    line-height: 38px;
  }

  .story__text {
    font-size: 18px;
    line-height: 27px;
  }

  .story__share {
    font-size: 16px;
  }

  .story__date {
    font-size: 16px;
  }

  .story__text:last-of-type {
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 768px) {
  .story__container {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 60px;
  }

  .story__person {
    align-items: center;
    margin-bottom: 120px;
    flex-direction: column-reverse;
  }

  .story__box {
    width: 100%;
  }

  .story__title {
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
  }

  .story__photo {
    width: 61.046511628%;
    margin-bottom: 60px;
  }

  .story__copyright_desctop {
    display: none;
  }

  .story__copyright_mobile {
    max-width: 640px;
    display: flex;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 570px) {
  .story__photo {
    width: 100%;
  }

  .story__article {
    margin-bottom: 120px;
  }

  .story__title {
    font-size: 25px;
    line-height: 28px;
    margin-bottom: 28px;
  }

  .story__share {
    font-size: 13px;
    line-height: 16px;
  }

  .story__date {
    font-size: 13px;
    line-height: 16px;
  }

  .story__text {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 15px;
  }

  .story__text:last-of-type {
    margin-bottom: 60px;
  }

  .story__person {
    margin-bottom: 60px;
  }

  .story__container {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 320px) {
  .content {
    padding: 70px 0 50px 0;
  }

  .story__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 30px;
  }
}
</style>
