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
          <span class="phone"> +62 821 2551 3693 </span>
          <span class="email"> chen.tjhin@gmail.com </span>
          <span class="website"> www.chentjhin.com </span>
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

#NameCard{
  cursor: pointer;

  .card-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    height: 446px;
    width: 250px;
    margin: auto;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    text-align: left;
    transition: all 0.3s ease-in-out;

    &:hover{
      box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.3);
    }

    .header-card{
      display: flex;
      flex-direction: column;
      height: 10%;

      .name{
        word-spacing: 1px;
        letter-spacing: 0.8px;
        font-family: "Gilroy Bold", serif;
        font-size: 21px;
        color: #5b1fff;
      }
      .title{
        padding-top: 4px;
        font-family: "Gilroy SemiBold", serif;
        font-size: 13px;
        color: #545454;
      }
    }
    .image{
      height: 54%;
      width: auto;
    }
    .content-card{
      display: flex;
      flex-direction: row;
      line-height: 1.1;
      padding-top: 6px;
      height: fit-content;

      .icons{
        display: flex;
        flex-direction: column;

        .icon{
          margin: 0 auto;
          font-size: 15px;
          color: #5651ec;
          padding-top: 11px;
          padding-right: 8px;
          opacity: 0.8;
        }
      }

      .details{
        display: flex;
        flex-direction: column;

        .phone, .email, .website{
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

</style>