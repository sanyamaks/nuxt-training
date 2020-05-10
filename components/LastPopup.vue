<template>
  <div class="popup">
    <div class="popup-content">
      <section-title>Шаг 1 из 12</section-title>
      <form class="popup__form">
          <middle-button>Закрыть</middle-button>
      </form>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import MiddleButton from '@/components/ui/MiddleButton';

export default {
  components: {
    'section-title': SectionTitle,
    'middle-button': MiddleButton
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
  align-items: center;
  width: 920px;
  height: 600px;
  background-color: #ffffff;
  position: relative;
  padding: 40px;
}

.popup__form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

</style>
