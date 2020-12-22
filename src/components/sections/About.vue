<template>
  <div>
    <gradient-bg id="gradient-bg"/>
    <section id="About">
      <div class="wrapper">
        <div class="header-container">
          <span class="header">
            Delivering an end to end consulting service to transform your passion into a career.
          </span>
        </div>
        <div id="cards-container">
          <div class="left-side">
            <span class="top">
              <span class="card-01">
                <a class="card-text">
                  Design a career blueprint tailored to your needs.
                </a>
              </span>
              <span class="card-02">
                <a class="card-text">
                  Your Future Simplified.
                </a>
              </span>
            </span>
            <span class="bottom">
              <span class="card-03">
                <a class="card-text">
                  Let me handle the nitty-gritty things so you can focus on what really matters.
                </a>
              </span>
            </span>
          </div>
          <div class="right-side">
            <span class="left">
              <span class="card-04">
                <a class="card-text">
                  Full counselling service even after admission.
                </a>
              </span>
            </span>
            <span class="right">
              <span class="card-05">
                <a class="card-text">
                  Specialise in universities in USA, Europe, and Australia.
                </a>
                <img class="image" src="@/assets/images/destinations.svg" alt=""/>
              </span>
              <span class="card-06">
                <a class="card-text">
                  62 811 899 688
                </a>
              </span>
            </span>
          </div>
        </div>
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
import GradientBg from "@/components/background/flipgradientbg";

export default {
  name: "About",
  components: {
    GradientBg
  },
  data() {
    return{

    }
  }
}
</script>

<style scoped lang="scss">

#gradient-bg{
  display: none;
  position: absolute;
  z-index: -1;
}

#About{
  position: relative;
  display: flex;
  height: 150vh;
  width: 100vw;
  background: rgba( 255, 255, 255, 0.70 );
  backdrop-filter: blur( 30px );
  -webkit-backdrop-filter: blur( 30px );
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
      margin: 170px auto;
      text-align: center;
      width: 70vw;

      .header{
        font-family: "Bw Modelica Bold", serif;
        background: linear-gradient(to right, #5b1fff, #e791c6, #ff8820);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 68px;
        font-weight: 650;
        letter-spacing: -1.3px;
        line-height: 1.2;
      }
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

  #cards-container{
    margin: 20px auto 0 auto;
    display: flex;
    flex-direction: row;
    width: 70vw;
    height: 500px;

    .card-text{
      text-align: left;
      font-family: "Bw Modelica Bold", serif;
      font-weight: 800;
      font-size: 40px;
      letter-spacing: -1px;
      line-height: 1.2;
    }

    .left-side{
      display: flex;
      flex-direction: column;
      width: 45%;

      .top{
        display: flex;
        flex-direction: row;
        height: 50%;

        .card-01 {
          display: flex;
          margin: 0 8px 8px 0;
          padding: 30px;
          width: 45%;
          border-radius: 15px;
          background-image: linear-gradient(to bottom, white, white);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);

          .card-text{
            text-align: left;
            font-family: "Bw Modelica Bold", serif;
            font-weight: 600;
            font-size: 22px;
            letter-spacing: -1px;
            line-height: 1.2;
            color: black;
          }
        }
        .card-02{
          display: flex;
          flex-direction: column-reverse;
          margin: 0 8px 8px 8px;
          padding: 30px;
          width: 50%;
          border-radius: 15px;
          background-image: linear-gradient(to top right, #071329, #091732);

          .card-text{
            text-align: right;
            font-family: "Bw Modelica Bold", serif;
            font-weight: 800;
            font-size: 32px;
            letter-spacing: -1px;
            line-height: 1.2;
            background: linear-gradient(to right, #f8cc8a, #fff5bf);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
      .bottom{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 50%;

        .card-03{
          display: flex;
          margin: 8px 8px 0 0;
          padding: 30px;
          height: 100%;
          background-color: lightgrey;
          border-radius: 15px;
          background-image: linear-gradient(to top right, #482aef, #6762ec, #f5b8dd);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);

          .card-text{
            width: 50%;
            text-align: left;
            font-family: "Bw Modelica Bold", serif;
            font-size: 25px;
            letter-spacing: -1px;
            line-height: 1.4;
            color: white;
          }
        }
      }
    }
    .right-side{
      display: flex;
      flex-direction: row;
      width: 55%;

      .left{
        display: flex;
        width: 55%;
        height: 100%;

        .card-04 {
          display: flex;
          flex-direction: column-reverse;
          margin: 0 8px;
          padding: 30px;
          width: 100%;
          border-radius: 15px;
          background-image: linear-gradient(to bottom, white, white);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);

          .card-text{
            text-align: left;
            font-family: "Bw Modelica Bold", serif;
            font-weight: 800;
            font-size: 44px;
            letter-spacing: -1px;
            line-height: 1.2;
            background: linear-gradient(to right, #8f6af3, #e579bc, #fcaa61);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        width: 45%;
        height: 100%;

        .card-05{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin: 0 0 8px 8px;
          padding: 30px;
          height: 70%;
          background-image: linear-gradient(to top right, #dd6fbd, #f69250, #f3ab3e);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.1);
          border-radius: 15px;

          .card-text{
            text-align: left;
            font-family: "Bw Modelica Bold", serif;
            font-weight: 600;
            font-size: 23px;
            letter-spacing: -1px;
            line-height: 1.4;
            color: white;
          }
          .image{
            width: 80%;
            height: auto;
            margin: 0 auto;
          }
        }
        .card-06{
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 8px 0 0 8px;
          padding: 30px;
          height: 30%;
          border-radius: 15px;
          background-image: linear-gradient(to top right, #0e0e0e, #454545);

          .card-text{
            text-align: center;
            font-family: "Bw Modelica Bold", serif;
            font-weight: 600;
            font-size: 26px;
            line-height: 1.4;
            color: white;
          }
        }
      }

    }
  }

}

</style>