<template>
 <section id="Process">
   <div class="content-wrapper">
     <span class="process-card">
       <img class="image" :src="require(`@/assets/images/${services[0].url}`)" alt=""/>
       <a class="header">
          {{ services[0].name }}
       </a>
       <a class="description">
           {{ services[0].description }}
       </a>
     </span>
     <span class="process-card">
       <img class="image" :src="require(`@/assets/images/${services[1].url}`)" alt=""/>
       <a class="header">
          {{ services[1].name }}
       </a>
       <a class="description">
          {{ services[1].description }}
       </a>
     </span>
     <span class="process-card">
       <img class="image" :src="require(`@/assets/images/${services[2].url}`)" alt=""/>
       <a class="header">
          {{ services[2].name }}
       </a>
       <a class="description">
         {{ services[2].description }}
       </a>
     </span>
     <span class="process-card">
       <img class="image" :src="require(`@/assets/images/${services[3].url}`)" alt=""/>
       <a class="header">
          {{ services[3].name }}
       </a>
       <a class="description">
         {{ services[3].description }}
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
          name: 'Aptitude Test',
          description: 'Discover your talent, skills, and personality to explore potential career path.',
          url: 'aptitude.svg'
        },
        {
          index: 2,
          name: 'Consulting',
          description: 'Develop a tailored education blueprint with a comprehensive end-to-end consulting service.',
          url: 'consulting.svg'
        },
        {
          index: 3,
          name: 'Application',
          description: 'Consider all the administrative paperwork when it comes to studying abroad done and dusted.',
          url: 'application.svg'
        },
        {
          index: 4,
          name: 'Counselling',
          description: 'People-oriented counselling to provide expert counselling throughout the education journey.',
          url: 'counselling.svg'
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
  margin-top: 0;
  padding: 50px 0;

  .content-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: fit-content;
    margin: 0 auto;
    max-width: 1200px;
    width: 80vw;
    min-width: 980px;

    .process-card{
      text-align: left;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 30px;
      height: 260px;
      width: 18%;
      border-radius: 11px;
      border: 0.5px solid rgba(255,255,255,0.1);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 33px 0 rgba(165, 166, 172, 0.3);
      backdrop-filter: blur( 5px );
      -webkit-backdrop-filter: blur( 5px );
      line-height: 1.5;
      transition: all 0.45s ease-in-out;

      &:hover{
        box-shadow: 0 8px 32px 0 rgba(17, 20, 57, 0.35);
      }

      .image {
        width: 80%;
        height: 50%;
        margin-bottom: 18px;
      }

      .header{
        font-family: "Bw Modelica ExtraBold", serif;
        font-size: 20px;
        letter-spacing: -1px;
        color: #373737;
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

@media only screen and (max-width: 1212px) {
  #Process{
    display: none;
  }
}

</style>