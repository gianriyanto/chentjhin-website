<template>
 <section id="Process">
   <div class="wrapper">
     <span class="process-card">
       <a class="header">
          Aptitude Test
       </a>
       <a class="description">
           Lorem ipsum dolor sit amet
       </a>
     </span>
     <span class="process-card">
       <a class="header">
          Consulting
       </a>
       <a class="description">
           Lorem ipsum dolor sit amet
       </a>
     </span>
     <span class="process-card">
       <a class="header">
          Application
       </a>
       <a class="description">
           Lorem ipsum dolor sit amet
       </a>
     </span>
     <span class="process-card">
       <a class="header">
          Counselling
       </a>
       <a class="description">
           Lorem ipsum dolor sit amet
       </a>
     </span>
   </div>
 </section>
</template>

<script>
export default {
  name: "Process",
  data () {
    return {
      services: [
        {
          index: 1,
          name: 'Aptitude',
          description: 'Aptitude Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageURL: 'ideasflow.svg'
        },
        {
          index: 2,
          name: 'Consulting',
          description: 'Consulting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageURL: 'professional.svg'
        },
        {
          index: 3,
          name: 'Application',
          description: 'Application Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageURL: 'teacher.svg'
        },
        {
          index: 4,
          name: 'Counselling',
          description: 'Counselling Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageURL: 'ideasflow.svg'
        },
      ]
    }
  },
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
    height: 280px;
    width: 75vw;

    .process-card{
      text-align: left;
      margin: auto 0;
      display: flex;
      flex-direction: column;
      padding: 30px;
      width: 18%;
      height: 90%;
      border-radius: 10px;
      border: 0.5px solid rgba(255,255,255,0.1);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 33px 0 rgba(165, 166, 172, 0.3);
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      line-height: 1.5;

      .header{
        font-family: "Bw Modelica ExtraBold", serif;
        font-size: 26px;
        letter-spacing: -1px;
        color: #262626;
      }
      .description{
        font-family: "Gilroy SemiBold", serif;
        font-size: 15px;
        letter-spacing: -0.6px;
        color: #5b5b5b;
      }
    }
  }

}

</style>