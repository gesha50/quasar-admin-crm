<template>
  <q-page padding>
    <services-component
      :services-obj="this.$store.getters['services/getServices']"
    ></services-component>
    <contact></contact>
  </q-page>
</template>

<script>
import Contact from "components/index/Contact";
import ServicesComponent from "components/index/Services";

export default {
  name: "services",
  components: {
    Contact,
    ServicesComponent,
  },
  mounted() {
    console.log(this.$store.getters['services/getServices'])
  }
}
</script>

<style scoped>

</style>
