<template>
  <div id="AboutTiles">
    <div class="content-wrapper">
      <div class="left-side">
        <span class="top">
          <span class="tile-01">
            <a class="header">
              {{ tiles[0].content }}
            </a>
             <img class="image" :src="require(`@/assets/images/${tiles[0].url}`)" alt="failed to load image"/>
          </span>
          <span class="tile-02">
            <a class="header">
              {{ tiles[1].content }}
            </a>
          </span>
        </span>
        <span class="bottom">
          <span class="tile-03">
            <span class="cover">
              <a class="header">
                {{ tiles[2].content }}
              </a>
             <img class="image" :src="require(`@/assets/images/${tiles[2].url}`)" alt="failed to load image"/>
            </span>
          </span>
        </span>
      </div>
      <div class="right-side">
        <span class="left">
          <span class="tile-04">
            <a class="header">
              {{ tiles[3].content }}
            </a>
             <img class="image" :src="require(`@/assets/images/${tiles[3].url}`)" alt="failed to load image"/>
          </span>
        </span>
        <span class="right">
          <span class="tile-05">
            <a class="header">
              {{ tiles[4].content }}
            </a>
             <img class="image" :src="require(`@/assets/images/${tiles[4].url}`)" alt="failed to load image"/>
          </span>
          <span class="tile-06">
             <font-awesome-icon class="phone-icon" :icon="['fas', 'mobile-alt']"/>
            <a class="header">
              {{ tiles[5].content }}
            </a>
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
          content: "62 811 899 688"
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

#AboutTiles {
  padding-top: 150px;
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  width: 70vw;
  min-width: 1050px;
  height: 27vh;
  min-height: 500px;

  .content-wrapper {
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    .header {
      text-align: left;
      font-family: "Bw Modelica ExtraBold", serif;
      font-size: 40px;
      letter-spacing: -1px;
      line-height: 1.2;
    }

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
          width: 60%;
          border-radius: 15px;
          background-image: linear-gradient(to bottom, white, white);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);

          .header {
            text-align: left;
            font-family: "Bw Modelica ExtraBold", serif;
            font-size: 22px;
            letter-spacing: -1px;
            line-height: 1.2;
            color: black;
          }

          .image {
            margin: 0 auto;
            width: 90%;
            height: auto;
          }
        }

        .tile-02 {
          display: flex;
          flex-direction: column-reverse;
          margin: 0 8px 8px 8px;
          padding: 25px;
          width: 40%;
          border-radius: 15px;
          background-image: linear-gradient(to top right, #071329, #091732);

          .header {
            text-align: right;
            font-family: "Bw Modelica ExtraBold", serif;
            font-size: 32px;
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
          background-image: linear-gradient(to top right, #482aef, #6762ec, #f5b8dd);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);
          margin: 8px 8px 0 0;
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
            font-size: 20px;
            letter-spacing: -1px;
            line-height: 1.3;
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
          padding: 25px;
          width: 100%;
          border-radius: 15px;
          background-image: linear-gradient(to bottom, white, white);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);

          .header {
            text-align: left;
            font-family: "Bw Modelica ExtraBold", serif;
            font-size: 38px;
            letter-spacing: -1px;
            line-height: 1.2;
            background: linear-gradient(to right, #8f6af3, #e579bc, #fcaa61);
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
          justify-content: space-between;
          margin: 0 0 8px 8px;
          padding: 25px;
          height: 55%;
          background-image: linear-gradient(to top right, #dd6fbd, #f69250, #f3ab3e);
          box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.1);
          border-radius: 15px;

          .header {
            text-align: left;
            font-family: "Bw Modelica ExtraBold", serif;
            font-size: 20px;
            letter-spacing: -1px;
            line-height: 1.3;
            color: white;
          }

          .image {
            width: 100%;
            height: auto;
            margin: 0 auto;
          }
        }

        .tile-06 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: 8px 0 0 8px;
          padding: 30px;
          height: 30%;
          border-radius: 15px;
          background-image: linear-gradient(to top right, #0e0e0e, #454545);

          .phone-icon{
            margin: auto;
            font-size: 20px;
            color: white;
            position: sticky;
          }

          .header {
            margin: auto;
            text-align: center;
            font-family: "Bw Modelica ExtraBold", serif;
            font-size: 24px;
            line-height: 1.4;
            color: white;
          }
        }
      }

    }
  }
}

</style>