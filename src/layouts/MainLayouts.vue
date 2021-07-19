<template>
  <q-layout class="container" view="hHh LpR fFf">
    <q-header class="bg-white text-black container q-pt-lg" height-hint="98">
      <q-toolbar>
          <q-avatar class="q-mx-md q-my-sm">
            <img src="../statics/app-logo-128x128.png">
          </q-avatar>
      <q-tabs
        v-model="tab"
        class="text-grey-9 q-ml-sm"
        indicator-color="transparent"
        active-color="black"
        active-bg-color="white"
        shrink
        stretch
      >
        <q-route-tab to="/" label="Главная" />
        <q-route-tab to="/services" label="Услуги" />
        <q-route-tab to="/works" label="Работы" />
      </q-tabs>
        <q-space></q-space>
        <q-btn color="white" text-color="primary" round icon="menu" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer class="bg-white text-grey-9 container">
      <q-toolbar class="text-center" style="justify-content: center;">
          Let’s be Friends
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayouts",
  data() {
    return {
      tab: ''
    }
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  background: #fff;
  @media (min-width: $breakpoint-xl-max) {
    // for TV
    max-width: 1500px;
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (min-width: $breakpoint-lg-max) and (max-width: $breakpoint-xl-max) {
    // for bid PC
    max-width: 1200px;
    padding-left: 120px;
    padding-right: 120px;
  }
  @media (min-width: $breakpoint-md-max) and (max-width: $breakpoint-lg-max) {
   // for standart PC
    max-width: 90%;
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (min-width: $breakpoint-sm-max) and (max-width: $breakpoint-md-max) {
    // for tablet
    max-width: 90%;
    padding-left: 75px;
    padding-right: 75px;
  }
  @media (min-width: $breakpoint-xs-max) and (max-width: $breakpoint-sm-max) {
    // for tablet
    max-width: 95%;
    padding-left: 2%;
    padding-right: 2%;
  }
  @media (max-width: $breakpoint-xs)  {
    // for mobile
    max-width: 99%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
