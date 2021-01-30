<template>
  <div id="Highlights">
    <div class="highlights-container">
        <span class="highlight">
          <span class="highlight-header"><font-awesome-icon class="icon" :icon="['fas', 'globe-americas']" /> 95 </span>
          <span class="highlight-text"> Universities enrolled </span>
        </span>
      <span class="highlight">
          <span class="highlight-header"><font-awesome-icon class="icon" :icon="['fas', 'user-graduate']" /> 100+ </span>
          <span class="highlight-text"> Clients represented </span>
        </span>
      <span class="highlight">
          <span class="highlight-header"><font-awesome-icon class="icon" :icon="['fas', 'business-time']" /> 16 </span>
          <span class="highlight-text"> Years in business </span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Highlights"
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #Highlights {
    padding-top: 100px;

    .highlights-container {
      display: flex;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-evenly;
      text-align: left;
      width: 100%;

      .highlight {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        line-height: 1.2;
        color: #1d1d1d;
        opacity: 0.7;

        .highlight-header {
          margin: 8px auto;
          font-family: "Bw Modelica Bold", serif;
          font-size: 37px;
          letter-spacing: -1px;
        }

        .highlight-text {
          width: 100px;
          margin: 8px auto;
          font-family: "Gilroy SemiBold", serif;
          font-size: 18px;
          letter-spacing: -0.5px;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #Highlights {
    padding-top: 50px;

    .highlights-container {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: left;
      width: 100%;

      .highlight {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        line-height: 1.2;
        color: #2d2d2d;
        opacity: 0.7;
        margin-bottom: 20px;

        .highlight-header {
          margin: 8px auto;
          font-family: "Bw Modelica Bold", serif;
          font-size: 37px;
          letter-spacing: -1px;
          color: #5b1fff;
        }

        .highlight-text {
          width: 100px;
          margin: 8px auto;
          font-family: "Gilroy SemiBold", serif;
          font-size: 18px;
          letter-spacing: -0.5px;
        }
      }
    }
  }
}

</style>