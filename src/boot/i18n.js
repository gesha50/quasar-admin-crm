import Vue from 'vue'
import VueI18n from "vue-i18n";
Vue.use(VueI18n)
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default  () => {
  return new VueI18n({
    locale: 'en',
    fallbackLocale: 'ru',
    messages: {
      en: {
        hello: 'hello i am',
      },
      ru: {
        hello: 'Привет меня зовут',
      }
    },
  })
}
