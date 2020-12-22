<template>
  <div>
    <gradient-bg id="gradient-bg"/>
    <section id="Services">
      <div class="wrapper">
        <div class="header-container">
          <span class="header">
            Process.
          </span>
          <span class="sub-header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </span>
          <img class="image-container" src="@/assets/images/professional.svg" alt=""/>
        </div>
        <div class="content-container">
          <span class="item-wrapper">
            <span class="item-card left">
              <span class="item-header">
                 Aptitude
              </span>
              <span class="item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </span>
            <span class="item-card right">
              <span class="item-header">
                 Consulting
              </span>
              <span class="item-description">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </span>
            <span class="item-card left">
              <span class="item-header">
                 Application
              </span>
              <span class="item-description">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </span>
            <span class="item-card right">
              <span class="item-header">
                 Counselling
              </span>
              <span class="item-description">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </span>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GradientBg from "@/components/background/gradientbg";

export default {
  name: "Services",
  components: {
    GradientBg
  },
  data () {
    return {
      services: [
        {
          index: 1,
          name: 'Aptitude',
          description: 'Aptitude Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageURL: 'ideasflow.svg'
        },
        {
          index: 2,
          name: 'Consulting',
          description: 'Consulting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageURL: 'professional.svg'
        },
        {
          index: 3,
          name: 'Application',
          description: 'Application Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageURL: 'teacher.svg'
        },
        {
          index: 4,
          name: 'Counselling',
          description: 'Counselling Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageURL: 'ideasflow.svg'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

#gradient-bg{
  position: absolute;
  z-index: -1;
  box-shadow: 0 -8px 12px 20px rgba(17, 20, 57, 0.5);
}

#Services{
  position: relative;
  height: 100vh;
  width: 100vw;
  background: rgba( 255, 255, 255, 0.40 );
  backdrop-filter: blur( 30px );
  -webkit-backdrop-filter: blur( 30px );
  z-index: 1;

  .wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    width: 60vw;
    height: fit-content;

    .header-container{
      margin: 180px 0 0 0;
      display: flex;
      flex-direction: column;
      width: 40%;
      text-align: left;

      .header{
        font-family: "Bw Modelica Bold", serif;
        font-weight: 700;
        color: black;
        font-size: 70px;
        letter-spacing: -2px;
        margin-bottom: 20px;
      }
      .sub-header{
        font-family: "Gilroy SemiBold", serif;
        color: #403f3f;
        font-size: 22px;
        letter-spacing: -1px;
        margin-bottom: 80px;
      }

      .image-container{
        opacity: 0.8;
        display: block;
        width: 320px;
        height: auto;
      }
    }

    .content-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: fit-content;
      width: 40%;
      margin: 250px 0 0 0;

      .item-wrapper {
        display: flex;
        flex-direction: column;
        margin: auto 0;

        .right{
          margin-left: 110px;
        }

        .left{
        }

        .item-card {
          display: flex;
          flex-direction: column;
          padding: 20px;
          text-align: left;
          height: 80px;
          width: 310px;
          background: rgba(207, 201, 201, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          margin-bottom: 25px;

          .item-header {
            font-family: "Gilroy Bold", serif;
            color: #5b23f1;
            font-size: 21px;
            z-index: 2;
            letter-spacing: -1.2px;
            margin-bottom: 5px;
          }
          .item-description {
            font-family: "Bw Modelica Medium", serif;
            color: #3e3e3e;
            font-size: 15px;
            z-index: 2;
            letter-spacing: -1px;
          }
        }
      }
    }
  }
}

</style>