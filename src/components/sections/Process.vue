<template>
 <section id="Process">
   <div class="wrapper">
     <span class="process-card">
       <a class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       </a>
     </span>
     <span class="process-card">
       <a class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       </a>
     </span>
     <span class="process-card">
       <a class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       </a>
     </span>
     <span class="process-card">
       <a class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       </a>
     </span>
   </div>
 </section>
</template>

<script>
export default {
  name: "Process"
}
</script>

<style scoped lang="scss">

#Process{
  position: relative;
  display: flex;
  flex-direction: column;

  .wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    height: 260px;
    width: 75vw;

    .process-card{
      text-align: left;
      margin: auto 0;
      display: flex;
      flex-direction: column;
      padding: 30px;
      width: 17%;
      height: 90%;
      border-radius: 12px;
      border: 0.5px solid rgba(255,255,255,0.7);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 33px 0 rgba(120, 121, 128, 0.2);
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );

      .text{
        font-family: "Bw Modelica ExtraBold", serif;
        font-size: 20px;
        color: #262626;
      }
    }
  }

}

</style>