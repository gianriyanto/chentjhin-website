<template>
  <div id="AboutTiles">
    <div class="content-wrapper">
      <div class="left-side">
        <span class="top">
          <span class="tile-01"
                data-aos="fade-right"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out">
            <span class="header">
              {{ tiles[0].content }}
            </span>
             <img class="image" :src="require(`@/assets/images/${tiles[0].url}`)" alt="failed to load image"/>
          </span>
          <span class="tile-02"
                data-aos="fade-down"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out">
            <span class="header">
              {{ tiles[1].content }}
            </span>
          </span>
        </span>
        <span class="bottom">
          <span class="tile-03"
                data-aos="fade-right"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out">
            <span class="cover">
              <span class="header">
                {{ tiles[2].content }}
              </span>
             <img class="image" :src="require(`@/assets/images/${tiles[2].url}`)" alt="failed to load image"/>
            </span>
          </span>
        </span>
      </div>
      <div class="right-side">
        <span class="left">
          <span class="tile-04"
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out">
            <span class="header">
              {{ tiles[3].content }}
            </span>
             <img class="image" :src="require(`@/assets/images/${tiles[3].url}`)" alt="failed to load image"/>
          </span>
        </span>
        <span class="right">
          <span class="tile-05"
                data-aos="fade-down"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out">
            <span class="header">
              {{ tiles[4].content }}
            </span>
             <img class="image" :src="require(`@/assets/images/${tiles[4].url}`)" alt="failed to load image"/>
          </span>
          <span class="tile-06"
                data-aos="fade-up"
                data-aos-duration="2300"
                data-aos-easing="ease-out">
            <span class="phone">
              <span class="header">
                {{ tiles[5].content[0] }}
              </span>
            </span>
            <span class="phone">
              <span class="header">
                {{ tiles[5].content[1] }}
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutTiles",
  data() {
    return {
      tiles: [
        {
          tileIndex: 1,
          content: "Tailoring career blueprints one person at a time.",
          url: "career.svg"
        },
        {
          tileIndex: 2,
          content: "Your Future Simplified.",
          url: "",
        },
        {
          tileIndex: 3,
          content: "I care about your education journey and understand that each person learns and grows in their own way.",
          url: "ideasflow.svg",
        },
        {
          tileIndex: 4,
          content: "Let me handle all the nitty-gritty so you can focus on building your career.",
          url: "countingstars.svg",
        },
        {
          tileIndex: 5,
          content: "Sending students to universities worldwide including USA, UK, and Australia.",
          url: "world.svg",
        },
        {
          tileIndex: 6,
          content: ["62 811 899 688", "61 426 368 781"]
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px){
  #AboutTiles {
    padding-top: 150px;
    margin: 0 auto;
    position: relative;
    max-width: 1200px;
    width: 75vw;
    min-width: 1050px;
    height: 30vh;
    min-height: 550px;

    .content-wrapper {
      margin: 0 auto 0 auto;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;

      .left-side {
        display: flex;
        flex-direction: column;
        width: 45%;

        .top {
          display: flex;
          flex-direction: row;
          height: 55%;

          .tile-01 {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0 8px 8px 0;
            padding: 25px;
            width: 40%;
            border-radius: 15px;
            background-image: linear-gradient(to bottom, white, white);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);
            transition: all 0.45s ease-in-out;

            &:hover{
              transform: scle(1.01);
              box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
            }

            .header {
              text-align: left;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 22px;
              letter-spacing: -1px;
              line-height: 1.2;
              color: black;
            }

            .image {
              width: auto;
              height: 50%;
            }
          }

          .tile-02 {
            display: flex;
            flex-direction: column-reverse;
            margin: 0 8px 8px 8px;
            padding: 25px;
            width: 37%;
            border-radius: 15px;
            background-image: linear-gradient(to top right, #071329, #091732);
            transition: all 0.45s ease-in-out;

            &:hover{
              box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
            }

            .header {
              text-align: right;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 31px;
              letter-spacing: -1px;
              line-height: 1.2;
              background: linear-gradient(to right, #f8cc8a, #fff5bf);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        .bottom {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 45%;

          .tile-03 {
            display: flex;
            height: 100%;
            background-color: lightgrey;
            border-radius: 15px;
            background-image: linear-gradient(to top right, #7a66ea, #6c68ec, #ffb2e0);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);
            margin: 8px 8px 0 0;
            transition: all 0.45s ease-in-out;

            &:hover{
              box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
            }
          }

          .cover {
            padding: 25px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background: rgba(255, 255, 255, 0.10);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            border-radius: 15px;

            .header {
              width: 45%;
              text-align: left;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 21px;
              letter-spacing: -1px;
              line-height: 1.4;
              color: white;
            }

            .image {
              margin: auto 0;
              width: 45%;
              height: auto;
            }
          }
        }
      }

      .right-side {
        display: flex;
        flex-direction: row;
        width: 55%;

        .left {
          display: flex;
          width: 55%;
          height: 100%;

          .tile-04 {
            display: flex;
            flex-direction: column-reverse;
            margin: 0 8px;
            padding: 35px;
            width: 100%;
            border-radius: 15px;
            background-image: linear-gradient(to bottom, white, white);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);
            transition: all 0.45s ease-in-out;

            &:hover{
              box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
            }

            .header {
              text-align: left;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 38px;
              letter-spacing: -1px;
              line-height: 1.2;
              background: linear-gradient(to right, #c0aef1, #f192cd, #faba81);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .image {
              transform: scaleX(-1);
              margin: 0 auto;
              width: 100%;
              height: auto;
            }
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          width: 45%;
          height: 100%;

          .tile-05 {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin: 0 0 8px 8px;
            padding: 25px;
            height: 60%;
            background-image: linear-gradient(to top right, #c796f1, #f8a670, #ffbd5a);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.1);
            border-radius: 15px;
            transition: all 0.45s ease-in-out;

            &:hover{
              box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
            }

            .header {
              text-align: left;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 20px;
              letter-spacing: -1px;
              line-height: 1.3;
              color: white;
              height: 40%;
            }

            .image {
              width: auto;
              height: 55%;
              margin: 0 auto;
            }
          }

          .tile-06 {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin: 8px 0 0 8px;
            padding: 30px;
            height: 30%;
            border-radius: 15px;
            background-image: linear-gradient(to top right, #0e0e0e, #454545);
            transition: all 0.45s ease-in-out;

            &:hover{
              box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.5);
            }

            .phone{
              display: flex;
              flex-direction: row;
              justify-content: center;

              .header {
                margin: auto 0 ;
                text-align: center;
                font-family: "Bw Modelica Bold", serif;
                font-size: 23px;
                line-height: 1.4;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #AboutTiles {
    padding-top: 50px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: fit-content;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;

      .left-side {
        display: flex;
        flex-direction: column;
        width: 100%;

        .top {
          display: flex;
          flex-direction: column;

          .tile-01 {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            height: fit-content;
            margin: 8px 0 15px 0;
            border-radius: 15px;
            background-image: linear-gradient(to bottom, white, white);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.2);

            .header {
              padding: 25px 40px 40px 25px;
              width: 80%;
              text-align: left;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 41px;
              letter-spacing: -1px;
              line-height: 1.2;
              color: #222222;
            }

            .image {
              padding: 0 15px 30px 15px;
              width: 90%;
              height: auto;
            }
          }

          .tile-02 {
            display: flex;
            flex-direction: column-reverse;
            margin: 8px 0 15px 0;
            width: 100%;
            border-radius: 15px;
            background-image: linear-gradient(to top right, #071329, #071d43);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.2);

            .header {
              padding: 150px 20px 15px 20px;
              text-align: right;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 55px;
              letter-spacing: -1px;
              line-height: 1.3;
              background: linear-gradient(to right, #f8cc8a, #fff5bf);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        .bottom {
          display: flex;
          flex-direction: column;
          width: 100%;

          .tile-03 {
            display: flex;
            height: fit-content;
            background-color: lightgrey;
            border-radius: 15px;
            background-image: linear-gradient(to top right, #7a66ea, #6c68ec, #ffb2e0);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);
            margin: 8px 0 15px 0;
          }

          .cover {
            padding: 25px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-start;
            background: rgba(255, 255, 255, 0.10);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            border-radius: 15px;

            .header {
              padding-top: 20px;
              text-align: left;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 32px;
              letter-spacing: -1px;
              line-height: 1.4;
              color: white;
            }

            .image {
              align-self: center;
              padding: 20px 0;
              width: 80%;
              height: auto;
            }
          }
        }
      }

      .right-side {
        display: flex;
        flex-direction: column;
        width: 100%;

        .left {
          display: flex;
          width: 100%;
          height: 100%;

          .tile-04 {
            display: flex;
            flex-direction: column-reverse;
            width: 100%;
            border-radius: 15px;
            background-image: linear-gradient(to bottom, white, white);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.2);
            margin: 8px 0 15px 0;

            .header {
              padding: 25px 25px 25px 25px;
              text-align: left;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 43px;
              letter-spacing: -1px;
              line-height: 1.2;
              background: linear-gradient(to right, #c0aef1, #f192cd, #faba81);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .image {
              padding: 30px 0;
              align-self: center;
              width: 80%;
              height: auto;
            }
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          width: 100%;

          .tile-05 {
            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-start;
            margin: 8px 0 15px 0;
            height: fit-content;
            background-image: linear-gradient(to top right, #c796f1, #f8a670, #ffbd5a);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.2);
            border-radius: 15px;

            .header {
              padding: 20px 25px 25px 25px;
              text-align: left;
              font-family: "Bw Modelica ExtraBold", serif;
              font-size: 35px;
              letter-spacing: -1px;
              line-height: 1.3;
              color: white;
            }

            .image {
              align-self: center;
              width: 90%;
              height: auto;
              margin: 0 auto;
            }
          }

          .tile-06 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 8px 0 15px 0;
            height: 200px;
            border-radius: 15px;
            background-image: linear-gradient(to top right, #181818, #5f5f5f);
            box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.4);

            .phone{
              display: flex;
              flex-direction: row;
              justify-content: center;

              .header {
                margin: auto 0;
                text-align: center;
                font-family: "Bw Modelica ExtraBold", serif;
                font-size: 33px;
                letter-spacing: 1px;
                line-height: 1.4;
                color: #ffffff;
                background: linear-gradient(to left, #ffefc0, #fffef6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
      }
    }
  }
}

</style>