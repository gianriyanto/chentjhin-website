<template>
  <div id="app">
    <TopNav/>
    <Landing/>
    <About/>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Landing from './components/sections/Landing.vue'
import About from "@/components/sections/About";

export default {
  name: 'App',
  components: {
    About,
    TopNav,
    Landing,
  }
}
</script>

<style lang="scss">

html, body {
  margin: 0 !important;
  padding: 0 !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
@font-face {
  font-family: "Bw Modelica ExtraBold";
  src: local("Bw Modelica ExtraBold"),
  url(./fonts/BwModelica/BwModelica-ExtraBold.ttf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Bold";
  src: local("Bw Modelica Bold"),
  url(./fonts/BwModelica/BwModelica-Bold.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Medium";
  src: local("Bw Modelica Medium"),
  url(./fonts/BwModelica/BwModelica-Medium.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Regular";
  src: local("Bw Modelica Regular"),
  url(./fonts/BwModelica/BwModelica-Regular.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Light";
  src: local("Bw Modelica Light"),
  url(./fonts/BwModelica/BwModelica-Light.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Thin";
  src: local("Bw Modelica Thin"),
  url(./fonts/BwModelica/BwModelica-Thin.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Hairline";
  src: local("Bw Modelica Hairline"),
  url(./fonts/BwModelica/BwModelica-Hairline.otf) format("truetype");
}

@font-face {
  font-family: "Montserrat ExtraBold";
  src: local("Montserrat ExtraBold"),
  url(./fonts/Montserrat/Montserrat-ExtraBold.ttf) format("truetype");
}
@font-face {
  font-family: "Montserrat Bold";
  src: local("Montserrat Bold"),
  url(./fonts/Montserrat/Montserrat-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Montserrat SemiBold";
  src: local("Montserrat SemiBold"),
  url(./fonts/Montserrat/Montserrat-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Montserrat Medium";
  src: local("Montserrat Medium"),
  url(./fonts/Montserrat/Montserrat-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Montserrat Regular";
  src: local("Montserrat Regular"),
  url(./fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Montserrat Thin";
  src: local("Montserrat Thin"),
  url(./fonts/Montserrat/Montserrat-Thin.ttf) format("truetype");
}
@font-face {
  font-family: "Montserrat Light";
  src: local("Montserrat Light"),
  url(./fonts/Montserrat/Montserrat-Light.ttf) format("truetype");
}


</style>
