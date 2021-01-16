<template>
  <div id="NavBar">
    <button class="nav-button"
            v-scroll-to="{ el: '#Process', easing: [.2, .80, .30, 1],duration: 1500}">
      <span class="button-label"
            data-aos="fade"
            data-aos-duration="1700"
            data-aos-easing="ease-in-out">
        Services
      </span>
    </button>
    <button class="nav-button"
            v-scroll-to="{ el: '#About', easing: [.2, .80, .30, 1],duration: 1300}">
      <span class="button-label"
            data-aos="fade"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out">
        About
      </span>
    </button>
    <button class="nav-button"
            v-scroll-to="{ el: '#Testimony', easing: [.2, .80, .30, 1],duration: 1300}">
      <span class="button-label"
            data-aos="fade"
            data-aos-duration="2300"
            data-aos-easing="ease-in-out">
        Clients
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped lang="scss">

#NavBar{
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 62px;
  height: 50px;
  width: fit-content;
  z-index: 11;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  .nav-button {
    cursor: pointer;
    width: 100px;
    height: 50px;
    border: 0;
    background: transparent;
    outline: none;
    text-decoration: none;

    .button-label {
      font-family: "Gilroy SemiBold", serif;
      font-size: 16px;
      margin: auto;
      color: #262626;
      opacity: 0.7;
      transition: all .35s ease-in-out;

      &:hover{
        opacity: 1;
      }
    }
  }
}

@media only screen and (max-width: 1212px) {
  #NavBar{
    display: none;
  }
}

</style>