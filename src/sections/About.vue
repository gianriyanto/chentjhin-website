<template>
  <section id="About">
    <div class="wrapper">
      <div class="header-container">
        <span class="header">
          Connecting aspiring learners with an education that transforms their passion into a profession.
        </span>
      </div>
      <div class="highlights-container">
        <span class="highlight">
          <a class="highlight-header"><font-awesome-icon class="icon" :icon="['fas', 'globe-americas']" /> 95 </a>
          <a class="highlight-text"> Universities enrolled </a>
        </span>
        <span class="highlight">
          <a class="highlight-header"><font-awesome-icon class="icon" :icon="['fas', 'user-graduate']" /> 100 </a>
          <a class="highlight-text"> Clients represented </a>
        </span>
        <span class="highlight">
          <a class="highlight-header"><font-awesome-icon class="icon" :icon="['fas', 'business-time']" /> 11 </a>
          <a class="highlight-text"> Years in business </a>
        </span>
      </div>
      <div class="description-container">
        <span class="header-description">
          Inani copiosae pri constituto apeirian praesent incorrupte.
        </span>
        <span class="content-description">
          Vis nominavi facilisis contentiones ea, eius. Ei duis legimus qui. Paulo Ea cum cibo exerci facilis, sea errem persius alterum eu, dicat dolores adipiscing in mea. Sit fabellas gloriatur efficiendi in, has ut labore scripta persius.
        </span>
      </div>
      <AboutTiles id="AboutTiles"/>
    </div>
  </section>
</template>

<script>
import AboutTiles from "@/components/subcomponents/AboutTiles";

export default {
  name: "About",
  components: {
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
      max-width: 1200px;
      width: 70%;

      .header{
        font-family: "Bw Modelica ExtraBold", serif;
        background: linear-gradient(to right, #5b1fff, #e791c6, #ff8820);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 73px;
        letter-spacing: -2px;
        line-height: 1.2;
      }
    }

    .highlights-container{
      padding-top: 100px;
      display: flex;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-evenly;
      text-align: left;
      width: 90%;

      .highlight{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        line-height: 1.2;
        color: #808080;

        .highlight-header{
          margin: 8px auto;
          font-family: "Bw Modelica Bold", serif;
          font-size: 35px;
          letter-spacing: -1px;
        }

        .highlight-text{
          width: 150px;
          margin: 8px auto;
          font-family: "Gilroy Regular", serif;
          font-size: 18px;
          letter-spacing: 0px;
        }
      }
    }

    .description-container{
      padding-top: 120px;
      display: flex;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      width: 62%;

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
        line-height: 1.6;
        font-family: "Gilroy Medium", serif;
        font-size: 16px;
      }
    }

    #AboutTiles{}
  }

}

</style>