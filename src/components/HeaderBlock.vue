<template>
  <div class="headerBlock full-width q-my-md row justify-between">
    <div class="headerBlock__header">
      {{header}}
    </div>
    <div v-if="link" class="headerBlock__link row items-baseline">
      <router-link :to="link">Explore More</router-link>
      <q-icon class="q-ml-sm" name="fas fa-arrow-right"/>
    </div>
    <div v-if="email" class="headerBlock__email">
      <a :href="'mailto:'+email">{{email}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBlock",
  props: ['header', 'email', 'link'],
}
</script>

<style lang="scss">
@import "../assets/scss/app";
.headerBlock {
  &__header {
    font-weight: bold;
    @media (min-width: $breakpoint-md-max) {
      // for standart PC
      font-size: 36px;
      max-width: 50%;
    }
    @media (min-width: $breakpoint-sm-max) and (max-width: $breakpoint-md-max) {
      // for tablet
      font-size: 30px;
      max-width: 60%;
    }
    @media (min-width: $breakpoint-xs-max) and (max-width: $breakpoint-sm-max) {
      // for tablet
      font-size: 26px;
      max-width: 60%;
    }
    @media (max-width: $breakpoint-xs)  {
      // for mobile
      font-size: 22px;
      max-width: 100%;
    }
  }
  &__link {
    & a {
      color: #000000;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      &:hover {
        text-decoration: none;
      }
      &:hover + i {
        font-size: 22px;
        color: $my_pink;
      }
    }
    & i {
      color: $my_purple_2;
      font-size: 20px;
      transition: 1s;
    }
  }
  &__email {
    & a {
      color: $my_purple_2;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      transition: 1s;
      &:hover {
        font-size: 21px;
        color: $deep-purple-8;
      }
    }
  }
}
</style>
