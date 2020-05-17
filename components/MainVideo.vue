<template>
  <section class="main-video">
    <div class="main-video__container">
      <div class="main-video__desc-box">
        <div class="main-video__description">
          <section-title class="main-video__section-title">
            Истории людей, победивших рак, но не свои привычки
          </section-title>
          <section-description class="main-video__section-description">
            Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я»,
            фобии, страхи. Но это точно не рак. Рак лечится. Лучшее
            доказательство — люди с их историями.
          </section-description>
        </div>
        <div class="main-video__controls">
          <button class="main-video__control main-video__control_left"></button>
          <button
            class="main-video__control main-video__control_right"
          ></button>
        </div>
      </div>
      <div class="main-video__video-box">
        <div class="main-video__video-wrapper">
          <iframe class="main-video__video" src=""> </iframe>
          <img
            class="main-video__icon"
            src="../static/images/icon_play.png"
            alt="Play icon"
          />
        </div>
        <p class="main-video__desc">
          Все видео вы можете найте на нашем
          <a
            class="main-video__link"
            target="_blank"
            href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
          >
            YouTube канале.
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '../components/ui/SectionTitle';
import SectionDescription from '../components/ui/SectionDescription';

export default {
  components: {
    'section-title': SectionTitle,
    'section-description': SectionDescription,
  },
};
</script>

<style scoped>
.main-video {
  width: 100%;
}

.main-video__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.main-video__video-box {
  width: 65.681818182%;
}

.main-video__video-wrapper {
  position: relative;
}

.main-video__desc-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-video__controls {
  margin-bottom: 26px;
}

.main-video__control {
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  cursor: pointer;
  background-size: 16px 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
}

.main-video__control_left {
  background-image: url("data:image/svg+xml, %3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%232f3435' stroke-width='12' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M87.5 111l-47-47M40.5 64l47-47'/%3E%3C/g%3E%3C/svg%3E");
}

.main-video__control_right {
  background-image: url("data:image/svg+xml, %3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%232f3435' stroke-width='12' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M40.5 17l47 47M87.5 64l-47 47'/%3E%3C/g%3E%3C/svg%3E");
}

.main-video__video {
  width: 100%;
  height: 450px;
  border: none;
}

.main-video__icon {
  width: 90px;
  height: 90px;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
}

.main-video__desc {
  width: 100%;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}

.main-video__link {
  color: inherit;
}

.main-video__section-title {
  margin-bottom: 32px;
}

@media screen and (max-width: 1280px) {
  .main-video__video {
    height: 400px;
  }

  .main-video__icon {
    width: 76px;
    height: 76px;
  }
}

@media screen and (max-width: 1024px) {
  .main-video__section-title {
    margin-bottom: 20px;
  }

  .main-video__video {
    height: 314px;
  }
}

@media screen and (max-width: 768px) {
  .main-video__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main-video__section-title {
    margin: auto;
    margin-bottom: 26px;
  }

  .main-video__section-description {
    margin: auto;
  }

  .main-video__video-box {
    margin: auto;
    width: 84.302325581%;
  }

  .main-video__video {
    height: 300px;
  }

  .main-video__controls {
    width: 100%;
    display: flex;
    top: 170px;
    margin-bottom: 0;
    position: relative;
    justify-content: space-between;
  }
}

@media screen and (max-width: 320px) {
  .main-video__section-title {
    margin-bottom: 16px;
  }

  .main-video__video-box {
    width: 100%;
  }

  .main-video__video {
    height: 150px;
  }

  .main-video__icon {
    width: 38px;
    height: 38px;
    top: calc(50% - 19px);
    left: calc(50% - 19px);
  }

  .main-video__controls {
    top: 95px;
  }

  .main-video__desc {
    font-size: 10px;
  }
}
</style>
