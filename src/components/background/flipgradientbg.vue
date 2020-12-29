<template>
  <div id="flip-gradient-bg">

    <img class="image" src="@/assets/gradient-images/Gradient-Mesh-14.jpg" alt="">

  </div>
</template>

<script>
export default {
  name: "gradient-bg"
}
</script>

<style scoped lang="scss">

#flip-gradient-bg{
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;

  .image{
    transform: scaleY(-1);
    height: 100vh;
    width: 100vw;
  }
}

@media only screen and (max-width: 769px) {

  #flip-gradient-bg{
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;

    .image{
      transform: scaleY(-1);
      height: 100vh;
      width: 100vw;
    }
  }
}

</style>