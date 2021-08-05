<template>
  <section class="q-mt-xl column items-start">
    <div class="services__miniTitle">
      <title-block
        :title="$t('service.title')"
      ></title-block>
    </div>
    <header-block
      :header="$t('service.description')"
      :link="link"
    ></header-block>
    <div class="services full-width items-start row justify-around">
      <service-block
        v-for="(item, i) in servicesObj" :key="i"
        :item="item"
      ></service-block>
    </div>
  </section>
</template>

<script>
import TitleBlock from "components/TitleBlock";
import ServiceBlock from "components/index/ServiceBlock";
import HeaderBlock from "components/HeaderBlock";

export default {
  props: ['link', 'servicesObj'],
  name: "Services",
  components: {
    TitleBlock,
    ServiceBlock,
    HeaderBlock,
  },
}
</script>

<style lang="scss">
.services {
  font-family: 'RedHatDisplay-Black';
}
</style>
