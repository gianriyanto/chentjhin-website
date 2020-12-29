<template>
    <section id="Landing">
      <gradient-bg id="gradient-bg" v-rellax="{ speed: 2 }"/>
      <div class="wrapper">
        <div class="content-wrapper">
          <div class="header-container"
               data-aos="fade"
               data-aos-duration="2400"
               data-aos-easing="ease-in-out">
            <span class="header-text">
              Hello.
            </span>
            <span class="header-text">
              <span> My name's <span class="highlight"> Chen </span></span>
              <hr class="dash" noshade/>
            </span>
            <span class="header-text">
              A Senior Education Counsellor.
            </span>
            <span class="button-container">
              <button class="learn-more-button" v-scroll-to="{ el: '#Process', easing: [.2, .80, .30, 1],duration: 1500}">
                <span class="button-label"> See How I Can Help </span>
              </button>
              <button class="getstarted-button">
                <span class="button-label"> Get Started </span>
                <font-awesome-icon class="arrow-icon" :icon="['fas', 'chevron-right']" />
              </button>
            </span>
          </div>
          <Typeform id="Typeform"
                    data-aos="fade"
                    data-aos-duration="3000"
                    data-aos-easing="ease-out"/>
        </div>
        <ScrollPrompt id="ScrollPrompt"/>
        <Process id="Process"
                 data-aos="fade"
                 data-aos-duration="1500"
                 data-aos-easing="ease-out"/>
      </div>
    </section>
</template>

<script>

import GradientBg from "@/components/background/gradientbg";
import Typeform from "@/components/subcomponents/Typeform";
import Process from "@/sections/Process";
import ScrollPrompt from "@/components/subcomponents/ScrollPrompt";

export default {
  name: "Landing",
  components: {
    ScrollPrompt,
    Process,
    Typeform,
    GradientBg,
  }
}
</script>

<style scoped lang="scss">

#Landing {
  position: relative;
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.wrapper {
  position: relative;
  height: 160vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background: rgba(255, 255, 255, 0.50);

  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100vh;
    padding-top: 70px;
    margin: 0 auto;
    width: 70vw;

    .header-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 110px 80px 130px 0;
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
            opacity: 0.8;
          }

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 14px;
            margin: auto;
            color: white;
          }
        }
        .getstarted-button {
          width: fit-content;
          height: 50px;
          display: flex;
          justify-content: center;
          background-color: transparent;
          outline: none;
          text-decoration: none;
          transition: all .35s ease-in-out;
          border: none;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 15px;
            margin: auto 10px ;
            transition: all .35s ease-in-out;
            color: #1f1f1f;

            &:hover + .arrow-icon{
              opacity: 0.8;
              transform: translateX(5px) scale(1.5);
              color: #5651ec;
            }
          }
          .arrow-icon{
            font-size: 12px;
            padding-bottom: 2px;
            margin: auto 0;
            transition: all .35s ease-in-out;
            color: #454545;

            &:hover{
              opacity: 0.8;
              transform: translateX(5px) scale(1.5);
              color: #5651ec;
            }
          }
        }
      }
    }
    #Typeform {
    }
  }
}

#Process{

}

@media only screen and (max-width: 1212px) {

  #Landing {
    display: none;
  }
}


</style>