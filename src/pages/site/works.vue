<template>
  <q-page padding>
    <portfolio-component
      :portfolio-images="this.$store.getters['portfolio/getPortfolio']"
    ></portfolio-component>
    <contact></contact>
  </q-page>
</template>

<script>
import Contact from "components/index/Contact";
import PortfolioComponent from "components/index/Portfolio";

export default {
  name: "works",
  components: {
    Contact,
    PortfolioComponent,
  },
}
</script>

<style scoped>

</style>
