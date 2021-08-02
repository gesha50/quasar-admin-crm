<template>
<section class="shadowBlock">
  <div class="portfolio q-mt-xl column items-start">
    <div class="portfolio__miniTitle">
      <title-block
        :title="'Portfolio'"
      ></title-block>
    </div>
    <header-block
      :header="'All Creative Projects'"
      :link="'/works'"
    ></header-block>
    <div class="portfolio__body row">
      <div class="col-12 col-sm-6">
        <img class="full-width"  src="../../statics/images/portfolio_1.png" alt="">
      </div>
      <div class="col-12 col-sm-6">
        <img class="full-width" src="../../statics/images/portfolio_2.png" alt="">
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
  components: {
    TitleBlock,
    HeaderBlock,
  },
}
</script>

<style lang="scss">
.shadowBlock {
  box-shadow: 4px 0px 100px 100px rgba(251, 242, 252, 1);
}
.portfolio {
  box-shadow: 4px 0px 100px 100px rgba(251, 242, 252, 1) inset;
}
</style>
