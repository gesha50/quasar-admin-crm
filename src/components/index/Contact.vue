<template>
  <section class="contact column items-start">
    <div class="contact__miniTitle">
      <title-block
        :title="'Contact Me'"
      ></title-block>
    </div>
    <header-block
      :header="'Let me know if you want to talk \n'+
                'about a potential collaboration.\n'+
                'I\'m available for freelance work.'"
      :email="'gs-developer@yandex.ru'"
    ></header-block>
    <div class="contact__body full-width row">
      <q-form class="full-width" @submit="onSubmit" @reset="onReset">
        <q-input v-model="name" label="What’s your name?" :dense="dense" />
        <q-input v-model="email" label="Your email" :dense="dense" />
        <q-input v-model="message" label="Tell me about your project" :dense="dense" />
        <div class="row justify-between items-baseline">
          <div class="row items-baseline col-12 col-sm-5">
            <q-btn
              type="submit"
              class="glossy q-mt-lg q-px-md q-py-xs"
              rounded
              color="deep-purple-8"
              label="Submit"
            />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
          <q-file class="col-6 col-md-2 col-sm-3 order-first order-sm-last q-mt-xs-md" standout color="purple-12" v-model="image">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>
      </q-form>
    </div>
  </section>
</template>

<script>
import TitleBlock from "components/TitleBlock";
import HeaderBlock from "components/HeaderBlock";

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      dense: false,
      image: null,
    }
  },
  name: "Contact",
  components: {
    TitleBlock,
    HeaderBlock,
  },
  methods: {
    onSubmit() {
      console.log('work')
    },
    onReset() {
      this.name = null
      this.email = null
      this.message = null
      this.image = null
    },
  },
}
</script>

<style lang="scss">
@import "../../assets/scss/app";
.contact {
  margin-top: 80px;
}
.q-field__control {
  color: $my_purple_2;
}
</style>
