<template>
<section class="shadowBlock">
  <div class="portfolio q-mt-xl column items-start">
    <div class="portfolio__miniTitle">
      <title-block
        :title="$t('portfolio.title')"
      ></title-block>
    </div>
    <header-block
      :header="$t('portfolio.description')"
      :link="link"
    ></header-block>
    <div class="portfolio__body row full-width">
      <div
        v-for="(image, i) in portfolioImages"
        :key="i"
        class="col-12 col-sm-6">
        <q-img
          img-class="q-ma-sm portfolioImg"
          :ratio="4/3"
          :src="`../../statics/images/portfolio/${image.path}`"
          alt=""
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
  name: "Portfolio",
  props: ['link', 'portfolioImages'],
  components: {
    TitleBlock,
    HeaderBlock,
  },
}
</script>

<style lang="scss" >
.portfolioImg {
  border-radius: 10px;
  background-position: 0 0 !important;
}
.shadowBlock {
  box-shadow: 4px 0px 100px 100px rgba(251, 242, 252, 1);
}
.portfolio {
  box-shadow: 4px 0px 100px 100px rgba(251, 242, 252, 1) inset;
}
</style>
