<template>
  <div id="gradient-bg">
    <img class="image" src="@/assets/gradient-images/Gradient-Mesh-1.jpg" alt=""/>
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
  height: 120vh;
  width: 100vw;
  z-index: -1;
  display: flex;

  .glass-layer{
    background: rgba( 255, 255, 255, 0.60 );
    backdrop-filter: blur( 30px );
    -webkit-backdrop-filter: blur( 30px );

    .image{
      height: 100%;
      width: 100%;
    }
  }
}

</style>