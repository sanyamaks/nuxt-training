<template> </template>

<script>
import Panel from '@/components/Panel';
import VideoIframe from '@/components/VideoIframe';
export default {
  components: {},
};
</script>

<style>
.container__panel {
  width: 80%;
  margin: 40px auto;
}

.container__title {
  margin-bottom: 20px;
}

.container__text {
  margin: 20px 0;
}

.container__text ul {
  margin: 20px 0;
}

.container__subheader {
  margin: 20px 0;
}

@media screen and (max-width: 450px) {
  .container__panel {
    width: 90%;
  }
}
</style>
