<template>
  <div id="flip-gradient-bg">
    <img class="image" src="@/assets/gradient-images/Gradient-Mesh-2.jpg" alt=""/>
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  z-index: -1;

  .image{
    transform: scaleY(-1);
    height: 100vh;
    width: 100vw;
  }
}

</style>