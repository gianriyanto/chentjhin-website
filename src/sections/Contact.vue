<template>
  <section id="Contact">
    <flip-gradient-bg id="flip-gradient-bg"/>
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="contact-container">
          <span class="header-container">
            <span class="header-index0"> Ready to build your future? </span>
            <span class="header-index1"> Let's talk. </span>
          </span>
          <span class="description-container">
            <span class="description-header"> Don’t know where to start? </span>
            <span class="description-text"> Tell me about your current situation, your career interests, and where you intend to travel for studies. </span>
          </span>
          <span class="button-container">
            <button class="getstarted-button" v-scroll-to="{ el: '#Landing', easing: [.2, .80, .30, 1],duration: 1500}">
              <span class="getstarted-label"> Get started </span>
            </button>
            <button class="card-button">
              <a class="card-label" :href="`${publicPath}MyNameCard.png`" target="_blank"> Take my card </a>
            </button>
            <button class="whatsapp-button">
              <font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" />
              <a class="whatsapp-label" v-on:click="goToSite('https://wa.me/+62811899688')"> WhatsApp </a>
            </button>
          </span>
        </div>
        <a class = "namecard-container" :href="`${publicPath}MyNameCard.png`" target="_blank">
          <NameCard id="NameCard"
                    data-aos="fade"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                    data-aos-easing="ease-out"/>
        </a>
        <button class="mobile-card-button">
          <a class="card-label" :href="`${publicPath}MyNameCard.png`" target="_blank"> Take my card </a>
        </button>
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
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}

</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #Contact {
    position: relative;
    height: fit-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    z-index: 1;
    color: #2f2e41;

    .wrapper {
      height: 100vh;
      display: flex;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 10px 42px 0 rgba(17, 20, 57, 0.5);

      .content-wrapper {
        width: 57vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: auto;
        padding-top: 130px;

        .contact-container {
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
            line-height: 1.3;

            .header-index0, .header-index1 {
              font-family: "Bw Modelica ExtraBold", serif;
              letter-spacing: -2px;
              font-size: 55px;
              color: #474747;
            }
          }

          .description-container {
            display: flex;
            flex-direction: column;
            text-align: left;

            .description-header {
              margin-top: 20px;
              line-height: 1.5;
              font-family: "Gilroy SemiBold", serif;
              font-size: 15px;
              color: #1F1F1F;
              width: 460px;
            }

            .description-text {
              margin-top: 7px;
              line-height: 1.6;
              font-family: "Gilroy Regular", serif;
              font-size: 15px;
              color: #484848;
              width: 400px;
            }
          }

          .button-container {
            margin-top: 30px;
            display: flex;
            flex-direction: row;

            .getstarted-button {
              margin-right: 20px;
              width: fit-content;
              padding: 0 42px;
              height: 47px;
              background-image: linear-gradient(to left, #5b1fff, #3867ff);
              filter: drop-shadow(1px 6px 10px rgb(113, 135, 246));
              border-radius: 10px;
              transition: all .35s ease-in-out;

              .getstarted-label {
                font-family: "Gilroy SemiBold", serif;
                font-size: 13px;
                margin: auto;
                color: white;
              }

              &:hover {
                opacity: 0.8;
              }
            }

            .card-button {
              width: fit-content;
              padding: 0 20px;
              height: 47px;
              border: thin solid #5b1fff;
              background: rgba(255, 255, 255, 0.05);
              box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border-radius: 10px;
              transition: all .3s ease-in-out;

              .card-label {
                font-family: "Gilroy SemiBold", serif;
                font-size: 13px;
                margin: auto;
                color: #5b1fff;
                text-decoration: none;
              }

              &:hover {
                opacity: 0.6;
              }
            }

            .whatsapp-button{
              display: none;
            }
          }
        }

        #NameCard {
        }

        .mobile-card-button {
          display: none;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {

  #Contact {
    margin-top: 100px;
    position: relative;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
    color: #2f2e41;
    box-shadow: 0 10px 42px 0 rgba(17, 20, 57, 0.3);

    #flip-gradient-bg{
      height: 100%;
    }

    .wrapper {
      height: fit-content;
      display: flex;
      background: rgba(255, 255, 255, 0.5);

      .content-wrapper {
        padding-top: 120px;
        width:  100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .contact-container {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .header-container {
            display: flex;
            flex-direction: column;
            align-self: center;
            text-align: center;
            line-height: 1.3;
            width: 80%;

            .header-index0, .header-index1 {
              font-family: "Bw Modelica ExtraBold", serif;
              letter-spacing: -2px;
              font-size: 40px;
              color: #474747;
            }
          }

          .description-container {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 80%;
            margin: 0 auto;

            .description-header {
              margin-top: 20px;
              line-height: 1.5;
              font-family: "Gilroy SemiBold", serif;
              font-size: 15px;
              color: #1F1F1F;
            }

            .description-text {
              margin-top: 7px;
              line-height: 1.6;
              font-family: "Gilroy Regular", serif;
              font-size: 15px;
              color: #484848;
            }
          }

          .button-container {
            display: flex;
            flex-direction: column;
            margin: 30px auto 20px auto;
            width: 60%;

            .getstarted-button {
              align-self: center;
              width: 100%;
              height: 47px;
              background-image: linear-gradient(to left, #5b1fff, #3867ff);
              border: thin solid #3867ff;
              filter: drop-shadow(1px 6px 10px rgb(154, 170, 250));
              border-radius: 10px;
              margin-bottom: 20px;

              .getstarted-label {
                font-family: "Gilroy SemiBold", serif;
                font-size: 14px;
                margin: auto;
                color: white;
              }
            }
            .card-button {
              display: none;
            }
            .whatsapp-button {
              align-self: center;
              display: flex;
              flex-direction: row;
              justify-content: center;
              width: 100%;
              height: 47px;
              background: rgba(255, 255, 255, 0.05);
              box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: thin solid #3867ff;
              filter: drop-shadow(1px 6px 10px rgb(113, 135, 246));
              border-radius: 10px;

              .whatsapp-icon{
                align-self: center;
                margin-right: 5px;
                color: #5b1fff;
                font-size: 20px;
              }

              .whatsapp-label {
                align-self: center;
                font-family: "Gilroy SemiBold", serif;
                font-size: 14px;
                color: #5b1fff;
              }
            }
          }
        }

        #NameCard {

        }

        .mobile-card-button {
          align-self: center;
          width: 60%;
          padding: 0 20px;
          margin-bottom: 40px;
          height: 50px;
          border: thin solid #5b1fff;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 10px;

          .card-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 13px;
            margin: auto;
            color: #5b1fff;
          }
        }
      }
    }
  }
}

</style>