<template>
    <section id="Landing">

      <gradient-bg id="gradient-bg"/>

      <div class="wrapper">
        <div class="content-wrapper">
          <div class="header-container">
            <a class="header-index1">
              Hi, my name's Chen
            </a>
            <a class="header-index2">
              I'm a <a class="highlight"> Senior Education Counsellor.</a>
            </a>
            <span class="button-container">
              <button class="learn-more-button" v-scroll-to="{ el: '#Process', easing: [.2, .80, .30, 1],duration: 1300}">
                <a class="button-label"> See how I can help </a>
              </button>
            </span>
          </div>
          <Typeform id="Typeform"/>
        </div>
        <Process id="Process"/>
      </div>

    </section>

</template>

<script>

import GradientBg from "@/components/background/gradientbg";
import Typeform from "@/components/subcomponents/Typeform";
import Process from "@/sections/Process";

export default {
  name: "Landing",
  components: {
    Process,
    Typeform,
    GradientBg,
  }
}
</script>

<style scoped lang="scss">

#Landing{
  position: relative;
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 1;

  .wrapper{
    position: relative;
    height: 140vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background: rgba( 255, 255, 255, 0.50 );
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 200px auto 0 auto;
    width: 70vw;
    max-width: 1300px;
    min-width: 750px;
    height: 60vh;

    .header-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto 0;
      text-align: left;
      word-spacing: 1.5px;
      letter-spacing: -2.5px;
      line-height: 1.3;
      font-size: 55px;
      width: 60%;

      .header-index1{
        font-family: "Bw Modelica ExtraBold", serif;
        color: #1F1F1F;

        .highlight{
          color: #5b1fff;
        }
      }

      .header-index2 {
        font-family: "Bw Modelica ExtraBold", serif;
        color: #1F1F1F;

        .highlight{
          color: #5b1fff;
        }
      }

      .button-container {
        display: flex;
        flex-direction: row;
        margin-top: 30px;

        .learn-more-button {
          cursor: pointer;
          width: 210px;
          height: 50px;
          background-image: linear-gradient(to left, #5b1fff, #3867ff);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
          border-radius: 40px;
          border: none;
          outline: none;
          text-decoration: none;
          transition: all .35s ease-in-out;

          &:hover {
            opacity: 0.9;
          }

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 15px;
            margin: auto;
            color: white;
          }
        }
      }
    }
    #Typeform {}
  }
  #Process{}
}

</style>