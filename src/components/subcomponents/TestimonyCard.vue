<template>
  <div id="TestimonyCard">
    <span class="card">
      <a class="header">
        <font-awesome-icon class="quote-icon" :icon="['fas', 'quote-left']" /> {{ testimony.header }}
      </a>
      <a class="message">
        {{ testimony.message }}
      </a>
    </span>
    <span class="client-container">
      <span class="image"/>
      <span class="client">
        <a class="name">
          {{ testimony.client }}
        </a>
        <a class="university">
          {{ testimony.university }}
        </a>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "TestimonyCard",
  props: ['testimonyData'],
  data() {
    return {
      testimony: this.testimonyData,
    }
  },
}
</script>

<style scoped lang="scss">

#TestimonyCard{
  flex: 0 0 auto;
  margin: auto 60px auto 0;
  width: 330px;

  .card{
    display: flex;
    flex-direction: column;
    padding: 30px 40px;
    height: fit-content;
    border-radius: 13px;
    background-color: #f8f8f8;
    text-align: left;

    .quote-icon{
      font-size: 28px;
      margin-right: 8px;
      color: black;
    }

    .header{
      font-family: "PT Serif", serif;
      letter-spacing: -1px;
      font-size: 23px;
      color: #5651ec;
    }
    .message{
      margin-top: 20px;
      font-family: "Gilroy Regular", serif;
      line-height: 1.5;
      font-size: 16px;
      letter-spacing: -0.5px;
      color: #585858;
    }
  }
  .client-container{
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    padding: 10px 2px;
    height: 60px;
    text-align: left;

    .image{
      display: block;
      width: 50px;
      height: 50px;
      background-color: #f1f1f1;;
      border-radius: 50%;
      margin-right: 20px;
    }

    .client {
      display: flex;
      flex-direction: column;
      margin-top: 5px;

      .name{
        font-family: "Bw Modelica ExtraBold", serif;
        letter-spacing: -0.5px;
        font-size: 17px;
        color: black;
      }
      .university{
        margin-top: 4px;
        font-family: "Gilroy Medium", serif;
        letter-spacing: -0.5px;
        font-size: 14px;
        color: #8c8c8c;
      }
    }
  }
}

</style>