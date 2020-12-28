<template>
  <div id="ScrollPrompt">
    <span class="scroll-container">
      <font-awesome-icon class="scroll-icon" :icon="['fas', 'chevron-down']" />
    </span>
  </div>
</template>

<script>
export default {
  name: "ScrollPrompt"
}
</script>

<style scoped lang="scss">

#ScrollPrompt{

  .scroll-container{
    position: fixed;
    display: flex;
    width: 50px;
    height: 50px;
    top: 90vh;
    left: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    z-index: 13;

    .scroll-icon{
      margin: auto;
      color: #9b9b9b;
    }
  }
}

</style>