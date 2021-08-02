<template>
  <q-header reveal :reveal-offset="10" elevated class="text-black container" height-hint="98">
    <q-toolbar>
      <q-avatar class="q-mx-md q-my-sm">
        <img src="../../statics/app-logo-128x128.png">
      </q-avatar>
      <q-tabs
        v-model="tab"
        class="text-grey-9 q-ml-sm desktop_only"
        indicator-color="transparent"
        active-color="black"
        active-bg-color="white"
        shrink
        stretch
      >
        <q-route-tab
          v-for="(menuItem, index) in menuList"
          :key="index"
          :to="menuItem.href"
          :label="menuItem.label"
        />
      </q-tabs>
      <q-space></q-space>
      <q-btn class="mobile_only"  @click="$emit('drawer')" color="white" text-color="primary" round icon="menu" />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "TopHeader",
  props: ['menuList'],
  data() {
    return {
      tab: ''
    }
  },
}
</script>

<style lang="scss">
.q-header {
  background: rgba(255, 255, 255, 1) !important;
}
.q-tab__label {
  font-family: 'RedHatDisplay-Black';
}
.self-stretch {
  align-self: center;
}
</style>
