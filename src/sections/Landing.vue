<template>
    <section id="Landing">
      <gradient-bg id="gradient-bg" v-rellax="{ speed: 5}"/>
      <div class="wrapper">
        <div class="content-wrapper">
          <div class="header-container">
            <span class="header-text">
              Hello.
            </span>
            <span class="header-text">
              <span> My name's <span class="highlight"> Chen </span></span>
              <hr class="dash" noshade />
            </span>
            <span class="header-text">
              A Senior Education Counsellor.
            </span>
            <span class="button-container">
              <button class="learn-more-button" v-scroll-to="{ el: '#Process', easing: [.2, .80, .30, 1],duration: 1300}">
                <span class="button-label"> See How I Can Help </span>
              </button>
              <button class="get-started-label">
                Get Started
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
    justify-content: space-evenly;
    height: 100vh;
    padding-top: 50px;
    margin:0 auto;
    width: 70vw;

    .header-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 110px 20px 130px 0;
      text-align: left;
      word-spacing: 4px;
      font-size: 52px;
      max-width: 535px;
      min-width: 535px;

      .header-text{
        line-height: 1.2;
        font-family: "Gilroy Bold", serif;
        letter-spacing: -2px;
        font-size: 60px;
        color: #3b3b3b;
        display: flex;
        flex-direction: row;

        .highlight{
          color: #5b1fff;
        }

        .dash{
          width: 38px;
          height: 3px;
          background-color: #5651ec;
          border: none;
          margin: auto 20px
        }
      }

      .button-container {
        display: flex;
        flex-direction: row;
        margin-top: 35px;
        width: fit-content;

        .learn-more-button {
          cursor: pointer;
          width: 178px;
          height: 50px;
          background-image: linear-gradient(to left, #5b1fff, #3867ff);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
          border-radius: 10px;
          border: none;
          outline: none;
          text-decoration: none;
          transition: all .35s ease-in-out;
          margin-right: 25px;

          &:hover {
            opacity: 0.9;
          }

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 14px;
            margin: auto;
            color: white;
          }
        }
        .get-started-label{
          cursor: pointer;
          font-family: "Gilroy SemiBold", serif;
          font-size: 16px;
          margin: auto;
          border: none;
          outline: none;
          text-decoration: none;
          background-color: transparent;
          color: #323232;
        }
      }
    }
    #Typeform {}
  }
  #Process{}
}

</style>