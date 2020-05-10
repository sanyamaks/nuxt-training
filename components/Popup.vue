<template>
  <div class="popup">
    <div class="popup-content">
      <button class="popup__close-button">
        <img src="./../assets/icon-close-button.svg" alt="close" />
      </button>
      <section-title>Шаг 1 из 12</section-title>
      <p class="popup__question">
        Было ли у вас онкологическое заболевание?<span
          class="popup__explanation-question"
        >
          Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий
          статус. Если нет — приглашаем Вас поделиться своей историей
          неизлечимых привычек в Инстаграм с хештегами #раклечится и
          #этонелечится.</span
        >
      </p>
      <form class="popup__form">
        <input class="popup-answer" placeholder="Напишите тут" />
        <div class="popup__button-container">
          <return-button>Назад</return-button>
          <middle-button class="popup__middle-button">Далее</middle-button>
          <p class="popup__personal-data-processing">
            Нажимая на кнопку «отправить», вы даете согласие на
            <a class="popup__personal-data-processing-url" href="#">
              обработку персональных данных</a
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import MiddleButton from '@/components/ui/MiddleButton';
import ReturnButton from '@/components/ui/ReturnButton';

export default {
  components: {
    'section-title': SectionTitle,
    'middle-button': MiddleButton,
    'return-button': ReturnButton,
  },
};
</script>

<style scoped>
.popup {
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

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 920px;
  height: 600px;
  background-color: #ffffff;
  position: relative;
  padding: 40px;
}

.popup__close-button {
  padding: 0;
  position: absolute;
  top: 35px;
  right: 35px;
  border: none;
  background: unset;
  outline: none;
  cursor: pointer;
}

.popup__question {
  margin-top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.popup__explanation-question {
  color: #666666;
}
.popup__form {
  margin-top: 110px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.popup-answer {
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  border: none;
  padding-bottom: 5px;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
}
.popup-answer::placeholder {
  color: #666666;
}
.popup__button-container {
  display: flex;
}
.popup__middle-button {
  margin-left: 30px;
}

.popup__personal-data-processing {
  margin-left: 30px;
  width: 380px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}

.popup__personal-data-processing-url {
  text-decoration: underline;
  color: inherit;
}
</style>
