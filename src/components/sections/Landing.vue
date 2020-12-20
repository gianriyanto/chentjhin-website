<template>
  <div>
    <gradient-bg id="gradient-bg"/>
    <section id="Landing">
      <div id="half-bg"> </div>
      <div class="wrapper">
        <div class="header-container">
          <a class="header-index1">
            My name is Chen,
          </a>
          <a class="header-index2">
            I am a senior education counsellor.
          </a>
          <span class="content-container">
            <button class="get-started-button" v-scroll-to="{ el: '#Typeform', easing: [.2, .80, .30, 1],duration: 1100}">
              <a class="button-label"> See how I can help </a>
            </button>
          </span>
        </div>
        <Typeform id="Typeform"/>
      </div>
    </section>
  </div>
</template>

<script>
import GradientBg from "@/components/background/gradientlandingbg";
import Typeform from "@/components/sections/Typeform";

export default {
  name: "Landing",
  components: {
    Typeform,
    GradientBg,
  }
}
</script>

<style scoped lang="scss">

#gradient-bg{
  position: absolute;
  z-index: -1;
}

#Landing{
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  background: rgba( 255, 255, 255, 0.40 );
  backdrop-filter: blur( 30px );
  -webkit-backdrop-filter: blur( 30px );
  z-index: 1;

  .wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 180px auto;
    width: 73vw;
    max-width: 1097px;
    min-width: 950px;
    height: 60vh;

    .header-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto 0;
      text-align: left;
      letter-spacing: -1px;
      line-height: 1.2;
      font-size: 52px;
      width: 50%;

      .header-index1{
        font-family: "Gilroy Bold", serif;
        color: #5b1fff;
        font-size: 53px;
      }
      .header-index2{
        font-family: "Gilroy Bold", serif;
        color: #1d1d1d;
        font-size: 53px;
      }
      .content-container{
        display: flex;
        flex-direction: row;
        margin-top: 30px;

        .get-started-button{
          cursor: pointer;
          width: 190px;
          height: 50px;
          background-color: #5b1fff;
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
          border-radius: 40px;
          border: none;
          outline: none;
          text-decoration: none;
          transition: all .35s ease-in-out;

          &:hover{
            opacity: 0.9;
          }

          .button-label{
            font-family: Montserrat, serif;
            font-weight: 600;
            font-size: 14px;
            margin: auto;
            color: white;
          }
        }
      }
    }
    #Typeform{
      z-index: 2;
    }
  }
}

</style>