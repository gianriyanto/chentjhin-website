<template>
  <div>
    <gradient-bg id="gradient-bg"/>
    <section id="Testimony">

    </section>
  </div>
</template>

<script>
import GradientBg from "@/components/background/gradientbg";
export default {
  name: "Testimony",
  components: {
    GradientBg
  },
  data() {
    return{

    }
  }
}
</script>

<style scoped lang="scss">

#gradient-bg{
  position: absolute;
  z-index: -1;
}

#Landing{

}

</style>