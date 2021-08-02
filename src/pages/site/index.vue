<template>
  <q-page padding>
    <WhoIam></WhoIam>
    <services></services>
    <portfolio></portfolio>
    <skills></skills>
    <certificates></certificates>
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
