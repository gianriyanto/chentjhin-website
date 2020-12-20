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
  height: 100vh;
  width: 100vw;
  z-index: -1;

  .image{
    height: 100vh;
    width: 100vw;
  }
}

</style>