<template>
  <section id="Contact">
    <flip-gradient-bg id="flip-gradient-bg"/>
    <div class="wrapper">
      <div class="content-wrapper">
        <span class="header-container">
          <span class="header-index0"> Ready to build your future? </span>
          <span class="header-index1"> Let's Talk. </span>
          <span class="description-text"> Don’t know where to start? Tell me about your current situations, your interests, and where you intend to travel for studies. </span>
        </span>

        <NameCard id="NameCard"/>
     </div>
    </div>
  </section>
</template>

<script>

import FlipGradientBg from "@/components/background/flipgradientbg";
import NameCard from "@/components/subcomponents/NameCard";

export default {
  name: "Contact",
  components: {
    NameCard,
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
  color: #2f2e41;

  .wrapper{
    height: 100vh;
    display: flex;
    background: rgba( 255, 255, 255, 0.5 );

    .content-wrapper{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      height: 100vh;
      margin: 0 auto;
      width: 70vw;
      max-width: 1300px;
      min-width: 700px;

      .header-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        margin-right: 20px;
        width: 500px;

        .header-index0, .header-index1{
          line-height: 1.25;
          font-family: "Bw Modelica ExtraBold", serif;
          letter-spacing: -3px;
          font-size: 65px;
          color: #1F1F1F;
        }

        .description-text{
          margin-top: 30px;
          line-height: 1.5;
          font-family: "Gilroy Regular", serif;
          font-size: 16px;
          color: #484848;
          width: 430px;
        }
      }

      #NameCard{

      }

    }
  }
}

</style>