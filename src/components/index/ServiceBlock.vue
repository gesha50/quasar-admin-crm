<template>
  <div class="col-12 col-md-4 q-pa-md serviceBlock">
    <div class="row items-center">
      <custom-icon
        :icon="item.icon"
      ></custom-icon>
      <div class="serviceBlock__title q-ml-md">{{$t(item.title)}}</div>
    </div>
    <div class="serviceBlock__description">{{$t(item.description)}}</div>
  </div>
</template>

<script>
import CustomIcon from "components/icon/CustomIcon";

export default {
  name: "ServiceBlock",
  props: ['item'],
  components: {
    CustomIcon,
  }
}
</script>

<style lang="scss">
.serviceBlock {
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }
  &__description {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
  }
}
</style>
