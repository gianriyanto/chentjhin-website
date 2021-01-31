<template>
  <div id="CallToAction">
    <span class="fab" v-on:click="goToSite('https://wa.me/+62811899688')">
      <font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" />
    </span>
  </div>
</template>

<script>
export default {
  name: "CallToAction",
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #CallToAction {

    .fab {
      cursor: pointer;
      position: fixed;
      display: flex;
      width: 60px;
      height: 60px;
      top: 90vh;
      right: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 13;
      transition: all 0.3s ease-in-out;

      .whatsapp-icon {
        width: 45%;
        height: auto;
        margin: auto;
        color: #128c7e;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
}

@media only screen and (max-width: 768px) {

  #CallToAction {

    .fab {
      position: fixed;
      display: flex;
      width: 60px;
      height: 60px;
      bottom: 20px;
      right: 20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 13;

      .whatsapp-icon {
        width: 45%;
        height: auto;
        margin: auto;
        color: #128c7e;
      }
    }
  }
}


</style>