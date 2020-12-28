<template>
  <div id="NavBar"
       data-aos="fade"
       data-aos-duration="1300"
       data-aos-easing="ease-in-out">
    <button class="nav-button"
            v-scroll-to="{ el: '#Process', easing: [.2, .80, .30, 1],duration: 1500}">
      <span class="button-label">
        Services
      </span>
    </button>
    <button class="nav-button"
            v-scroll-to="{ el: '#About', easing: [.2, .80, .30, 1],duration: 1300}">
      <span class="button-label">
        About
      </span>
    </button>
    <button class="nav-button"
            v-scroll-to="{ el: '#Testimony', easing: [.2, .80, .30, 1],duration: 1300}">
      <span class="button-label">
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
  padding-top: 87px;
  height: 50px;
  width: fit-content;
  z-index: 11;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  .nav-button {
    cursor: pointer;
    width: 110px;
    height: 50px;
    border: 0;
    background: transparent;
    outline: none;
    text-decoration: none;
    transition: all .35s ease-in-out;

    .button-label {
      font-family: "Gilroy SemiBold", serif;
      font-size: 17px;
      margin: auto;
      color: #3b3b3b;
    }

    &:hover{
      opacity: 0.7;
    }
  }
}

</style>