<template>
 <section id="Process">
   <div class="wrapper">
     <span class="process-card">
       <img class="image" src="@/assets/images/aptitude.svg" alt=""/>
       <a class="header">
          Aptitude Test
       </a>
       <a class="description">
           Lorem ipsum dolor sit consectetur adipiscing elit, do eiusmod.
       </a>
     </span>
     <span class="process-card">
       <img class="image" src="@/assets/images/consulting.svg" alt=""/>
       <a class="header">
          Consulting
       </a>
       <a class="description">
           Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt.
       </a>
     </span>
     <span class="process-card">
       <img class="image" src="@/assets/images/application.svg" alt=""/>
       <a class="header">
          Application
       </a>
       <a class="description">
           Lorem ipsum dolor sit amet consectetur adipiscing elit incididunt.
       </a>
     </span>
     <span class="process-card">
       <img class="image" src="@/assets/images/counselling.svg" alt=""/>
       <a class="header">
          Counselling
       </a>
       <a class="description">
           Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.
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
    width: 82vw;

    .process-card{
      text-align: left;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 30px;
      width: 17%;
      height: 90%;
      border-radius: 10px;
      border: 0.5px solid rgba(255,255,255,0.1);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 33px 0 rgba(165, 166, 172, 0.3);
      backdrop-filter: blur( 5px );
      -webkit-backdrop-filter: blur( 5px );
      line-height: 1.5;

      .image {
        width: 80%;
        height: 60%;
        margin-bottom: 15px;
      }

      .header{
        font-family: "Bw Modelica ExtraBold", serif;
        font-size: 22px;
        letter-spacing: -1px;
        color: #545454;
        margin-bottom: 15px;
      }
      .description{
        font-family: "Gilroy Medium", serif;
        font-size: 13px;
        letter-spacing: -0.6px;
        color: #5b5b5b;
      }
    }
  }

}

</style>