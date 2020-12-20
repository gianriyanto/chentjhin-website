<template>
  <div>
    <gradient-bg id="gradient-bg"/>
    <section id="Landing">
      <div class="wrapper">
        <div class="header-container">
          <a class="header-index0">
            My name is Chen,
          </a>
          <a class="header-index1">
            I am a senior education counsellor.
          </a>
          <button class="get-started-button" v-scroll-to="{
                el: '#Typeform',
                easing: [.2, .80, .30, 1],
                duration: 1100
            }">
            <a class="button-label"> Get started </a>
          </button>
        </div>
        <span class="image-container">
          <img class="image" src="@/assets/images/professional.svg" alt=""/>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import GradientBg from "@/components/background/gradientlandingbg";

export default {
  name: "Landing",
  components: {
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
    justify-content: space-around;
    margin: auto;
    width: 72vw;
    height: 50vh;

    .header-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto 0;
      text-align: left;
      letter-spacing: -1px;
      line-height: 1.1;
      font-size: 55px;
      width: 50%;

      .header-index0{
        font-family: "Gilroy Bold", serif;
        color: #5b1fff;
      }
      .header-index1{
        font-family: "Gilroy Bold", serif;
        color: #1d1d1d;
      }
      .get-started-button{
        margin: 20px 0 0 0;
        width: 170px;
        height: 50px;
        background-color: #5b1fff;
        box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
        border-radius: 8px;
        border: none;
        outline: none;
        text-decoration: none;

        .button-label{
          font-family: Montserrat, serif;
          font-weight: 600;
          font-size: 14px;
          margin: auto;
          color: white;
        }
      }
    }
    .image-container{
      width: 40%;

      .image{
        width: 400px;
        height: auto;
      }
    }
  }

}

</style>