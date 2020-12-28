<template>
  <div :key="componentKey">
    <section id="Typeform" >
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
            <inline-input v-bind:inputData="location"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="location.isValid" class="input-card">
            <span class="prompt"> It's best to reach you at </span>
            <inline-input v-bind:inputData="contact"/>
          </span>
        </transition>
        <transition appear name="slide-fade">
          <span v-if="contact.isValid" class="footer-card">
            <span class="label"> {{ footerPrompt }}
              <span class="highlight">{{ name.input.split(' ')[0] }}.</span>
            </span>
            <button @click="sendEmail" :class="buttonStyle" v-scroll-to="{ el: '#Landing', easing: [.2, .80, .30, 1],duration: 1500}">
              <span class="button-label"> {{ buttonLabel }} </span>
            </button>
          </span>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import InlineInput from "@/components/subcomponents/InlineInput";
import emailjs from 'emailjs-com';

export default {
  name: "Typeform",
  components: {
    InlineInput
  },
  data() {
    return {
      componentKey: 0,
      name: {prompt: 'your name?', input: 'your name?', edit: false, isValid: false},
      course: {prompt: 'what major or course?', input: 'what major or course?', edit: false, isValid: false},
      location: {prompt: 'city or country?', input: 'city or country?', edit: false, isValid: false},
      contact: {prompt: 'your email or mobile', input: 'your email or mobile', edit: false, isValid: false},
      footerPrompt: 'Thanks',
      buttonLabel: 'Submit',
      buttonStyle: 'submit-button'
    }
  },
  methods: {
    sendEmail() {
      if (this.buttonLabel === 'Submit') {
        // if typeform has not been submitted
        emailjs.send(
            "service_gpg6kap",
            "template_oev55pg",
            {
              name: this.name.input,
              course: this.course.input,
              location: this.location.input,
              contact: this.contact.input
            }
        );
        this.footerPrompt = 'Got it. Chat soon';
        this.buttonLabel = 'Clear';
        this.buttonStyle = 'clear-button';
      } else {
        console.log('Clear Typeform');
        this.componentKey += 1;
        this.name = {prompt: 'your name?', input: 'your name?', edit: false, isValid: false};
        this.course = {prompt: 'what major or course?', input: 'what major or course?', edit: false, isValid: false};
        this.location = {prompt: 'city or country?', input: 'city or country?', edit: false, isValid: false};
        this.contact = {prompt: 'your email or mobile', input: 'your email or mobile', edit: false, isValid: false};
        this.footerPrompt = 'Thanks';
        this.buttonLabel = 'Submit';
        this.buttonStyle = 'submit-button';
      }
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
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
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
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
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
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
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
      .submit-button{
        cursor: pointer;
        margin: auto 0;
        width: 30%;
        height: 39px;
        border: thin solid #5b1fff;
        background: rgba(255, 255, 255, 0.07);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
        border-radius: 7px;
        outline: none;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        color: #5b1fff;

        .button-label{
          font-family: "Gilroy SemiBold", serif;
          font-size: 13px;
          margin: auto;
        }

        &:hover{
          opacity: 0.9;
        }
      }
      .clear-button{
        cursor: pointer;
        margin: auto 0;
        width: 30%;
        height: 39px;
        border: thin solid black;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
        border-radius: 7px;
        outline: none;
        text-decoration: none;
        transition: all 0.25s ease-in-out;
        color: black;

        .button-label{
          font-family: "Gilroy SemiBold", serif;
          font-size: 13px;
          margin: auto;
        }

        &:hover{
          opacity: 0.6;
        }
      }
    }
  }
}

/* slide fade transition */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 1s ease-in-out;
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