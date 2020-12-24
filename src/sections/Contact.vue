<template>
  <section id="Contact">

    <flip-gradient-bg id="flip-gradient-bg"/>

    <div class="wrapper">
      <div class="header-container">
        Let's Talk.
      </div>
    </div>
  </section>
</template>

<script>

import FlipGradientBg from "@/components/background/flipgradientbg";

export default {
  name: "Contact",
  components: {
    FlipGradientBg
  }
}

</script>

<style scoped lang="scss">

#Contact{
  position: relative;
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 1;

  .wrapper{
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background: rgba( 255, 255, 255, 0.50 );

    .header-container{
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 500px;
      height: fit-content;
      letter-spacing: -2.5px;
      font-family: "Bw Modelica ExtraBold", serif;
      font-size: 80px;
      color: #1F1F1F;
    }
  }
}

</style>