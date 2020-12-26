<template>
  <div id="TopNav">
    <div class="content-wrapper">
      <span class="logo"/>
      <button class="contact-button">
        <span class="button-label" v-scroll-to="{ el: '#Contact', easing: [.2, .80, .30, 1],duration: 1300}"> Let's Talk </span>
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

#TopNav{
  position: fixed;
  width: 100vw;
  z-index: 10;
  background-color: transparent;

  .content-wrapper {
    margin: 80px auto 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 90vw;
    max-width: 1280px;

    .logo {
      width: 25px;
      height: 50px;
      background-color: black;
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
      border-bottom: 0;
    }

    .contact-button {
      width: 130px;
      height: 50px;
      border: thin solid black;
      background: rgba(255, 255, 255, 0.04);
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.5 );
      backdrop-filter: blur( 3px );
      -webkit-backdrop-filter: blur( 3px );
      border-radius: 10px;
      outline: none;
      text-decoration: none;
      cursor: pointer;

      .button-label{
        font-family: "Gilroy SemiBold", serif;
        font-size: 14px;
        margin: auto;
        color: black;
      }
    }
  }

}

</style>