<template>
<section class="skills q-mt-xl column items-start">
  <div class="skills__miniTitle">
    <title-block
      :title="'Skills'"
    ></title-block>
  </div>
  <header-block
    :header="'I have studied such technologies'"
  ></header-block>
  <div class="skills__body full-width row q-mt-lg">
    <div v-for="img in images" class="col-6 col-sm-3">
      <div
        class="text-center row column q-pa-sm skillsCard"
        :style="
        'border: 1px solid '+img.borderColor+';' +
        'background: '+img.color+';' +
        'box-shadow: 0px 0px 53px 43px '+img.color+';'
        "
      >
        <q-img
          :src="img.path"
          spinner-color="white"
          style="max-width: 60px; margin: 0 auto"
        />
        <span class="q-mt-md">{{img.text}}</span>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import TitleBlock from "components/TitleBlock";
import HeaderBlock from "components/HeaderBlock";

export default {
  data() {
    return {
      images: [
        {
          path: '../../statics/images/skills/laravel.png',
          borderColor: '#FFE7F0',
          color: '#FFF7FA',
          text: 'Laravel',
        },
        {
          path: '../../statics/images/skills/vue.png',
          borderColor: '#CAFFE1',
          color: '#EDFFF5',
          text: 'Vue js',
        },
        {
          path: '../../statics/images/skills/quasar.png',
          borderColor: '#DDF5FF',
          color: '#F5FCFF',
          text: 'Quasar',
        },
        {
          path: '../../statics/images/skills/db.svg',
          borderColor: '#FFEEC9',
          color: '#FFFBF2',
          text: 'MySQL',
        },
      ]
    }
  },
  name: "Skills",
  components: {
    TitleBlock,
    HeaderBlock,
  },
}
</script>

<style lang="scss">
.skillsCard {
  justify-content: center;
  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 5px;
}
</style>
