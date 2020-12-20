<template>
  <div>
    <gradient-bg id="gradient-bg"/>
    <section id="Typeform">
      <div class="wrapper">
        <span class="header">
          Hi there!
        </span>
        <transition appear name="slide-fade">
          <span class="input-container">
            <a class="prompt"> Your name is </a>
            <inline-input v-bind:inputData="name"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
        <span v-if="name.isValid" class="input-container">
          <a class="prompt"> It's best to reach you at </a>
          <inline-input v-bind:inputData="email"/>
        </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="email.isValid" class="input-container">
            <a class="prompt"> And you're planning to study </a>
            <inline-input v-bind:inputData="course"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="course.isValid" class="input-container">
            <a class="prompt"> Cool! Preferably in </a>
            <inline-input v-bind:inputData="country"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="country.isValid" class="input-container">
            <a class="prompt"> to pursue a career as a</a>
            <inline-input v-bind:inputData="career"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="career.isValid" class="footer">
            <a class="label"> Fantastic! You're all set. Chat soon.</a>
            <button class="email-button">
              <a class="button-label"> Done </a>
            </button>
          </span>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import InlineInput from "@/components/InlineInput";
import GradientBg from "@/components/background/gradienttypeformbg";

export default {
  name: "Typeform",
  components: {
    GradientBg,
    InlineInput
  },
  data() {
    return {
      name: {prompt: 'your full name?', input: 'your full name?', edit: false, isValid: false},
      course: {prompt: 'what course?', input: 'what course?', edit: false, isValid: false},
      country: {prompt: 'where?', input: 'where?', edit: false, isValid: false},
      career: {prompt: 'profession?', input: 'profession?', edit: false, isValid: false},
      email: {prompt: 'your email', input: 'your email', edit: false, isValid: false},
    }
  }
}
</script>

<style scoped lang="scss">

#gradient-bg{
  position: absolute;
  z-index: -1;
}

#Typeform{
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: rgba( 255, 255, 255, 0.40 );
  backdrop-filter: blur( 30px );
  -webkit-backdrop-filter: blur( 30px );
  z-index: 1;

  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    text-align: left;
    height: fit-content;
    width: 36vw;
    padding: 60px;

    .header{
      font-family: "Gilroy Bold", serif;
      color: #1c1c1c;
      font-size: 30px;
      margin: 0 9px 10px 10px;
    }

    .input-container{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 13px;
      padding: 20px 40px;
      height: fit-content;
      background: rgba(207, 201, 201, 0.0);
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      border-radius: 12px;

      .prompt {
        font-family: "Gilroy Bold", serif;
        color: #1c1c1c;
        font-size: 22px;
        margin: 0 9px 5px 0;
      }
    }

    .footer{
      margin: 15px 9px 10px 9px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: fit-content;

      .label{
        margin: auto 0;
        font-family: "Gilroy Bold", serif;
        color: #1c1c1c;
        font-size: 24px;
      }

      .email-button{
        margin-top: 20px;
        width: 130px;
        height: 44px;
        background-color: #5b1fff;
        border-radius: 8px;
        border: none;
        outline: none;
        text-decoration: none;

        .button-label{
          font-family: Montserrat, serif;
          font-weight: 600;
          font-size: 13px;
          margin: auto;
          color: white;
        }
      }
    }
  }
}

/* slide fade transition */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(150px);
  opacity: 0;
}

</style>