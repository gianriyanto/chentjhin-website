<template>
  <div>
    <section id="About">
      <div class="wrapper">
        <div class="header-container">
          <span class="header">
            Connecting aspiring learners with an education that transforms their passion into a profession.
          </span>
        </div>
        <AboutTiles id="AboutTiles"/>
        <div class="description-container">
          <span class="header-description">
          </span>
          <span class="content-description">
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutTiles from "@/components/AboutTiles";

export default {
  name: "About",
  components: {
    AboutTiles,
  },
  data() {
    return{

    }
  }
}
</script>

<style scoped lang="scss">

#About{
  position: relative;
  display: flex;
  height: 150vh;
  width: 100vw;
  z-index: 1;

  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;

    .header-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 70px auto 0 auto;
      text-align: center;
      width: 71vw;
      min-width: 955px;

      .header{
        font-family: "Bw Modelica ExtraBold", serif;
        background: linear-gradient(to right, #5b1fff, #e791c6, #ff8820);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 68px;
        letter-spacing: -2px;
        line-height: 1.2;
      }
    }

    #AboutTiles{

    }

    .description-container{
      margin: 40px auto 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      text-align: left;
      letter-spacing: -1.5x;
      line-height: 1.2;
      width: 70vw;

      .header-description{
        width: 40%;
        font-family: "Bw Modelica Bold", serif;
        font-size: 30px;
      }
      .content-description{
        width: 40%;
        font-family: "Bw Modelica Medium", serif;
        font-size: 20px;
      }
    }
  }

}

</style>