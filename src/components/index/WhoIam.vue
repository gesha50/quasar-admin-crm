<template>
  <div class="topBlock row items-center">
    <div class="topBlock__left col-5">
      <div class="topBlock__topText">{{ $t('hello') }}</div>
      <div class="topBlock__name">Gennadiy Sabinin</div>
      <div class="topBlock__works">a freelance web-developer</div>
      <q-btn
        to="/contact"
        class="glossy q-mt-lg q-px-md q-py-xs"
        rounded
        color="deep-purple-8"
        label="Let`s talk"
      />
    </div>
    <div class="topBlock__imageBlock col-7">
      <q-img
        :src="'../../statics/images/site-build.png'"
        spinner-color="white"
        class="topBlock__image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "WhoIam",
}
</script>

<style lang="scss">
@import "../../assets/scss/app";
.topBlock {
  &__left {
    font-family: 'RedHatDisplay-BlackItalic';
  }
  &__topText {
    font-size: 20px;
    font-weight: 500;
  }
  &__name {
    font-size: 40px;
    font-weight: bold;
  }
  &__works {
    font-size: 24px;
    font-weight: normal;
  }
  &__imageBlock {

  }
  &__image {
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0px 0px 76px 33px rgba(81,45,148, 0.5);
    //box-shadow:  19px -19px 48px $my_purple,
    //-19px 19px 48px $my_pink;
  }
}
</style>
