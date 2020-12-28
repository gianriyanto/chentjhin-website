<template>
  <section id="Testimony">
    <div class="wrapper">
      <div class="header-container"
           data-aos="fade"
           data-aos-duration="1200"
           data-aos-easing="ease-in-out">
        <span class="header">
          {{ header }}
        </span>
        <span class="subheader">
          {{ subheader }}
        </span>
      </div>
      <div class="button-container">
        <TestimonyCard v-for="testimony in testimonies"
                       :key="testimony.index"
                       v-bind:testimonyData="testimony"
                       data-aos="fade"
                       data-aos-duration="1500"
                       data-aos-easing="ease-in-out"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TestimonyCard from "@/components/subcomponents/TestimonyCard";

export default {
  name: "Testimony",
  components: {
    TestimonyCard
  },
  data () {
    return{
      header: 'Client Stories',
      subheader: 'I am lucky to have worked with many aspiring professionals discover their future and watch them embark on their new learning journey.',
      testimonies: [
        {
          client: 'Deandra Kezia Djunaedi',
          university: 'University of Warwick',
          header: "Paved my road to success.",
          message: "Chen has been a saving grace during my experience of college applications. She was very easy to confide in, she always took the time to understand my situation and help paved my road to success.",
        },
        {
          client: 'Emir Ksatria Ganie',
          university: 'Newcastle University of London',
          header: 'A strong character I admire and look up to.',
          message: "Chen have always been available whenever I am in need of her counseling. I have benefited from having Chen as an individual with a strong character that I can admire and look up to.",
        },
        {
          client: 'Novella Alvina',
          university: 'Durham University',
          header: 'Professional and caring describes her best.',
          message: "Chen's professionalism in working inspires me to no end. She provides unlimited support and motivation for me to become the best version of myself. Professional and caring describes her best in my eyes.",
        },
        {
          client: 'Thoriq Gibran Ibrahim',
          university: 'University of Warwick',
          header: 'Second to None.',
          message: "Chen's helping hand in my university application was second to none. In such a hectic time of assignments and IB exams, her tireless assistance and encouragement gave me calm, reassurance, and motivation.",
        },
        {
          client: 'M. Bilal Alfarizi',
          university: 'University of Sussex',
          header: 'Professional mentor and a trusted advisor.',
          message: "Her endless support, motivation, and care has nourished me as an ambitious person able to persevere and reach my full potential. She is a great professional mentor and a trusted advisor.",
        },
        {
          client: 'Diamana Vanisa Danubrata',
          university: 'Durham University',
          header: 'Played a major role in my growth as a student.',
          message: "Chen has played a major role in my growth as a student and as an individual. I am forever grateful for all the guidance and opportunity she has given me.",
        },
        {
          client: 'Mohamad Gibran',
          university: 'Durham University',
          header: 'She fought and fought for my place in universities.',
          message: "I am certain that without Chen's guidance I would never have found the perfect course, much less what university I would end up attending. She fought for my place in universities that I wasn't even qualified for.",
        },
        {
          client: 'Bashir Insani',
          university: 'University of Leeds',
          header: 'The entire process hassle free.',
          message: "Without Chen's guidance, I dont think I'd be able to attend of the best universities in the UK. Ms. Chen made the entire process hassle free for me!",
        },
        {
          client: 'Andi R. A. Kesuma',
          university: 'Whatcom Community College.',
          header: 'Always believed in me no matter what',
          message: "A wonderful counselor that treats clients or should I say 'kids' like on of her own. I've been had the pleasure of being her student since grade 1 and believed in me no matter what.",
        },
        {
          client: 'Ardian Sukamdani',
          university: 'Northeastern University.',
          header: 'Accepted to my dream school',
          message: "Chen is the best counsellor that I've met. Her guidance and continuous support significantly improved my IB Grades whilst her knowledge and resilience got me into my dream school.",
        },
        {
          client: 'Adinna A. Kadarachman',
          university: 'University of Sussex',
          header: 'Great help that cares for all her students.',
          message: "Started as my maths tutor and now my a university counsellor who guided me to enroll into university and achieving first class grades. Chen has been nothing but great help that cares for all her students.",
        },
        {
          client: 'Daniel Rizky Bimo Hantoro',
          university: 'Northeastern University',
          header: 'Through thick and thin.',
          message: "Chen has always been there for me through thick and thin. Even if i fell she has always been there to support and guide me. Her strong will and belief in here students got me to university and where I am today.",
        },
        {
          client: 'Ananda Emirsyah Djajanegara',
          university: 'Bellerbys College',
          header: 'Constant motivation and close attention.',
          message: "Chen has a huge influence in my life since I was in high school and through university. She helped me through the tough transition to higher education with her constant motivation and close attention to my progress.",
        },
        {
          client: 'Nadia Gunawan',
          university: 'University of Southern California',
          header: 'Best decision I have made.',
          message: "Chen had given me counselling to address concerns with selecting a major to pursue in university and attending community college. Her education plan was one the best decision I have made.",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

#Testimony{
  position: relative;
  width: 100vw;
  margin-top: 50px;
  padding-top: 150px;
  padding-bottom: 250px;

  .wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;

    .header-container{
      width: 70vw;
      display: flex;
      flex-direction: column;
      text-align: left;
      line-height: 1.5;
      margin: 0 calc((100vw - 1100px) / 2);;

      .header{
        font-family: "Bw Modelica ExtraBold", serif;
        letter-spacing: -2px;
        font-size: 57px;
        color: #292929;
        width: 45%;
      }
      .subheader{
        margin-top: 10px;
        margin-left: 5px;
        font-family: "Gilroy Medium", serif;
        font-size: 17px;
        color: #585858;
        width: 45%;
      }
    }
    .button-container{
      display: flex;
      flex-direction: row;
      align-content: center;
      padding-left: calc((100vw - 1100px) / 2);
      margin-top: 30px;
      height: fit-content;
      overflow: scroll !important;

      &::-webkit-scrollbar {
        display: none;
      }

      #TestimonyCard{

      }
    }
  }
}

</style>