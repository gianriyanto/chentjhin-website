<template>
  <section id="Contact">
    <flip-gradient-bg id="flip-gradient-bg"/>
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="contact-container">
          <span class="header-container">
            <span class="header-index0"> Ready to build your future? </span>
            <span class="header-index1"> Let's Talk. </span>
          </span>
          <span class="description-container">
            <span class="description-header"> Don’t know where to start? </span>
            <span class="description-text"> Tell me about your current situations, your interests, and where you intend to travel for studies. </span>
          </span>
          <span class="button-container">
            <button class="getstarted-button">
              <span class="getstarted-label"> Get Started </span>
            </button>
            <button class="card-button">
              <span class="card-label"> Take My Card </span>
            </button>
          </span>
        </div>
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
  },
  data() {
    return{
    }
  },
  methods: {
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
      margin: auto;
      padding-top: 70px;

      .contact-container{
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 550px;

        .header-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          line-height: 1.4;

          .header-index0, .header-index1 {
            font-family: "Bw Modelica ExtraBold", serif;
            letter-spacing: -3px;
            font-size: 63px;
            color: #1F1F1F;
          }
        }

        .description-container{
          display: flex;
          flex-direction: column;
          text-align: left;

          .description-header{
            margin-top: 30px;
            line-height: 1.5;
            font-family: "Gilroy SemiBold", serif;
            font-size: 16px;
            color: #1F1F1F;
            width: 460px;
          }

          .description-text{
            margin-top: 7px;
            line-height: 1.5;
            font-family: "Gilroy Regular", serif;
            font-size: 16px;
            color: #484848;
            width: 430px;
          }
        }

        .button-container{
          margin-top: 40px;
          display: flex;
          flex-direction: row;

          .getstarted-button{
            margin-right: 20px;
            width: fit-content;
            padding: 0 50px;
            height: 47px;
            background-color: #5b1fff;
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.9 );
            border-radius: 10px;
            outline: none;
            text-decoration: none;
            border: none;
            cursor: pointer;

            .getstarted-label{
              font-family: "Gilroy SemiBold", serif;
              font-size: 13px;
              margin: auto;
              color: white;
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

            .card-label{
              font-family: "Gilroy SemiBold", serif;
              font-size: 13px;
              margin: auto;
              color: #5b1fff;
            }
          }
        }
      }
      #NameCard{

      }
    }
  }
}

</style>