<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import {api} from "boot/axios";

export default {
  name: 'App',
  methods: {
    whatYouCountry() {
      api.get('https://get.geojs.io/v1/ip/geo.js')
      .then(res => {
        let myString = res.data;
        let myArray1 = myString.split('{');
        let myArray2 = myArray1[1].split('}')
        let myArray = myArray2[0].split(',')
        let literal = [];
        for(let i = 0; i<myArray.length; i++){
          let mixed_string = myArray[i];
          let changed_array = mixed_string.split(":");
          let key = changed_array[0];
          key = key.replace('"', "");
          key = key.replace('"', "");
          let value = changed_array[1];
          value = value.substring(1, value.length - 1);
          let obj = {}
          obj[key] = value
          literal.push(obj);
        }
        console.log(literal[13].country_code.toLowerCase());
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  created() {
    // this.whatYouCountry()
  }
}
</script>
<style lang="scss">
body {
  background: $grey-2;
}

</style>
