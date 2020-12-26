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
          <span class="card-button">
            <span class="button-label"> Take my card </span>
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
      margin: auto auto;

      .contact-container{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        height: 500px;
        width: 550px;

        .header-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;

          .header-index0, .header-index1 {
            line-height: 1.25;
            font-family: "Bw Modelica ExtraBold", serif;
            letter-spacing: -3px;
            font-size: 65px;
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
            width: 430px;
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

        .card-button{
          margin-top: 25px;
          width: 110px;
          padding: 15px 30px;
          border: thin solid #5b1fff;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
          backdrop-filter: blur( 10px );
          -webkit-backdrop-filter: blur( 10px );
          border-radius: 10px;
          outline: none;
          text-decoration: none;
          cursor: pointer;

          .button-label{
            font-family: "Gilroy SemiBold", serif;
            font-size: 14px;
            margin: auto;
            color: #5b1fff;
          }
        }

        #NameCard{

        }
      }
    }
  }
}

</style>