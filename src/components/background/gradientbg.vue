<template>
  <div id="gradient-bg">
    <img class="image" src="@/assets/gradient-images/Gradient-Mesh-14.jpg" alt=""/>
    <span class="blur-effect"></span>
  </div>
</template>

<script>
export default {
  name: "gradient-bg"
}
</script>

<style scoped lang="scss">

#gradient-bg{
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 160vh;
  width: 100vw;
  z-index: -1;

  .image{
    height: 140vh;
    width: 100%;
  }

  .blur-effect{
    box-shadow: 0 0 40px 40px white;
    height: 20vh;
    width: 100%;
  }
}

@media only screen and (max-width: 769px) {

  #gradient-bg{
    position: absolute;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100vw;
    min-width: 100vw;
    margin: 0 !important;
    z-index: -1;

    .image{
      height: 140vh;
      width: 100%;
      min-width: 100vw;
      margin: 0 !important;
    }

    .blur-effect{
      display: none;
      box-shadow: 0 0 40px 40px white;
      height: 20vh;
      width: 100%;
      min-width: 100vw;
      margin: 0 !important;
    }
  }
}

</style>