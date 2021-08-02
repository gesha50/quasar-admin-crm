<template>
  <section class="q-mt-xl column items-start">
    <div class="services__miniTitle">
      <title-block
        :title="'Services'"
      ></title-block>
    </div>
    <header-block
      :header="'What  actually I love to do'"
      :link="'/services'"
    ></header-block>
    <div class="services full-width items-start row justify-around">
      <service-block
        v-for="(item, i) in items" :key="i"
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
  data() {
    return {
      items: [
        {
          icon: 'fas fa-home',
          title: 'Home',
          description: 'New demos are continually added and buying a single license for Mak gives you access to all of\n' +
            'what\'s shown below, plus everything that will be added in the future.',
        },
        {
          icon: 'fas fa-code',
          title: 'Services',
          description: 'New demos are continually added and buying a single license for Mak gives you access to all of\n' +
            'what\'s shown below, plus everything that will be added in the future.',
        },
        {
          icon: 'fas fa-briefcase',
          title: 'Portfolio',
          description: 'New demos are continually added and buying a single license for Mak gives you access to all of\n' +
            'what\'s shown below, plus everything that will be added in the future.',
        },
      ]
    }
  },
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
