<template>
  <q-page padding>
    <q-btn label="click" @click="socketsTest" />
    {{message}}
    <WhoIam></WhoIam>
    <services
      :link="'/services'"
      :services-obj="this.$store.getters['services/getServices'].slice(0,3)"
    ></services>
    <portfolio
      :portfolio-images="this.$store.getters['portfolio/getPortfolio'].slice(0,2)"
      :link="'/works'"
    ></portfolio>
    <skills></skills>
    <certificates
      :certificates="this.$store.getters['certificates/getImages'].slice(0,4)"
      :link="'/certificates'"
    ></certificates>
    <contact></contact>
  </q-page>
</template>

<script>
import WhoIam from "components/index/WhoIam";
import Services from "components/index/Services";
import Portfolio from "components/index/Portfolio";
import Contact from "components/index/Contact";
import Skills from "components/index/Skills";
import Certificates from "components/index/Certificates";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001")
export default {
  name: "index",
  data() {
    return {
      message: [],
    }
  },
  methods: {
    socketsTest() {
      socket.emit('socketsTest', 'Hi I`m socketsTest')
    }
  },
 beforeCreate() {
   console.log(socket)
   socket.on("connect", () => {
     // either with send()
     socket.send("Hello!");

     // or with emit() and custom event names
     socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
   });

// handle the event sent with socket.send()
   socket.on("message", data => {
     console.log(data);
     this.message.push(data)
   });

// handle the event sent with socket.emit()
   socket.on("greetings", (elem1) => {
     console.log(elem1);
   });
 },
  components: {
    WhoIam,
    Services,
    Portfolio,
    Skills,
    Contact,
    Certificates,
  },
}
</script>

<style lang="scss">

</style>
