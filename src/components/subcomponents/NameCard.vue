<template>
  <div id="NameCard">
    <div class="card-container">
      <span class="header-card">
        <span class="name"> CHEN TJ </span>
        <span class="title"> Senior Education Counsellor </span>
      </span>
      <img class="image" src="@/assets/images/professional.svg" alt=""/>
      <span class="content-card">
        <span class="icons">
          <font-awesome-icon class="icon" :icon="['fas', 'mobile-alt']"/>
          <font-awesome-icon class="icon" :icon="['fas', 'phone']"/>
          <font-awesome-icon class="icon" :icon="['fas', 'inbox']"/>
          <font-awesome-icon class="icon" :icon="['fas', 'globe']"/>
        </span>
        <span class="details">
          <span class="phone"> +62 811 899 688 </span>
          <span class="phone"> +61 426 368 781 </span>
          <span class="email"> chen.tjhin@gmail.com </span>
          <span class="website"> www.consultchen.com </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NameCard"
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #NameCard {
    cursor: pointer;

    .card-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px;
      height: 380px;
      width: 200px;
      margin: auto;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      text-align: left;
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.4);
      }

      .header-card {
        display: flex;
        flex-direction: column;
        height: 10%;

        .name {
          word-spacing: 1px;
          letter-spacing: 0.8px;
          font-family: "Gilroy Bold", serif;
          font-size: 21px;
          color: #5b1fff;
          text-decoration: none;
        }

        .title {
          padding-top: 4px;
          font-family: "Gilroy SemiBold", serif;
          font-size: 13px;
          color: #545454;
          text-decoration: none;
        }
      }

      .image {
        height: 54%;
        width: auto;
      }

      .content-card {
        display: flex;
        flex-direction: row;
        line-height: 1.1;
        padding-top: 6px;
        height: fit-content;

        .icons {
          display: flex;
          flex-direction: column;

          .icon {
            margin: 0 auto;
            font-size: 15px;
            color: #5651ec;
            padding-top: 11px;
            padding-right: 8px;
            opacity: 0.8;
          }
        }

        .details {
          display: flex;
          flex-direction: column;

          .phone, .email, .website {
            letter-spacing: 0.5px;
            font-family: "Gilroy Medium", serif;
            font-size: 14px;
            color: #1d1d1d;
            padding-top: 11px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {

  #NameCard{
    display: flex;
    height: fit-content;
    width: 80%;
    margin: 30px auto;

    .card-container{
      padding: 40px;
      height: 100%;
      margin: 0 auto;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      text-align: left;

      .header-card{
        display: flex;
        flex-direction: column;
        height: 15%;
        margin-bottom: 30px;

        .name{
          word-spacing: 1px;
          letter-spacing: 0.8px;
          font-family: "Gilroy Bold", serif;
          font-size: 25px;
          color: #5b1fff;
        }
        .title{
          padding-top: 5px;
          font-family: "Gilroy SemiBold", serif;
          font-size: 15px;
          color: #545454;
          text-decoration: none;
        }
      }

      .image{
        height: auto;
        width: 100%;
        margin-bottom: 30px;
      }

      .content-card{
        display: flex;
        flex-direction: row;
        height: fit-content;
        width: 100%;
        justify-content: flex-start;
        line-height: 1.39;
        padding-top: 6px;

        .icons{
          display: flex;
          flex-direction: column;
          width: fit-content;

          .icon{
            margin: 5px auto !important;
            font-size: 16px;
            color: #5651ec;
            opacity: 0.8;
          }
        }

        .details{
          display: flex;
          flex-direction: column;

          .phone, .email, .website{
            letter-spacing: 0.5px;
            font-family: "Gilroy Medium", serif;
            font-size: 15px;
            color: #292929;
            margin: 5px 0 0 15px !important;
          }
        }
      }
    }
  }
}

</style>