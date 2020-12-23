<template>
  <div id="TopNav">
    <div class="content-wrapper">
      <span class="logo"/>
      <button class="menu-button">
        <font-awesome-icon class="menu-icon" :icon="['fas', 'bars']"/>
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

    .menu-button {
      width: 100px;
      height: 45px;
      background-color: transparent;
      border: none;
      text-decoration: none;
      outline: none;

      .menu-icon{
        font-size: 30px;
        margin: auto;
        color: black;
      }
    }
  }

}

</style>