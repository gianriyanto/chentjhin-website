<template>
  <div id="TopNav">
    <div class="content-wrapper">
      <span class="logo"
            v-scroll-to="{ el: '#Landing', easing: [.2, .80, .30, 1],duration: 1500}"
      />
      <!-- #Aspectama Logo#
      <span class="logo-container">
        <img class="image" src="@/assets/logo/AspectamaLogo.png">
      </span>
      -->
      <button class="contact-button"
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out">
        <span class="button-label"
              v-scroll-to="{ el: '#Contact', easing: [.2, .80, .30, 1],duration: 1500}">
          Get in Touch
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #TopNav{
    position: fixed;
    width: 100vw;
    z-index: 10;
    background-color: transparent;

    .content-wrapper {
      margin: 56px auto 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 53px;
      width: 90vw;

      .logo {
        width: 25px;
        height: 50px;
        background-color: #1f1f1f;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        border-bottom: 0;
        cursor: pointer;
        transition: all .35s ease-in-out;

        &:hover{
          opacity: 0.7;
        }
      }
      /*
      .logo-container{
        height: 100%;
        cursor: pointer;
        transition: all .3s ease-in-out;

        .image{
          height: 100%;
          width: auto;
        }

        &:hover{
          opacity: 0.7;
        }
      }
  */
      .contact-button {
        align-self: center;
        width: 130px;
        height: 46px;
        border: thin solid #5651ec;
        background: rgba(255, 255, 255, 0.04);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
        backdrop-filter: blur( 3px );
        -webkit-backdrop-filter: blur( 3px );
        border-radius: 10px;
        outline: none;
        text-decoration: none;
        cursor: pointer;
        transition: all .35s ease-in-out;

        .button-label{
          font-family: "Bw Modelica Medium", serif;
          letter-spacing: -0.5px;
          font-size: 13px;
          margin: auto;
          color: #3732d6;
        }
        &:hover{
          opacity: 0.7;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #TopNav{
    display: none;
  }
}

</style>