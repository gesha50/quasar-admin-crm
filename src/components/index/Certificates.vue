<template xmlns="http://www.w3.org/1999/html">
  <section class="certificates q-mt-xl column items-start">
    <div class="certificates__miniTitle">
      <title-block
        :title="$t('certificates.title')"
      ></title-block>
    </div>
    <header-block
      :header="$t('certificates.description')"
      :link="link"
    ></header-block>
    <div class="certificates__body full-width row q-mt-lg">
      <div v-for="img in certificates" class="col-6 col-sm-3">
        <div class="text-center row column certificatesCard">
          <q-img
            :src="`../../statics/images/certificates/${$i18n.locale}/`+img.path"
            :ratio="1"
            contain
          />
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
  props: ['link', 'certificates'],
  components: {
    TitleBlock,
    HeaderBlock,
  },
}
</script>

<style lang="scss" scoped>
.q-img {
  transition: 1s;
}
.q-img:hover {
  transform: scale(2, 2);
  z-index: 1;
}
</style>
