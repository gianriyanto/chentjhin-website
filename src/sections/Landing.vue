<template>
    <section id="Landing">
      <gradient-bg id="gradient-bg" v-rellax="{ speed: 5}"/>
      <div class="wrapper">
        <div class="content-wrapper">
          <div class="header-container">
            <span class="header-index1">
              Hi, my name's Chen
            </span>
            <span class="header-index2">
              I'm a <span class="highlight"> Senior Education Counsellor.</span>
            </span>
            <span class="button-container">
              <button class="learn-more-button" v-scroll-to="{ el: '#Process', easing: [.2, .80, .30, 1],duration: 1300}">
                <span class="button-label"> See how I can help </span>
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
    height: 160vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background: rgba( 255, 255, 255, 0.50 );
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;
    padding-top: 60px;
    margin:0 auto;
    width: 70vw;
    max-width: 1300px;
    min-width: 700px;

    .header-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 150px 20px 150px 0;
      text-align: left;
      word-spacing: 4px;
      letter-spacing: -3.5px;
      line-height: 1.3;
      font-size: 52px;
      width: 60%;

      .header-index1{
        font-family: "Bw Modelica Bold", serif;
        color: #1F1F1F;

        .highlight{
          color: #5b1fff;
        }
      }

      .header-index2 {
        font-family: "Bw Modelica Bold", serif;
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