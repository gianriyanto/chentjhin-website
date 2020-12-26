<template>
  <div>
    <section id="Typeform">
      <div class="content-wrapper">
        <transition appear name="slide-fade">
          <span class="header-card">
            <span class="prompt"> Let's get started! Your name is </span>
            <inline-input v-bind:inputData="name"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="name.isValid" class="input-card">
            <span class="prompt"> And you're planning to study </span>
            <inline-input v-bind:inputData="course"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="course.isValid" class="input-card">
            <span class="prompt"> Cool! Preferably in </span>
            <inline-input v-bind:inputData="country"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="country.isValid" class="input-card">
            <span class="prompt"> It's best to reach you at </span>
            <inline-input v-bind:inputData="contact"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="contact.isValid" class="footer-card">
            <span class="label"> Thanks <span class="highlight">{{name.input.split(' ')[0]}}.</span> Chat soon!</span>
            <button class="email-button" v-scroll-to="{ el: '#Process', easing: [.2, .80, .30, 1],duration: 1500}">
              <span class="button-label"> Done </span>
            </button>
          </span>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import InlineInput from "@/components/subcomponents/InlineInput";

export default {
  name: "Typeform",
  components: {
    InlineInput
  },
  data() {
    return {
      name: {prompt: 'your name?', input: 'your name?', edit: false, isValid: false},
      course: {prompt: 'what course?', input: 'what course?', edit: false, isValid: false},
      country: {prompt: 'country?', input: 'country?', edit: false, isValid: false},
      contact: {prompt: 'your email or mobile', input: 'your email or mobile', edit: false, isValid: false},
    }
  }
}
</script>

<style scoped lang="scss">

#Typeform{
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  z-index: 2;

  .content-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    text-align: left;
    height: fit-content;
    width: 370px;

    .header-card{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 13px;
      padding: 21px 27px 17px 27px;
      height: 60px;
      border-radius: 17px 17px 7px 7px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );

      .prompt {
        font-family: "Gilroy SemiBold", serif;
        color: #3b3b3b;
        font-size: 17px;
        margin: 0 9px 5px 0;
      }
    }

    .input-card{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 13px;
      padding: 15px 27px;
      height: 55px;
      border-radius: 7px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );

      .prompt {
        font-family: "Gilroy SemiBold", serif;
        color: #3b3b3b;
        font-size: 17px;
        margin: 0 9px 5px 0;
      }
    }
    .footer-card{
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 13px;
      padding: 8px 17px 8px 27px;
      height: 58px;
      border-radius: 7px 7px 17px 17px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );

      .label{
        line-height: 1.3;
        margin: auto 0;
        font-family: "Gilroy SemiBold", serif;
        color: #3b3b3b;
        font-size: 17px;
        width: 60%;

        .highlight{
          font-family: "Gilroy Bold", serif;
          color: #5651ec;
        }
      }
      .email-button{
        cursor: pointer;
        margin: auto 0;
        width: 30%;
        height: 39px;
        border: none;
        background-color: #5b1fff;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.4 );
        border-radius: 7px;
        outline: none;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        .button-label{
          font-family: "Gilroy SemiBold", serif;
          font-size: 13px;
          margin: auto;
          color: white;
        }

        &:hover{
          opacity: 0.9;
        }
      }
    }
  }
}

/* slide fade transition */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.8s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(400px) scale(0.7);
  opacity: 0;
}

</style>