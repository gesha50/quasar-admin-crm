<template xmlns="http://www.w3.org/1999/html">
  <section class="certificates q-mt-xl column items-start">
    <div class="certificates__miniTitle">
      <title-block
        :title="$t('certificates.title')"
      ></title-block>
    </div>
    <header-block
      :header="$t('certificates.description')"
    ></header-block>
    <div class="certificates__body full-width row q-mt-lg">
      <div v-for="img in this.$store.getters['certificates/getImages']" class="col-6 col-sm-3">
        <div class="text-center row column q-pa-sm certificatesCard">
          <iframe
            :src="`../../statics/images/certificates/${$i18n.locale}/`+img.path"
            frameBorder="0"
            height="100%"
            width="100%"
          ></iframe>
        </div>
        </div>
      </div>
  </section>
</template>

<script>
import TitleBlock from "components/TitleBlock";
import HeaderBlock from "components/HeaderBlock";

export default {
  name: "Certificates",
  components: {
    TitleBlock,
    HeaderBlock,
  },
}
</script>

<style lang="scss">
.certificatesCard {
  height: 197px;
}
</style>
