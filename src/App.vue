<template>
  <div id="app">
    <Landing/>
  </div>
</template>

<script>
import Landing from './components/sections/Landing.vue'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: "Gilroy Bold";
  src: local("Gilroy Bold"),
  url(./fonts/Gilroy/Gilroy-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Medium";
  src: local("Gilroy Medium"),
  url(./fonts/Gilroy/Gilroy-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Regular";
  src: local("Gilroy Regular"),
  url(./fonts/Gilroy/Gilroy-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy SemiBold";
  src: local("Gilroy SemiBold"),
  url(./fonts/Gilroy/Gilroy-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Heavy";
  src: local("Gilroy Heavy"),
  url(./fonts/Gilroy/Gilroy-Heavy.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"),
  url(./fonts/Gilroy/Gilroy-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Thin";
  src: local("Gilroy Thin"),
  url(./fonts/Gilroy/Gilroy-Thin.ttf) format("truetype");
}

</style>
