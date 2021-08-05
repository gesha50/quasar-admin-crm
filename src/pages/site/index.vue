<template>
  <q-page padding>
    <WhoIam></WhoIam>
    <services
      :link="'/services'"
      :services-obj="this.$store.getters['services/getServices'].slice(0,3)"
    ></services>
    <portfolio
      :portfolio-images="this.$store.getters['portfolio/getPortfolio'].slice(0,2)"
      :link="'/works'"
    ></portfolio>
    <skills></skills>
    <certificates
      :certificates="this.$store.getters['certificates/getImages'].slice(0,4)"
      :link="'/certificates'"
    ></certificates>
    <contact></contact>
  </q-page>
</template>

<script>
import WhoIam from "components/index/WhoIam";
import Services from "components/index/Services";
import Portfolio from "components/index/Portfolio";
import Contact from "components/index/Contact";
import Skills from "components/index/Skills";
import Certificates from "components/index/Certificates";

export default {
  name: "index",
  components: {
    WhoIam,
    Services,
    Portfolio,
    Skills,
    Contact,
    Certificates,
  },
}
</script>

<style lang="scss">

</style>
