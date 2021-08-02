<template>
  <div class="customIcon relative-position">
    <q-icon class="absolute" :name="icon"></q-icon>
  </div>
</template>

<script>
export default {
  name: "CustomIcon",
  props: ['icon'],
}
</script>

<style lang="scss">
.customIcon {
  background: url("../../statics/images/background_mini.png") no-repeat center center;
  background-size: contain;
  width: 50px;
  height: 60px;
  & .q-icon {
    top: calc(50% - 12.5px);
    left: calc(50% - 12.5px);
    font-size: 25px;
    color: white;
  }
}
</style>
