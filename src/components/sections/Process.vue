<template>
 <section id="Process">
   <div class="wrapper">
     <span class="process-card">

     </span>
     <span class="process-card">

     </span>
     <span class="process-card">

     </span>
     <span class="process-card">

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
    height: 330px;
    width: 80vw;

    .process-card{
      margin: auto 0;
      display: flex;
      flex-direction: column;
      width: 23%;
      height: 90%;
      border-radius: 9px;
      border: 0.5px solid rgba(255,255,255,0.2);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
    }
  }

}

</style>