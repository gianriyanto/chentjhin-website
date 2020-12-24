<template>
  <section id="Contact">

    <gradient-bg id="gradient-bg"/>

    <div class="wrapper">
      <div class="header-container">
        Keep in Touch
      </div>
    </div>

  </section>
</template>

<script>

import GradientBg from "@/components/background/flipgradientbg";

export default {
  name: "Contact",
  components: {
    GradientBg
  }
}

</script>

<style scoped lang="scss">

#gradient-bg{
  display: none;
}

#Contact{
  position: relative;
  height: fit-content;
  width: 100vw;
  margin-top: 500px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top, #5830ea, #594fe3);

  .wrapper{
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;


    .header-container{
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 500px;
      height: fit-content;
      font-family: "Bw Modelica ExtraBold", serif;
      font-size: 70px;
      color: white;
    }

  }

}

</style>