<template>
  <q-page padding>
    <certificates-component
      :certificates="this.$store.getters['certificates/getImages']"
    ></certificates-component>
    <contact></contact>
  </q-page>
</template>

<script>
import Contact from "components/index/Contact";
import CertificatesComponent from "components/index/Certificates";


export default {
  name: "certificates",
  components: {
    Contact,
    CertificatesComponent,
  },
}
</script>

<style scoped>

</style>
