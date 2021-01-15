<template>
  <section id="About">
    <div class="wrapper">
      <div class="header-container"
           data-aos="fade"
           data-aos-duration="1300"
           data-aos-easing="ease-in-out">
        <span class="header">
          Connecting learners with an education that transforms their passion into a profession.
        </span>
      </div>
      <Highlights id="Highlights"/>
      <div class="description-container">
        <span class="header-description">
          Inani copiosae pri constituto apeirian praesent incorrupte.
        </span>
        <span class="content-description">
          Vis nominavi facilisis contentiones ea, eius. Ei duis legimus qui. Paulo Ea cum cibo exerci facilis, sea errem persius alterum eu, dicat dolores adipiscing in mea. Sit fabellas gloriatur efficiendi in, has ut labore scripta persius.
        </span>
      </div>
      <AboutTiles id="AboutTiles"
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out"/>
    </div>
  </section>
</template>

<script>
import AboutTiles from "@/components/subcomponents/AboutTiles";
import Highlights from "@/components/subcomponents/Highlights";

export default {
  name: "About",
  components: {
    Highlights,
    AboutTiles,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">

#About{
  position: relative;
  display: flex;
  width: 100vw;
  z-index: 1;
  padding-top: 70px;

  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    min-width: 1010px;

    .header-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
      max-width: 1050px;
      min-width: 830px;

      .header{
        font-family: "Bw Modelica ExtraBold", serif;
        background-image: linear-gradient(to right, #b09be7, #d1aef6, #ddaef0, #e7aeea, #efaee4, #f7aed9, #fdb0ce, #ffb2c4, #ffb7b5, #ffbea6, #ffc89c, #f6d397);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 76px;
        letter-spacing: -1.7px;
        line-height: 1.2;
      }
    }

    #Highlights{ }

    .description-container{
      padding-top: 120px;
      display: none;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      width: 55%;

      .header-description{
        width: 30%;
        line-height: 1.4;
        letter-spacing: -1.5x;
        font-family: "Bw Modelica ExtraBold", serif;
        font-size: 25px;
        color: #1F1F1F;
      }
      .content-description{
        width: 58%;
        color: #454545;
        line-height: 1.4;
        font-family: "Gilroy Medium", serif;
        font-size: 16px;
      }
    }
    #AboutTiles{

    }
  }
}

@media only screen and (max-width: 1212px) {
  #About{
    display: none;
  }
}


</style>