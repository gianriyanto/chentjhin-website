<template>
  <section id="Contact">
    <flip-gradient-bg id="flip-gradient-bg"/>
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="contact-container"
             data-aos="fade"
             data-aos-duration="2000"
             data-aos-easing="ease-in-out">
          <span class="header-container">
            <span class="header-index0"> Ready to build your future? </span>
            <span class="header-index1"> Let's Talk. </span>
          </span>
          <span class="description-container">
            <span class="description-header"> Don’t know where to start? </span>
            <span class="description-text"> Tell me about your current situation, your career interests, and where you intend to travel for studies. </span>
          </span>
          <span class="button-container">
            <button class="getstarted-button" v-scroll-to="{ el: '#Landing', easing: [.2, .80, .30, 1],duration: 1500}">
              <span class="getstarted-label"> Get Started </span>
            </button>
            <button class="card-button">
              <a class="card-label" :href="`${publicPath}MyNameCard.png`" target="_blank"> Take My Card </a>
            </button>
          </span>
        </div>
        <a :href="`${publicPath}MyNameCard.png`" target="_blank">
          <NameCard id="NameCard"
                    data-aos="flip-up"
                    data-aos-delay="50"
                    data-aos-duration="2500"
                    data-aos-easing="ease-out"/>
        </a>
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
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
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
    box-shadow: 0 10px 42px 0 rgba(17, 20, 57, 0.5);

    .content-wrapper{
      width: 57vw;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: auto;
      padding-top: 150px;

      .contact-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 40px;
        height: 100%;
        width: 540px;

        .header-container {
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          line-height: 1.35;

          .header-index0, .header-index1 {
            font-family: "Bw Modelica ExtraBold", serif;
            letter-spacing: -3px;
            font-size: 64px;
            color: #1F1F1F;
          }
        }

        .description-container{
          display: flex;
          flex-direction: column;
          text-align: left;

          .description-header{
            margin-top: 20px;
            line-height: 1.5;
            font-family: "Gilroy SemiBold", serif;
            font-size: 16px;
            color: #1F1F1F;
            width: 460px;
          }

          .description-text{
            margin-top: 7px;
            line-height: 1.6;
            font-family: "Gilroy Regular", serif;
            font-size: 16px;
            color: #484848;
            width: 430px;
          }
        }

        .button-container{
          margin-top: 50px;
          display: flex;
          flex-direction: row;

          .getstarted-button{
            margin-right: 20px;
            width: fit-content;
            padding: 0 42px;
            height: 47px;
            background-image: linear-gradient(to left, #5b1fff, #3867ff);
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.6 );
            border-radius: 10px;
            outline: none;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all .35s ease-in-out;

            .getstarted-label{
              font-family: "Gilroy SemiBold", serif;
              font-size: 13px;
              margin: auto;
              color: white;
            }

            &:hover{
              opacity: 0.8;
            }
          }

          .card-button{
            width: fit-content;
            padding: 0 20px;
            height: 47px;
            border: thin solid #5b1fff;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
            backdrop-filter: blur( 10px );
            -webkit-backdrop-filter: blur( 10px );
            border-radius: 10px;
            outline: none;
            text-decoration: none;
            cursor: pointer;
            transition: all .3s ease-in-out;

            .card-label{
              font-family: "Gilroy SemiBold", serif;
              font-size: 13px;
              margin: auto;
              color: #5b1fff;
              text-decoration: none;
            }
            &:hover{
              opacity: 0.6;
            }
          }
        }
      }
      #NameCard{ }
    }
  }
}
a {
  color: transparent;
  a:visited {
    text-decoration: none;
    color: transparent;
  }
}

</style>