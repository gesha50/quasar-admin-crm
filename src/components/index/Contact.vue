<template>
  <section class="contact column items-start">
    <div class="contact__miniTitle">
      <title-block
        :title="$t('contacts.title')"
      ></title-block>
    </div>
    <header-block
      :header="$t('contacts.description')"
      :email="'gs-developer@yandex.ru'"
    ></header-block>
    <div class="contact__body full-width row">
      <q-form class="full-width" @submit="onSubmit" @reset="onReset">
        <q-input name="name" v-model="name" :label="$t('contacts.inputs.name')" :dense="dense" />
        <q-input name="email" v-model="email" :label="$t('contacts.inputs.email')" :dense="dense" />
        <q-input name="message" v-model="message" :label="$t('contacts.inputs.message')" :dense="dense" />
        <div class="row justify-between items-baseline">
          <div class="row items-baseline col-12 col-sm-5">
            <q-btn
              type="submit"
              :disable="isFullInfo"
              class="glossy q-mt-lg q-px-md q-py-xs"
              rounded
              color="deep-purple-8"
              :label="$t('btn.submit')"
            />
            <q-btn
              :label="$t('btn.reset')"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
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
import { api } from 'boot/axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      dense: false,
      image: null,
      isSendData: '',
    }
  },
  name: "Contact",
  components: {
    TitleBlock,
    HeaderBlock,
  },
  computed: {
    isFullInfo() {
      return !(this.name && this.email && this.message);
    }
  },
  methods: {
    onSubmit() {
      api.post('/api/newProject', {
        name: this.name,
        email: this.email,
        message: this.message
      })
      .then(res => {
        if (res.data) {
          this.isSendData = res.data
          this.$q.notify({
            message: 'Ваше сообщение отправлено!',
            color: 'purple'
          })
          this.name = ''
          this.email = ''
          this.message = ''
        }
      })
      .catch(e => {
        this.$q.notify({
          message: 'Ошибка',
          color: 'red'
        })
      })
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
