<template>
  <div id="app">
    <div id="wrapper">
      <TopNav id="TopNav"/>
      <NavBar id="NavBar"/>
      <Landing id="Landing"/>
      <About id="About"/>
      <Testimony id="Testimony"/>
      <NavBar/>
      <Contact id="Contact"/>
    </div>
  </div>
</template>

<script>
import TopNav from './components/nav/TopNav.vue'
import Landing from './sections/Landing.vue'
import About from "@/sections/About";
import Testimony from "@/sections/Testimony";
import Contact from "@/sections/Contact";
import NavBar from "@/components/subcomponents/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
    Contact,
    Testimony,
    About,
    TopNav,
    Landing,
  }
}
</script>

<style lang="scss">

// google fonts
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');

html, body {
  margin: 0 !important;
  padding: 0 !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  #wrapper{

  }

  button{
    cursor: pointer;
    text-decoration: none;
    outline: none;
    border: 0;
  }

  a {
    color: transparent;
    text-decoration: none;
    a:visited {
      text-decoration: none;
      color: transparent;
    }
  }
}

@media only screen and (max-width: 768px) {

  #wrapper{
    width: 100%;
    height: fit-content;
    border: thin solid red;
  }
}

@font-face {
  font-family: "Gilroy Bold";
  src: local("Gilroy Bold"),
  url(./assets/fonts/Gilroy/Gilroy-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Medium";
  src: local("Gilroy Medium"),
  url(./assets/fonts/Gilroy/Gilroy-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Regular";
  src: local("Gilroy Regular"),
  url(./assets/fonts/Gilroy/Gilroy-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy SemiBold";
  src: local("Gilroy SemiBold"),
  url(./assets/fonts/Gilroy/Gilroy-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Heavy";
  src: local("Gilroy Heavy"),
  url(./assets/fonts/Gilroy/Gilroy-Heavy.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"),
  url(./assets/fonts/Gilroy/Gilroy-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Thin";
  src: local("Gilroy Thin"),
  url(./assets/fonts/Gilroy/Gilroy-Thin.ttf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica ExtraBold";
  src: local("Bw Modelica ExtraBold"),
  url(./assets/fonts/BwModelica/BwModelica-ExtraBold.ttf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Bold";
  src: local("Bw Modelica Bold"),
  url(./assets/fonts/BwModelica/BwModelica-Bold.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Medium";
  src: local("Bw Modelica Medium"),
  url(./assets/fonts/BwModelica/BwModelica-Medium.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Regular";
  src: local("Bw Modelica Regular"),
  url(./assets/fonts/BwModelica/BwModelica-Regular.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Light";
  src: local("Bw Modelica Light"),
  url(./assets/fonts/BwModelica/BwModelica-Light.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Thin";
  src: local("Bw Modelica Thin"),
  url(./assets/fonts/BwModelica/BwModelica-Thin.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Hairline";
  src: local("Bw Modelica Hairline"),
  url(./assets/fonts/BwModelica/BwModelica-Hairline.otf) format("truetype");
}


</style>
