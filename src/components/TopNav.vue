<template>
  <div id="TopNav">
    <div class="wrapper">
      <span class="logo"/>
      <button class="contact-button">
        <a class="button-label"> Say Hi! </a>
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

  .wrapper {
    margin: 80px auto 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 80vw;

    .logo {
      width: 25px;
      height: 50px;
      background-color: black;
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
      border-bottom: 0;
    }

    .contact-button {
      width: 120px;
      height: 45px;
      background-color: black;
      border-radius: 8px;
      outline: none;
      border: 0;

      .button-label{
        font-family: Montserrat, serif;
        font-weight: 600;
        font-size: 13px;
        margin: auto;
        color: white;
      }
    }
  }

}

</style>